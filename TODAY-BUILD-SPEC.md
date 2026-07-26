# THE BUILD SPEC — "LEAF"
### Final art-direction for Almanac "Today" · `almanac-pwa/index.html`
*This document is the build. Where it conflicts with any concept doc, this wins.*

---

## 1 · CHOSEN DIRECTION

**Spine: CONCEPT B (Arc), renamed LEAF.** The name ARC is dead on arrival — it is the label of a palette Bryan rejected on sight, and no amount of "reclaiming" survives him reading the word at the top of the file. The direction survives; the name does not.

**Governing metaphor (one sentence):** *Today is page 207 of a 365-page book that cannot lie — one leaf of the farmer's year, printed plainly before dawn, and every figure on it shows its arithmetic in the margin, in the same hand that wrote the sentence.*

**The 2-second feeling:** opening a bound book to today's page at the kitchen table at 5:40am. Warm paper, flat ink, a red rule, a dateline. Nothing performs. Nothing flatters.

**Why B is the spine and not A or C:**
- **A (Instrument) has the wrong room.** Detent *is* the instrument — the ratified, built, chosen one. The brief's own sentence is the ruling: "Detent is the workbench, Today is the almanac page on the kitchen table." A tachograph on the kitchen table is Detent's costume in the wrong house; two instrument-metaphor surfaces in one family collapses the family. A's *mechanics* are excellent — its voice, its provenance stamp, its OFF-flag framing — and those are grafted below.
- **C (Live) has a material, not a meaning.** "Paper is alive" is a texture thesis — beautiful engineering, no story. Its hero (backlight + blur "held to the light") spends a filter repaint and a fog stage on the exact moment that most needs to be crisp. But its GROWN system — the seeded daily sheet — is the single best experimental idea in the three packs, costs nothing at runtime, and *deepens B's metaphor* (a new leaf really is a new sheet of paper). Grafted whole.
- **B nails the emotional core cold.** The surface is literally named Almanac; the page is literally the day; the book has a folio, a dateline, a dog-ear, a ribbon, ruled margins, and red-letter days — every signature moment in the brief falls out of the metaphor instead of being bolted on. The copy-down hero is `one-number-one-home` made visible: *the sentence never loses its number while showing its work.*

**The graft manifest:**

| Grafted moment | From | Why |
|---|---|---|
| The provenance stamp voice — `SOURCE /api/standing · JUDGEMENT BUILT 06:12 · THE PAGE COMPUTED NOTHING` as the *final typeset beat* of every working | A | A's copy is the #16 scar compiled into a sentence; it lands harder than B's colophon phrasing. Riveted to every ledger. |
| The OFF-flag framing for UNKNOWN (a dead gauge drops a striped flag; it does not read zero) | A | Same visual as B's hatched flag, but A's *reasoning* is the copy that goes in the source comment. Deliberate misalignment from the figure column stays — misalignment is honesty. |
| Version chip as a gauge that cannot lie (postMessage handshake with the SW; SWR flips it to `UPDATE READY`) | A | Fixes v5/v7 drift as a *class*, not an instance. |
| GROWN — the seeded daily sheet (per-date grain, chain lines, fleck, dog-ear cant, red-rule inking), generated once in `requestIdleCallback`, cached by date | C | Zero runtime cost, passes the claim-test as pure atmosphere, and makes the day-turn *matter*: the new leaf arrives with new paper. By week two the page never feels like a template. |
| The columns inhale on pickup (empty-slot deboss deepens one step, 120ms, once) | C | Gesture-caused, cheap, and it is the WIP cap *felt* before it is read. Allowed by the constitution: he moved. |
| The column compresses 0.995 scaleY for 90ms on refusal — full stock does not give | C | One frame of physics that makes the 409 read as *weight*, not error. |
| Idempotency key minted per pickup, reused on retry | C / Detent | The board write inherits the latch's discipline without inheriting a hold. |

**Cut, with reasons:** C's backlight/blur hero stage (filter cost on the crispest moment); C's manicule glyph (red pointing hand collides with the lamp law — amber and only amber means *your hand*); B's hour-warmth ground mixing (a full-viewport repaint system that breaks the theme-color/manifest lockstep law — the sun-arc glyph carries the hour cheaper and better); C's retained light theme (the house language is explicit: the light half is rejected; one room, one face); A's "bay/rack" machining vocabulary (kitchen table speaks plainly: they are *slots*).

