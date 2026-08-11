I have everything — house docs, live code, spine plumbing, old-companion schema, piper_tts interface, and current-platform research. Here is the playbook.

---

# THE COMPANION SPLIT — BLEEDING-EDGE TECHNIQUES PLAYBOOK
### Researched August 2026 against the live web platform. Grounded in `desk.html` (radio room, lines 2076–2171 / 3919–4005), `detent.html` + RADIO-BUILD-SPEC.md, `spine/radio.py`, `spine/brain.py` (companion seat: gemma4:12b, think=False, num_predict=768 — answers land in ~30s), `bik/piper_tts.py` (`synth_bytes()` → WAV bytes, Kokoro af_heart, speech-normalization already built), `bik/companion/db.py` (sessions/messages/memories — the soul to migrate), and DECISIONS.md through 08-10.

---

## 0 · THE CALL FIRST — metaphor before CSS

### The governing metaphor, one sentence

> **CH 19 stays the working channel — squelch cranked, the ledger's human face; when Bryan and ATLAS want to actually talk, they do what truckers have always done when the working channel is no place for a conversation: take it to a side channel — and on the side channel the answer is a voice in the cab, not a line in a log.**

"Take it to 21" is a real CB convention: 19 is for traffic, and a one-on-one moves off it. The split is therefore not an app decision — it is the radio's own etiquette, which means it needs no explaining to the one user it serves. It also names everything: threads are **side channels**, opening one is **tuning**, the conversation surface is **the side channel**, returning is **back to 19**.

### The bearing-18 resolution, head-on

Bearing 18 bans a general interaction surface as a ROOM because consoles enumerate many acts (Mission Control's 8 tabs). But the conversation instrument enumerates **exactly one act: talk**. A room that IS one act is not a console — it is a **door**, and the docket precedent ("acts stay at their doors") is satisfied, not violated. The test that keeps it honest forever:

> **If the side channel ever grows a second verb — a settle, a card move, an arm control, a dashboard strip — it has become a console and the bearing fires.** Anything ATLAS says that needs an act gets a deep link to that act's own door (the docket's `go` idiom, already built). ATLAS observes and advises; the instrument transmits and plays back. One verb, forever.

### What the radio room KEEPS (its born identity, untouched)

- The telemetry ledger: `pushed / held / undelivered` rows, the squelch line, held-below traffic, the brain's held reads — "the thread IS the human face of the push ledger."
- The repeater strip (glasses lane) and capture rows — infrastructure telemetry.
- **The once-a-day directive key-up to the SESSION** (`kind='reply'`, `seen_by_spine_at` lane). This is a message to the *operation's next working session*, budgeted and disciplined — a different speech act from a conversation, and it stays under squelch discipline where it was born.

### What MOVES

- `kind='answer'` rows (born tonight) and the live-dialogue behavior (`followAnswer`, "ATLAS has the mic") migrate to the side channel. The radio room goes back to being a receiver with a discipline; the mic well it keeps is the *directive* mic only, its placeholder reworded so the two speech acts can never be confused.

### Surfaces

- **desk.html**: a new orb (hue = identity law; recommendation below) → the side-channel room. Optionally a separate `companion.html` page — Bryan's own words were "split the page," and same-origin **cross-document view transitions** make a real second page feel like one instrument (§6.1).
- **detent.html**: one more spindle node, `SIDE CH`, directly after RADIO — built as a delta on the RADIO node it already has (same card grammar, same latch, same tone() instrument).

### The one-sentence data ruling

Threads live in `almanac.db` (attrition-legal: new tables → almanac.db). `messages` gains `thread_id` (NULL = the channel; set = a side channel); conversation turns are `kind='say'` (his) / `kind='answer'` (ATLAS); the old companion's **memories** soul migrates as a `pin` gesture (§5.4). Directive weight NEVER attaches to a conversation turn — promotion to the channel is his explicit hand (the capture-lane C1 precedent, reused verbatim).

---

## 1 · THE HERO — THE ANSWER BREAKS SQUELCH AND IS **HEARD**

> Signature moment, ~60% of craft budget: his release → the honest wait → the squelch tail crackles → af_heart speaks the answer through the cab — and the words on the glass **brighten one by one as the voice reaches them**. Light follows voice — the detent's own arrival law, extended from a lamp to language. Every beat below is causally welded to a real event; nothing in this sequence can fire early, fire hidden, or fire on failure.

### 1.1 Voice out — pre-generated on the spine, served as bytes

