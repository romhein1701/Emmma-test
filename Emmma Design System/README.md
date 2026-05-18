# Emmma — Design System

> _"Memories you can hold. Stored where they belong — with you."_

Emmma is a **Swiss-made, privacy-first photo memory device** with a companion app and a phygital output ecosystem (prints, frames, ambient speaker). The brand stands explicitly **against the cloud**: photos are AI-curated on-device, locally stored, never harvested.

This repository is the working design system that powers Emmma's promotional surfaces — landing pages, investor pre-order pages, app screens, deck assets. The first deliverable using this system is an **early-bird investor / first-user landing page** whose job is to convert visits into pre-orders.

---

## Sources & provenance

| Source | Type | Notes |
| --- | --- | --- |
| `Web-Components-Emmma.fig` | Figma file (mounted as virtual FS) | Component library — Buttons, Cards (Capsule), Alerts, Avatars, Inputs, Radios, Checkboxes, Switch, Tabs, Nav, plus a light/dark "Capsules" gallery screen. Source of truth for tokens. |
| `Foundations-Emmma.fig` | Figma file (referenced in brief, **NOT mounted**) | Would have held the formal Colors / Spacing / Text / Border / Grid pages. Tokens here were extracted from the Web-Components file's actual usage; flagged where assumed — please re-mount if you want me to reconcile. |
| `uploads/Archivo.zip` | Google Fonts download | Archivo variable + italic + 110 static cuts. Variable file copied into `fonts/`. |

There is no live URL or repo for Emmma's product yet — this system precedes them.

---

## Content fundamentals

Emmma's voice is **quiet, intimate, slightly literary** — closer to a letter from a friend than a tech datasheet. The brand is a counter-position to surveillance-economy photo cloud; the copy never raises its voice, because the *positioning* is already loud.

**Tone**
- **Personal, not personified.** First-person from the user ("my fiancé and I visited La Rochelle…"), second-person from Emmma ("your memories, on your shelf"). Emmma itself rarely uses "we"; it speaks like a thoughtful object.
- **Specific over generic.** Dates as `07.2026`, place names ("La Rochelle", "Île de Ré"), exact counts ("132 archives"). Specificity earns emotional weight.
- **Anti-cloud, never preachy.** Replace "cloud" / "syncs to server" with "lives with you" / "stays on the capsule". Lead with what you *gain* (ownership, presence), not what you *avoid*.
- **Swiss precision in numbers.** `4.9/5` not "amazing reviews". `1.2 TB local`. `0 servers`.

**Casing & punctuation**
- **Headlines: Sentence case, no terminal period.** "Memories you can hold"
- **Buttons & UI labels: Title Case, two words max preferred.** "Get Started" · "Show my souvenir" · "Watch demo"
- **Tags & badges: Lowercase, single word.** `new` · `archived` · `shared` · `local`
- **Dates: `MM.YYYY` for memory titles**, ISO-like elsewhere. Never "Jul 6, 2026".
- **No ™ / ® in body copy.** Emmma is written with three Ms, every time. Never "Emma".

**Length**
- Headline: ≤ 6 words.
- Lede paragraph: ≤ 220 chars (~2 lines at body size).
- Memory caption (in-card): 2–4 sentences, one image-grounded specific.

**Emoji & symbols**
- **No emoji.** Anywhere. Including footers and toasts.
- **Allowed glyphs:** `·` (mid-dot) as separator, `—` (em-dash) for emphasis, `→` for "more", `©` in legal lines. That's the full set.

**Example specimens** (extracted from the Capsules gallery)
> _"On July 6th, my fiancé and I visited La Rochelle in western France. We absolutely fell in love with the city and its surroundings. The island of Île de Ré was the ideal place to catch the sunset after a long day."_
> — caption on a memory capsule

> _"Capsules"_  — section heading, single word, all the work done by typography

> _"Shared with Romain"_  — share-status label, lower-weight, sub-text. Names a person, not "1 recipient".

---

## Visual foundations

Emmma's visual identity reads like **a precision instrument with a soul** — black-glass hardware enclosing warm, hand-printed memories. The system pivots between two surface modes that share the same skeleton.

### Colors

Two ladders, one accent.

