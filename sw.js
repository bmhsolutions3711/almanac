/* Almanac shell service worker.
 *
 * NEVER caches API responses — those live on the tailnet backend and are money,
 * board state and doctrine. A stale number served from cache is exactly the
 * failure this project exists to prevent. Only the shell is cached, so the app
 * opens on one bar at a truck stop.
 *
 * Bump VERSION to ship an update; it activates immediately rather than waiting
 * for every tab to close, because on a phone that never happens.
 */
const VERSION = 'almanac-shell-v1';
const SHELL = ['./', './index.html', './manifest.json',
               './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL).catch(() => {}))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;   // the backend is never cached
  e.respondWith(
    fetch(e.request).then(r => {
      if (r && r.ok && e.request.method === 'GET') {
        const copy = r.clone();
        caches.open(VERSION).then(c => c.put(e.request, copy));
      }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./')))
  );
});
