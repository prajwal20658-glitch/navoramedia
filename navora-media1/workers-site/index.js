import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event);
  } catch (e) {
    try {
      const url = new URL(event.request.url);
      url.pathname = '/index.html';
      const request = new Request(url.toString(), event.request);
      return await getAssetFromKV(event, {
        mapRequestToAsset: () => request,
      });
    } catch (e2) {
      return new Response('Not found', { status: 404 });
    }
  }
}