- **Carbon → Linen** (dark canvas): `#0F0E0D` device → `#1A1716` card surface → `#2E2928` hairlines → `#F7F3F2` primary text → warm grey ladder `#D6C8C5 / #9E8F8A / #7A6F6C` for hierarchy.
- **Bone → Carbon** (light canvas): `#FAFAF7` paper → `#F5F5EE` raised → `#EEEDE2` tinted blocks → `#D1CEBC` hairline → `#2E2928` ink.
- **Patina** `#928617` is the single brand color — an aged-brass olive (think Swiss watch dial). It does both *primary action* (filled button on dark, light text on dark CTA panels) and *highlight* (8–12% tint blocks behind iconography).
- **Amber** `#E1712B` is the *new / spark* accent — used for the `new` capsule badge, "Innovation" eyebrow tags, and second-tier CTAs. Used sparingly: one Amber gesture per screen.
- **Status colors** (`info / success / warning / error`) are kept distinct from brand; warning bleeds into the patina hue intentionally.

### Typography

- **Archivo** does everything — display, headings, body, UI labels, small caps. The whole system is monolithic on one family; Inter and Roboto appear in the .fig only as Figma-leaked defaults and are *not* brand.
- **Display** is Archivo Medium 96px, tracked tight (`-5%`). Headlines feel sculpted, not pumped.
- **Body** is Archivo Regular 16/24, no tracking, no italics in UI (italics reserved for editorial quote captions).
- **Mono** is JetBrains Mono 14–16, used for *device data* — capsule counts, serial numbers, GB readouts. Mono = "this is a number the device knows".
- **Numbers in display contexts** use tabular figures (`font-variant-numeric: tabular-nums`) so `4.9/5` and `132` align across cards.

> **Substitution flag:** The original Figma uses Inter and JetBrains Mono alongside Archivo, but we don't have local files for them. We're loading both from Google Fonts via CSS `@import`. If you want fully offline parity, drop the TTFs into `fonts/` and I'll point `@font-face` at them.

### Spacing

