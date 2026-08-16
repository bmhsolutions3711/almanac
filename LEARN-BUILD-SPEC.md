# LEARN ROOM — BUILD SPEC (THE SKIP)

# THE BUILD SPEC — THE LEARN ROOM
### Final art direction: **ARC** (spine = Concept B), hardened by Instrument's laws, wired like Live
*This is the document that gets built. Where it conflicts with any concept doc, this wins.*

---

## 1. CHOSEN DIRECTION

**Name: ARC.**

**Governing metaphor, one sentence:** *Every piece of intelligence that matters to Bryan travels a visible arc — it leaves a distant conversation, skips off the night, lands on the one antenna cut for it, and becomes a voice in his cab — and the room is the instrument that shows the landing, plays the voice, and forgives what fades.*

**The 2-second feeling:** *the world came looking for me last night — and found me.*

**Why B is the spine.** All three concepts share the shortwave/skip metaphor — the house's own radio tongue finished, not imported. What separates them is what the room is *about*. Instrument is about trust in the machine; Live is about reactivity; **Arc is about the reversal** — Forge made him arrive to a pile (230 untriaged, 144 orphaned stars); Arc makes the world arrive to *him*. That reversal IS the emotional core of the brief (asymmetry, recovery, "distant signals arriving physically felt"), and it's the only spine where the hero moment, the aging model, and the payoff are the same story told three times. The other two become Arc's discipline and its wiring.

**The graft table (binding):**

| Grafted moment | From | Why it survives |
|---|---|---|
| **The Three Laws** — nothing lights that wasn't measured; two-lamp color law; motion is a receipt, never a mood | A | The governance layer. For a user allergic to farmable numbers, an instrument that cannot lie is the trust budget everything else spends. |
| **Amber touchdown spark** (180ms, cools to violet dot) | B | Distance becoming presence — the two color systems shaking hands. The single best particle in any concept. |
| **Cold-open line** (`overnight — 6 signals made the trip`) | B | Title card over the establishing shot; derived data only. |
| **Bottom-mounted DECK** (ON AIR console as last flex child) | C | The rig sits under the dash. Thumb-native on the Fold, radio-true, and it deletes the sticky-header complexity of A/B. |
| **"Amber = sound" strict ruling** ("if it's amber, it either just landed or is in your ears") | C | One sentence anyone can enforce in review. Supersedes A's RX/TX phrasing (same law, cleaner test). |
| **Mic light / houselights** (`.lr-onair` dims non-sounding to ~.55) | B+C | Cheap (opacity state, no filters), lawful (derived from real sound), cinematic. |
| **Meter shows its work** (`score_reasons` served, tap to unfold) | A+C | His three filter tests as line items. A bare 84 is the number he's rejected five times. |
| **Orb field-signal weather line** (`4 landed overnight` / `band quiet` / `——`) | C | The story starts before the room opens. |
| **Two-phase aging: yellow → grey** | C (buckets from B) | Resolves the A-vs-brief conflict — see ruling below. |
| **Reactive-spine input table** (six inputs, no input → no motion) | C | The implementer's checklist for what may ever move. |

**Cuts (final):**
- **A's analog needle** — cut. It's a second instrument answering the same question the S-meter answers, and it costs a swing animation. One signature gets the craft; the needle isn't it.
- Perpetual visualizer, word-karaoke, AudioContext anywhere near playback, celebrated emptiness, polling — all dead per all three concepts. Not revisited.
- `navigator.vibrate` on detent (A) — kept, but demoted to a one-line garnish; delete first if anything struggles (§7).

**Aging ruling (the one real conflict).** The brief demands "yellow out"; Instrument argues amber = transmit lamp so yellowing lies. Both are right because they're talking about different yellows. **Final: two-phase, and the yellow is sepia `#C79449` (the Almanac's own dark-paper warn ink), never transmit-amber `#FFA419`.** Days 0–7 the paper yellows (still worth catching — yesterday's page); days 7–14 it drains to `--unknown #6E6E6E` (the desk's existing grammar for "no longer a live truth"); day 14 it fades off the band into one line. Warmth first, grey second, both honest, and the TX lamp is never impersonated.

---

## 2. EXACT VISUAL SYSTEM

**Token system: THE DESK** (`desk.html:32-41`), not paper-and-ink. No new root tokens; all additions scoped `--lr-*`.

### Palette