---

## 2 · EXACT VISUAL SYSTEM

### 2a. Palette — one mode, dark warm, the light theme is deleted

```css
:root{
  color-scheme: dark;                    /* one room. the light theme is deleted, not themed. */

  /* ground */
  --paper:#13110E;    /* warm brown-black — the page at 5:40am. theme-color + manifest, lockstep. */
  --paper-hi:#1B1814; /* raised paper: card faces */
  --sunk:#0D0B09;     /* debossed: pressed rows, empty slots, open workings */
  --rule:#332E27;     /* hairline rules, ledger dots */

  /* ink ramp */
  --ink:#EDE6D8;  --mid:#B9AF9E;  --dim:#8A8172;  --faint:#5C554A;

  /* the five inks — each has ONE job */
  --red:#E0705A;      /* print red: masthead rule, dateline, derivation underlines, wet ink,
                         red-letter day, focus rings, the shortfall figure. */
  --lamp:#FFA419;     /* your hand is needed. never green. never decoration. */
  --hot:#FF6A2A;      /* refusal words only — the line that says what was NOT written. */
  --unknown:#6E6E6E;  /* the OFF-flag. the only achromatic. no-fabrication compiled to a color. */
  /* green: DOES NOT EXIST. "clear" is a word set in --ink. */

  /* type */
  --mono:ui-monospace,"Roboto Mono","SF Mono",Menlo,monospace;      /* Android-honest */
  --sans:system-ui,"Segoe UI Variable Text",Roboto,sans-serif;
  --serif:Georgia,"Iowan Old Style",serif;   /* prose ONLY. money is scanned, never read. */

  /* motion — literal strings required for WAAPI (it cannot resolve var()) */
  --ease-settle:linear(0,.13 3.2%,.48 8.7%,.79 14.5%,.95 19.6%,1.02 25%,1.03 31%,1 40%,1 100%);
  --ease-refuse:linear(0,.42 12%,-.18 32%,.09 52%,-.03 72%,0 100%);

  /* scales */
  --s1:4px;--s2:8px;--s3:12px;--s4:20px;--s5:32px;--s6:56px;
  --z-page:0;--z-carry:2;--z-sticky:10;--z-sheet:40;--z-mark:60;
  --r:2px;   /* 2px or 0. a cut edge, not a soft chip. */
}
```

The two warms never occupy the same shape: `--lamp` lives on left edges and annunciator captions; `--hot` lives only in refusal sentences. `--red` is editorial — it marks, underlines, stamps, and celebrates; the only *persistent* red figure is a shortfall, and wet ink dries in 4s, so the two never confuse.

`theme-color` meta, `manifest.json`, and `--paper` are one value (`#13110E`) changed in lockstep or not at all.

### 2b. Type scale — four tiers, two faces plus a book face, nothing between

| Tier | Spec | Used for |
|---|---|---|
| Caption | `600 10–12.5px/1 var(--mono)`, tracking `.12–.24em`, uppercase, `--dim` | annunciators, colheads, provenance, folio, slot labels |
| Body | `400 17.5px/1.62 var(--serif)`, measure ≤34em, `text-wrap:pretty` | the judgement prose, footnotes. Card titles: `600 14px/1.3 var(--sans)` |
| Figure-inline | `600 1em var(--mono)`, `font-variant-numeric:tabular-nums slashed-zero` | every quantity inside prose and rows — **forever, no exceptions** |
| Headline figure | `700 clamp(34px,8vw,48px)/1 var(--mono)`, tracking `-.02em`, tabular slashed-zero, `text-box:trim-both cap alphabetic` (fallback `margin-block:-.12em -.08em`) | the standing figure, seated ON its red rule |

If it is a quantity, it is mono tabular. Forever.

### 2c. Depth, texture, background

