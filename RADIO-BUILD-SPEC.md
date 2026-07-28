# THE BUILD SPEC — RADIO NODE, `detent.html`
### Final art direction, unified. Lead designer's call.

---

## 1 · CHOSEN DIRECTION

**Spine: ARC** (Concept B), carrying the name **ARC** — before vacuum tubes a radio transmission was a physically held electric arc; you kept it alight while you spoke and it closed with a crackle when you let go. Held tension → release → quiet. Both the technology and the story have the same shape, and so does the latch.

**Governing metaphor (one sentence):** *One channel between a man and his operation, where silence is trust, static means arrival, and answering means holding a live arc — the log below is the trip sheet of everything the road ever said back.*

**The 2-second feeling:** reaching for the mic on the dash. One channel, squelch cranked, and when the tail crackles off your own machine you know — *your voice made it out*.

**Why Arc wins the spine.** Three reasons, none of them flash:
1. **It resolves the audio conflict in the house's favor.** Instrument (A) proposes a new noise-buffer audio path; the house law is explicit — *"a squelch-tail crackle must be built from this one primitive"* and *"three sounds, total, for the life of the product."* Arc's tone()-grain tail obeys standing doctrine. When a concept and the constitution disagree, the constitution wins.
2. **It introduces the one law that makes the whole node self-explanatory: proud/cut.** Embossed = stands off the plate = wants your hand. Engraved = cut into the plate = record at rest. That single material rule organizes every card, every state, the fig, the cap — and it closes the gap the archaeology named: the plate has never *listened* before. A message arriving proud and settling to engraved when his eyes have read it is the first inbound truth this instrument has ever expressed, argued in metal.
3. **Its structural thesis — three reels and nothing between — is the emotional core stated as a motion budget.** Arrival. Answer. Quiet. Reel three (zero paint at rest) is what makes the other two land, and it is also the battery answer.

**Grafts:**

| From | What | Why |
|---|---|---|
| **A — Instrument** | The stage discipline (`setFig` honest-quiet seating with `text-box: trim-both`), the tabular motion/sound/haptic matrix format, the exact read-receipt arming code, the composer's full trap-list (`enterkeyhint`, `user-select`, `:focus-visible`, spindle margin), the degradation ladder's exact cut order | A's engineering rigor is the best of the three; Arc's poetry gets built on A's checklists |
| **C — Live** | The **signature stamp**, demoted and disciplined: a tiny deterministic tick-glyph cut from the message's own text, `.card.tx` rows only, cached, `--etch`, licensed as *a mark, not a reading* | The one genuinely new idea in C that survives the doctrine — a permanent, unrepeatable cut per transmission, ~30 lines, zero loops. Kept optional (ladder position 1) |
| **C — Live** | `KEYED` as the kicker state during the hold | True for exactly as long as his thumb makes it true — free honesty |

**Cuts, with reasons:**
- **C's carrier strip** — CUT. It is a second truth-display competing with the rail (the rail IS the truth of the hold; two gauges for one truth is instrument-panel malpractice), and it costs vertical space on the 340px cover screen exactly where the keyboard needs it.
- **C's text-hash-seeded squelch tail** — CUT. Determinism nobody can perceive is complexity without meaning. Arc's jittered grains already guarantee no two tails identical.
- **A's noise-buffer audio path** — CUT from primary; retained only as the documented fallback if the grain-burst A/Bs thin on the Fold's speaker (§5).
- **A's `CH 1`** — CUT for Arc's **`CH 19`** — the channel a trucker's radio actually lives on. A detail no designer would pick and every driver will feel.
- **Static veil canvas** (all three had it optional) — CUT from the spec entirely. The glyph resolve alone is the arrival; the veil is a second effect on the same beat. Simpler is truer.

---

## 2 · EXACT VISUAL SYSTEM

**Zero new hues. Zero new tokens.** The node is built entirely from `detent.html:49-60`. The design move is *placement*, plus one new material law.

