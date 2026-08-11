# THE BUILD SPEC — CARD #90, THE COMPANION SPLIT
## Final art direction, ratified. Codename: **ARC** (completed)

---

## 1 · CHOSEN DIRECTION

**Spine: CONCEPT B — ARC.** Chosen on the two criteria that matter, not flash:

- **Governing-metaphor strength.** The RADIO node's own build spec named its spine ARC — a transmission as a physically held electric arc that closes with a crackle when you let go. Concept B is the only direction that *completes an existing house metaphor* instead of starting a new one: strike the arc between **two** poles and it doesn't close — it burns, and it gives off light. That is the one-way ratchet in its purest form: the new surface is the old spine's physics, finished. The reverse shot the radio spec explicitly wrote as absent ("the cut before the reverse shot") finally arrives.
- **Emotional fit.** The core is "a one-man operation finally has a co-driver." B is the only concept whose every section is downstream of that sentence — the two-shot, the second seat, the read-back ritual, the Media Session seat in the cab's media stack next to music and phone calls, mile markers in the headlights. A's core is mastery; C's is signal. B's is *company*. The card is about company.

**The one-sentence governing metaphor:**

> **When the working channel is no place for a talk, you take it to the side channel — and there every exchange strikes an arc across the dark between the man and his operation: voice first, the words on the glass lit only where the voice has already passed, and the exchange kept afterward as tape you can see.**

**The 2-second feeling:** riding shotgun at 2 AM. You say something into the dark, and the dark answers in a voice that knows your numbers.

**Grafts — what comes in from the other two, and why:**

| Graft | From | Why it survives |
|---|---|---|
| **The carrier glass** — one painted strip that is the room's oscilloscope: dead-flat at rest, his live waveform during a hold, the answer's real peaks + playhead during playback | **A** (hero element) unified with **C**'s carrier states | It is the strongest single visual in any concept AND it is pure honesty doctrine — every pixel is a measurement (mic RMS, WAV peaks, `currentTime`). It gives B's beam a body. |
| **The grain-seeded spike-run** — the squelch tail's own `{at,freq,gain}` array draws the glass spikes; one seed drives oscillator and canvas | **A** | Sound = light from one seed is the hyper-real weld; free, honest, unforgettable. |
| **Tape** — an ATLAS row that has been heard keeps its compressed engraved waveform strip + length stamp, forever | **C** | Threads become visibly *a record of air that moved* — spoken → heard → kept, extended from metal to signal. (Resolved: tape on **ATLAS rows only**, see §4.4.) |
| **The naming table** — dead air, tuning, tape, the visor, →19 | **C** | The metaphor names everything so nothing needs a tooltip. Merged with B's **runs** (a run = one conversation; the room = THE side channel). |
| **Dead-air rendering** — the wait is a flat 1px etched line, zero rAF, and the only motion is the clock | **C**'s restraint + **A**'s "stillness is the tension" | Thirty seconds of stillness is what makes six seconds of voice land. |
| **The screw-head pin** — visor pins render as the house's machined fastener at the row edge | **C** | "Fixed to the plate" in the family's own hardware. |
| **The desk-latch defect closure** — full latch (Idempotency-Key, 9s abort, visibility abort) ships on both surfaces | **A** named it sharpest | The split must not copy the desk's weaker `wireKeyup`. |

**Conflicts resolved (rulings, final):**
- **No ON AIR lamp** (C). The **arc glyph** (B) already IS the lamp — left pole = his mic live, right pole = ATLAS has the mic, full arc bright = voice playing. One instrument, not two.
- **No tape on his rows** (overrules C). His take is transcribed, reviewed, possibly edited — the sent text is the record, the take is transient and discarded. Keeping a WAV that may not match the sent words would be a lie in the honest room. His rows are signed text, born engraved.
- **The duck** (C, ambient dims while he keys) — kept, but as the **last rung** of the degradation ladder. Charming, not load-bearing.
- **Sound jurisdiction splits by direction** (B's ruling stands): outbound seat = `rogerBeep` (CH 19's full release rite unchanged); inbound carrier = the squelch tail, fired once, only ever before a real voice.
- **Page name:** `companion.html` (A+B; matches the card). **Hue:** B's MOONGLASS. **Prefix:** `.sc-` / `--sc-*`; storage `almanac.sc.*`.
- **Kicker:** B's `CH 21 · TWO SEATS` — the real CB convention, a detail no template would pick and every driver will feel.