| Role | Value | Law |
|---|---|---|
| Ground | `--void #07080A` + existing stars canvas (z0) | No new backgrounds, no grain, no gradients. The night is already there. |
| Identity / the far band | `rgba(var(--key), α)` — LEARN sets `--key: 150,90,220` (desk.html:1336, swapped at entry :1724) | **Never a violet literal.** Band, ticks, dots, S-meters, snapped chip, fresh edges, star door, aim accents. |
| Sound | `--amber #FFA419` (+ lit-text `#FFD27A`) | **Strict:** touchdown spark, deck border, carrier sweep, lit sentence, S9+ rest glow, band-worked pass. A silent room contains almost no amber. |
| Truth now | `--ink #E9EDF0` | Titles, live figures. |
| Human prose | `--mid #AEB8C0` | Summaries, implications. |
| Instrument etch | `--etch #5E6870` | Caps, journey lines, unplayed carrier peaks, fade line. |
| Aging phase 1 | `#D9CFB8` (4–7d), `#C79449` (8–11d) | Sepia buckets. Progressive: `color-mix(in oklch, var(--ink), #C79449 calc(var(--lr-age)*70%))` where supported; buckets are the floor (desk has shipped zero `color-mix`). |
| Aging phase 2 / unknown | `--unknown #6E6E6E`, row `opacity:.72` (12–14d) | Glow-loss = dying, per house grammar. `——` for unknown, never 0. |
| Temperature | `body.hot` untouched | Aging runs its own scoped ramp; never collides with heat. |

### Type (desk micro-scale, verbatim shapes)

| Job | Declaration |
|---|---|
| Caps / telemetry / journey lines | `font:700 8px/1 var(--mono); letter-spacing:.2em; text-transform:uppercase; color:var(--etch)` |
| Cold-open line | same, but 9px, `color:var(--ink)`, `letter-spacing:.18em` |
| Row title | `font:600 13.5px/1.35 var(--sans); color:var(--ink)` |
| Implication / summary | `font:400 13.5px/1.7 var(--sans); color:var(--mid)` |
| Meter reading / chips | `font:700 8px/1 var(--mono); letter-spacing:.11em` |
| Buttons | `font:700 9px/1 var(--mono); letter-spacing:.14em` |

Mono+tracking+caps = instrument voice; sans = human voice; never mixed. `tabular-nums` is global — free.

### Spacing / radii / elevation
Panel radius **7px**, chips 10px pills, buttons 3px. Panel padding `12px 15px`, rows `11px 0`, room gap `10px`. **Every write control ≥40px with daylight** (thumb law, quoted in-source). Elevation = 1px `var(--line)` hairlines; the room's **single** `backdrop-filter:blur(8px)` lives on the deck.

### Glow recipes (glow is earned, only these)
- S9+ meter at rest: `box-shadow:0 0 10px -2px rgba(255,164,25,.7)` — *the only amber at rest*.
- Snapped station chip: `box-shadow:0 0 14px -6px rgba(var(--key),.8)`.
- Unheard band-scope dots: faint violet halo (canvas, `rgba(var(--key),.35)` 3px blur); heard dots flat — *glow is unfinished listening*.
- Unknowns drop all glow (`.big.unk` grammar).

---

## 3. THE HERO — THE LANDING → FIRST SYLLABLE

One continuous beat. Two halves, one contract.

### 3a. The Landing (band-scope one-shot)
**Trigger:** room entry ONLY, and only when `maxCreatedAt > +localStorage["learn.seen"]`. Keyed to the room's entry `transitionend` (700ms setTimeout fallback) so arcs never play behind an invisible panel. **Never keyed off render** — a mid-flight re-render draws the still frame (GAUGE_AT law: arrival, not a tic).

**Canvas:** 84px strip, full panel width, `dpr = min(devicePixelRatio,2)`, redrawn from `clientWidth`.

**Still frame (the default state, always drawable in one call):** horizon hairline at `y=H-18` in `rgba(150,170,190,.25)`; station ticks 1.5×10px at stable hashed x (`14 + hash(id)%1000/1000*(W-28)`) — violet when tuned-in, `--etch` otherwise; landed signals as r1.6 dots above their stations, alpha = `.35 + .55*score/100` (**brightness is score — data, not paint**), unheard dots haloed.

**The animation:** one arc per genuinely-new signal, **strongest first** (landing order = play order — watching the sky teaches the queue). Per arc: quadratic curve from `x0 = x1 ± W*.3` at y6, control point y2, down to the station; `DUR=620ms`, ease `1-(1-p)^3` (arrival family `cubic-bezier(.16,1,.3,1)`), stagger `90ms`, stagger caps at 9 (remainder lands in the final frame), **total ≤1.4s hard**. Trail: violet, alpha `.55*(1-p)+.2` scaled by score. **Touchdown: 180ms amber spark (`rgba(255,196,90,.95)`, r2→r3→settle) cooling to the settled violet dot** — the graft from B, the one place amber appears without sound because the sound has just arrived.

