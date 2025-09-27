// api/decap/[...all].js
export default async function handler(req, res) {
  // Vercel routes catch-all segments into req.query.all (array)
  const { all = [] } = req.query;
  const path = "/" + all.join("/");

  const {
    OAUTH_CLIENT_ID,          // <-- matches your Vercel env var
    OAUTH_CLIENT_SECRET,      // <-- matches your Vercel env var
    BASE_URL = "https://ultimatehealthdpc.com",
  } = process.env;

  if (!OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET) {
    res.status(500).send("Missing OAuth env vars");
    return;
  }

  const redirectUri = `${BASE_URL}/api/decap/callback`;

  // 1) Start OAuth: /api/decap/auth?provider=github&scope=repo
  if (path === "/auth") {
    const scope = req.query.scope || "repo";
    const authorizeUrl =
      `https://github.com/login/oauth/authorize` +
      `?client_id=${encodeURIComponent(OAUTH_CLIENT_ID)}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=${encodeURIComponent(scope)}`;

    res.setHeader("Cache-Control", "no-store");
    return res.redirect(authorizeUrl);
  }

  // 2) Callback from GitHub: /api/decap/callback?code=...
  if (path === "/callback") {
    const code = req.query.code;
    if (!code) {
      res.status(400).send("Missing ?code");
      return;
    }

    // Exchange code for access token
    const r = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        code,
        redirect_uri: redirectUri,
      }),
    });

    const json = await r.json();
    if (!json.access_token) {
      res
        .status(401)
        .send(`OAuth exchange failed${json.error ? `: ${json.error}` : ""}`);
      return;
    }

    const token = json.access_token;

    // Return token to Decap via postMessage and close the popup
    const html = `<!doctype html>
<html><body>
<script>
  (function () {
    var token = ${JSON.stringify(token)};
    window.opener && window.opener.postMessage('authorization:github:success:' + token, '*');
    window.close();
  })();
</script>
Success. You can close this window.
</body></html>`;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
    return;
  }

  res.status(404).send("Not found");
}
