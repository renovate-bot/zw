import {getAssetFromKV, mapRequestToAsset} from '@cloudflare/kv-asset-handler';

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */

const DEBUG = false;

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event));
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      );
    }
    event.respondWith(new Response('Internal Error', {status: 500}));
  }
});

async function handleEvent(event) {
  const url = new URL(event.request.url);
  const options = {};
  options.mapRequestToAsset = handlePrefix(/^\/build/)

  try {
    if (response) {
      return response;
    }
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      };
    } else {
      options.cacheControl = {
        browserTTL: null,
        edgeTTL: 5,
        bypassCache: false,
      };
    }
    return await getAssetFromKV(event, options);
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
/**
 * Here's one example of how to modify a request to
 * remove a specific prefix, in this case `/build` from
 * the url. This can be useful if you are deploying to a
 * route on a zone, or if you only want your static content
 * to exist at a specific path.
 */
function handlePrefix(prefix) {
  return request => {
    const defaultAssetKey = mapRequestToAsset(request);
    const url = new URL(defaultAssetKey.url);
    url.pathname = url.pathname.replace(prefix, '/');
    return new Request(url.toString(), defaultAssetKey);
  };
}