- **Depth only where physically true:** debossed empty slots and pressed states (`--sunk` + inset shadow); the dog-ear fold; the single lifted-card shadow during carry (`0 3px 10px -2px rgb(0 0 0/.35)`) — the page's *only* elevation, earned by being in transit. No embossed type (engraving is the workbench's machining), no Material elevation, no glow anywhere.
- **GROWN sheet (grafted from C):** seeded PRNG (mulberry32 on `YYYY-MM-DD`) generates once per day, in `requestIdleCallback`, inside the day-turn: one 256×256 canvas value-noise tile at ~3% alpha (data URI, tiled — the banded-OLED killer); chain lines every ~24px at ≤1.2% alpha, seeded phase; 5–9 seeded 1px flecks per tile; dog-ear size 22–26px + cant ±1.5°; 2–3 seeded alpha stops (96–100%) along the masthead's red rule so the ink lays slightly uneven each morning. Result cached at `almanac.leaf.v1` keyed by date, yesterday pruned; every same-day open applies it synchronously at boot. Floor: `deviceMemory<4` or `saveData` → flat paper, default fold, nothing downstream cares.
- **Panels die.** Departments separated by printed rules, not boxes. `max-width:700px` — a book page, not a dashboard.

---

## 3 · THE HERO — "THE COPY-DOWN" (the derivation reveal, ~60% of craft budget)

**The trust contract as a gesture: touch a figure and the page copies it into the margin and shows the long division — and the sentence never loses its number.**

### Affordance
Every traceable figure in the judgement is a real `<button class="fig">` set as ink — `all:unset` base (re-add `-webkit-tap-highlight-color:transparent` on the root), mono tabular, and the annotator's mark: `text-decoration: underline dotted 1px color-mix(in oklch, var(--red) 55%, transparent)`, offset `.22em`. 44px hit target via `position:relative` + `::after{inset:-10px}`. **The grammar is absolute:** dotted red = will show its work; no mark = the spine served no working and the page will not pretend one. The `<details class="why">Show the arithmetic</summary>` row is deleted — the figure is the control. `aria-expanded` synced by hand.

### Structure
```html
<p class="judge">…road took <button class="fig" data-w="w-road" aria-expanded="false">$2,178.31</button>, so…</p>
<details class="working" name="derivation" id="w-road" hidden="until-found">
  <summary hidden></summary>
  <div class="wrap"><div class="ledger">…rows…<div class="row total">…</div></div>
  <div class="prov">SOURCE /api/standing · JUDGEMENT BUILT 06:12 · THE PAGE COMPUTED NOTHING</div></div>
</details>
```
`name="derivation"` = exclusive accordion free (one question at a time is ledger discipline, zero JS). `hidden="until-found"` = Ctrl+F for "$2,178" opens the arithmetic itself. **Sheet-top guard amended:** `[hidden]:not([hidden="until-found"]){display:none!important}` — original comment kept verbatim; the unamended rule breaks find-in-page.

### The sequence (~650ms, one continuous gesture of paper)
1. **0ms — press.** Figure debosses: `background:var(--sunk); translate:0 .5px`, 60ms in. Haptic `[7]`. Ink, not glow.
2. **0–320ms — the paper parts.** The working unfolds *in-flow* directly beneath the sentence: `interpolate-size:allow-keywords` + `::details-content{transition:block-size 320ms var(--ease-settle)}`; `@supports not` → grid-rows `0fr→1fr` on `.wrap`. Never a drawer, never over the page.
3. **0–320ms concurrent — THE COPY-DOWN.** A `match-element`-era view transition carries the exact glyphs he touched from the sentence into the empty **total row** of the ledger, where they land above a 2px double rule — the accountant's close. Element-scoped (`section.startViewTransition`, Chrome 147) so the rest of the page stays live; document-level fallback; plain open as floor. Implementation per the playbook's `reveal()`: twin `view-transition-name:'fig-live'` set **inside the update callback**, source name **cleared in `finally`**, `finished` in try/catch.
4. **~340ms — the rules draw.** Dotted ledger rules between rows (`row-rule:dotted 1px var(--rule)` Chrome 149; border-block-end fallback with `:last-child` strip), then the double rule scales `scaleX(0→1)`, 40ms stagger.
5. **~380ms — the parts print.** Rows fade up via `@starting-style`, 30ms apart, **figures already final** — arithmetic arrives printed because it was never computed here.
6. **~560ms — the stamp (grafted from A).** The provenance line typesets last, 10px engraved-caption mono: `SOURCE /api/standing · JUDGEMENT BUILT 06:12 · THE PAGE COMPUTED NOTHING`. The proof lands after the arithmetic, like a printer's mark.
7. The figure's underline goes **solid red** — the entry is annotated-open. Tap again: the total travels home, underline returns to dotted.

