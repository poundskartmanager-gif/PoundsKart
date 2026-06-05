exports.handler = async (event) => {
  const { code, shop } = event.queryStringParameters;
  const clientId = process.env.SHOPIFY_CLIENT_ID;
  const clientSecret = process.env.SHOPIFY_CLIENT_SECRET;

  if (!code || !shop) {
    return {
      statusCode: 400,
      body: 'Missing code or shop parameter.'
    };
  }

  try {
    const response = await fetch(`https://${shop}/admin/oauth/access_token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code
      })
    });

    const data = await response.json();
    const token = data.access_token;

    if (!token) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'text/html' },
        body: `<html><body style="font-family:sans-serif;padding:40px;background:#1a2a4a;color:white;text-align:center;">
          <h2 style="color:#f87171;">❌ Token not received</h2>
          <p>Response: ${JSON.stringify(data)}</p>
        </body></html>`
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: `
        <html>
          <body style="font-family:sans-serif;padding:40px;background:#1a2a4a;color:white;text-align:center;">
            <h1 style="color:#e8c96a;">✅ Token Generated!</h1>
            <p style="color:rgba(255,255,255,0.7);">Copy this token and add it to Netlify Environment Variables as <strong>SHOPIFY_TOKEN</strong></p>
            <div style="background:white;color:#1a2a4a;padding:20px;border-radius:8px;margin:20px auto;max-width:600px;word-break:break-all;font-family:monospace;font-size:14px;font-weight:bold;">
              ${token}
            </div>
            <button onclick="navigator.clipboard.writeText('${token}').then(()=>this.textContent='✓ Copied!')" 
              style="padding:14px 32px;background:#e8c96a;color:#1a2a4a;border:none;border-radius:8px;font-size:16px;font-weight:bold;cursor:pointer;margin-top:10px;">
              Copy Token
            </button>
            <p style="margin-top:30px;color:rgba(255,255,255,0.4);font-size:12px;">
              Add this as SHOPIFY_TOKEN in Netlify → Project configuration → Environment variables
            </p>
          </body>
        </html>
      `
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'text/html' },
      body: `<html><body style="padding:40px;font-family:sans-serif;background:#1a2a4a;color:white;">
        <h2 style="color:#f87171;">❌ Error</h2><p>${err.message}</p>
      </body></html>`
    };
  }
};
