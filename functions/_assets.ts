import {MethodNotAllowedError, NotFoundError, getAssetFromKV, mapRequestToAsset} from '@cloudflare/kv-asset-handler';
import manifestJSON from '__STATIC_CONTENT_MANIFEST';
const assetManifest = JSON.parse(manifestJSON);

export default {
  async fetch(request, env, ctx) {
    if (request.url.includes('/build')) {
      try {
        return await getAssetFromKV(
          {
            request,
            waitUntil(promise) {
              return ctx.waitUntil(promise);
            },
          },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: assetManifest,
          },
        );
        // eslint-disable-next-line id-length
      } catch (e) {
        if (e instanceof NotFoundError) {
          try {
            const notFoundResponse = await getAssetFromKV(request, {
              mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/404.html`, req),
            });
            return new Response(notFoundResponse.body, {...notFoundResponse, status: 404});
          } catch (e) {}
        } else if (e instanceof MethodNotAllowedError) {
          // ...
        } else {
          return new Response(e.message || e.toString(), {status: 500});
        }
      }
    } else {
      return fetch(request);
    }
    function handlePrefix(prefix) {
      return (request) => {
        const defaultAssetKey = mapRequestToAsset(request);
        const url = new URL(defaultAssetKey.url);
        url.pathname = url.pathname.replace(prefix, '/');
        return new Request(url.toString(), defaultAssetKey);
      };
    }
  },
};