### Palette (house tokens, jobs restated for this node)
| Token | Hex | Job on RADIO |
|---|---|---|
| `--plate` / `--plate-hi` / `--plate-lo` | `#2A2F2D` / `#3A403D` / `#1B1F1E` | untouched steel |
| `--well` / log glass | `#171A19` | the log window face, the squelch line groove |
| composer face | `#0E1110` | the mic well — deepest cut on the plate |
| card face | `linear-gradient(180deg,#313735,#232827)` | every message card |
| `--ink` `#E6E9E7` | unread titles (embossed), his sent words, `KEY UP` armed cap |
| `--mid` `#B4BBB7` | message body prose, `.tx` right edge, composer focus outline |
| `--dim` `#98A09C` | `QUIET`, held traffic, empty-state voice |
| `--etch` `#6B726E` | timestamps, squelch caption, signature stamps, settled amber edges |
| `--lamp` `#FFA419` | broke-squelch left edge, `▲`, unread fig — **only** via served counts |
| `--hot` `#FF6A2A` | refusal words only |
| `--red` `#C4271A` | refused lever edge only |
| — | green | **does not exist** |

### The new material law — PROUD / CUT
- **Embossed** (`--emboss` / `--emboss-lg`): wants your hand. Unread message titles, the `UNREAD` fig, the armed `KEY UP` cap.
- **Engraved** (`--engrave`): record at rest. Read messages, his transmissions, `QUIET`, timestamps, all captions.
- Transition between them is animatable (both are two-shadow lists) and is itself a state change: **read = emboss settles to engrave** (§4, log).

### Type (house tiers, no additions; no serif exists on the plate)
| Use | Spec |
|---|---|
| Kicker `CH 19 · ONE CHANNEL` | `700 12.5px/1 var(--mono)`, ls `.24em`, `--dim`, engrave |
| Head `THE CHANNEL` | `700 27px/1.08 var(--sans)`, uppercase, emboss-lg |
| Fig `1 UNREAD` | `700 clamp(40px,12vw,64px)/1 var(--mono)`, `tabular-nums slashed-zero`, emboss-lg |
| Fig-quiet `QUIET` | same slot, sub-tier size, `--dim`, **engraved**, ls `.12em`, seated `text-box: trim-both cap alphabetic` |
| Card body | `400 13px/1.55 var(--sans)`, `--mid`; `b{color:var(--ink)}` |
| Stamps/marks | `600 10px var(--mono)`, `tabular-nums`, `--etch` |
| Squelch caption | `700 8.5px/1 var(--mono)`, ls `.18em`, `--etch` |

### Geometry & depth
- Radii: **2px everywhere** (cards, composer, squelch line); composer additionally `corner-shape: bevel` — the node's one piece of new metal, a machinist's chamfer, `border-radius: 2px` fallback.
- `margin-right: 78px` on every content row — the spindle owns the right 92px. Non-negotiable.
- Depth = engrave/emboss + the house inset seams only. The only glows on the plate remain the lamp and `.rung.on i`.
- Background: the steel canvas, untouched, never repainted.

---

## 3 · THE HERO — KEY UP: a transmission held under a live arc

Built as a **delta on the existing latch** (`leverDown`/`seat`/`caught`/`refuse`, detent.html:863–964). No new mechanism. It thereby inherits, for free and untouchable: the four wall-clock guards (`L.held`, `dataset.state`, `visibilityState`, `performance.now() - L.t0 < DUR - 16`), the per-press `Idempotency-Key` (a double-keyed mic never double-sends), the 9000ms `AbortController`, the visibilitychange abort, and the $1,500 scar's whole legal system.

**Exact deltas:**