Kokoro runs ~3.5× realtime after a ~1s worker load, so a 4-sentence answer (~18s of audio) costs ~5s of synth. Synthesize **at answer-write time**, not at play time — the WAV is sitting there before his eye even reaches the row.

```python
# brain.py companion(), after radio.log_operation("answer", ...):
# The spine OPERATES the old stack, never grows it (repeater precedent).
# Needs its own DECISIONS.md entry, like the bill_cycle import exception.
import sys; sys.path.insert(0, str(BIK_ROOT))
import piper_tts                      # Kokoro af_heart; markdown/money already normalized for speech
VOICE_DIR = HERE.parent / "data" / "voice"; VOICE_DIR.mkdir(parents=True, exist_ok=True)
try:
    wav = piper_tts.synth_bytes(text)             # bytes; raises on hard failure
    (VOICE_DIR / f"{msg_id}.wav").write_bytes(wav)
except Exception as e:                             # voice is an enhancement, never a blocker
    print(f"brain: voice synth failed — the answer stands in text: {e}", file=sys.stderr)
```

```python
# server.py route — bytes out, refusal in words, no params near a shell
# GET /api/voice/{id}
p = VOICE_DIR / f"{int(mid)}.wav"                  # int() IS the sanitizer
if not p.exists():
    return self._json({"error": "no voice for this row — the text is the record"}, 404)
self.send_response(200); self.send_header("Content-Type", "audio/wav")
self.send_header("Content-Length", str(p.stat().st_size)); self.end_headers()
self.wfile.write(p.read_bytes())
```

**Gotcha:** `piper_tts.py` lazily spawns a resident Kokoro worker per importing process — the spine becomes a second worker owner (~fine, small model), but the synth call is serialized by a lock; never call it on the request thread of a single-threaded server (see §8.1 — verify the spine is `ThreadingHTTPServer` before shipping any long handler).

### 1.2 Playback — `<audio>` element, not a WebAudio buffer, and why

An `HTMLAudioElement` (blob URL src) gets you, for free: lock-screen/notification controls via **Media Session**, survival through screen-off in the truck, pause from the steering-wheel controls, and `currentTime` — the honest clock the karaoke runs on. A raw WebAudio buffer gets none of that.

```js
async function playAnswer(id, textEl){
  const r = await fetch(url(`/api/voice/${id}`), { headers: hdr() });
  if (!r.ok) return;                       // no voice = the text is the record; no fake beep
  const obj = URL.createObjectURL(await r.blob());
  const a = new Audio(obj);
  a.addEventListener("ended", () => URL.revokeObjectURL(obj), { once:true });
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "ATLAS", artist: "SIDE CHANNEL · Almanac" });
  navigator.mediaSession.setActionHandler("play",  () => a.play());
  navigator.mediaSession.setActionHandler("pause", () => a.pause());
  await a.play();                          // gesture-gated or visible-on-instrument only
  return a;
}
```