**Cold-open line:** DOM element above the strip, resolves via `opacity` transition `.5s .55s` mid-flight: `overnight — 6 signals made the trip` / quiet night: `the band was quiet last night — 3 still fresh`. Served numbers only.

**End state:** still frame; `learn.seen` stamped; reopening seconds later moves nothing.

### 3b. The Keyup (thumb → syllable, <1s — the contract everything answers to)
Tap **▶ ON AIR** on the deck → `TUNING…` → preloaded blob keys `XMTR` → **Media Session metadata set BEFORE `play()`** (lock screen carries `{title} / S8 · high confidence · a16z / ALMANAC — THE LEARN ROOM` when the first Kokoro syllable lands) → `.lr-onair` mic light drops (non-sounding elements to opacity .55, .25s, no filters) → carrier begins amber sweep → lit sentence steps. Sub-second is guaranteed by the pregen sweep (server synthesizes the queue in play order; telemetry line promises it: `READY 9/12`).

### 3c. Cleanup contract (non-negotiable)
- **One rAF owner:** `LR.raf`. Cancelled on: room exit (renderRoom learn-branch teardown before rewiring), `visibilitychange → hidden`, ACTIVE room change, and any re-render (which draws the still frame instead).
- **One AbortController:** `LR.ac` — every room listener registered `{signal: LR.ac.signal}`, aborted on room exit.
- **Blobs:** ≤2 alive (current + preloaded next), `URL.revokeObjectURL` on every advance; `pagehide → XMTR.stop()`.
- **Reduced motion:** still frame + line + dots instantly; the fact survives, the film doesn't.
- **All playback visuals derive from `currentTime`, never accumulated deltas** — a truck-stop nap resumes in perfect sync.

---

## 4. COMPONENT BUILD NOTES (first-impression priority order)

Skeleton (contract holds): `whyBar()` → band-scope panel + cold-open → dial → aim plate → the catch (own `.scroll`) → **the deck (last flex child, bottom-anchored)**. All inside `.room` flex column; in-room z ≤6; read-along docket 60. Refusal string: `the spine has not answered with the forefront.`

### 4.1 THE BAND-SCOPE (§3a)
Cap line derived only: `the band — 7 stations · 4 landed · conditions good` (conditions = count + mean score, or the phrase is omitted). Degradation: no canvas / low `deviceMemory` → static CSS gradient tick-strip. Spine down → flat line, no dots, no fiction.

### 4.2 THE DECK — bottom-mounted ON AIR console (C's graft, the room's second face)
Last flex child, always visible, the single `backdrop-filter`, 1px amber top border **only while keyed** (violet hairline otherwise — amber = sound). Contents:
- `▶ ON AIR / TUNING… / ■ SIGN OFF` (house vocabulary verbatim, 40px, amber text when armed), rate chips `1× 1.25× 1.5×` (persisted `learn.rate`; **comment in code: read-along runs in media time — sync at any rate is free, do not "fix"**), queue position `3 of 6`.
- When hot: title (ink), S-meter + reading, **the carrier** — 28px canvas, 160-bucket peak envelope parsed from the actual WAV bytes (DataView chunk-walk, `LIST` chunks handled, never assume data@44), drawn once in `--etch`; played portion re-tinted amber, swept by `timeupdate` (~4Hz) + `transition:width .3s linear`. **No rAF, no AudioContext — ever.** The sweep is data: full value under reduced motion.
- **One lit line:** the sentence currently being spoken, swapping in place.
- Tap the deck while parked → read-along docket (z60, `.docket` grammar): full summary, amber sentence sweep via **CSS Custom Highlight API** (`::highlight(lr-air){background:rgba(255,164,25,.16);color:#FFD27A}`; ranges re-armed after every render from `LR.air={id,t}`; summary rendered as ONE text node; sentence-`<span>` class-toggle fallback), `user-select:text` re-enabled, auto-scroll `{block:"nearest"}`.
- **Playback chain:** `fetch(blob, bearer) → objectURL → XMTR → Media Session` (`play/pause/nexttrack/prevtrack/seekto` + `setPositionState` on timeupdate). Narration voice (server): provenance first — *"From a16z, fourteen hours ago. {title}. {summary} Why it matters for the build: {implication}."* Citations never read aloud.
- **Leaving the room does not sign off** — queue is module state; "reading done ≠ listening done."
- `onended` → stamp `heard` (write first) → advance to preloaded next → preload next-next.