1. **Gate widened** (`leverDown`, :868): add `n.kind === "radio"`, with the extra condition `draft.length > 0 && State.source === "live"`.
2. **Arm tell (CSS, pre-JS):**
```css
.plate:has(#mic:not(:placeholder-shown)) .lever:not([disabled]) .cap{ color:var(--ink); }
```
Cap engraves `KEY UP`; empty draft = disabled lever = a mic with nothing to say. No pulse, no glow. Equipment waits.
3. **Press:** existing 2px sink + shadow collapse. New phrase from the house instrument: `keyThump = () => tone(95, 45, .08, "sine")` + `HAPTIC.arm [8]`. Kicker flips to **`KEYED`** for exactly the duration of the hold. Rail travels `scaleX(0→1)`, literal `EASE.settle`, 460ms (260 reduced). **Nothing else moves** — no VU needle, no modulation shimmer. Fabricated wiggle is the wolf-crying this surface exists to kill.
4. **Boundary:** wall clock decides (never `animation.finished`). `seat()` gains a third branch: `POST /api/messages`, body `{text: draft}`, `L.key` as `Idempotency-Key`, same abort/parse discipline as the two money endpoints. Cap → `TRANSMITTING`; existing 1.012 breathing rail while the network is out.
5. **Release payoff — parsed 2xx only, ~700ms strict order:**
   1. **Roger beep** — `tone(2000, 70, .045, "sine")` (70ms)
   2. **60ms of nothing** — the cut before the reverse shot
   3. **Squelch tail** — §5 grain burst (~130ms) + `HAPTIC.seat [14,26,14]`
   4. **The words travel** — element-scoped `#work.startViewTransition()` (Chrome 147): draft glyphs lift from the mic well and land inside the new `.card.tx` row, 280ms, `EASE.settle`. Names set only inside the callback, cleared in `finally` (a leaked `viewTransitionName` kills every future VT). Fallback: skip straight to the `@starting-style` print — never a document-level VT (it would freeze the lever mid-payoff).
   5. Cap engraves `SENT` (900ms), composer clears — its contents *physically went somewhere* — `SENT hh:mm` etches in.
6. **Refuse:** existing machinery verbatim — `thud()`, `[12,70,12]`, `data-state="refused"` red edge, `--ease-refuse` recoil. Voice reworded: *"the channel didn't take it — nothing was sent."* Draft stays in the well. The lamp does not change.
7. **Early release** (2600ms, out loud): *"released before it keyed — nothing was sent. the mic is held, not tapped."*

**Cleanup contract:** no new timers beyond the grain-burst timeouts (module array `T`, cleared on `pagehide`); VT names cleared in `finally`; the radio branch never bypasses the visibility guards; `L.key` cleared only in `caught()` exactly as today.

---

## 4 · COMPONENT-BY-COMPONENT BUILD NOTES
*(first-impression priority order)*

### 4.1 The log — the channel as a place with physics
`.work` gains a radio mode:
```css
.work.radio{ display:flex; flex-direction:column-reverse; gap:9px;
  -webkit-mask-image:linear-gradient(0deg,#000 0,#000 calc(100% - 26px),transparent 100%);
          mask-image:linear-gradient(0deg,#000 0,#000 calc(100% - 26px),transparent 100%); }
```
Newest message = first DOM child = bottom of the glass, near his thumb; `scrollTop 0` is "latest" and browser scroll-anchoring pins it with **zero scroll JS**. The mask fade flips to the **top** — and this is the layout's masterstroke, kept from Arc verbatim: **the scroll axis is the squelch axis**. Down near his hand: today's spoken traffic, brightest. Up: older, dimmer, receding into the fade. *The fade is the noise floor.* Re-measure `max-height` so a sliver of the older card shows under the top fade.

