import { getAssetFromKV, NotFoundError } from '@cloudflare/kv-asset-handler';

export async function handleRequest(event) {
  const options = {};

  //options.mapRequestToAsset = handlePrefix(/^\/build/);

  try {

    const page = await getAssetFromKV(event, options);
    const response = new Response(page.body, page);

    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'unsafe-url');
    response.headers.set('Feature-Policy', 'none');

    return response;
  } catch (e) {
    if (e instanceof NotFoundError) {
      try {
        const notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
        });

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 });
      } catch (e) { }
    }

    return new Response(e.message || e.toString(), { status: 500 });
  }
}
