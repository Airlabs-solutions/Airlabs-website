# AirLabs Solutions — Design System

Source of truth for colors, type, spacing, and motion. Defined in
`tailwind.config.ts` (tokens) and `src/app/globals.css` (CSS vars + semantic
mapping). Update here first, then propagate.

## Brand colors

Everything in the palette derives from two brand colors — no unrelated hues
are introduced.

- **Charcoal** `#1A1A1A` — primary text, dark sections, nav
- **Steel navy** `#1B4E71` — accent, buttons, icon backgrounds, gradient
  endpoints

### Generated scales

`charcoal` (neutral ramp, 900 = brand charcoal):

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|
| #FAFAFA | #F2F2F2 | #E5E5E5 | #D4D4D4 | #A3A3A3 | #737373 | #525252 | #404040 | #262626 | **#1A1A1A** | #0D0D0D |

`navy` (steel-blue ramp, 600 = brand navy):

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|
| #EEF6FB | #D9EBF7 | #B3D7EF | #81BCE4 | #429AD6 | #2472A8 | **#1B4E71** | #133D5A | #0E2D43 | #0A1F2E | #06131C |

Use `navy-50`–`navy-300` for gradient tops/glows/light accents, `navy-700`–`950`
for depth and dark-section accents.

### Semantic tokens (theme-aware, use these in components — not raw scale values)

Defined as HSL CSS vars in `globals.css`, exposed as Tailwind colors:

| Token | Light | Dark |
|---|---|---|
| `background` | white | `charcoal-950` |
| `foreground` | `charcoal-900` | white |
| `surface` | `charcoal-100` | `charcoal-900` |
| `muted` / `muted-foreground` | `charcoal-100` / `charcoal-500` | `charcoal-800` / `charcoal-400` |
| `border` | `charcoal-200` | `charcoal-700` |
| `accent` / `accent-foreground` | `navy-600` / white | `navy-400` (brighter for dark contrast) / `charcoal-900` |

No red/green semantic colors — success/error/warning states should be built
from navy/charcoal tints (e.g. `navy-600` for confirmation, `charcoal-500` for
neutral warning). Flag to the team if a state genuinely needs a true
red/amber (e.g. destructive delete) before improvising one.

## Typography

- **Headings**: `Poppins` SemiBold (`font-display`, weight 600) — used for
  `h1`–`h6`, large stat numbers, and display lockups.
- **Body / UI**: `Inter` Regular (`font-sans`, weight 400) — default body font.
  Medium/SemiBold Inter weights are also loaded for labels and nav chrome.
- **Buttons**: `Poppins` Medium (`font-display` + `font-medium`, weight 500) —
  applied on the shared `<Button>` component.
- Loaded via `next/font/google` in `src/app/layout.tsx`, exposed as
  `--font-display` / `--font-sans`.
- Large headlines use `tracking-tight` and `text-balance` for confident wrapping.

## Spacing & layout

- Base unit: 4px (Tailwind default scale).
- Section vertical rhythm: `py-24 md:py-32` (see `<Section>`).
- Container: centered, max-width 1440px, responsive side padding
  (`1.25rem` → `3rem`). Use the `<Container>` component, not raw `container`.
- Breakpoints: Tailwind defaults — test at 375px (below `sm`), 768px (`md`),
  1024px (`lg`), 1440px (`2xl` container cap).

## Motion (`src/lib/motion.ts`)

Reusable Framer Motion variants — import these rather than inlining
transitions, so easing/duration stay consistent site-wide:

- `fadeUp` — opacity + 28px rise, the default scroll-reveal
- `staggerContainer(stagger, delayChildren)` — wrap groups of `fadeUp`
  children
- `defaultViewport` — `{ once: true, amount: "some" }`, the standard
  `whileInView` viewport config. Any visible part of the block starts the
  reveal, so tall sections are not stuck invisible on a short screen.
- Shared ease curve: `EASE = [0.22, 1, 0.36, 1]`

## Logo & peak motif

- Assets: `public/logos/airlabs-light.png` (charcoal-on-transparent, for
  light backgrounds) and `airlabs-dark.png` (white-on-transparent, for dark
  backgrounds), both auto-cropped to content bounds.
- Use the `<Logo>` component (`src/components/ui/logo.tsx`) — it renders
  both variants stacked and swaps them with `dark:` classes to avoid a
  flash-of-wrong-logo.
- The angular "peak" of the A is reused as a recurring accent shape (see
  `.clip-peak` utility in `globals.css`, and the animated SVG peak-outline in
  the Hero background) — keep new instances subtle (low opacity / thin
  stroke), not literal logo repetition.

## Dark mode

Class-based (`darkMode: "class"`), toggled via `useTheme()`
(`src/hooks/use-theme.ts`) which sets `.dark` on `<html>` and persists to
`localStorage`. An inline script in `layout.tsx` applies the saved theme
before hydration to prevent a flash of the wrong theme.
