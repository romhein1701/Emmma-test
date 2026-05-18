# Emmma Landing — UI Kit

> Early-bird investor / first-user landing page for **Emmma** — the Swiss-made, privacy-first photo memory device.

## Goal
Convert a quiet, curious visit into a **pre-order or an early-access email**. Every section earns its place. Nothing scrolls past 6 sections.

## What's here

| File | What it is |
| --- | --- |
| `index.html` | The interactive landing page demo. Loads React + Babel, mounts `App.jsx`. |
| `tokens.css` | One-line import of the root system + component primitives, scoped to the kit. |
| `App.jsx` | Composition of all sections, reservation flow state, slot for tweaks. |
| `Header.jsx` | Sticky 73px header, logo + small nav + "Reserve" CTA. |
| `Hero.jsx` | Display headline, supporting paragraph, dual CTA, device hero shot, anti-cloud trust strip. |
| `Capsules.jsx` | 3-up live preview of the capsule UI (the product's central UI noun). |
| `Manifesto.jsx` | "Lives with you. Not with them." — anti-cloud principle list. |
| `Specs.jsx` | Hardware specs in a grid: storage, AI, dimensions, materials, country of make. |
| `Reserve.jsx` | The conversion form. Email + country + finish radio + count. Has interactive state. |
| `Footer.jsx` | Hairline-bordered, three columns, copyright. |

## Sections (top to bottom)
1. Header
2. Hero
3. Capsules — live preview gallery
4. Manifesto — anti-cloud principles
5. Specs — what's in the box
6. Reserve — the form
7. Footer

## What it does
- The **Reserve** form is functional client-side: enter an email, pick a finish + quantity, click **Reserve your capsule** — you get a calm confirmation panel with a fake order number (`#EM-2026-04F2`). Click "Reserve another" to reset.
- The header **Reserve** button smooth-scrolls to the form section.
- Counts on the right side of the form (`213 / 500 batch 01`) animate down by one when an order is placed.
- The Capsule cards have hover lift; no other motion (per system).

## What we cut
- Testimonials. Emmma has no customers yet; pre-launch landing pages should not lie.
- Pricing table. There is one price (€349, early-bird). It lives inside the reserve form.
- Newsletter signup. The reserve form IS the email capture; a second one would dilute it.
- Carousel anything. Three capsules fit side-by-side; that's the demo.

## Cosmetic-only caveats
- Reservation submission is local state, not a real backend.
- Country dropdown is a placeholder list (EU shipping only for batch 01 by current copy).
- The "ambient speaker" and "frame" product extensions are not represented yet — ask if you want them added.