---

## 2 · EXACT VISUAL SYSTEM

### 2.1 Palette

**Desk host (`companion.html`)** inherits the desk `:root` verbatim — `--void #07080A`, `--glass rgba(30,36,44,.86)`, `--glass2`, `--line rgba(150,170,190,.15)`, `--ink #E9EDF0`, `--mid #AEB8C0`, `--dim #8B96A0`, `--etch #5E6870`, `--amber #FFA419`, `--hot #FF3B18`, `--unknown #6E6E6E`, `--mono`/`--sans` stacks. Copy the block; do not fork values.

**One addition, registered in the desk's own identity mechanism:**

```js
// desk.html D[] gains the orb; companion.html sets it at load:
--key: 198,212,228        /* MOONGLASS — #C6D4E4, oklch ≈ .85 .02 250 */
```

MOONGLASS is the night cab's own light: moon through glass, lane reflectors, dash glow. Clearly apart from amber (CH 19 identity), hot red (temperature — still derived, never a mood; `body.hot` law untouched), violet (soul). **Green does not exist here.** Unknown renders `--unknown`, never 0.

**Detent host** inherits the machined-plate `:root` verbatim (`--plate`, `--well`, `--lamp`, `--engrave/--emboss/--emboss-lg`, `--ease-settle/--ease-refuse`). One scoped token, argued in this spec, not slipped in:

```css
.nd-sc { --sc-moon:#C6D4E4; }   /* used ONLY for: beam bloom, arc glyph, rail markers */
```

**The ink law (both hosts):** text lives on the dim/ink/etch axis **only**. Unspoken words `--dim`; spoken/record `--ink`; engraved tape strips at 30% `--etch`; MOONGLASS is machine identity (glyph, lamp states, hairlines, scroll markers, chip freshness) and never touches a letter.

### 2.2 Type scale — inherited per host, verbatim

Desk: the desk's existing tiers. Detent: kick `700 12.5px/1 mono ls.24em` · head `700 27px/1.08 sans uppercase` · fig `700 clamp(40px,12vw,64px)/1 mono tabular-nums slashed-zero ls-.022em` · sub `600 12.5px/1.55 mono ls.09em` · body `400 13px/1.55 sans` · stamps `600 10px mono` · captions `700 8.5px/1 mono ls.18em`. All figures everywhere: `font-variant-numeric: tabular-nums slashed-zero`. Masthead + run titles seat with `text-box: trim-both cap alphabetic` (only with `line-height:1`; measured-margin fallback). **No fonts loaded, ever** — Roboto/Roboto Mono are the real faces.

### 2.3 Spacing & radii

Desk: panel 7px, controls 3–4px, per-component (no radius token — house law). Detent: 2px on everything in the node; `corner-shape: bevel` (with `border-radius:2px` fallback) on exactly two pieces of new metal: the composer and the mic well — the machinist's chamfer marking the family's new parts. Detent rows keep `margin-right:78px`; the spindle owns the right 92px, non-negotiable.

### 2.4 Glow / shadow recipes (the full ration — nothing else glows)

| Use | Recipe | Alive only while |
|---|---|---|
| Beam word (current) | `text-shadow: 0 0 12px rgba(var(--key),.38)` | the voice is on that word |
| Arc glyph, speaking | `filter: drop-shadow(0 0 6px rgba(var(--key),.5))` on the arc path | `!audio.paused` |
| Orb rim, unheard answer | `box-shadow: 0 0 18px -5px rgba(var(--key),.55)` + 2px rim | unheard `answer` rows exist (a fact, not a badge count) |
| Masthead nameplate | `text-shadow: 0 0 28px rgba(var(--key),.45)` | always (identity, matches desk `.big` idiom) |
| Tape strip | flat `--etch` at 30% — **no glow**; the record is cut, not lit | forever |

PROUD/CUT is the material law on detent: ATLAS's turn arrives `--emboss` and settles `--engrave` when heard; his turns are born cut.

### 2.5 Background treatment