**The XMTR promotion is this room's ONLY global edit:** promote `AIR` (desk.html:2012) to the shared one-transmitter module, add the missing `revokeObjectURL`, migrate `playAir()` in the same pass. Moved means moved.

### 4.3 THE DIAL — station rail
Horizontal `scroll-snap` strip, `ALL BAND` first, mono-caps callsign chips (40px targets; `corner-shape:squircle` one-liner, harmless absent). **Snapping is tuning:** commit filter on `scrollend` (120ms debounced `scroll` fallback); snapped chip wakes (ink text, violet ring, keyed glow) via `scroll-state(snapped)` container query — **chip must be a child of the snap target** — with a `scrollend`-handler class as fallback. `proximity` under 4 stations (mandatory-trap). `navigator.vibrate?.(6)` on a real detent commit only, suppressed under reduced motion. Long-press a station → curation docket: add channel by URL, nudge weight, drop behind a `lr-hold` rail (620ms `.khold` pattern re-prefixed, wall-clock guarded). **Curation is a write with ceremony; the rail only ever filters.** Every input carries a stable `id` (focus-preservation contract).

### 4.4 THE AIM PLATE — the antenna
The old dead objectives list, demoted into the thing every score points at. Contents: the standing aim question (sans, ink), depth rung chip with LADDER meaning verbatim (`WORKING KNOWLEDGE — you have used it on something real`), the next rung's honest price, and `★ 7 landed on this aim`. Tap → docket: edit aim (hold-to-commit), full visible ladder with its own anti-farming line on screen (*"you cannot pass 'read in' on consumption alone"*). **Aim change fires the room's quiet second-best moment: the whole band re-scores in one ≤350ms view transition** — turn the antenna and the sky reorders. A star is not a state; it is an edge onto the aim — the structural answer to 144 orphans.