**Card grammar — two voices, one steel, never bubbles:**
- **`.card.rx`** (OP, broke squelch, `kind:"pushed"`): amber left edge `inset 2px 0 0 var(--lamp)` (the `.card.now` idiom), `▲` in `--lamp`, title `--ink` **embossed** — a voice standing proud of the plate. Body `--sans 13/1.55` `--mid` engraved.
- **The read settle** — after the read receipt fires (below): emboss cross-fades to engrave and the amber edge cools to `--etch`, both over `.4s` (the lamp's own duration). *Spoken → heard → kept.* Text-shadow interpolates cleanly (two shadows each side). This is the plate's first inbound truth and costs one class toggle.
- **`.card.held`** (`kind:"held"`): no edge, `--dim`, italic at `.62`, `△` hollow for `undelivered`. Under the squelch line only.
- **`.card.tx`** (Bryan): right edge `inset -2px 0 0 var(--mid)`, body `--ink` engraved — his words are already record the moment they land — `SENT hh:mm` mono `--etch` `tabular-nums`, plus the **signature stamp** (§4.6).
- Timestamps: `Intl.RelativeTimeFormat("en",{numeric:"auto"})` — "yesterday," "2 hr. ago."
- Every row prints via `@starting-style` (`opacity 0, translate 0 6px`, `.28s` — CSS transitions resolve var easings; use the asymmetry WAAPI denies).
- Every interpolation through `esc()`. The page is innerHTML-templated.

### 4.2 The squelch line — the threshold made of metal
Content in the scroll, not chrome — history physically sits below it:
```css
.sqline{ position:relative; flex:0 0 auto; height:4px; margin:4px 0; border-radius:2px;
  background:linear-gradient(180deg,#171A19,#232827);
  box-shadow:inset 0 1px 2px rgba(0,0,0,.7), 0 1px 0 rgba(255,255,255,.07); }
.sqline::after{ content:"SQUELCH · " attr(data-held) " HELD BELOW"; position:absolute;
  right:0; top:-13px; font:700 8.5px/1 var(--mono); letter-spacing:.18em; color:var(--etch); }
```
`data-held` from the already-fetched `GET /api/push/held` (`State.held`, :984) — served truth. The TODAY node's held-back block **migrates here**, under the line, in dim type — *suppressed is not lost, it is HERE*, the PR's ¶2 for fifteen lines of CSS. Above it: an `OLDER TRAFFIC` `<details>` fold (`::details-content` + `interpolate-size: allow-keywords`; degrades to plain open). When scrolled deep, a pure-CSS `scroll-state(scrolled)` chip inks `▼ LATEST` on the line — zero listeners; degrade to nothing.

### 4.3 The stage
- `kick`: **`CH 19 · ONE CHANNEL`**. During a hold: **`KEYED`**.
- `head`: **`THE CHANNEL`**.
- `fig`: `setFig("1"," UNREAD")` when the spine says so — embossed, proud, it wants his hand. When zero: the word **`QUIET`** — `--dim`, **engraved**, ls `.12em`, seated with `text-box: trim-both cap alphabetic`. Never a `0` — a radio doesn't count silence. Never `--unknown` — nothing is unguessed; the channel is simply well.
- `sub`: `THE OPERATION MAY KEY UP ONCE A DAY · EVERYTHING QUIETER PRINTS BELOW`.
- Empty log state, desk's voice verbatim in `--dim` sans: *"a quiet channel — nothing said yet. the operation keys up through the budget; you key up below."*
- **The lamp is not overloaded**: amber lights only via the served standings-counts path. No client-side `unread > 0 → lamp` shortcut, ever.

### 4.4 Incoming — breaking squelch
A genuinely new OP message does not appear; **the channel opens**. The soulwire scramble, machined: run in `--mono` (identical advance widths, zero reflow), glyph pool `▓▒░#&%$@` dense→sparse, gate opening left→right, `420 + min(500, n*10)`ms, one `textContent` write per frame, one rAF with a **stored canceller** (`rxCancel`) invoked at the top of `paint()`, in `pagehide`, and on hidden. Then — 120ms after the last glyph seats — the amber edge inks in over `.4s`. **Light follows voice**, the way a CB's RX lamp trails audio by a breath.

Four ship-blocking laws:
1. Once per message **ever** — in-memory `revealed` Set of ids; server unread flag is the truth of "new."
2. Only the **newest** unrevealed message animates; older unseen print instantly. One rAF, ever.
3. Canceller stored and fired in `paint()` / `pagehide` / hidden.
4. Hidden = **deferred**, not fired — the resolve plays the first time he actually looks. The reveal is the reward for looking.

Haptic `[12,30,12]` only if actively on the node (Chrome's gesture gate enforces the doctrine anyway). **No sound on arrival — ever.** Sound belongs to his hands; the out-of-app voice is the push notification (`requireInteraction: true`).

### 4.5 The mic well (composer)
- Face `#0E1110`, `1px solid #3A403D`, `r:2px` + `corner-shape: bevel`. Mono face — detent's inputs are mono.
- `user-select: text` locally reverted (body kills it globally).
- `enterkeyhint="done"` — **never** `"send"`. Enter closes Gboard; the transmission is the held lever; a keyboard send key would quietly delete the hero.
- `:focus-visible{ outline: 2px solid var(--mid); outline-offset: 2px }` — `--mid`, never `--lamp`: amber is the machine asking for his hand, not his hand's own reflection. (No focus rule exists in the file today; an input demands one.)
- Micro caption etched above: `THE OPERATION KEYS UP THROUGH THE BUDGET · YOU KEY UP HERE`.
- Entirely inside the 78px spindle margin — the zone eats pointer events on the right 92px.
- Already excluded from the global keydown handler by the `e.target.tagName === "INPUT"` guard (:767).

### 4.6 The signature stamp *(graft from Live — optional, ladder position 1)*
On `.card.tx` rows only: a ~64×10px deterministic tick-glyph — `textToWave(str)`: codepoint hash → 0..1 amplitude, neighbor-smoothed, drawn once as ruled vertical ticks in `--etch` on a cached per-message-id canvas. A permanent, unrepeatable cut made from his own sentence. **Licensed as a mark, not a reading** — it states nothing, measures nothing, never animates. ~30 lines, zero loops, painted once ever per message.

### 4.7 Spindle, ladder, deep link
- `buildNodes()`: `{sec:"RADIO", kind:"radio", first:true}` at **index 1** — directly after TODAY's hard stop, before WORK. Honors desk's ruling ("radio first") inside detent's law ("today is position zero"). Crossing to RADIO earns the heavy detent — `tickHeavy` + `[16,42,16]` — automatically. The channel costs a boundary, which is true.
- `SECS` gains `"RADIO"`; ladder self-builds.
- **`#radio` deep link is mandatory**: bootstrap handler + `hashchange` listener (a live window gets hash-only changes; boot never re-runs). The spindle **swings** to RADIO through `landOn()` — heavy tick, heavy haptic, real travel — then the waiting message plays its resolve. Shade → swing → static → words: a three-second film that starts in his pocket. Without it the push lands on TODAY and the story breaks.
- **Read receipts obey the latch doctrine** — rendered is not read; his eyes are:
```js
let readT = 0;
function armRead(ids){
  clearTimeout(readT);
  readT = setTimeout(() => {
    if(document.visibilityState !== "visible") return;
    if(!NODES[spin.pos] || NODES[spin.pos].kind !== "radio") return;
    fetch(url("/api/messages/read"), { method:"POST",
      headers:hdr({"Content-Type":"application/json"}), body:JSON.stringify({ids}) }).catch(()=>{});
  }, 900);
}
```
Cleared in `paint()` on node change and in `pagehide`. Success triggers the read-settle (§4.1).

### 4.8 Data
`grab("/api/messages")` joins the boot `load()` fan-out, non-fatal (:982–984 pattern). Refresh = one `visibilitychange → visible → load(true)` guard. **No `setInterval` exists and none is added.** Contract: `GET /api/messages → {messages:[{at, sender, kind, title, body}], unread:N}`; `POST /api/messages {text}`; `POST /api/messages/read {ids}`. `sw.js` `VERSION` bumped to `almanac-shell-v15` or the phone serves yesterday's plate.

---

## 5 · MOTION SPEC — three reels, nothing between

| Reel | Trigger | Choreography | Sound | Haptic |
|---|---|---|---|---|
| — | roll onto RADIO | heavy detent (existing) | `tickHeavy` | `[16,42,16]` |
| — | draft non-empty | cap ink lifts, CSS-only | — | — |
| **ANSWER** | thumb down | sink 70ms → rail `scaleX` 460ms `EASE.settle` (260 reduced), kicker `KEYED` | `keyThump` 95Hz | `arm [8]` |
| | in flight | 1.012 breathing rail, cap `TRANSMITTING` | — | — |
| | **2xx** | roger 70ms → 60ms cut → tail 130ms → VT glyph travel 280ms `EASE.settle` → `SENT` 900ms | roger + tail | `seat [14,26,14]` |
| | refused | `--ease-refuse` recoil, red edge, `--hot` words, draft stays | `thud` | `refuse [12,70,12]` |
| | early release | words only, 2600ms | — | — |
| **ARRIVAL** | truth moved, visible, on-look | glyph resolve L→R 420–920ms → 120ms beat → amber edge inks .4s → on read: emboss settles to engrave + edge cools, .4s | **none** | `[12,30,12]` if on node |
| **QUIET** | — | **nothing. zero paint.** | silence | — |

All WAAPI easings **literal** (`EASE.settle` / `EASE.refuse` — the probe exists because `var()` in WAAPI throws and once silently killed the latch). Row entrances uniform `.28s @starting-style`; no stagger theatrics. No confetti anywhere in the house.

**Sound — static made of the house's own voice.** The node adds no new instrument, only three phrases from the existing one:
```js
const keyThump  = () => tone(95, 45, .08, "sine");     // mic keyed — felt, not heard
const rogerBeep = () => tone(2000, 70, .045, "sine");  // end of transmission
function squelchTail(){                                 // the channel closing
  for(let i = 0; i < 6; i++)
    T.push(setTimeout(() => tone(1400 + Math.random()*1600,  // tinny voice band
                                 14 + Math.random()*10,      // 14–24ms grains
                                 .05 * (1 - i/6),            // dying gain
                                 "sawtooth", .6),
                      i*18 + Math.random()*8));              // jitter IS the texture
}
```
No two tails identical — like the real thing. Grain timeouts in module array `T`, cleared on `pagehide`. Every `tone()` survives null/muted context; the existing suspend/close lifecycle is untouched. **Documented fallback** (only if the grains A/B thin on the Fold's speaker): Instrument's one-shot bandpassed noise buffer (1s lazy buffer, bandpass 1.8kHz Q0.8, hard `stop()` at +140ms) — try the primitive first; sound scarcity is law. **The tail fires only after a parsed 2xx.** No sound ever fires on arrival.

---

## 6 · PHONE SPEC — the cab test

Daily device: Galaxy Fold, often the **~340px cover screen**, one thumb, possibly parked at a dock. Real rendered faces: Roboto / Roboto Mono.

- Viewport meta gains `interactive-widget=resizes-content`: Gboard resizes the layout viewport; the flex column redistributes (*"height changes redistribute instead of piling up"* is already the plate's law); mic well + lever stay visible above the keyboard. `visualViewport` clamp only as fallback. **Test the cover screen first.**
- **The whole scene lives in the thumb's arc:** newest message resting at the bottom (column-reverse anchoring, zero JS), mic well below it, lever below that. Roll → read → dictate → hold. No re-grip. History is up, where a deliberate second gesture goes.
- **Voice-first by construction:** a real `<input>` gets Gboard's mic key free. Bryan dictates; typing in a truck is the failure mode.
- Log is `flex: 0 1 auto; min-height: 0` — keyboard-open shrinks the glass, never the lever.
- `margin-right: 78px` on strip-to-strip everything; the spindle owns its steel.
- Glancing away mid-anything is safe: hold aborts on hidden, resolve defers, read refuses — the only acceptable behavior for a device used near a steering wheel.
- Everything the node *means* — held key, squelch line, held-below count, refusal voice, proud/cut — is text and geometry, fully present at 340px with all motion off.
- Desktop (>640px): existing 430×min(900px,96svh) frame; nothing else changes.

---

## 7 · PERFORMANCE & ACCESSIBILITY BUDGET

**Cleanup checklist (ship-blockers):**
- [ ] rAF: page keeps its one owner; scramble owns exactly one more, time-capped ≤920ms, canceller stored + invoked in `paint()`, `pagehide`, hidden.
- [ ] Audio: all `tone()`-derived one-shots; grain timeout array cleared on `pagehide`; `almanac.mute` respected via existing null-context guard; suspend/close lifecycle untouched.
- [ ] VT: scoped to `#work` (steel never snapshotted, spindle stays live); names set inside callback, cleared in `finally`; never two concurrently; `reduce()` gated **before** snapshot.
- [ ] Wall-clock law everywhere: hold aborts on hidden (existing), resolve defers, read-receipt refuses, nothing fires from a hidden document.
- [ ] Signature/stamp canvases painted once, cached per message id; never per-frame; never `feTurbulence`.
- [ ] All new selectors scoped `.radio` / `.sqline` / `.card.rx|.tx|.held`; one `paint()` branch, one `buildNodes()` line, one widened lever gate, one `seat()` branch, `#radio` + `hashchange` in bootstrap; lever/spindle/latch semantics untouched for every other node; `desk.html` untouched; `sw.js` VERSION bumped.
- [ ] Every interpolation through `esc()`; localStorage additions (if any) use dotted keys.
- [ ] No spinner, no skeleton, no fabricated zero — honest-empty voice throughout.

**prefers-reduced-motion (surgical, per house reading — `reduce()` live-read each use):** scramble → instant print; VT → skip to `@starting-style`; hold keeps its 260ms compressed truth; read-settle happens instantly (class swap, no transition); haptics, sounds, voice lines, and stamps survive — they are information, not theater.

**Degradation ladder (cut in order):**
1. Signature stamps
2. `scroll-state` chip / `OLDER TRAFFIC` interpolated fold (fall to plain `<details>`)
3. VT glyph travel (fall to `@starting-style` print)
4. Glyph resolve (fall to instant print + amber ink-in)
5. Roger beep (keep the tail)

**Never cut:** the held key, the wall clock, the refusal voice, the squelch line, the held-below count, the tail, proud/cut. They are the meaning.

**Header constitution paragraph** (this codebase argues in comments; ship it verbatim):

> RADIO IS A RECEIVER WITH A DISCIPLINE. The operation may key up once a day;
> everything quieter prints under a machined squelch line that is content, not
> chrome — suppressed is not lost, it is HERE, in dim type, which is the whole
> bargain. Squelch is structural and lives on the spine; this page only records.
> KEY UP is the latch wearing its most natural costume — press-to-talk IS
> press-and-hold — so it inherits the wall clock, the idempotent key, and the
> $1,500 scar without a line of new law. The tail crackles only after a parsed
> 2xx: the one sound a cab already trusts, welded to the only moment it is true.
> Everything that wants his hand stands proud of the plate; everything at rest
> is cut into it. And when nothing is happening, NOTHING HAPPENS — a quiet
> channel rendered with dignity is this instrument's best reading.

---

## 8 · THE 3 SIGNATURE MOMENTS, RANKED

**1. THE RELEASE — roger beep → cut → squelch tail → his words landing engraved in the record.**
*Implementation:* latch delta (§3) + tone()-grain tail (§5) + element-scoped VT on `#work` (§3.5.4). The most emotionally loaded sound in a trucker's acoustic memory, causally welded to a parsed 2xx — it cannot play early, cannot play hidden, cannot play on failure, plays at most a handful of times a day. Twenty years of cab instinct says that crackle means *your voice made it out* — and here, for the first time on his phone, it only ever tells the truth. For a man whose doctrine is that celebration must be earned, this is his own doctrine, audible. ~60% of craft budget.

**2. THE COLD OPEN — notification tap → spindle swings → static breaks squelch → words engrave → light follows voice.**
*Implementation:* `#radio` hash + `hashchange` handler through `landOn()` (heavy tick, real travel), then the deferred glyph resolve (§4.4) with the 120ms-trailing amber ink-in. Shade → swing → static → words: a three-second film starting in his pocket, and the deep link is required plumbing anyway — the hero beat is free. ~30% of craft budget.

**3. THE SETTLE — proud/cut as a living law: the read message's emboss relaxing into engraving as the amber edge cools, over the lamp's own .4s.**
*Implementation:* wall-clock read receipt (§4.7) → one class toggle → animatable text-shadow + box-shadow cross-fade (§4.1). Nearly free, and it is the plate's first inbound truth: spoken → heard → kept. Together with the squelch line and the noise-floor scroll, it makes the node feel inevitable — the release is the moment he shows someone else; the settle is the reason it feels like *his*.

---

**Build order:** latch extension + seat branch → log window + card grammar + squelch line (held-back migration off TODAY) → arrival resolve → sounds → `#radio` swing → read-settle → VT travel → fold/chip → signature stamps. The hero is load-bearing from commit one; everything after it is amplification.