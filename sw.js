/* Almanac's OLD origin — bmhsolutions3711.github.io/almanac/ (card #235).
 *
 * The shell moved to https://bmh-almanac.github.io/ on 2026-09-12. This worker
 * exists only to REPLACE the last real one on any phone that still opens this
 * path (VERSION 'almanac-shell-v172' and every cache before it):
 *
 *   install  -> skipWaiting, so it does not queue behind the old worker;
 *   activate -> delete every cache this origin holds, reload the open windows
 *               (each then fetches index.html fresh and is forwarded), then
 *               unregister itself;
 *   fetch    -> the network with the HTTP cache bypassed — nothing is ever
 *               served from a cache again on this origin.
 *
 * The bytes differ from the old worker, which is the only thing that makes a
 * browser re-install (proven on the scanner, card #197): a redirect page alone
 * would sit UNDER the old worker's cache and never be seen.
 */
self.addEventListener('install', () => { self.skipWaiting(); });

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    await self.clients.claim();
    const wins = await self.clients.matchAll({ type: 'window' });
    await Promise.allSettled(wins.map(c => c.navigate(c.url)));
    await self.registration.unregister();
  })());
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request, { cache: 'reload' }));
});