### 4.5 THE CATCH — signal rows (≤30 rendered, ever; the anti-debt cap is the perf cap)
Order `score DESC, created_at DESC`, fresh only. Per row:
- **S-meter:** 64×8px, nine conic/`repeating-linear-gradient` tick segments (gap math from a `--lr-sw` token so the ninth tick doesn't clip), violet fill, lit = `ceil(score/11.1)`, reading `S8` in 8px mono beside it. S9+ = the only amber rest glow. Figures render final — no load animation.
- **Tap the meter → it shows its work:** served `score_reasons[]` unfolds as line items — `aim match · obscure (not searchable) · sells nothing · principles over news`. Absent reasons → score + aim name; never invented.
- **Windshield flag**, `FORMATS` strings verbatim: `🛞 windshield` (violet-lit) / `parked` (etch). **Parked-only signals never enter the audio queue** — "the tool says so."
- Title · journey line (mono etch): `a16z · rec 14h ago · landed 03:12 · 9 min` (duration only once WAV is cached).
- **Fresh edge:** `border-left:2px solid rgba(var(--key), calc(.45*(1 - var(--lr-age))))`; aging buckets `.lr-age1/2/3` per §2; `--lr-age` served as `age_days/14` clamped.
- **Expand** (`interpolate-size:allow-keywords`, `grid-template-rows:0fr→1fr` fallback; state in `LR.open` Set): summary as one text node, implication under cap `FOR YOUR BUILD`, citation chips `YT · a16z 41:20` deep-linking out.
- **Doors:** `★ STAR` / `✕ CLEAR`, ≥40px, daylight, `stopPropagation` (ruled 08-03), bottom-right thumb zone. **Never optimistic:** `disabled + "writing…"` → POST → spine's own words on failure → restore.

### 4.6 THE FADE LINE + THE LOG
Day 14: backend flips `faded`; the surface renders one etch line, tappable to nothing: `14 signals faded off the band unheard since aug 2 — conditions, not debt.` Below, folded (`learn.folds`): THE LOG — heard/starred history, what each star fed on the aim, plus `standing[]` applied/next from `/api/learning` (whose `done` seam still refuses an empty close).

### 4.7 THREE DARK STATES, none alike
- **Spine down:** stale readstamp, last catch at half exposure, deck disabled reading `TRANSMITTER OFFLINE — the spine has not answered with the forefront.` Never a spinner.
- **Empty by fade:** fade line + `the band is quiet — 7 stations aimed, nothing landed since tuesday.` Weather, not failure. Earns nothing.
- **Band worked:** §5 payoff. Guard `LR.workedThisSession && queue.length===0 && spine.answered` — only this one celebrates, because *he* worked it.

### 4.8 THE ORB FIELD SIGNAL
LEARN orb's field line: `4 landed overnight` (faint violet) / `band quiet` / `——` / flips to `worked` after the payoff — the story visible from orbit.

---

## 5. MOTION SPEC

**Law: motion is a receipt for a real event — a landing, his hand, sound playing — never decoration. Nothing loops, ever.** Six inputs may move the room (aim edit, dial flick, playhead, doors, the clock, the night's new signals); no input → no motion.

| Beat | Motion | Duration / ease | Trigger |
|---|---|---|---|
| Room entrance | house fade (kept, untouched) | .5s, .18s delay | entry |
| **THE LANDING** | one-shot arcs, amber touchdown sparks, cold-open line | ≤1.4s, 90ms stagger, `cubic-bezier(.16,1,.3,1)` | entry + `learn.seen` high-water only |
| Mic light | opacity state .55 / restore | .25s | ON AIR keyed / signed off |
| Carrier sweep | CSS width off `timeupdate` | .3s linear | media time — **data, kept under reduce** |
| Lit sentence | state swap, no transition | — | media time — **data, kept** |
| STAR | row collapses toward AIM plate, count ticks | 300ms VT, desk ease `cubic-bezier(.22,.61,.36,1)` | after write lands |
| CLEAR | de-tune: old snapshot `opacity→0` + `blur(1.5px)` + 6px drift | 300ms VT | after write lands |
| Aim change | whole-band re-score sweep | ≤350ms VT (aim plate 380ms) | after hold-to-commit write |
| New rows mid-session | `@starting-style` 6px rise | 260ms, 40ms stagger, ≤8 rows | genuinely new rows |
| **BAND WORKED** | one brightness pass over the still scope + log line `band worked — 6 heard, 2 starred to the aim. conditions again tomorrow night.` | 900ms, once | last signal *ends by playing* |

**`mutate()` is the single write wrapper:** `startViewTransition(() => { fn(); renderRoom(); })` where present and motion allowed; else `fn(); renderRoom()`. `vt.finished.catch(()=>{})` — an aborted animation is not a failed write. VT names `lr-sig-a{id}` (ident-safe prefix), ≤32 named, ≤350ms, never chained. Scroll/focus preservation runs inside the callback (existing idiom); **the lit sentence joins that family** (re-arm ranges post-render).

---

## 6. PHONE SPEC (Fold 7, one hand, 70mph)

**At speed the real UI is the lock screen and the steering wheel.** Media Session metadata + artwork + live scrubber (`setPositionState`); `nexttrack` = skip a boring signal; `prevtrack` = restart the signal. Plain `<audio>` in a media session survives screen-off and battery-optimized Chrome; **never auto-pause to "save battery."** The glass is for the dock.

- **340px outer screen is the floor device.** Band-scope compresses to 64px (canvas scales from `clientWidth`; arcs unchanged); dial chips compress to callsigns at 40px targets; deck stacks (meter above carrier); doors go full-width split with daylight; S-meters compress before titles wrap.
- **The deck is bottom-anchored** — ON AIR / SIGN OFF / rate under the thumb. Nothing writable in the top corners.
- **Unfolded / Mac:** rooms are phone-shaped and stretch (house rule — no invented desktop grid). The band gets more horizon; nothing re-edits.
- **Breakpoints:** none new. The one existing `min-width:820px` money-room rule is not extended.
- No `viewport-fit=cover` / `safe-area-inset` dependencies (none exist in desk.html). `user-select:text` re-enabled only on read-along prose. **PWA: bump sw VERSION on ship** or the truck serves the dead list from cache.

---

## 7. PERFORMANCE & ACCESSIBILITY BUDGET

### Hard budgets
| Thing | Cap |
|---|---|
| Canvases | 2 (band-scope + deck carrier); per-signal envelope parsed once, only for the playing signal |
| rAF owners | 1 (`LR.raf`), alive ≤1.4s per entry |
| `backdrop-filter` | 1 (the deck) |
| VT-named elements | ≤32 |
| Rendered fresh rows | ≤30 |
| Blob URLs alive | ≤2, revoked on advance |
| Fetch cadence | room entry + his tap. **No polls** ("NOTHING RE-READS BEHIND HIS BACK"; `freshenRadio`'s 15s throttle is the ceiling if ever needed) |

### Cleanup checklist (ship-blocker if any box unchecked)
`LR.raf` cancelled on exit / hidden / re-render · `LR.ac.abort()` on exit · `XMTR.stop()` + revoke on `pagehide` · `learn.seen` stamped post-landing · ranges re-armed post-render · no listener outside `LR.ac` · no second Audio element anywhere.

### Reduced motion — handled twice
The blanket rule (desk.html:1191) kills transitions only. **Every JS driver self-checks `matchMedia`:** landing → still frame instantly; `mutate()` → plain re-render; auto-scroll → `behavior:"auto"`; haptic suppressed; mic light → instant state. **Kept at full value:** carrier sweep, lit sentence, all audio — they are data; the radio is the content. Each fallback keeps the *meaning* (dots, counts, glow) while dropping the motion — the hand-breathe precedent.

### Visibility
`hidden` → cancel rAF; **audio keeps playing (that's the point)**. Visible again → resync visuals *from `currentTime`*, never deltas.

### Degradation ladder (every rung honest — no spinner, no fake zero, no celebrated empty)
no VT → instant re-render · no `CSS.highlights` → sentence-span toggle · no `scroll-state()` → `scrollend` class · no `color-mix` → sepia buckets hold · no canvas / low memory → static tick-strip · no Media Session → in-page controls · spine down → `TRANSMITTER OFFLINE` in the house's words · unknown → `——`, glow dropped.

### Cut order if a phone struggles
1. haptic → 2. `@starting-style` row stagger → 3. touchdown spark (arcs land plain) → 4. view transitions (writes go instant) → 5. the landing itself (still frame + cold-open line). **Never cut:** the carrier, the lit sentence, the sub-second keyup, the fade line, the 30-cap.

### Scope law
Classes `lr-*` · properties `--lr-*` · storage `learn.seen / learn.rate / learn.station / learn.folds` · VT names `lr-sig-a{id}` · in-room z ≤6, docket 60 · off-limits globals (`.bar .hold .why .chip .fold .panel .cap .scroll .big .t .s .n` …) untouched · `esc()` on every interpolated string · scrollers named from the preservation keep-list · wire branch added: `if(o.room==="learn"){ wireLearn(); }`.

### Server seams (stdlib, Forge-patterned verbatim)
`GET /api/learn/signals` (fresh + faded_count + stations + aim + `score_reasons[]` + sentence `timing[]`) · `GET /api/learn/signal/{id}/audio` (per-sentence-concatenated WAV — timings exact by construction; `normalize_for_speech` runs INSIDE synth so screen and clock never drift) · `POST …/{heard|star|clear}` · `POST /api/learn/stations`. Atomic tmp-rename publish, prune-oldest-200, pregen sweep in play order.

---

## 8. THE 3 SIGNATURE MOMENTS (ranked)

**1. THE LANDING.** Violet arcs dropping out of the dark, sparking amber on touchdown at his stations, under `overnight — 6 signals made the trip`. *Implementation:* §3a one-shot canvas — entry-keyed high-water mark, ≤1.4s, strongest-first stagger, brightness=score, then a still instrument. It reverses his relationship with information: Forge made him arrive to a pile; this makes the world arrive to him, because his dial was set right while he slept.

**2. THE KEYUP.** Thumb on ▶ → studio dims → lock screen already carries the callsign → first Kokoro syllable, under one second — then the carrier sweeps and the spoken sentence glows, exact by arithmetic. *Implementation:* §3b/§4.2 — pregen-backed blob preload, metadata-before-play, mic-light opacity state, byte-parsed envelope + `timeupdate` sweep, Highlight API read-along. "Intelligence and the speed of intelligence," felt in the body.

**3. THE CLOSE.** STAR collapses a row visibly *into* the aim plate as its count ticks up; and when the last queued signal ends by playing, one 900ms pass sweeps the band and the line sets: `band worked — 6 heard, 2 starred to the aim. conditions again tomorrow night.` *Implementation:* §5 — `mutate()` view-transition receipts after landed writes; guarded payoff; orb flips to `worked`. Stars have a home, the band forgives, the system closes — the anti-Forge doctrine as the room's last word each night.

**Build order:** audio spine end-to-end (if the wheel's next-track doesn't skip a signal, nothing else matters) → sentence timing + read-along → catch rows, meters, aging, fade line → doors + `mutate()` → dial + curation → **the landing and the payoff last — the flash is downstream of the meaning.**