### Inside the working
- Two-column grid: labels left `--mid` sans, figures right mono tabular `justify-self:end`; the two-nut divergence row surfaces whenever the honest reserve disagrees.
- **UNKNOWN is the OFF-flag:** barber-pole hatch in `--unknown` (`repeating-linear-gradient(135deg,#6E6E6E 0 5px,#8A8A8A 5px 10px)`), seated *deliberately off* the figure column's right edge, served reason verbatim in italic `--mid` beneath: *"spend visible only through Jul 22 — two days not yet observed. Incomplete, not zero."* Sentence-level unknowns (blind days, unanswered sources) stay printed in the open as serif footnotes — honesty is never behind a tap; only verification is.
- Figures served whole get a working containing only the stamp plus *"this figure arrives whole — the spine serves no further breakdown."* (grafted from C — the grammar never lies about depth).

### Cleanup contract (ship-blocker class)
- Twin VT names set only inside the update callback; source cleared in `finally` — a leaked duplicate silently kills every future transition.
- Every `vt.finished` caught — a cancelled transition is never a failed reveal.
- One AbortController per open gesture; listeners `{signal}`-scoped.
- Reduced motion: instant open, no travel, static solid underline, everything readable.

---

## 4 · COMPONENT-BY-COMPONENT (first-impression priority order)

