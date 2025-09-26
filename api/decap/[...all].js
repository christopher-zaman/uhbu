// api/decap/[...all].js
// Simple GitHub OAuth proxy for Decap CMS on Vercel.
// Endpoints:
//   GET  /api/decap/auth       -> redirect to GitHub OAuth consent
//   GET  /api/decap/callback   -> exchange code for token, postMessage back to Decap
//
// Env vars required:
//   GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET
// Optional:
//   GITHUB_SCOPE (default 'repo'), OAUTH_REDIRECT_URL

const crypto = require('crypto');

const GITHUB_AUTHORIZE = 'https://github.com/login/oauth/authorize';
const GITHUB_ACCESS_TOKEN = 'https://github.com/login/oauth/access_token';

// small helper
const json = (obj, status = 200, headers = {}) => {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...headers },
  });
};

const html = (str, status = 200, headers = {}) =>
  new Response(str, {
    status,
    headers: { 'content-type': 'text/html; charset=utf-8', ...headers },
  });

const withCORS = (res) => {
  res.headers.set('cache-control', 'no-store');
  res.headers.set('access-control-allow-origin', '*');
  res.headers.set('access-control-allow-headers', 'content-type');
  res.headers.set('access-control-allow-methods', 'GET,POST,OPTIONS');
  return res;
};

const getCallbackUrl = (req) => {
  // Prefer explicit env var; otherwise derive from current host
  const explicit = process.env.OAUTH_REDIRECT_URL;
  if (explicit) return explicit;

  const host = req.headers.get('x-forwarded-host') || req.headers.get('host');
  const proto =
    req.headers.get('x-forwarded-proto') ||
    (host && host.startsWith('localhost') ? 'http' : 'https');
  return `${proto}://${host}/api/decap/callback`;
};

const cookie = {
  parse: (str = '') =>
    Object.fromEntries(
      str.split(/; */).filter(Boolean).map((p) => {
        const i = p.indexOf('=');
        return [decodeURIComponent(p.slice(0, i)), decodeURIComponent(p.slice(i + 1))];
      }),
    ),
  serialize: (name, value, opts = {}) => {
    const pieces = [`${encodeURIComponent(name)}=${encodeURIComponent(value)}`];
    if (opts.maxAge) pieces.push(`Max-Age=${opts.maxAge}`);
    if (opts.path) pieces.push(`Path=${opts.path}`);
    if (opts.httpOnly) pieces.push('HttpOnly');
    if (opts.sameSite) pieces.push(`SameSite=${opts.sameSite}`);
    if (opts.secure) pieces.push('Secure');
    return pieces.join('; ');
  },
};

exports.config = {
  runtime: 'nodejs18.x',
};

module.exports = async (req, res) => {
  // Vercel Node API signature
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  // Wrap Node req/res to Web Response for convenience
  const send = (response) => {
    // copy headers/status/body
    res.statusCode = response.status;
    response.headers.forEach((v, k) => res.setHeader(k, v));
    if (response.body) {
      response.body.pipe
        ? response.body.pipe(res)
        : response.text().then((t) => res.end(t));
    } else {
      res.end();
    }
  };

  try {
    if (req.method === 'OPTIONS') {
      return send(withCORS(new Response(null, { status: 204 })));
    }

    // --- /api/decap/auth : redirect to GitHub
    if (pathname.endsWith('/api/decap/auth')) {
      const client_id = process.env.GITHUB_CLIENT_ID;
      const scope = process.env.GITHUB_SCOPE || 'repo';
      if (!client_id) return send(withCORS(json({ error: 'Missing GITHUB_CLIENT_ID' }, 500)));

      const state = crypto.randomBytes(16).toString('hex');
      const callback = getCallbackUrl(req);

      const params = new URLSearchParams({
        client_id,
        redirect_uri: callback,
        scope,
        state,
        allow_signup: 'true',
      });

      // Set short-lived, httpOnly state cookie to validate callback
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('decap_oauth_state', state, {
          httpOnly: true,
          sameSite: 'Lax',
          secure: true,
          path: '/api/decap',
          maxAge: 300, // 5 minutes
        }),
      );

      res.setHeader('Location', `${GITHUB_AUTHORIZE}?${params.toString()}`);
      res.statusCode = 302;
      return res.end();
    }

    // --- /api/decap/callback : exchange code -> token, then postMessage back
    if (pathname.endsWith('/api/decap/callback')) {
      const code = url.searchParams.get('code');
      const state = url.searchParams.get('state');
      const cookies = cookie.parse(req.headers.cookie || '');
      const expectedState = cookies.decap_oauth_state;

      if (!code || !state || !expectedState || state !== expectedState) {
        return send(
          withCORS(
            html(
              `<p>OAuth error: invalid state or code.</p>`,
              400,
            ),
          ),
        );
      }

      const client_id = process.env.GITHUB_CLIENT_ID;
      const client_secret = process.env.GITHUB_CLIENT_SECRET;
      const callback = getCallbackUrl(req);

      if (!client_id || !client_secret) {
        return send(withCORS(json({ error: 'Missing GitHub OAuth env vars' }, 500)));
      }

      // Exchange code for token
      const body = new URLSearchParams({
        client_id,
        client_secret,
        code,
        redirect_uri: callback,
      });

      const tokenRes = await fetch(GITHUB_ACCESS_TOKEN, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      });

      const tokenJson = await tokenRes.json();
      if (tokenJson.error || !tokenJson.access_token) {
        return send(
          withCORS(
            html(
              `<p>OAuth error: ${tokenJson.error_description || 'Failed to obtain token'}</p>`,
              400,
            ),
          ),
        );
      }

      const token = tokenJson.access_token;

      // Return a tiny HTML that notifies Decap CMS via postMessage (standard pattern)
      const successHtml = `
<!doctype html>
<html><body>
<script>
  (function() {
    function send(token) {
      var msg = 'authorization:github:success:' + token;
      if (window.opener) {
        window.opener.postMessage(msg, '*');
        window.close();
      } else {
        document.body.innerText = 'Token: ' + token;
      }
    }
    send(${JSON.stringify(token)});
  })();
</script>
</body></html>`;

      // Clear state cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('decap_oauth_state', '', {
          httpOnly: true,
          sameSite: 'Lax',
          secure: true,
          path: '/api/decap',
          maxAge: 0,
        }),
      );

      return send(withCORS(html(successHtml)));
    }

    // Fallback: help text
    return send(
      withCORS(
        json(
          {
            ok: true,
            endpoints: ['/api/decap/auth', '/api/decap/callback'],
          },
          200,
        ),
      ),
    );
  } catch (err) {
    return send(withCORS(json({ error: err.message || String(err) }, 500)));
  }
};
