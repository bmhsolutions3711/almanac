/* Almanac shell service worker.
 *
 * TWO rules, both learned the hard way.
 *
 * 1. NEVER cache API responses. Those are money, board state and doctrine on the
 *    tailnet backend, and a stale number served from a cache is precisely the
 *    failure this project exists to prevent.
 *
 * 2. ALWAYS bypass the HTTP cache for the shell itself. GitHub Pages sets its own
 *    cache headers, and that cache sits UNDERNEATH this worker — so a plain
 *    fetch() here happily returns yesterday's HTML and network-first quietly
 *    becomes cache-first. That is why "I pushed an update and the phone did not
 *    change" is the classic PWA failure. `cache: "reload"` forces the real
 *    network every time; the SW cache is then only ever a genuine offline
 *    fallback.
 */
const VERSION = 'almanac-shell-v6';
const SHELL = ['./', './index.html', './manifest.json',
               './detent.html', './detent.webmanifest',
               './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => Promise.all(SHELL.map(u =>
        fetch(u, {cache: 'reload'}).then(r => r.ok && c.put(u, r)).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;        // the backend is never cached

  const isShell = e.request.mode === 'navigate' ||
                  u.pathname.endsWith('/') ||
                  u.pathname.endsWith('.html');

  e.respondWith(
    fetch(isShell ? new Request(e.request.url, {cache: 'reload'}) : e.request)
      .then(r => {
        if (r && r.ok && e.request.method === 'GET') {
          const copy = r.clone();
          caches.open(VERSION).then(c => c.put(e.request, copy));
        }
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./')))
  );
});