### 4.1 Masthead — the leaf's head
`ALMANAC` in Georgia small-caps over the **2px red rule** (the one rule that is always red, inked unevenly by today's seed). Right of it, the dateline stamped in mono caps. Above the rule, the **sun-arc glyph**: 44×16 inline SVG hairline arc, ends resting on the red rule as horizon, one 2.5px `--ink` dot positioned by local hour (faint below horizon at night). No labels, no scale, no claim — licensed atmosphere; the page knows what hour it is. Beneath, the **folio line** in `--faint` mono: `PAGE 207 OF 365 · WEEK 30` (client calendar facts only). The **dog-ear** top-right: `clip-path` + folded-back pseudo, seeded size/cant, `pointer-events:none`, never over a control, 18px ≤399px. Version chip lives here as a printer's key → §4.6.

**Sticky running head:** when the standing scrolls away, the red rule goes sticky (`--z-sticky`) and compresses to `ALMANAC · $1,249 TO GO` — served `parts.to_go` re-formatted, never re-derived; tap scrolls home. `scroll-state(stuck)` enhancement, IO fallback, plain scroll floor.

### 4.2 The Standing
Department head idiom (all sections): `THE STANDING` centered small mono caps between hairline rules. The headline figure sits **on** a red baseline rule — `text-box:trim-both cap alphabetic`, single line only — red when short (the bad number leads), the word **clear** in plain `--ink` when clear. Then the judgement prose (§3). Baseline's honest copy is the floor, kept: *"Not enough is known yet to say where you stand."* etc.

### 4.3 Wants your hand — the lamp margin
No new silhouette (one row shape, forever). Plain rows behind a **2px amber left edge** (the consequence bar), `YOU` as a small `--lamp` annunciator caption. Dark lamps are information; nothing blinks. Red never appears here. Tapping an item scrolls to and opens that card's detail *in place* on the board — same paper-parting machinery as the hero; one reveal grammar for the whole page.

### 4.4 The board — the stock
Columns rendered from `b.columns`; labels fall back to the uppercased key. **The `LABEL` map is deleted** (its `qa → undefined` bug dies with it).

- **NOW renders its slots:** `grid-template-rows:repeat(var(--slots),minmax(64px,auto))` from served `now_limit`; empties debossed (`--sunk`, inset shadow) reading `OPEN SLOT` in `--faint` tracked caps. Capacity is geometry before it is a number. Colhead prints `NOW · 2/3`; at cap, head + underline go solid via `:has()` **scoped to the column** — fullness is a fact, not an alarm. Served overfill → hatched `OVER` flag, never a fourth styled row.
- **Card grammar:** 1px red hairline left = *declared*; 2px amber edge = *consequence*; progress bar = neutral `--mid` fill of served `done/total` — **the checkboxes are the mass; never invent a weight.** Flat DOM, board ≤80 nodes.
- **Tap-to-move:** tap → card lifts (`-2px, rotate(-.4deg)`, the only shadow), haptic `[8]`, `body[data-carrying]` flips other columns into ≥56px labeled targets printing their room: `→ NOW · 2/3` / `→ NOW · FULL` (courtesy before the attempt; the tap is still allowed — the 409 is the truth, client counts can be stale). The columns **inhale** — empty-slot deboss deepens one step, 120ms, once (grafted C). Tap-away = set down, silent, nothing sent.
- **Landing:** POST with `Idempotency-Key` minted at pickup, reused on retry. On 2xx: `view-transition-name:match-element; view-transition-class:card` (one line names them all), `moveBefore()` with `insertBefore` floor, survivors close ranks, 300ms `--ease-settle`, haptic `[14,26,14]`, destination count bumps `scale(1.18→1)` — **the receipt. No toast.**
- **THE REFUSAL** (§8, moment #2): on 409 the card drives toward the column, hits, springs back on `--ease-refuse` 460ms (90ms opacity step reduced); the column compresses `scaleY(.995)` for 90ms (grafted C); haptic `[12,70,12]`; the spine's sentence prints verbatim in `--hot` mono under the title behind a 2px inset warn bar: *"now is full — 3 of 3; finish one first."* Three laws: the card stays exactly where it was; the reason is the server's words, inline, persistent until the next write; retry is the identical gesture. **`toast()` is deleted from the file.** No hold exists anywhere near this write — the $1,500 wall-clock scar is honored by never building the trap.
- **Aged board:** `source!=='live'` → content root `saturate(.6)` (one repaint), `AS OF 41 MIN AGO` chip leads, cards `pointer-events:none`, targets never render. You cannot move stock you cannot verify. No spinner, no skeleton, ever.
- **Card detail:** drawer + scrim deleted; detail unfolds in place with the hero's machinery. Card body = grip; the 44px `№` target at row's right edge = open the works.

### 4.5 Colophon
Centered small mono between double rules: `ALMANAC · ONE MEMORY · AS OF 06:12`. Soul/Learn inherit the ink system (department heads, ruled sections, no panels) but get no craft budget this pass.

### 4.6 Chrome
Version chip = live gauge: SWR shell (§7), chip reads its version **from the SW via postMessage** (drift fixed as a class), flips to `UPDATE READY`, tap reloads. Connect panel keeps its diagnostic voice verbatim. Scroll ribbon: 3px red bookmark riding `animation-timeline:scroll(root)`, `@supports`-gated, `display:none` fallback, killed under reduced motion — decoration only.

---

## 5 · MOTION SPEC

**Constitution, inherited and obeyed:** nothing readable sits on a moving pixel; the ambient never states a number; **nothing moves unless he moved it, or the truth moved.** Two easings only (literal strings for WAAPI — Detent's probe pattern carried over; the BUILD-SPEC `var()` bug is *not* inherited). Mechanisms may overshoot 3%; **numbers never overshoot.**

| Event | Motion | Duration / easing |
|---|---|---|
| **Entrance** | **none.** Cached page paints instantly at final values, honestly aged; live swap animates deltas only | — |
| Open working | part 320 ∥ copy-down 320 → rules 40ms stagger → parts 30ms stagger → stamp | `--ease-settle` |
| Card seats | match-element travel, ranks close, count-bump receipt | 300ms `--ease-settle` |
| Refusal | drive, hit, spring back + column give | 460ms `--ease-refuse` (90ms step reduced) |
| Truth moved while watching | that figure alone rolls (620ms plain ease-out, one abortable rAF, tabular mandatory), then **wet ink**: `--red` drying to `--ink` over 4s | roll never overshoots |
| **Day-turn** (once per calendar day, `almanac.last_leaf`-gated, only if visible) | old leaf lifts out `translateY(-3%) rotate(-1.2deg)` + shadow 520ms → new sheet arrives **with its GROWN grain** → dateline stamps `scale(1.14→1)` over-inked → red rule draws itself with today's inking → sun dot fades in at its hour | ~1.1s, VT `types:['day-turn']`; transform/opacity only — never a 3D curl |
| **Red-letter day** (`parts.to_go<=0`, served, never computed) | dateline re-typesets in red small-caps inside a red-ruled box, border drawing 480ms, haptic `[14,26,14]`. **No sound — Detent owns the bell; the kitchen table doesn't tick.** Arriving already-clear renders it static; gone tomorrow if the spine says short | on state-change-while-watching only |

**Haptics** (Android, try/catch, never on load): press `[7]` · lift `[8]` · seat `[14,26,14]` · refuse `[12,70,12]` · red-letter `[14,26,14]`.

**Reduced motion is surgical, not blanket** (Detent doctrine): structure survives — instant reveals, 90ms refusal step, haptics, static red letter, every receipt; theater dies — day-turn, copy-down travel, ribbon, wet ink, staggers, rolls (snap to final). Gate **before** VT snapshots. Explicit VT pseudo kill block added. `matchMedia` listened live.

---

## 6 · PHONE SPEC

Breakpoints: **≤399px** Fold 7 cover (~340px, primary design target) · **400–599** S25 · **600–1023** Fold open · **≥1024** desktop = a wider page of the same book. Posture via `navigator.devicePosture` + `matchMedia('(min-width:600px)')` — never Viewport Segments.

- **The hero is in-flow, so it is already phone-native** — the working unfolds inside the reading column under his thumb; 44px hit insets on every figure; no popover, no reach.
- **Board = snap pager:** columns are pages of stock — `scroll-snap-type:x mandatory` on a **fixed-height window** (Detent's measured three-cards-and-a-sliver + mask fade, `overscroll-behavior:contain`, inner column scroll so the pager never fights vertical) — `scroll-state(snapped)` inks the active head, IO-dot fallback, accessible tab buttons kept in DOM.
- **Carry rail:** while carrying on ≤399px, drop targets also render as a fixed bottom row of ≥56px column chips above `env(safe-area-inset-bottom)` — pick up anywhere, place with the same thumb. Cross-column travel that would animate off-screen is skipped for a 220ms departure + destination count-bump — a moved card is *confirmed*, never merely vanished.
- Masthead stacks; sun-arc 36px; folio compresses to `207/365`; dog-ear 18px; sticky red rule keeps the to-go figure over the board; serif holds 16px; headline clamps without wrapping (trim single-line only). Nothing interactive above thumb reach; `padding-block-end:calc(env(safe-area-inset-bottom) + 96px)`. No control in the move path smaller than a thumb.

---

## 7 · PERFORMANCE & ACCESSIBILITY BUDGET

**Load plan (under a second at a truck stop):**
1. SWR shell — SW serves cached shell immediately (~50ms), background `cache:"reload"` compares, chip flips `UPDATE READY`. API caching rule untouched: **never cache an API response.**
2. Last-known `/api/all` cached at `almanac.state.v1`, painted at boot under the age chip; live swap animates deltas only.
3. `const LIVE = fetch('/api/all')` — first line of the script block, before render code.
4. `content-visibility:auto; contain-intrinsic-size:auto 220px` on below-fold sections.
5. One file, zero external requests, system fonts, ≤50KB gzip, GROWN assets generated in-file.

**Paint budget:** gesture frames = compositor-only; full-viewport repaints ≤2/session (day-turn, aged flip); `backdrop-filter` 0 instances (the drawer that justified one is deleted); 1 concurrent rAF, abortable; `will-change` set on interaction start, removed in `finally`; never two VTs concurrently; board ≤80 nodes.

**Cleanup checklist (ship blockers):**
- [ ] `setInterval(load,120000)` **deleted** → one visibility-gated scheduler: pause hidden, immediate load + resume on visible. (The Thursday-battery fix.)
- [ ] One AbortController per gesture class; all listeners `{signal}`-scoped, aborted before removal.
- [ ] Every WAAPI animation `cancel()`ed on early exit; `.finished` always caught.
- [ ] Every `vt.finished` in try/catch; VT names cleared in `finally`.
- [ ] Any gated write: wall clock decides, never `animation.finished`. (Tap-to-move has no hold — keep it that way.)
- [ ] SW registered `{scope:'/almanac/'}` + path-guarded fetch handler; `#reset` filtered to `almanac-*`/`almanac-shell-*` keys only — an unfiltered sweep uninstalls every PWA he owns.
- [ ] `BUILD`/SW `VERSION` via postMessage handshake — the chip can never lie again.
- [ ] `[hidden]:not([hidden="until-found"]){display:none!important}` at sheet top, original comment intact.
- [ ] Keys: `almanac_api`/`almanac_token` keep underscores (QR contract shared with Detent); all new keys dotted (`almanac.last_leaf`, `almanac.state.v1`, `almanac.leaf.v1`).
- [ ] `esc()` every interpolation; `money(null)` → `"—"`, commented why.

**Degradation ladder (behavioral floor with every enhancement absent):** tappable figures that open instantly · a board that moves with plain re-render and inline verbatim refusals · OFF-flags with reasons · sub-second paint from cache · no spinner, no skeleton, no fabricated zero, ever. Everything above is additive. **If a phone struggles, cut in this order:** GROWN grain → ribbon → copy-down travel (keep the unfold) → seat travel (keep the receipt) → day-turn (plain render). The refusal, the stamp, and the OFF-flag are never cut — they are the meaning.

**Accessibility:** `:focus-visible{outline:2px solid var(--red)}` everywhere; Esc closes any open working; exclusive accordion is keyboard-native (`<details>`); accessible tabs retained beside the pager; `aria-expanded` synced on figures; refusal text is live-region announced (`role="status"`).

**The deletions ledger (a design that can only add fails his ledger):** the light theme and all four token blocks · `--good` and every green pixel including `.ver.fresh` · the "Show the arithmetic" summary row · the drawer + scrim · `toast()` entirely · the 4-button tab strip as primary nav · the unguarded poll · the second z-scale · the `LABEL` map · the Apple-only font stacks · load-time count theater.

---

## 8 · THE 3 SIGNATURE MOMENTS, RANKED

**1. THE COPY-DOWN** — touch `$2,178.31` and watch those exact glyphs travel out of their sentence into the total row of their own arithmetic, rules scribing in around them, closing on `THE PAGE COMPUTED NOTHING`. *Implementation:* `<details name="derivation">` + `::details-content`/grid-rows unfold ∥ match-element VT (element-scoped where available), `@starting-style` row prints, stamp last; twin names in the callback, cleared in `finally`. This is the morning mirror made physical — a page that shows its work instead of managing an impression, honest in both directions because UNKNOWN answers the same gesture with its reason.

**2. THE REFUSAL** — a full column has weight: the card drives, hits, springs back on `--ease-refuse`; the column gives 0.995 for one frame; the spine's own sentence prints in `--hot` where he's looking; nothing else in the world changes, so nothing else moves. *Implementation:* WAAPI translate keyframes with literal easing, inline `.why` via `@starting-style`, idempotent retry as the identical gesture, `toast()` deleted. Built on the latch's precedent without a hold — immune to the $1,500 scar by construction.

**3. THE DAY TURNING ON A GROWN LEAF** — once per day at most: the old leaf lifts out, a physically new sheet of paper (seeded grain, fold, inking) settles in, the dateline stamps, the red rule draws itself, the sun dot finds its hour — and on the day the spine says clear, the date prints in red letters. *Implementation:* VT `types:['day-turn']` gated by `almanac.last_leaf` + visibility + reduced-motion; GROWN generated in `requestIdleCallback` inside the turn, cached by date. Variance in the matter, never in the message — by week two, every morning is *a* morning, and the page never once feels like a template.

---

**Final law, carried from all three concepts because all three arrived at it independently: it works before it performs.** The floor is a readable, movable, honest page in under a second; every moment above is a gift on top of that, and every one of them can be taken away without the page ever telling him a lie.