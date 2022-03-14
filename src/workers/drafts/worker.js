import {getAssetFromKV, mapRequestToAsset} from '@cloudflare/kv-asset-handler';

const DEBUG = false;

export async function handleRequest(event) {
  const options = {};

  options.mapRequestToAsset = handlePrefix(/^\/build/);

  try {
    if (DEBUG) {
      options.cacheControl = {
        bypassCache: true,
      };
    }

    const page = await getAssetFromKV(event, options);
    const response = new Response(page.body, page);

    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'unsafe-url');
    response.headers.set('Feature-Policy', 'none');

    return response;
  } catch (e) {
    if (!DEBUG) {
      try {
        const notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
        });

        return new Response(notFoundResponse.body, {...notFoundResponse, status: 404});
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), {status: 500});
  }
}

function handlePrefix(prefix) {
  return request => {
    const defaultAssetKey = mapRequestToAsset(request);
    const url = new URL(defaultAssetKey.url);
    url.pathname = url.pathname.replace(prefix, '/');
    return new Request(url.toString(), defaultAssetKey);
  };
}
