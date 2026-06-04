exports.handler = async (event) => {

  // Allow OPTIONS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // These come from Netlify Environment Variables (you set these once)
  const SHOPIFY_STORE = process.env.SHOPIFY_STORE;   // e.g. poundskart.myshopify.com
  const SHOPIFY_TOKEN = process.env.SHOPIFY_TOKEN;   // shpat_xxxxx

  if (!SHOPIFY_STORE || !SHOPIFY_TOKEN) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Shopify credentials not set in Netlify environment variables.' })
    };
  }

  try {
    const data = JSON.parse(event.body);

    // Build colour variants
    const colours = (data.colours && data.colours.length > 0)
      ? data.colours
      : ['Default'];

    const variants = colours.map(colour => ({
      option1: colour,
      price: data.price || '0.00',
      compare_at_price: data.compare_price || null,
      sku: (data.handle || 'product').toUpperCase().slice(0, 8) + '-' + colour.toUpperCase().replace(/\s+/g, '').slice(0, 4),
      inventory_management: 'shopify',
      inventory_policy: 'deny',
      inventory_quantity: 100,
      weight: parseInt(data.weight) || 0,
      weight_unit: 'g',
      fulfillment_service: 'manual',
      taxable: true,
      requires_shipping: true
    }));

    const product = {
      title: data.title,
      body_html: data.body_html || '',
      vendor: 'PoundsKart',
      product_type: data.product_type || 'Clothing',
      tags: data.tags || 'PoundsKart',
      status: 'draft',
      options: [{ name: 'Color', values: colours }],
      variants: variants
    };

    const response = await fetch(
      `https://${SHOPIFY_STORE}/admin/api/2024-01/products.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': SHOPIFY_TOKEN
        },
        body: JSON.stringify({ product })
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: result.errors || 'Shopify API error' })
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        product_id: result.product.id,
        admin_url: `https://${SHOPIFY_STORE}/admin/products/${result.product.id}`
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