A strict **8pt grid** with a 4pt sub-step. Tokens: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`. Section padding is `80px` vertical at desktop; gutters are `24px`; card insets `24–33px`. Spacing inside small UI (buttons, tags) is `8 / 12 / 16`.

### Backgrounds & imagery

- **Full-bleed photography** on hero modules — analog-feeling, low-saturation, warm white-balance, often soft window light. No HDR pop. Skin tones lean amber.
- **Photo cards inside Capsules** are 4:5 or square, soft-rounded (`12px`), arranged in small 3-up clusters that overlap by 2–4 pixels — referencing physical print stacks.
- **No gradients** on surfaces. The only "gradient" is a low-opacity colored block (`opacity: 0.05–0.10`) tucked behind/under cards as a subtle warm halo. Never linear-gradient text or buttons.
- **No textures or noise** — the surfaces are clean. Texture comes from photography.
- **No hand-drawn illustration.** Iconography is geometric line.

### Corner radii

- `4px` — tag chips
- `8px` — buttons, inputs, small badges
- `12px` — image tiles inside cards
- `16px` — feature cards, image panels
- `24px` — Capsule cards (the hero object)
- `999px` — avatars, pills

### Borders, shadows, elevation

- **Hairlines are 1px**, almost always in `--border` (carbon-100 on dark, bone-500 on light). Never tinted brand.
- **Two shadows only:**
  - `--elev-1` — `0 1px 2px rgba(23,23,23,.05)` for resting cards. Almost invisible. Pure pixel-pinning.
  - `--elev-3` — `0 18px 48px -12px rgba(15,14,13,.45)` for fullscreen modals / capsule focus mode.
- Cards on dark also carry an `--inner-edge` (`inset 0 0 0 1px rgba(247,243,242,.04)`) so the rim catches a hair of light.

### Interaction states

- **Hover** — fills move one step in the brand ladder (`patina-500` → `patina-400`); ghost buttons gain `--bg-tint` (8% patina). 120ms ease-out.
- **Active / press** — fills move one step *down* (`patina-500` → `patina-600`) and the element scales `0.98`. No "depth" shadow.
- **Focus** — 2px outer ring in `--patina-400` at `0.6` opacity, 2px offset. Visible on keyboard nav only.
- **Disabled** — `opacity: 0.4`, cursor not-allowed, hover suppressed.
- **Selected (capsule, tab)** — fill becomes patina, label inverts to bone.

### Motion

- Restraint. **No bounces, no springs, no parallax.** Easings: `cubic-bezier(0.22, 0.61, 0.36, 1)` (default out) and `cubic-bezier(0.65, 0, 0.35, 1)` (in-out for layout shifts).
- Durations `120 / 200 / 380ms`. Card focus zoom uses 380ms.
- Photographs cross-fade, never slide.

### Transparency & blur

- Used **only** for floating chrome (header on scroll → `rgba(15,14,13,.72)` + `backdrop-filter: blur(20px)`).
- Card surfaces are always opaque.
- The patina/amber accent halos use straight `opacity: 0.05–0.10` on a solid color (not rgba on white) so they show on both surface modes.

### Layout rules

- Desktop max-width `1328px` with `56px` outer padding (per the Capsules frame).
- 12-column grid with `24px` gutters.
- Header is sticky, 73px tall, hairline-bordered, no shadow.
- Footer is one row of `EEEDE2` panel with the same hairline.
- Capsules are placed on a fixed 3-up row at desktop, snap-scrolling sideways at smaller widths.

### Color vibe of imagery

Warm. Slightly faded. Window-light, golden hour, indoor incandescent. Greens are muted, oranges are amplified. Photographs *of the device* are shot on neutral charcoal backgrounds; photographs *inside capsules* are personal-archive style — they should look like the user's own.

---

## Iconography

- **Lucide** is Emmma's icon set. The whole system uses Lucide — strictly **outline, 24 px nominal, ~1.75 px stroke, round caps + round joins**. No filled icons except for the brand mark itself.
- Load via UMD CDN:
  ```html
  <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
  ```
  Lucide's icons hash lives on `window.lucide.icons` and is keyed by PascalCase name (`ArrowRight`, `Mountain`, `Printer`, etc). The kit's `Sprite.jsx` wraps that in an `<Icon name="..." size={...} color="..."/>` component that uses dangerouslySetInnerHTML so React keeps DOM ownership.
- **Sizes:** `14` (eyebrow / inside tags), `16` (button leading + section heads), `20` (manifesto + reserve trust), `24` (specs hero), `32` (logo lockup). Always whole-pixel, always currentColor.
- **Icons in production use across this landing page:** `mountain` (Swiss provenance), `lock` (anti-cloud), `arrow-right` (CTA forward motion), `check` (confirmation + spec list), `printer` (in-the-box), `package` (hardware section), `chevron-down` (select), `sparkles` (early-bird accent).
- The Emmma mark itself is a custom single-glyph SVG (see `assets/logo-emmma.svg`, also inlined in `ui_kits/landing/Sprite.jsx`) — a stylised aperture / capsule outline in patina. Sits in a `24×24` viewBox, can be inverted to bone on dark CTA panels.
- **No emoji. No unicode-as-icon** (no `★` or `→` rendered as type). Use a Lucide SVG, even for arrows.
- A small set of brand-specific assets lives in `assets/`: socials (`icon-twitter`, `icon-github`, `icon-linkedin`), chevron-down, hero/feature reference photography.

---

## Index — what's in this folder

| Path | What it is |
| --- | --- |
| `README.md` | This file — brand, voice, visual & content rules. |
| `SKILL.md` | Agent-Skills-compatible entry point. Read first if you're an AI agent. |
| `colors_and_type.css` | All CSS variables (color, type, spacing, radius, shadow, motion) + element defaults + atomic `.t-*` classes. The one-stop import. |
| `fonts/` | Archivo variable + italic TTFs + OFL license. |
| `assets/` | Brand mark, social icons, chevron, hero photography. |
| `preview/` | Design-system swatch / specimen / component cards rendered for review. |
| `ui_kits/landing/` | The early-bird investor / first-user landing-page UI kit (JSX components + interactive `index.html`). |

There are no slide templates in this system — none were attached. Ask if you'd like a deck template authored against these foundations.