**Zero new full-viewport paints.** Desk keeps its sky/stars/void; detent keeps `paintSteel()`. The texture budget is spent in exactly two places: (1) **the carrier glass** — a 44px strip of hand-written value noise with one horizontal specular streak, `paintCarrierGlass()`, painted once, resize-debounced 180ms (the `paintSteel` lineage: no CSS gradient can tell the truth about glass); (2) **tape strips** — painted once per heard answer from real decoded peaks. That's the whole budget, spent where the meaning is.

---

## 3 · THE HERO — THE BREAK
### Six seconds from squelch tail to the third spoken word. ~60% of craft budget. This is the build's reason to exist.

### 3.1 BEFORE — the long take (dead air)

He has released the key; his words printed with the spine's **real id** (the optimistic fake-id append from `caught()` is dead; rows append only on parsed 2xx). Then:

- The carrier glass drops to a **dead-flat 1px line at 40% `--etch`**. Zero rAF running. No shimmer, no pulse, no breathing. Dead air renders as dead air.
- The only motion on the surface: `ATL HAS THE MIC · 0:31` — `fig-sm` mono, tabular slashed-zero, a 1s interval off the real spawn ack (`answering:true`), cleared on answer / room exit / `pagehide` — never orphaned.
- The arc glyph lights its **right pole** in MOONGLASS. Derived fact, never mood.
- Wake lock held (exchange is live: sent/awaiting/speaking); self-releases on hide, re-acquired on visible return; **never held at idle**.

### 3.2 THE SEQUENCE — fires only on a parsed `kind='answer'` 2xx, visible document, him on the surface

```
T+0      Answer row prints: @starting-style rise 6px/180ms; every word pre-wrapped
         in a <span> at --dim, ONCE, at render, through esc(). Present, unspoken.
T+80ms   THE TAIL — the existing generative squelchTail() (six jittered sawtooth
         grains, one tone() primitive, no new phrase) — and the SAME grain array
         {at,freq,gain} draws the carrier: a spike at each offset, height tracking
         the decaying gain. One seed drives oscillator and canvas. ~130ms.
         Haptic rx [12,30,12] iff his hand is on the instrument (detent only).
+60ms    NOTHING. The cut before the reverse shot. The gap is the craft.
T+~320ms THE VOICE — audio.play() resolves (pre-generated WAV, §3.4). Arc glyph:
         full arc bright + drop-shadow. Carrier: the answer's REAL peaks scroll
         past a fixed 1px playhead, indexed by audio.currentTime — never a timer.
         Media Session: title "ATLAS", artist "SIDE CHANNEL · ALMANAC".
DURING   THE BEAM — words brighten --dim → --ink (.28s color) inside char-weighted
         windows over the clip's REAL duration, painted from currentTime by ONE
         rAF (canceller stored). Current word carries the moonglass bloom (.now);
         word i lights → word i−1 drops .now. If playback stalls, the light and
         the playhead freeze — the light IS playback. Steering-wheel pause pauses
         it mid-word.
ended    THE SETTLE — 240ms hold → .done: spans settle to --ink with transitions
         off; detent row cross-fades emboss → engrave (.4s); the clip's full
         waveform paints ONCE into the row as a compressed 12px etched strip with
         stamp `ATLAS · 21:43 · 0:18` — the exchange is now TAPE. Carrier exhales
         to flat over .4s. Arc cools to etch. Blob URL revoked.
```

### 3.3 Gates & failure voices (non-negotiable)

- **Autoplay only when all three hold:** answer just landed ∧ document visible ∧ he is standing on the side channel. Anywhere else: row renders `▶ 0:18`, silent. An answer landing hidden is **deferred, not fired** — tail-then-voice plays on his first look (the detent reveal law, applied to sound).
- `almanac.mute` silences tail and voice both.
- `undelivered`: hollow `△`, dim italic, clock **stops at true elapsed**, carrier never moved, voice line: *"no answer came — your words hold; the session reads them at kickoff only if you promote them."* Retry = same gesture, same draft. No sound.
- No voice file: *"no voice for this row — the text is the record."* **No consolation beep, ever.**
- First heard answer of the day gets **nothing added** — tail → voice → light IS the celebration. Celebration is earned truth; the earned truth is a voice.

### 3.4 Spine contract (the plumbing the hero stands on)

