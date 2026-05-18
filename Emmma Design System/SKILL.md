---
name: emmma-design
description: Use this skill to generate well-branded interfaces and assets for Emmma — the Swiss-made, privacy-first, AI-curated photo memory device (anti-cloud, phygital). Contains essential design guidelines, colors, type, fonts, assets, and the landing-page UI kit. Suitable for production code, marketing surfaces, or throwaway prototypes / mocks.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. Start with `colors_and_type.css` (tokens + element defaults), then `preview/` (visual review cards for every surface concept), then `ui_kits/landing/` (the early-bird landing page recreation).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out of `assets/` and `fonts/` into your output and create static HTML files that import `colors_and_type.css`. Lean on the atomic `.t-*` type classes and the CSS variables — they are the contract.

If working on production code, copy assets, import `colors_and_type.css` as your tokens layer, lift the JSX components in `ui_kits/landing/*.jsx` as starting points, and follow the Voice + Visual rules in `README.md` to extend the system.

If the user invokes this skill without any other guidance, ask them what they want to build or design (landing page section? product page? investor email? in-app screen?), ask 5–10 focused questions (audience, surface, dark/light, copy length, CTA), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need. Remember: **no emoji**, **Emmma with three Ms**, **anti-cloud framing**, and **specificity over generality** in every line of copy.
