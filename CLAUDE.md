# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server with live preview of example.md
npm run build        # Build the theme (outputs to dist/)
npm run export       # Export example.md as PDF
npm run screenshot   # Export example.md as PNG
```

## Architecture

This is a [Slidev](https://sli.dev) theme package (`slidev-theme-inders`). Themes are consumed as npm packages by Slidev presentations via `theme: inders` in frontmatter.

**Entry points Slidev automatically picks up:**

- `styles/index.ts` — import order: `layouts-base.css` → `tokens.css` → `layout.css`
- `styles/tokens.css` — single source of truth: raw palette, semantic tokens (light + dark), shape scale, type scale, elevation, motion, spacing
- `styles/layout.css` — base styles for `.slidev-layout` elements, consumes tokens
- `layouts/*.vue` — slide layout components; Slidev merges these with built-in layouts
- `components/*.vue` — Vue components auto-available in slides without imports
- `setup/shiki.ts` — syntax highlighting themes (dark: `vitesse-dark`, light: `vitesse-light`)
- `public/` — static assets served at `/` (e.g. `/profile.webp`)

**Token system** mirrors the color system from inders.in exactly. Semantic tokens: `--primary`, `--fg-default`, `--fg-muted`, `--fg-secondary`, `--fg-primary`, `--fg-button-default`, `--bg-default`, `--bg-surface`, `--bg-elevated`, `--bg-color-tab-active`, `--outline-color`, `--primary-gradient`. Dark mode uses `.dark` (Slidev's class, not `[data-theme=dark]`).

**Layouts:** `cover`, `intro`, `default`, `section`, `two-col`, `quote`, `center`. Use `heading` not `title` in frontmatter for layout headings — Slidev reserves `title` for navigation.

**UI components:** `Chip`, `Card`, `Callout`, `Divider`, `Avatar`.

**Layout components:** `Flex` (generic flexbox), `Stack` (vertical flex shorthand), `Row` (horizontal flex shorthand), `Grid` (CSS grid), `Center` (centers content), `Spacer` (flexible gap). All accept a `gap` prop with named sizes: `xs` `sm` `md` `lg` `xl` `2xl` (map to `--space-*` tokens). Use these instead of raw Tailwind utility classes for layout.

**Safe slide padding** — `--slide-padding` (= `--space-10`, 40px) is applied globally to every `.slidev-layout`. Do not add manual padding to layouts unless overriding this. Full-bleed layouts (`cover`, `intro`) set `padding: 0` to opt out.

**Layout component reference:**

```html
<!-- Stack: vertical flex -->
<Stack gap="md" align="start|center|end|stretch" justify="start|center|end|between|around">

<!-- Row: horizontal flex -->
<Row gap="md" align="start|center|end|stretch|baseline" justify="start|center|end|between|around" wrap>

<!-- Grid: CSS grid -->
<Grid cols="2" gap="md" rowGap="lg" align="start|center|end|stretch">
<!-- cols accepts a number (equal columns) or a raw template string e.g. "1fr 2fr" -->

<!-- Center: centers slot content -->
<Center axis="both|horizontal|vertical">

<!-- Spacer: fills remaining space or adds a fixed gap -->
<Spacer />            <!-- flex: 1, pushes siblings apart -->
<Spacer size="lg" />  <!-- fixed size gap -->
```

Gap sizes → spacing tokens: `xs`=8px `sm`=12px `md`=16px `lg`=24px `xl`=32px `2xl`=48px

**Development workflow:** Edit `example.md` to test. The dev server hot-reloads on changes to layouts, components, CSS, and the example.

## Layout & spacing principles

**8-point grid** — all spacing uses `--space-*` tokens which are multiples of 4px (effectively an 8pt grid). Never use arbitrary pixel values; pick the nearest token.

**Golden ratio content width** — at 1280px canvas width, the ideal content column is ~790px (1280 ÷ 1.618). Slide padding of `--space-12` (48px) each side lands at 1184px inner width, so `max-width` on content blocks should stay around 760–800px. This is already set on `quote`, `center`, and `cover`.

**Rule of thirds** — anchor titles and focal content to the upper or lower third of the slide, not dead center. Vertically centered layouts (center, quote) are the exception, not the rule.

**Typographic scale** — body (16px) → title (24px) → headline (36px) → display (56px) follows a ~1.5× modular scale. Don't introduce intermediate sizes outside this scale.

**Visual counterbalance** — large decorative elements (section number, quote mark) are intentionally offset to one side. Place the main content in the opposing optical zone so the slide feels balanced without being symmetrical.

**Borders** — never add `border-left`, `border-top`, `border-right`, or `border-bottom` unless explicitly requested. Use `box-shadow: inset` for accent lines (e.g. `inset 3px 0 0 var(--primary)`) when a directional accent is needed, and only when asked.

## Component rules

Before creating a new component:
1. Check if an existing component (`Chip`, `Card`, `Callout`, `Divider`, `Avatar`) can be used or composed.
2. If a new component is needed, create a generic reusable component — not a domain-specific one. For example, prefer `StatBlock` over `SpeakerStat`, `Timeline` over `TalkTimeline`.
3. New components go in `components/` and are auto-available in slides.
