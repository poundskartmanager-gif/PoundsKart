const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS' }, body: '' };
  }

  const SHOPIFY_STORE = process.env.SHOPIFY_STORE;
  const SHOPIFY_TOKEN = process.env.SHOPIFY_TOKEN;
  const store = getStore('poundskart-settings');

  // ── GET: load collections, vendors & tags ──
  if (event.httpMethod === 'GET') {
    try {
      const data = await store.get('settings', { type: 'json' });
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(data || { collections: [], vendors: ['PoundsKart'], tags: [] })
      };
    } catch (e) {
      return { statusCode: 200, headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ collections: [], vendors: ['PoundsKart'], tags: [] }) };
    }
  }

  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const data = JSON.parse(event.body);

  // ── POST: save settings ──
  if (data.action === 'save-settings') {
    try {
      await store.setJSON('settings', { collections: data.collections || [], vendors: data.vendors || [], tags: data.tags || [] });
      return { statusCode: 200, headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ success: true }) };
    } catch (e) {
      return { statusCode: 500, headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ error: e.message }) };
    }
  }

  // ── POST: publish product ──
  if (!SHOPIFY_STORE || !SHOPIFY_TOKEN) return { statusCode: 500, headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ error: 'Shopify credentials not set.' }) };

  try {
    const colours = (data.colours && data.colours.length > 0) ? data.colours : ['Default'];
    const variants = colours.map(colour => ({
      option1: colour,
      price: data.price || '0.00',
      compare_at_price: data.compare_price || null,
      sku: (data.handle || 'product').toUpperCase().slice(0, 8) + '-' + colour.toUpperCase().replace(/\s+/g, '').slice(0, 4),
      inventory_management: 'shopify', inventory_policy: 'deny', inventory_quantity: 100,
      weight: parseInt(data.weight) || 0, weight_unit: 'g',
      fulfillment_service: 'manual', taxable: true, requires_shipping: true
    }));

    const product = {
      title: data.title, body_html: data.body_html || '',
      vendor: data.vendor || 'PoundsKart',
      product_type: data.product_type || 'Clothing',
      tags: data.tags || 'PoundsKart', status: 'draft',
      options: [{ name: 'Color', values: colours }],
      variants: variants
    };

    const resp = await fetch(`https://${SHOPIFY_STORE}/admin/api/2024-01/products.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': SHOPIFY_TOKEN },
      body: JSON.stringify({ product })
    });
    const result = await resp.json();
    if (!resp.ok) return { statusCode: resp.status, headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ error: result.errors || 'Shopify API error' }) };

    const productId = result.product.id;

    // ASSIGN COLLECTION
    if (data.collection) {
      try {
        const [customResp, smartResp] = await Promise.all([
          fetch(`https://${SHOPIFY_STORE}/admin/api/2024-01/custom_collections.json?title=${encodeURIComponent(data.collection)}`, { headers: { 'X-Shopify-Access-Token': SHOPIFY_TOKEN } }),
          fetch(`https://${SHOPIFY_STORE}/admin/api/2024-01/smart_collections.json?title=${encodeURIComponent(data.collection)}`, { headers: { 'X-Shopify-Access-Token': SHOPIFY_TOKEN } })
        ]);
        const [customData, smartData] = await Promise.all([customResp.json(), smartResp.json()]);
        const allColls = [...(customData.custom_collections || []), ...(smartData.smart_collections || [])];
        if (allColls.length > 0) {
          await fetch(`https://${SHOPIFY_STORE}/admin/api/2024-01/collects.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': SHOPIFY_TOKEN },
            body: JSON.stringify({ collect: { product_id: productId, collection_id: allColls[0].id } })
          });
        }
      } catch (e) { console.log('Collection assign error:', e.message); }
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ success: true, product_id: productId, admin_url: `https://${SHOPIFY_STORE}/admin/products/${productId}` })
    };
  } catch (err) {
    return { statusCode: 500, headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ error: err.message }) };
  }
};