**Autoplay law (the three-conditions gate):** the voice speaks unbidden only when (1) the answer just landed, (2) the document is visible, and (3) he is standing on the side-channel surface. Anywhere else, the row renders with a play control and stays silent. `almanac.mute` silences voice too. An answer that lands while hidden is **deferred, not fired** — the voice plays the first time he actually looks (the detent's reveal-deferral law, applied to sound).

### 1.3 The karaoke reveal — light follows voice, honestly

Char-weighted word timings over the clip's **real** duration, painted from the element's **real** clock. No fabricated cadence — if playback stalls, the light stalls, because the light IS playback. (This is the pattern karaoke-tts ships with Kokoro + faster-whisper; Forge v7's read-along is the in-house precedent to lift from.)

```js
function wordTimes(text, dur){           // duration from a.duration once metadata loads
  const words = text.split(/\s+/), total = words.reduce((a,w)=>a+w.length+1, 0);
  let t = 0;
  return words.map(w => { const at = t; t += dur*(w.length+1)/total; return at; });
}
function follow(a, spans, times){        // ONE rAF, canceller stored (house law)
  let i = 0, raf = 0;
  const step = () => {
    while (i < times.length && a.currentTime >= times[i]) spans[i++].classList.add("said");
    if (!a.paused && i < times.length) raf = requestAnimationFrame(step);
  };
  a.addEventListener("play",  () => { raf = requestAnimationFrame(step); });
  ["pause","ended"].forEach(ev => a.addEventListener(ev, () => cancelAnimationFrame(raf)));
  return () => { cancelAnimationFrame(raf); a.pause(); };   // room-exit teardown
}
```

```css
.ans span        { color: var(--dim);  transition: color .28s; }
.ans span.said   { color: var(--ink); }          /* spoken → lit → kept */
.ans.done span   { color: var(--ink); transition: none; }   /* after ended: settled record */
```

**Optional refinement rung:** Whisper is already on the spine — run the generated WAV back through it with token timestamps (`whisper.cpp -ml 1`) at synth time and store real word times beside the WAV. Ladder position 1; the char-weighted estimate is imperceptibly off for 2–5 sentence answers and ships first.

**Gotcha:** wrap each word in a `<span>` **once, at render** (through `esc()` — the page is innerHTML-templated), never per frame. Reduced-motion: the reveal collapses to whole-message `--ink` on `play` — the voice itself is information and survives untouched.

### 1.4 The arrival grammar — the three-sounds ruling, made explicitly

The house law is "three sounds, total, for the life of the product," all phrases of the one `tone()` primitive. The ruling to write into DECISIONS.md, because the brief demands it be respected **or deliberately amended**:

> **The law governs the instrument's own noises. A voice is not a sound — it is traffic.** The instrument still owns exactly its three phrases; ATLAS's voice is content on the channel, gated by visibility, his presence, and his mute. Nothing else changes: no sound on arrival remains true — the squelch **tail** (the existing jittered grain burst, §5 of RADIO-BUILD-SPEC) fires once, *after the parsed answer row and before the first spoken word*, exactly as a real receiver crackles as a transmission opens. Tail → 60ms of nothing → the voice. The one sound a cab already trusts, welded to the only new moment it is true.

### 1.5 Cab grammar — wake lock while the exchange is live

```js
let lock = null;
async function holdWake(){ try { lock = await navigator.wakeLock.request("screen"); } catch {} }
document.addEventListener("visibilitychange", () =>
  { if (!document.hidden && LIVE) holdWake(); });   // auto-released on hide; re-acquire on return
```
Request on entering the side channel with a live exchange (sent, awaiting, or playing); it self-releases on hide. Never hold it at idle — a wake lock at rest is a dead battery wearing a feature's name.

---

## 2 · VOICE IN — PRESS-TO-TALK **IS** PRESS-AND-HOLD

The latch is the house's most sacred mechanism, and PTT is the latch wearing its most natural costume (the spec's own words). The hold **records**; the release **transcribes**; his **send** stays a separate, deliberate act.

### 2.1 The recipe — client-built 16kHz WAV, zero server-side decode

MediaRecorder gives webm/opus, which drags ffmpeg into the spine. Build the WAV in the page instead — Whisper's native 16k mono, ~320KB for 10s, stdlib-pure on both ends:

```js
let AC2 = null;
async function micCtx(){
  if (AC2) return AC2;
  AC2 = new AudioContext({ sampleRate: 16000 });        // Chrome resamples if hw disagrees
  const src = `registerProcessor("tap", class extends AudioWorkletProcessor {
    process(i){ const c = i[0][0]; if (c) this.port.postMessage(c.slice(0)); return true; }});`;
  await AC2.audioWorklet.addModule(URL.createObjectURL(new Blob([src], {type:"text/javascript"})));
  return AC2;
}
const PTT = { stream:null, node:null, srcN:null, chunks:[], meterStop:null };

async function pttDown(){
  const c = await micCtx(); if (c.state === "suspended") await c.resume();
  PTT.stream = await navigator.mediaDevices.getUserMedia(
    { audio: { echoCancellation:true, noiseSuppression:true } });
  PTT.srcN = c.createMediaStreamSource(PTT.stream);
  PTT.node = new AudioWorkletNode(c, "tap");
  PTT.chunks = [];
  PTT.node.port.onmessage = e => PTT.chunks.push(e.data);
  const mute = c.createGain(); mute.gain.value = 0;      // keeps the graph pulled, silent
  PTT.srcN.connect(PTT.node).connect(mute).connect(c.destination);
  PTT.meterStop = meter(c, PTT.srcN);                    // §2.2 — the honest needle
}
function pttUp(){                                        // ALSO called on visibilitychange hidden
  PTT.meterStop?.(); PTT.stream?.getTracks().forEach(t => t.stop());  // OS mic light OFF
  PTT.srcN?.disconnect(); PTT.node?.disconnect();
  const n = PTT.chunks.reduce((a,c) => a + c.length, 0);
  if (n < 16000 * 0.4) return null;                      // <0.4s: "released before it keyed"
  const pcm = new Int16Array(n); let o = 0;
  for (const ch of PTT.chunks) for (let i = 0; i < ch.length; i++)
    pcm[o++] = Math.max(-1, Math.min(1, ch[i])) * 0x7FFF;
  return new Blob([wavHeader(n), pcm], { type: "audio/wav" });
}
function wavHeader(n, rate = 16000){
  const b = new DataView(new ArrayBuffer(44)),
        w = (o,s) => { for (let i = 0; i < s.length; i++) b.setUint8(o+i, s.charCodeAt(i)); };
  w(0,"RIFF"); b.setUint32(4, 36 + n*2, true); w(8,"WAVEfmt ");
  b.setUint32(16,16,true); b.setUint16(20,1,true); b.setUint16(22,1,true);
  b.setUint32(24,rate,true); b.setUint32(28,rate*2,true); b.setUint16(32,2,true);
  b.setUint16(34,16,true); w(36,"data"); b.setUint32(40, n*2, true);
  return b.buffer;
}
```

**Gotchas that bite:** (1) an AudioWorkletNode with no downstream connection is not pulled in all impls — the zero-gain mute node is load-bearing; (2) **stop the tracks on release, every path** — a leaked mic keeps Android's green mic pill lit and reads as surveillance; (3) `visibilitychange → hidden` must abort the hold and discard the take (wall-clock law: nothing fires from a hidden document); (4) getUserMedia needs the HTTPS origin — github.io qualifies, and the permission persists in the installed PWA.

### 2.2 The honest needle — a VU that renders only real signal

The detent spec kills fabricated wiggle ("the wolf-crying this surface exists to kill"). An AnalyserNode meter is the opposite of fabricated — it IS the microphone's own signal, and it answers the question a PTT user actually has: *is it hearing me?*

```js
function meter(c, srcN){
  const an = c.createAnalyser(); an.fftSize = 256;       // 128 samples — cheap
  srcN.connect(an);
  const buf = new Float32Array(an.fftSize), el = $("vu");
  let raf = 0;
  const step = () => {
    an.getFloatTimeDomainData(buf);
    let s = 0; for (let i = 0; i < buf.length; i++) s += buf[i]*buf[i];
    el.style.transform = `scaleX(${Math.min(1, Math.sqrt(s/buf.length) * 4)})`;
    raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
  return () => { cancelAnimationFrame(raf); an.disconnect(); el.style.transform = "scaleX(0)"; };
}
```
Render it as the key-up rail itself (the `.r3` fill becomes signal, not a timer) — the hold's progress bar is replaced by *the sound of his own voice filling the rail*, which is both more honest and more beautiful than the 620ms fake it replaces. Compositor-only (`transform`), one rAF, canceller stored.

### 2.3 `/api/stt` — the spine transcribes, injection-safe

```python
# POST /api/stt — body: audio/wav bytes. Whisper base.en, the proven 0.19s path.
ln = int(self.headers.get("Content-Length", 0))
if not (0 < ln <= 6_000_000):
    return self._json({"error": "the mic sent nothing the spine can read"}, 400)
wav = self.rfile.read(ln)
with tempfile.NamedTemporaryFile(suffix=".wav", dir=str(TMP), delete=False) as f:
    f.write(wav); path = f.name
try:   # FIXED argv — request bytes land in a file; no request value ever reaches a shell
    out = subprocess.run([str(WHISPER_BIN), "-m", str(WHISPER_MODEL), "-f", path,
                          "-nt", "-np"], capture_output=True, timeout=20, check=True)
    text = out.stdout.decode().strip()
    return self._json({"text": text, "ms": ms})
except subprocess.TimeoutExpired:
    return self._json({"error": "whisper did not answer in 20s — nothing was transcribed"}, 502)
finally:
    os.unlink(path)
```
Repeater-pattern conduct: fixed binary, fixed model path, params-as-files, timeout, refusal in words, a `stt_log` row if you want the ledger. (Point `WHISPER_BIN` at whatever the old bik companion proved — operate, don't rebuild.)

### 2.4 Transcript → his hand → send

The transcript lands **in the composer**, selected, with the existing send discipline untouched — his release is not his signature. This is the C1 lesson (road speech is quoted, never obeyed) applied to his own mic: a mishear he didn't read is a message he didn't write. Auto-key-after-3s-unless-touched is a legitimate later amendment for the parked-at-dock case — ship review-first, let his hands ask for faster.

**Degradation rungs for voice-in:** Whisper down → the composer's Gboard mic key still works (free, on-device); Chromium 139+ also has `SpeechRecognition` with `processLocally:true` as a zero-server fallback worth feature-detecting. The typed path is the floor and never breaks.

---

## 3 · THE WAIT — 30 SECONDS, RENDERED HONESTLY

gemma4:12b takes ~30s warm. Two honest shapes, ship them in this order:

### 3.1 v1 — the wait as a live fact (zero new law)

The current `pend` row lies slightly by being static. Make it a clock:

```js
// inside the pending row: <span id="micup" class="fig-sm">0:07</span>
const t0 = Date.now();
const tick = setInterval(() => {
  const el = $("micup"); if (!el) return clearInterval(tick);
  const s = Math.round((Date.now() - t0) / 1000);
  el.textContent = `${(s/60)|0}:${String(s%60).padStart(2,"0")}`;
}, 1000);   // cleared on answer, room exit, pagehide — never orphaned
```
`ATL has the mic · 0:31` is a fact, not a spinner: real elapsed time on a real spawn the spine confirmed (`ack.answering`). Keep the existing single-timeout `followAnswer` chain — it is already the correct no-interval pattern. On `undelivered`, the clock stops and the row says what the channel says: *said, not heard*.

### 3.2 v1.1 — token streaming over stdlib chunked HTTP (when earned)

Ollama streams NDJSON natively; python stdlib can proxy it with a hand-rolled chunk writer:

```python
# spine: GET /api/threads/{id}/stream?after={msg_id}  (protocol_version must be "HTTP/1.1")
self.send_response(200)
self.send_header("Content-Type", "application/x-ndjson")
self.send_header("Transfer-Encoding", "chunked")
self.send_header("Cache-Control", "no-cache"); self.end_headers()
def chunk(b: bytes):
    self.wfile.write(b"%x\r\n" % len(b)); self.wfile.write(b); self.wfile.write(b"\r\n")
    self.wfile.flush()
for line in ollama_stream(payload):        # urllib response read line-by-line, stream:True
    chunk(line)                            # pass NDJSON through untouched
chunk(b"")                                 # ...write b"0\r\n\r\n" terminator
```

```js
const res = await fetch(url(`/api/threads/${tid}/stream?after=${mid}`), { headers: hdr() });
const rd = res.body.getReader(), dec = new TextDecoder();
let buf = "";
for(;;){
  const { done, value } = await rd.read(); if (done) break;
  buf += dec.decode(value, { stream:true });
  let i; while ((i = buf.indexOf("\n")) >= 0){
    const j = JSON.parse(buf.slice(0, i)); buf = buf.slice(i + 1);
    appendTokens(j.message?.content || "");
  }
}
// room exit: rd.cancel() — never leave a reader pumping a hidden room
```

The stream renders as **provisional** (dim, italic — the held-traffic voice: "on the air, live"); the durable row is written by the spine when complete, and the settled text replaces the provisional with the read-settle (§7.1). Word arrival gets the platform's own entry animation, no library:

```css
.tok { display:inline; }
.tok { transition: opacity .18s, filter .18s; }
@starting-style { .tok { opacity: 0; filter: blur(3px); } }   /* per-word materialize, pure CSS */
```
(Streamdown/FlowToken ship exactly this as React libraries; `@starting-style` gives it to a vanilla page in three lines.) **Gotcha:** append words as elements (not re-set textContent) or `@starting-style` refires on everything; and streaming + voice must not fight — the voice synth waits for the completed row, so the stream is the read-along *preview* and the WAV is the replay.

**Hard prerequisite:** a 30s streaming response on a single-threaded HTTP server starves every other surface. Verify the spine is `ThreadingHTTPServer` (script_runner's single-threaded gotcha is the scar); if it is not, v1.1 is blocked until it is.

---

## 4 · THREADS — CONTINUITY AS A PLACE

### 4.1 Schema (almanac.db, attrition-legal)

```sql
CREATE TABLE IF NOT EXISTS threads (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    at          TEXT NOT NULL,            -- born
    title       TEXT,                     -- auto: first say, clipped; his rename wins
    last_at     TEXT NOT NULL,            -- denorm for the rail
    archived_at TEXT
);
ALTER TABLE messages ADD COLUMN thread_id INTEGER;   -- NULL = CH 19; set = side channel
```
Turns: `kind='say'` (sender bryan) / `kind='answer'` (sender operation), `thread_id` set, `seen_by_spine_at` never used — **a conversation turn carries zero directive weight**. `brain.companion()` scopes `_thread_md()` to the thread and the continuity problem is solved with the code it already has. **Promote** (`POST /api/threads/{t}/promote {message_id}`) copies one turn to CH 19 as `kind='reply'` — his hand, the capture-promotion shape, rendered as a small `→ 19` control on his own rows only.

### 4.2 The memories soul (from bik/companion, verdict FEED)

The old companion's `memories` table (fact/category/active/expires) is the soul worth carrying: a **pin** gesture on any ATLAS answer writes `memories(fact, source_thread)`; pinned facts join the companion blob as one clipped slice (`## PINNED (his hand marked these)`). Pin = hold, not tap — remembering is a write. This is the one feature that makes threads compound instead of accumulate.

### 4.3 The thread rail — a CSS carousel, zero listeners

Chrome 135's carousel primitives make the rail declarative — snap points, markers, and buttons with no scroll JS:

```css
.rail { display:flex; gap:8px; overflow-x:auto; scroll-snap-type:x mandatory;
        scroll-marker-group: after; scrollbar-width:none; }
.rail > .th { scroll-snap-align:start; flex:0 0 auto; }
.rail > .th::scroll-marker { content:""; inline-size:5px; block-size:5px;
        border-radius:50%; background:var(--etch); }
.rail > .th::scroll-marker:target-current { background:var(--amber); }
.rail::scroll-marker-group { display:flex; gap:6px; justify-content:center; padding-block:6px; }
```
Degrades to a plain scroll row everywhere else. The active thread chip uses `scroll-state()` if you want it to compress when the log scrolls — same machinery as the terminator recipe already in ALMANAC-TECHNIQUES §1.4.

### 4.4 Switching threads — `view-transition-name: match-element`

```css
.th { view-transition-name: match-element; }   /* rail chips slide, not cross-fade */
```
Thread switch wraps the repaint in element-scoped `#log.startViewTransition()` (Chrome 147, the detent's own VT discipline: names set in callback, cleared in `finally`, `reduce()` gated before snapshot, plain-repaint third tier).

### 4.5 Thread actions — top-layer popover, anchored

Rename / archive / promote live in one `popover="auto"` anchored to the thread chip (`position-anchor` + `position-try-fallbacks: flip-block`), bottom-sheet fallback under 400px — the exact §7.3 recipe from the techniques doc; nothing new to invent. **Tap-shield law applies** (08-04 ruling): the opener calls `stopPropagation()` before any window click-closer sees it.

---

## 5 · THE INSTRUMENT'S FACE — new-platform CSS specific to a conversation

| Technique | Why THIS surface | Recipe | Gotcha |
|---|---|---|---|
| **`field-sizing: content`** (Chromium 123+) | The composer becomes a `<textarea>` (multi-turn wants multi-line) that grows with speech-length thoughts, zero JS | `#say{ field-sizing: content; min-block-size:2.4em; max-block-size:6lh; }` | Keep `enterkeyhint="done"` — Enter closes Gboard; **the transmission is the held control**, never a keyboard send. Fallback: fixed 2-row textarea |
| **`corner-shape: bevel`** (Chrome 139) | The machinist's chamfer that already marks the detent's mic well — the side channel inherits the family metal | `.say{ border-radius:2px; corner-shape: bevel; }` | Shorthand still settling cross-engine; always with `border-radius` fallback |
| **`:has()` arm tell** | The PTT/lever arms itself from state, pre-JS | `.panel:has(#say:not(:placeholder-shown)) .khold .cap{ color:var(--ink); }` | Same idiom the spec ratified; keep selectors shallow — `:has()` invalidation on a 5000-line page is real |
| **`@property` conic ring** | The detent-style hold-progress ring around the PTT on detent's cover screen (where a rail has no room) | `@property --p{syntax:"<percentage>";...}` + `background: conic-gradient(var(--amber) var(--p), transparent 0)` on a masked ring; transition `--p` | Register `@property` before any rule transitions it or the first arm silently no-ops |
| **`scroll-state(scrolled)`** (Chrome 133+) | `▼ LATEST` chip when he's deep in a long thread — zero listeners | container-type on the log wrapper; `@container scroll-state(scrolled: top){ .latest{opacity:1} }` | Query styles descendants only — wrap the chip inside the container |
| **`interpolate-size: allow-keywords`** | OLDER TRAFFIC fold + collapsed thread previews animate to `auto` height | `:root{interpolate-size:allow-keywords}` + `block-size: 0 → auto` | Chromium-only; `grid-template-rows: 0fr→1fr` is the Baseline fallback |
| **`sibling-index()`** (Chromium; FF landing 2026) | First-paint of a thread: rows settle in order, no inline styles | `.tx{ animation-delay: calc(min(sibling-index(),8) * 28ms); }` | Cap it — an 80-row thread must not take 2.2s to arrive |
| **`text-box: trim-both cap alphabetic`** | The thread title and the `SIDE CHANNEL` masthead seat optically on their rules | per ALMANAC-TECHNIQUES §2.1 | Only with `line-height:1`; measured-margin fallback |
| **`color-mix()` age ramp** | Thread chips cool with `last_at` age — one hue, mixed toward `--bg`, no second palette | `background: color-mix(in oklch, var(--amber) calc(var(--fresh)*18%), transparent)` | Mix toward bg/ink only; never two saturated hues through oklch |

### 5.1 The orb + the cross-page morph (if the split is a second page)

Same-origin MPA **cross-document view transitions** (Chromium 126+; additive elsewhere) make "split the page" feel like one instrument:

```css
/* both desk.html and companion.html */
@view-transition { navigation: auto; }
/* desk: */    .orb.atlas   { view-transition-name: atlas; }
/* companion:*/ .masthead   { view-transition-name: atlas; }
```
The orb he taps becomes the instrument's masthead across a real navigation — a door opening, not an app switch. Zero JS; pages without support just navigate.

**Orb hue (identity axis):** amber is CH 19's identity and must stay its own. Recommend a **moonlit-glass blue-white** for the side channel (`oklch(0.82 0.03 240)` family) — the night cab, windshield light — clearly distinct from amber (telemetry), hot red (state), and violet (soul). Avoid green even as identity: it is the one hue the radio family has constitutionally banished, and adjacency would read as state.

---

## 6 · MICRO-INTERACTIONS — the grammar, inherited then extended

- **The key-up**: verbatim latch inheritance (RADIO-BUILD-SPEC §3): pointer-captured hold, wall-clock boundary, `Idempotency-Key`, 9s AbortController, visibility abort, `keyThump` on press, refusal = `thud` + recoil + the spine's words + draft stays. The only delta: the rail fill is the live VU (§2.2) when the hold is a voice take.
- **The read-settle**: `say` rows print `@starting-style` (opacity 0, translate 6px); ATLAS rows arrive via the hero sequence; after `ended`, `.done` settles the text to record weight — proud/cut as a living law, one class toggle.
- **The first heard answer of a day** is the payoff moment and needs nothing added: tail → voice → light following it IS the celebration. Resist confetti-shaped anything — "celebration is earned truth," and the earned truth here is a voice.
- **`undelivered` on the side channel**: the row prints hollow (`△`, dim italic), the clock stops at its true elapsed, and the voice line names the fact: *"no answer came — your words hold; the session reads them at kickoff only if you promote them."* Retry is the same gesture on the same draft.
- **Haptics**: reuse the existing grammar exactly — `arm [8]`, `seat [14,26,14]`, `refuse [12,70,12]`; add nothing. Arrival haptic only if on-node (gesture gate enforces it anyway).

---

## 7 · PERFORMANCE & SAFETY — the cab test

### 7.1 Budget (Fold 7 cover screen first, 340px, one thumb)

| Rule | Number |
|---|---|
| rAF loops | **One owner per moment**: VU during hold, karaoke during playback — never both; both through one subscriber loop with stored cancellers |
| AudioContexts | ≤2 total (tone/instrument ctx + 16k mic ctx), both closed on `pagehide`; mic **tracks** stopped on every release path |
| Compositor-only during gestures | `transform`/`opacity` only on rail, VU, ring |
| `backdrop-filter` | ≤1, never on the scrolling log |
| Full-viewport gradient repaints | 0 new (the sky/steel is the sibling surfaces' property) |
| Blob URLs | revoked on `ended` and on room exit — a session of answers must not accrete WAVs in memory |
| Poll intervals | **zero** — the `followAnswer` single-timeout chain and fetch-on-open remain the only cadence |
| DOM per thread | virtualize past ~60 rows (`content-visibility:auto` + `contain-intrinsic-size` on older runs) |

### 7.2 Lifecycle checklist (ship-blockers)

- [ ] `visibilitychange hidden`: abort a held PTT (discard take, stop tracks), pause nothing-that-lies (the elapsed clock keeps true time), defer arrival reveal + voice; wake lock self-releases; `pagehide`: close contexts, clear timeout chain, cancel stream reader, revoke blobs.
- [ ] Voice fires only after a **parsed** answer row; tail only before voice; nothing audible on failure paths except the existing `thud` on his own refused act.
- [ ] `prefers-reduced-motion` (live-read): karaoke → whole-message brighten; VT → plain repaint; stagger off; **voice, haptics, the clock, and the tail survive — they are information, not theater.**
- [ ] All new CSS under `.sidech` / `#sc-*`; storage keys `almanac.*` dotted; sw.js `VERSION` bumped or the phone serves yesterday's instrument; SW fetch handler stays path-scoped `/almanac/`.
- [ ] Every interpolation through `esc()` — ATLAS's text is model output landing in an innerHTML-templated page; treat it as hostile exactly like any other string.
- [ ] `messages` writes stay on the existing endpoints' discipline (idempotency, parsed 2xx, refusal-in-words).

### 7.3 Degradation ladder (cut top-down)

1. Whisper-refined karaoke timings (char-weighted stands)
2. Cross-document VT orb morph (plain navigation)
3. Carousel markers / scroll-state chip (plain scroll)
4. Per-word karaoke (whole-message brighten on play)
5. VU rail (falls back to the existing timed rail)
6. Token streaming (falls back to the honest clock)

**Never cut:** the held key and its wall clock, the tail-then-voice arrival, the honest wait clock, the refusal voices, threads-as-record, promote-by-hand, mute.

---

## 8 · BUILD ORDER

1. **The split itself**: threads schema + side-channel surface with typed turns and the honest clock — CH 19 stripped back to telemetry the same commit (migration discipline: the answer lane leaves the radio as it arrives here).
2. **The hero**: spine pre-gen WAV → `/api/voice/{id}` → tail → `<audio>` → karaoke follow. Prove it on one real answer before anything else gets polish.
3. **Voice in**: PTT WAV capture + `/api/stt` + VU rail.
4. Thread rail, memories pin, promote gesture.
5. Streaming (only after the ThreadingHTTPServer check), Whisper timing refinement, orb morph.

The one thing to get right above all others: **the six seconds from squelch tail to the third spoken word.** That is where "a one-man operation finally has a co-driver" either lands in his chest or stays a chat app. Everything else in this document is in service of those six seconds.

---

**Sources:** [What's new in web UI — Google I/O 2026](https://developer.chrome.com/blog/new-in-web-ui-io26) · [2026 CSS features shipped late 2025–now](https://blog.riadkilani.com/2026-css-features-you-must-know/) · [4 CSS features for 2026 — nerdy.dev](https://nerdy.dev/4-css-features-every-front-end-developer-should-know-in-2026) · [CSS in 2026 — LogRocket](https://blog.logrocket.com/css-in-2026/) · [LLM chat prototype (Argyle) — VT on submit, streaming, border-shine](https://nerdy.dev/llm-chat-prototype) · [Streamdown animation — per-word fade on mount](https://streamdown.ai/docs/animation) · [FlowToken — streaming text animation patterns](https://github.com/Ephibbs/flowtoken) · [Streaming UI patterns that don't break](https://thepromptbench.com/ai-product-ux/streaming-ui-patterns-that-dont-break/) · [karaoke-tts — Kokoro + faster-whisper word-sync player](https://github.com/jdmills-edu/karaoke-tts) · [Inworld TTS timestamps — word-timing alignment for karaoke/lip-sync](https://docs.inworld.ai/tts/capabilities/timestamps) · [MDN — AnalyserNode.getFloatTimeDomainData](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getFloatTimeDomainData) · [MDN — Web Audio visualizations](https://docs.w3cub.com/dom/web_audio_api/visualizations_with_web_audio_api) · [W3C Media Session](https://www.w3.org/TR/mediasession/) · [Screen Wake Lock in PWAs](https://progressier.com/pwa-capabilities/screen-wake-lock) · [Audio player PWA — lock-screen control](https://progressier.com/pwa-capabilities/audio-player-pwa) · [Whisper streaming discussion — chunked STT reality](https://github.com/openai/whisper/discussions/2) · [WhisperLiveKit — VAD + streaming local STT](https://github.com/QUENTINFUXA/WHISPERLIVEKIT) · [Local whisper.cpp vs faster-whisper 2026 speed test](https://www.promptquorum.com/power-local-llm/local-whisper-stt-comparison-2026) · [Voice UI design guide 2026](https://fuselabcreative.com/voice-user-interface-design-guide-2026/) · [orb-ui — listening/speaking state + real volume feedback](https://orb-ui.com/docs/adapters/elevenlabs) · [Real-time voice chat with WebSockets + Web Audio](https://dev.to/programmingcentral/build-real-time-voice-chat-with-websockets-llms-and-web-audio-api-4mnj)