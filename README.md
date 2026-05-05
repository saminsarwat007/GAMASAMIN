# GEMA 2025 · Samin Sarwat Pitch Deck

A high-impact, browser-native presentation for the **Anugerah Tokoh Inovasi Siswa UTM (UG)** interview at **Anugerah Gemilang Mahasiswa (GEMA) 2025**.

Built with **Reveal.js 5** + custom modern CSS (glassmorphism, gradient type, animated orbs, dark mode by default). No build step. Just a browser.

---

## 🚀 Quick Start

### 1. Preview the deck locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open **http://127.0.0.1:4173** in your browser (Chrome / Safari / Edge recommended).

> If `python3` is unavailable, run `npx serve .` or open `index.html` directly in Chrome (note: some browsers block local assets — the Python server is the most reliable).

### 2. Navigate

| Key | Action |
|---|---|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `Esc` | Slide overview |
| `F` | Fullscreen |
| `S` | Speaker view (notes window) |
| `B` | Blackout screen (during Q&A) |

### 3. Present

On the actual presentation laptop:

1. Connect to projector / HDMI.
2. Open **http://127.0.0.1:4173** in Chrome.
3. Press `F` for fullscreen.
4. Press `S` for speaker view if you want a separate notes window on your laptop.

---

## 📄 Export to PDF (printable handout or backup)

Reveal.js has a built-in PDF-print mode.

1. Open **http://127.0.0.1:4173/?print-pdf** in Chrome.
2. Wait for all slides to render (≈ 3 seconds).
3. Open Chrome's print dialog: `⌘P` (Mac) / `Ctrl+P` (Windows).
4. Destination → **Save as PDF**.
5. Paper size → **A4 Landscape** · Margins → **None** · Background graphics → **ON**.
6. Save as `SaminSarwat_GEMA2025_Deck.pdf`.

This produces a pixel-perfect PDF you can email to the GEMA committee, upload anywhere, or print as a handout.

---

## 🌐 Deploy online (optional)

If you want a shareable URL you can paste into an email or WhatsApp:

**Option A · Netlify Drop** (30 seconds, zero setup)
1. Go to https://app.netlify.com/drop
2. Drag the whole `gema-pitch` folder onto the drop zone.
3. You get a public URL instantly: `https://samin-gema-2025.netlify.app` or similar.

**Option B · GitHub Pages**
1. Push this folder to a GitHub repo.
2. Settings → Pages → Source: `main` branch, root folder.
3. Your deck is live at `https://<username>.github.io/<repo>/`.

---

## 🗂️ What's in this folder

| File | Purpose |
|---|---|
| `index.html` | The **15-slide** deck — UTM ASCEND maroon theme · Reveal.js |
| `style.css` | Custom modern design system · UTM ASCEND brand colours |
| `script.js` | Reveal.js initialisation + animated stat counters |
| `interview-qa.md` | **⭐ Interview questions & model answers — English + Bahasa Melayu · 11 sections covering all 8 GEMA criteria** |
| `slide-scripts.md` | **⭐ Per-slide presenter script — what to say on each of the 15 slides, timed, bilingual** |
| `assets/` | UTM logo · AGROTHINK image · CarBuddy image |
| `README.md` | This file |

---

## 🎬 Slide map (15 slides · ≈ 15 min)

| # | Slide | Purpose |
|---|---|---|
| 1 | Cover | UTM ASCEND identity · name · award · 17+ tagline |
| 2 | By the Numbers | Impact hook — 17+ wins · 9 champ · RM25K+ · 500 lives |
| 3 | Who I Am | Software engineer / AI innovator / competition champion |
| 4 | The Mission | Food security / road safety / education access |
| 5 | AGROTHINK | Signature innovation **+ real app screens** |
| 6 | Shell SSVC + CarBuddy | Signature achievement **+ real CarBuddy screens** |
| 7 | Wall of Achievements | **16-card medal grid** + 6 more in footnote |
| 8 | Growth Arc | Failure → Mastery (twice) |
| 9 | National Recognition | Government / Industry / Academia validation |
| 10 | Programme Impact | Quantified — 500 lives, RM 4.1B, 100M farmers |
| 11 | **UTM ASCEND 2030** | **⭐ 4 strategic pillars mapped to your portfolio** |
| 12 | Current Issues | RMK-13 · MADANI · MyDIGITAL · SDGs |
| 13 | Leadership & Character | Beyond the medals |
| 14 | Roadmap | 2026 → 2027 → life |
| 15 | Closing | Thank you + contact |

---

## ✏️ Edits you might want

- **Swap photos / faces:** currently no photos are embedded — the deck uses typography + data viz. If you want to add photos, create an `assets/` folder, drop in `shell-sssc.jpg`, `uxhmac.jpg`, etc., and reference them in `index.html`.
- **Update a number:** edit directly in `index.html` — all content is plain HTML, easy to grep.
- **Change colour scheme:** edit the `:root` variables at the top of `style.css`.
- **Add / remove a slide:** each slide is a `<section>` element inside `.slides` — copy an existing one as a template.

---

## 📋 Interview day checklist

- [ ] Deck tested on presentation laptop (browser + fullscreen works)
- [ ] PDF backup on USB drive + on email
- [ ] `interview-qa.md` rehearsed — both EN and BM versions
- [ ] Opening statement (60 sec) memorised
- [ ] 30-sec closing memorised
- [ ] AGROTHINK live on phone — ready to demo if asked
- [ ] Printed CV + competition one-pagers for the panel
- [ ] Formal attire · 15 minutes early · water + mints

---

**Good luck. You earned this shortlisting.**

`SAMIN SARWAT · A22EC4040 · Faculty of Computing · UTM`
