# Almanac — moved

The shell lives at **https://bmh-almanac.github.io/** (org `bmh-almanac`, repo
`bmh-almanac.github.io`) since 2026-09-12 — its own origin, so clearing or reinstalling any
other BMH app on a phone can no longer wipe Almanac's stored address and token
(Almanac card #235: eleven apps shared this origin and one app's clear-data took them all).

This repo is now a redirect and nothing else:

- `index.html` and `404.html` forward every path, query and hash to the new origin
  (`/almanac/desk.html#x` → `https://bmh-almanac.github.io/desk.html#x`).
- `sw.js` is a kill switch: it replaces the last real worker, clears every cache this
  origin holds, reloads open windows so they are forwarded, and unregisters itself.
- There is no manifest, so nothing installs from here any more. Install Almanac from the
  new origin — the QR on the Mac: `python3 ~/Almanac/tools/connect.py desk --qr`.

There is no data here and there never was: the app is glass, everything behind it stays home.
