# Almanac — the shell

The installable front end for [Almanac](https://github.com/bmhsolutions3711) — a locally-owned life
AI. This repo holds **only the shell**: HTML, a manifest, a service worker and icons.

**There is no data here and there never will be.** No money figures, no board state, no doctrine, no
tokens. All of that lives on Bryan's own machine behind a tailnet-only, token-gated API. This page
is glass; everything behind it stays home.

## Connecting

The app is configured once by scanning its card in BIK Connect, which carries
`#cfg={"api":"…","token":"…"}`. Those land in `localStorage` and the hash is scrubbed immediately,
so the token never survives in history or a screenshot. Until then the app says it is not connected
and shows nothing.

`#reset` unregisters the service worker and clears caches — the escape hatch when a phone sticks on
an old build.

## Why a separate origin

Apps served from the tailnet host on a port open as browser pages. Only a distinct origin installs
as its own app with its own icon, which is why every BMH PWA is a github.io shell and why the
backend serves no HTML.
