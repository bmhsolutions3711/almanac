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
const VERSION = 'almanac-shell-v66';

// The version gauge that cannot lie (Almanac #8): the page asks, the worker
// answers — the chip renders what is actually installed, never a hardcoded
// string that drifts. SKIP_WAITING lets the chip's tap activate an update.
self.addEventListener('message', e => {
  if (e.data?.type === 'VERSION')
    e.source?.postMessage({type: 'VERSION', version: VERSION});
  if (e.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
const SHELL = ['./', './index.html', './manifest.json',
               './detent.html', './detent.webmanifest', './desk.html',
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

// Web Push (Almanac #10). The payload is written by spine/push.py; the url
// says which surface answers the tap. Budgeted at the SENDER — by the time a
// push reaches this handler it has already earned its place, so it is shown.
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) {}
  // requireInteraction + a heavy vibration: a push that costs a day's budget
  // must not scroll away with the sea — it stays until Bryan dismisses it.
  e.waitUntil(self.registration.showNotification(d.title || 'Almanac', {
    body: d.body || '',
    data: { url: d.url || './detent.html' },
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png',
    tag: 'almanac',
    renotify: true,
    requireInteraction: true,
    vibrate: [180, 60, 180, 60, 320],
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const target = new URL((e.notification.data && e.notification.data.url) || './detent.html',
                         self.registration.scope).href;
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list)
      if (c.url.startsWith(self.registration.scope) && 'focus' in c) {
        c.navigate(target);
        return c.focus();
      }
    return clients.openWindow(target);
  }));
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