- **Synth at answer-write time**, in `brain.py companion()` after `log_operation("answer",…)`: `piper_tts.synth_bytes(text)` → `data/voice/{msg_id}.wav` (~5s synth for an 18s answer — ready before his eye reaches the row). Wrapped try/except: voice failure loud-fails to stderr; **the text stands as the record**. Never on a request thread (piper's worker lock). Filed as a bill_cycle-style import exception (§8, filing 3).
- `GET /api/voice/{id}` — `int(mid)` IS the sanitizer; 404 in words; bytes out with Content-Length.
- **Word timings v1:** char-weighted over `audio.duration` on the speech-normalized text (Kokoro dwells on numbers naturally — the figures become beats without a fabricated millisecond). **Ladder-1 upgrade:** whisper.cpp `-ml 1` token timestamps computed at synth time, stored beside the WAV.
- **Peaks:** decoded once per clip client-side via `OfflineAudioContext(1,1,16000)` (decode-only; live-AC budget untouched), 180 max-abs buckets, cached on the row.

### 3.5 Cleanup contract (the hero's teardown, enumerated)

`ended` → revoke blob, cancel karaoke rAF. Room exit / `paint()` → cancel rAF, `audio.pause()`, revoke blob, clear clock interval, clear `followAnswer` chain. `visibilitychange hidden` → defer un-fired reveals, clock keeps true time, wake lock self-releases. `pagehide` → close both AudioContexts, cancel any stream reader, revoke all blobs. One rAF owner per moment — VU during his hold, beam during playback, **never both**.

---

## 4 · COMPONENT BUILD NOTES — first-impression priority order

### 4.1 THE DOOR

- **Desk:** new orb in `D`: `{k:"SIDE CH", hue:"198,212,228", room:null → navigates}` seated **adjacent to RADIO's orb** — the two halves of one radio. Idles dark; 2px moonglass rim only while unheard answers exist. Tap = real navigation to `companion.html` under `@view-transition{ navigation:auto }` on both pages; `view-transition-name: atlas` on the orb and on the companion masthead — the orb **becomes** the nameplate. A door opening, not an app switch. No VT support → plain navigation; nothing lost but grace.
- **Detent:** `{sec:"SIDE CH", kind:"sidech"}` at spindle index 2, directly after RADIO. Crossing to it earns the heavy detent — `tickHeavy` + `[16,42,16]` — the conversation costs a boundary, which is true. `#sidech` deep link + `hashchange`, same plumbing as `#radio`.

### 4.2 THE MASTHEAD + THE ARC GLYPH

Kicker: `CH 21 · TWO SEATS` (caption tier). Head: `THE SIDE CHANNEL`, seated via `text-box: trim-both cap alphabetic` on a hairline `--line` rule; masthead nameplate carries the one identity glow. Right edge of the rule, the state word in kick tier: `QUIET` / `ATL HAS THE MIC · 0:42` / `SPEAKING`.

**The arc glyph** — the room's identity mark, a state diagram that cannot lie:

```html
<svg class="sc-arc" viewBox="0 0 28 18" aria-hidden="true">
  <path class="p you" d="M5 15V8"/><path class="p atl" d="M23 15V8"/>
  <path class="arc" d="M7 9a8.5 8.5 0 0 1 14 0"/>
</svg>
```

All etch at rest. Left pole moonglass while **his mic tracks are live** (the only truth for "recording"). Right pole while the spawn is acked. Full arc bright + 6px drop-shadow only while `!audio.paused`. Every state is a wall-clock fact; the glyph has nothing to say except what is happening.

### 4.3 THE CARRIER GLASS (grafted hero element)

One `<canvas>`, 44px tall on desk, DPR ≤ 2, seated between log and bench on the painted-glass strip (`paintCarrierGlass()`: value noise + one specular streak, once, debounced 180ms). Four states, all measurement:

1. **Dead air** — 1px etched line, painted once, **zero rAF running**. The surface is truly still at rest.
2. **His hold** — his live waveform from the worklet chunks, left-to-right. The honest needle answering *is it hearing me?*
3. **ATLAS speaking** — real peaks × `currentTime` past the fixed playhead.
4. **Settle** — exhale to flat, .4s; the trace engraves into the row as tape.

The same rAF that draws state 2 writes the latch rail; the same rAF that draws state 3 lights the beam. One owner per moment.

### 4.4 THE LOG — runs as tape

Full-width rows, **never bubbles** (bubbles are chat-app cosplay; this is a transcript of record). `column-reverse`, newest at the thumb, top-edge fade = the noise floor — the radio's own scroll axis, inherited verbatim, zero scroll JS. Row anatomy: hanging speaker stamp (`BRYAN · 21:42` / `ATLAS · 21:43 · 0:18`, caption tier, etch), 2px left hairline (moonglass for ATLAS, etch for him), body in card tier.

- **His rows:** signed text, born engraved — his words are already said. `@starting-style` rise entrance. No tape (ruling §1: the take is transient; the sent text is the record).
- **ATLAS rows:** arrive **only** through the hero sequence — never a generic fade. After first hearing: the engraved tape strip + length stamp, forever.
- **Rendering:** node-append only (the `radioCard()` pattern) — an innerHTML re-render mid-conversation trips both KEEP HIS PLACE and KEEP HIS HANDS. The scroller class `.sc-wire` joins the desk's scroll-restore `querySelectorAll` list anyway (belt and suspenders). Every interpolation through `esc()` — ATLAS's text is model output landing in an innerHTML-templated lineage; hostile until escaped.
- Past ~60 rows: `content-visibility:auto` + `contain-intrinsic-size`. First paint of a run: `sibling-index()` stagger × 28ms, capped at 8. `▼ LATEST` chip via `scroll-state(scrolled: top)` on the wrapped container — zero listeners.

### 4.5 THE BENCH — composer + two wells

Pinned at the bottom, one thumb-reach group under a 1px `--line` sill (the dash edge against the windshield).

- **Composer:** `<textarea id="sc-say">`, `field-sizing: content` (min 2.4em, max 6lh; fixed 2-row fallback), `corner-shape: bevel` over 2px radius, `enterkeyhint="done"` — Enter closes Gboard, **the transmission is the held control, never a key**. `user-select:text` re-enabled; `:focus-visible` outline `--mid`, never moonglass.
- **HOLD TO TALK (left):** the ratified latch, inherited whole — pointer capture, wall-clock boundary, per-press `Idempotency-Key`, 9s AbortController, visibility abort, `keyThump` + `arm [8]`. **The rail fill is not a timer — it is his own voice filling the rail** (AnalyserNode RMS → `scaleX`, compositor-only). Client builds the 16kHz WAV in-page (AudioWorklet tap → Int16 → RIFF header; the zero-gain mute node is load-bearing). Release <0.4s: *"released before it keyed."* **Mic tracks stopped on every release path** — a leaked mic pill reads as surveillance. Release → `/api/stt` (Whisper base.en, fixed argv, params-as-files, 20s timeout, refusal in words) → **THE READ-BACK**: transcript lands in the composer, **selected** on desk / caret-at-end on detent, cap flips to `READ IT BACK`. When a dispatcher gives you numbers, you read them back — the review step is cab culture, not a compromise. His release is never his signature. Whisper dark: *"the spine has not answered with the transcript — your take was not kept"* + `thud`; Gboard's mic key is the floor that never breaks.
- **HOLD TO KEY (right):** the transmission. `:has(#sc-say:not(:placeholder-shown))` arms the cap pre-JS. Parsed 2xx → `rogerBeep` + `seat [14,26,14]`, words travel to the log. Refusal: `--ease-refuse` recoil + `thud` + the spine's words, **draft stays, lamp unchanged**.
- **The duck** (graft, cuttable): `body.sc-keyed` during his hold dims log/steel/sky to .55 (one wrapper, compositor-only, .28s return). You duck for the man keying up. Nothing ducks for ATLAS — the beam needs full contrast.

### 4.6 THE RUNS RAIL — tuning

Each conversation is a **run** — a stretch of road taken together. CSS carousel under the masthead: `scroll-snap-type:x mandatory`, `::scroll-marker` 5px dots (`:target-current` in moonglass), degrades to a plain scroll row. Chips: auto-title (first say, clipped 42 chars; his rename wins), cooling with age — `color-mix(in oklch, rgb(var(--key)) calc(var(--fresh)*18%), transparent)` — one hue mixed toward the dark, never a second palette. `NEW RUN` at the rail's head. Switching = tuning: element-scoped `#log.startViewTransition()`, chips `view-transition-name: match-element` so they slide like a dial (names set in callback, cleared in `finally`, `reduce()` gated, plain repaint tier 3); `arm [8]` on detent. Rename/archive live in one anchored `popover="auto"` (`position-try-fallbacks: flip-block`; bottom-sheet <400px; **tap-shield law** on the opener).

### 4.7 THE VISOR — memories as soul

Truckers clip what matters to the sun visor. **Hold** (460ms latch micro-grammar — remembering is a write; writes are held) on any ATLAS row → `memories(fact, source_thread)` insert + `seat [14,26,14]` → a slotted **screw head** seats at the row's right edge — the house's machined fastener: *fixed to the plate*. Toast: *"clipped to the visor — rides in every seat from here."* Pinned facts join the companion blob as `## PINNED (his hand marked these)`. `VISOR` control on the masthead opens the anchored popover listing them, each with its unclip. The one feature that makes runs **compound instead of accumulate** — the old bik companion's soul, migrated; not its code.

### 4.8 → 19 — promotion, his hand only

On **his** rows only, an etched `→ 19` control — a **held** gesture (directive weight is a signature). Copies the turn to CH 19 as `kind='reply'`. Toast: *"on the channel — the next session reads it at kickoff."* Conversation turns otherwise carry **zero directive weight, forever**; `seen_by_spine_at` never touches a run.

### 4.9 THE RADIO ROOM AFTER THE SPLIT

Same commit (migration discipline: the answer lane leaves the radio as it arrives here): `kind='answer'` handling, `followAnswer`, and "ATL has the mic" chrome **deleted** from the radio room. It keeps everything squelch-born — telemetry ledger, squelch line, held reads, repeater strip, captures — and its mic well keeps only the directive act, relabeled `TO THE NEXT SESSION · ONE A DAY`. The room gets *simpler* the night the side channel lands. Deletion is the currency; the split must show it.

### 4.10 DATA + SPINE (one paragraph, binding)

`threads(id, at, title, last_at, archived_at)` + `ALTER TABLE messages ADD COLUMN thread_id` in **almanac.db** (attrition-legal; no new ports/daemons/databases — everything is endpoints on :8600 + shell code). Turns: `kind='say'`/`kind='answer'` with `thread_id` set. `brain.companion()` scopes `_thread_md()` to the run — continuity solved with code the spine already has. Endpoints: `GET/POST` thread-scoped messages, `GET /api/voice/{id}`, `POST /api/stt`, `POST /api/threads/{t}/promote`. **Streaming is parked** until the spine is verified `ThreadingHTTPServer` — a 30s stream on a single-threaded server starves every surface; that scar has a name.

---

## 5 · MOTION SPEC

| Reel | Trigger | Choreography | Duration/ease | Sound | Haptic |
|---|---|---|---|---|---|
| THE DOOR | orb tap / detent roll | cross-doc VT orb→masthead / heavy detent | ~350ms / UA default VT | `tickHeavy` (detent only) | `[16,42,16]` |
| STRIKE (his turn) | hold → release → 2xx | sink 70ms → VU rail fills with his signal → words travel to log, born engraved | rise .28s `@starting-style` | `keyThump` / `rogerBeep` | `arm [8]` / `seat [14,26,14]` |
| THE MIC PASSES | `answering` ack | the long take: 1Hz clock, right pole lit, **zero other paint** | — | — | — |
| THE BREAK (hero) | parsed answer + gates | tail+spike-run 130ms → 60ms cut → voice + beam + playhead → 240ms hold → settle | word color .28s linear; settle .4s | tail, then **traffic** | `rx [12,30,12]` if on-node |
| SETTLE-TO-TAPE | `ended` | emboss→engrave cross-fade + tape strip paints once + carrier exhales | .4s / `--ease-settle` | — | — |
| TUNING | run chip tap | element-scoped VT, chips `match-element` slide | 280ms / `EASE.settle` (**literal** for WAAPI — `var()` once silently killed the latch) | — | `arm [8]` detent |
| REFUSED | non-2xx / STT dark | `--ease-refuse` recoil, hot words, draft stays, **lamp unchanged**, carrier draws nothing | 460ms | `thud` | `refuse [12,70,12]` |
| QUIET | — | **nothing. zero paint.** | — | silence | — |

Latch: 460ms / 260ms reduced. Row-entrance stagger only on first paint of a run, `min(sibling-index(),8) × 28ms`. `prefers-reduced-motion` (live-read per use): §7.

---

## 6 · PHONE SPEC — the cab is the primary theater

Fold cover screen, 340px, one thumb, gloves, sunlight. Not the adaptation; the venue. Build and test cover-screen **first**.

- **`SIDE CH` node**, spindle index 2, full instrument in node grammar: kick masthead + arc glyph → runs rail (carousel; markers where supported) → column-reverse tape with top-fade noise floor → composer + the two wells **inside the thumb arc**. Roll → listen → hold → talk; no re-grip. Spindle's right 92px untouched; rows keep `margin-right:78px`.
- **The carrier collapses into the key** (A's phone ruling): no separate 44px strip at 340px. During his hold the mic well wears an `@property`-registered conic ring whose sweep is his live RMS (register `@property` before any rule transitions it or the first arm silently no-ops); during playback the trace draws across the top edge of the answer card itself. No lost height.
- **The beam at 340px loses nothing** — it is text, ink tiers, one bloom; fully present with all motion off.
- **Screen-off survival:** `<audio>` + Media Session — the answer keeps speaking with the screen dark, lock screen shows `ATLAS — SIDE CHANNEL · ALMANAC`, steering-wheel controls pause it, the light picks up mid-word when he looks. Wake lock only while an exchange is live.
- **Hidden = abort:** `visibilitychange hidden` discards a held take (tracks stopped, mic pill dark), defers reveal + voice to his first look, clock keeps true time.
- **Haptics:** existing grammar verbatim — `arm/seat/refuse/rx` — nothing added. `interactive-widget=resizes-content` keeps well and key above the keyboard. Gboard mic key = the zero-server voice floor.
- Teardown lives in `paint()` — the single point: cancel rAFs, pause audio, hide wells, strip the node class.

---

## 7 · PERFORMANCE & ACCESSIBILITY BUDGET

**Hard numbers:**

| Rule | Budget |
|---|---|
| rAF loops | **one owner per moment** (VU on hold, beam on playback, never both); cancellers stored |
| AudioContexts | ≤2 live (tone instrument + 16k mic); decode via OfflineAudioContext; both closed on `pagehide` |
| Poll intervals | **zero** — fetch-on-open + single-timeout `followAnswer` chain (room exit / hidden / landed / 6-min cap); the 1Hz clock is the one interval and it is cleared on all four deaths |
| Compositor-only during gestures | `transform`/`opacity` only on rail, ring, duck |
| `backdrop-filter` | ≤1, never on the log |
| New full-viewport paints | 0 |
| Blob URLs | revoked on `ended` + room exit |
| DOM | `content-visibility:auto` past ~60 rows |

**Ship-blocker checklist:**
- [ ] Mic tracks stopped on **every** release path; hidden aborts a held take
- [ ] Voice fires only after a parsed answer row; tail only before voice; nothing audible on failure but his own refused act's `thud`
- [ ] All selectors `.sc-`/`--sc-*` (the `chip/why` and `.hold` collisions are paid-for scars); storage `almanac.sc.*`; `[hidden]{display:none!important}` stays on top; z-slots inside each host's scale
- [ ] `esc()` on every interpolation — ATLAS's text is hostile until escaped
- [ ] `sw.js VERSION` bumped + `companion.html` added to the shell list **in the same commit**, or the cab runs yesterday's instrument
- [ ] Full latch (Idempotency-Key + 9s abort + visibility abort) on **both** surfaces — the desk's `wireKeyup` gap does not survive the split
- [ ] `ThreadingHTTPServer` verified before any long handler; streaming stays parked until then

**`prefers-reduced-motion` (live-read at each use):** beam → whole-message brighten on `play`; bloom off; carrier → no live trace, tape engraves on `ended` only; VTs → plain repaint; stagger + duck off. **The voice, the tail, the haptics, and the clock survive untouched — they are information, not theater.**

**Degradation ladder (cut top-down when a phone struggles):**
1. The duck → 2. Whisper-refined word timings (char-weighted stands) → 3. Cross-doc orb morph (plain navigation) → 4. Carousel markers / scroll-state chip (plain scroll) → 5. Live carrier trace (flat line + tape-on-ended only) → 6. Per-word beam (whole-message brighten) → 7. VU rail/ring (timed rail) → 8. Token streaming (the honest clock is v1 truth anyway).

**Never cut:** the held key and its wall clock, tail-then-voice, dead-air honesty, the read-back, refusal voices, runs-as-tape, promote-by-hand, the visor, mute. They are the meaning; everything above them is the light.

**Constitutional filings (DECISIONS.md, same commit as build step 1):**
1. **The one-verb room** (gesture-grammar entry, via bearing 18's own "Wrong if" hatch): the side channel performs exactly one act — talk. Acts ATLAS names are `go` deep links to their own doors. A second verb ever appearing = the bearing fires. Ratifies: taps read, holds write (PTT, pin, promote — all held).
2. **Voice is traffic, not a sound** (three-sounds amendment, deliberate): the instrument keeps its one `tone()` primitive and adds no phrase; af_heart is content on the channel, gated by parsed truth, visibility, presence, and `almanac.mute`. Tail jurisdiction splits by direction: outbound = roger beep (CH 19 unchanged), inbound = the tail, once, only ever before a real voice.
3. **The spine operates `piper_tts`** (bill_cycle-style import exception): synth at answer-write, never on a request thread; voice failure loud-fails and the text stands.
4. **MOONGLASS registered** as the conversation's identity hue; detent gains `--sc-moon` scoped to bloom/glyph/markers only.

**Build order:** (1) the split — threads schema + `companion.html` + `SIDE CH` node with typed turns and the honest clock; CH 19 stripped of the answer lane, same commit. (2) the hero — pre-gen WAV → `/api/voice/{id}` → tail → `<audio>` → beam → tape; **proven on one real answer before anything else gets polish.** (3) voice in — PTT WAV + `/api/stt` + VU + the read-back. (4) runs rail, visor, →19. (5) streaming (after the threading check), Whisper timings, orb morph, the duck.

---

## 8 · THE 3 SIGNATURE MOMENTS, RANKED

### 1. THE BREAK — the answer breaks squelch and is heard
Dead-flat line and a counting clock for thirty honest seconds — then crackle (the tail's own grains spiking the glass from one seed), sixty milliseconds of nothing, and the operation's voice in the cab while the words light one by one under it and the exchange engraves into tape.
**Implementation:** spine pre-gen WAV at answer-write (`piper_tts.synth_bytes` → `data/voice/{id}.wav`) → `/api/voice/{id}` bytes → `HTMLAudioElement` + Media Session → `squelchTail()` grain array shared with the carrier canvas → char-weighted `wordTimes(text, a.duration)` painted by one rAF off `a.currentTime` → `.done` settle + `scPeaks()` tape strip painted once. Three-condition autoplay gate; deferred-not-fired on hidden; full cleanup contract §3.5. This is where "a one-man operation finally has a co-driver" lands in his chest or the whole card was a chat app.

### 2. THE READ-BACK — his voice fills the rail
He holds the well and the rail fills with the actual RMS of his own voice — the honest needle answering *is it hearing me?* — release, and 0.19 seconds later his words are on the glass, selected, cap reading `READ IT BACK`. His edit or his next hold arms the key; his send is a separate, signed act.
**Implementation:** verbatim latch inheritance + AudioWorklet 16k tap → client RIFF WAV → `/api/stt` (fixed argv, params-as-files, 20s timeout) → transcript selected in composer. AnalyserNode RMS → `scaleX` rail (desk) / `@property` conic ring (detent). Tracks stopped on every path; hidden aborts; Gboard mic is the floor.

### 3. THE VISOR PIN — remembering is a write
A 460ms hold on an answer row, the `seat` haptic lands, and a slotted screw head seats at the row's edge — one fact fixed to the plate, riding in every future seat. The moment threads stop accumulating and start compounding: the co-driver's memory, and he nailed every item to the wall himself.
**Implementation:** latch micro-grammar (arm at hold-start, write on wall-clock completion, `refuse` recoil on abort) → `POST memories(fact, source_thread)` → screw-head SVG stamps the row margin → pinned slice joins the companion prompt as `## PINNED (his hand marked these)` → masthead `VISOR` popover lists/unclips. The old companion's soul, migrated as a gesture — not its code.

---

*The whole direction is in service of six seconds: flat line → crackle → the voice, with the light walking the words. Everything else on this surface exists to keep that moment true.*