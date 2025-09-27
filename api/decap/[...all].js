// api/decap/[...all].js
export default async function handler(req, res) {
  // Normalize the catch-all segments: may be array, string, or under key "0"
  const splat = req.query.all ?? req.query['0'];
  const parts = Array.isArray(splat) ? splat : (splat ? [splat] : []);
  const path = "/" + parts.join("/");

  const {
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    BASE_URL = "https://ultimatehealthdpc.com",
  } = process.env;

  if (!OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET) {
    res.status(500).send("Missing OAuth env vars");
    return;
  }

  // TEMP: debug endpoint to see what Vercel is giving us
  if (path === "/debug") {
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({
      rawQuery: req.query,
      normalizedParts: parts,
      normalizedPath: path,
      hasClientId: !!OAUTH_CLIENT_ID,
      hasClientSecret: !!OAUTH_CLIENT_SECRET,
    });
  }

  const redirectUri = `${BASE_URL}/api/decap/callback`;

  if (path === "/auth") {
    const scope = req.query.scope || "repo";
    const state = Math.random().toString(36).slice(2);
    const authorizeUrl =
      `https://github.com/login/oauth/authorize` +
      `?client_id=${encodeURIComponent(OAUTH_CLIENT_ID)}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=${encodeURIComponent(scope)}` +
      `&state=${encodeURIComponent(state)}`;
    res.setHeader("Cache-Control", "no-store");
    return res.redirect(authorizeUrl);
  }

  if (path === "/callback") {
    const code = req.query.code;
    if (!code) return res.status(400).send("Missing ?code");

    const r = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        code,
        redirect_uri: redirectUri,
      }),
    });

    const json = await r.json();
    if (!json.access_token) return res.status(401).send("OAuth exchange failed");

    const token = json.access_token;
    const html = `<!doctype html><html><body><script>
      (function () {
        var token = ${JSON.stringify(token)};
        window.opener && window.opener.postMessage('authorization:github:success:' + token, '*');
        window.close();
      })();
    </script>Success. You can close this window.</body></html>`;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(html);
  }

  return res.status(404).send("Not found");
}
