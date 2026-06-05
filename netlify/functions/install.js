exports.handler = async (event) => {
  const shop = 'poundskart.myshopify.com';
  const clientId = process.env.SHOPIFY_CLIENT_ID;
  const redirectUri = 'https://thunderous-tulumba-6647ef.netlify.app/.netlify/functions/auth';
  const scopes = 'write_products,read_products';

  const authUrl = `https://${shop}/admin/oauth/authorize?client_id=${clientId}&scope=${scopes}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;

  return {
    statusCode: 302,
    headers: { Location: authUrl },
    body: ''
  };
};
