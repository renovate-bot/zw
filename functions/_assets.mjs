import { MethodNotAllowedError, NotFoundError, getAssetFromKV } from '@cloudflare/kv-asset-handler'
import manifestJSON from '__STATIC_CONTENT_MANIFEST'
const assetManifest = JSON.parse(manifestJSON)

export default {
  async fetch(request, env, ctx) {
    if (request.url.includes('/docs', '/community', '/blog')) {
      try {
        return await getAssetFromKV(
          {
            request,
            waitUntil(promise) {
              return ctx.waitUntil(promise)
            },
          },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: assetManifest,
          },
        )
      } catch (e) {
        if (e instanceof NotFoundError) {
          try {
            const notFoundResponse = await getAssetFromKV(request, {
              mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
            });
            return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 });
          } catch (e) { }
          return new Response(e.message || e.toString(), { status: 500 });
        } else if (e instanceof MethodNotAllowedError) {
          // ...
        } else {
          return new Response('An unexpected error occurred', { status: 500 })
        }
      }
    } else {return fetch(request)}
  },
}
