# AirLabs Solutions — marketing site

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

- Design tokens, palette, type scale, spacing, and motion variants: see
  `design-system.md`. Treat it as the source of truth — update it first when
  changing a token, don't just edit `tailwind.config.ts` in isolation.
- The site is a single page (`src/app/page.tsx`) composed of section
  components from `src/components/sections/`, in the order specified by the
  original brief (Hero → Logo marquee → Services → Process → Portfolio →
  Stats → Testimonials → Tech stack → CTA banner → Footer).
- Content lives in `src/data/*.ts` as typed arrays/objects — edit data files
  to change copy, not JSX, so real content can be dropped in later without
  touching component code.
- Reusable primitives live in `src/components/ui/` (`Button`, `Container`,
  `Section`, `Logo`, …). Reach for these before writing new one-off markup.
- Scroll-triggered reveals use `whileInView` with the shared variants in
  `src/lib/motion.ts` + `defaultViewport` — don't hand-roll new easing/timing
  per section.
- Dark mode is class-based; use the semantic color tokens
  (`background`/`foreground`/`surface`/`muted`/`border`/`accent`) rather than
  raw `charcoal-*`/`navy-*` scale values in component markup, so components
  stay theme-correct automatically.
- Logo assets are pre-cropped, transparent PNGs in `public/logos/`; always
  render them via the `<Logo>` component rather than `<Image>` directly, so
  the light/dark swap stays consistent.
