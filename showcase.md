---
theme: ./
title: Observability in Action
colorSchema: light
fonts:
  sans: Space Grotesk
  mono: Space Mono
event: "Web Summer Camp 2026"
subheading: "Your entry to observability"
speakers:
  - name: Indermohan Singh
    role: Lead Developer Advocate @Dynatrace
  - name: Dani Coll
    role: Lead Developer Advocate @Dynatrace
---

# Observability in Action

---
layout: section
heading: Layouts
---

# Layouts

---
layout: default
heading: default
---

# Default Layout

The default layout for content slides. Use `heading` in frontmatter — never `title` (Slidev reserves that for navigation).

```md
---
layout: default
heading: My Slide Title
---
Your content here.
```

- Global `--slide-padding` (40px) applied automatically to every layout
- Use layout components (`Stack`, `Row`, `Grid`) for structure inside slides
- Full-bleed layouts (`cover`, `intro`, `closing`) opt out of padding

---
layout: two-col
heading: two-col
---

# Two-Column Layout

Use `two-col` for side-by-side content. Write left content first, then `::right::`.

Works great for: code + explanation, before/after, diagram + notes.

::right::

```md
---
layout: two-col
heading: Comparing Things
---

Left column content here.

::right::

Right column content here.
```

Both columns share the same top alignment and safe padding.

---
layout: section
heading: Section Divider
---

Use `layout: section` with `heading` in frontmatter. The large watermark number auto-increments from Slidev's slide counter.

---
layout: quote
---

> Design is not just what it looks like and feels like. Design is how it works.

— Steve Jobs

---
layout: center
---

# Centered Layout

Use `layout: center` for a focused single-message slide. Content is constrained to ~790px and centered on both axes.

---
layout: intro
---

# Intro Layout

Use for speaker bio slides — typically the second slide after the cover.

<Avatar name="Indermohan Singh" role="Developer Experience" />

---
layout: closing
---

# Thanks for watching

<CTAButton href="https://inders.in" text="inders.in" />

::footer::

indermohan.singh@dynatrace.com

---
layout: statement
---

Design tokens are the **single source of truth** for every visual decision in this theme.

---
layout: section
heading: Design Tokens
---

# Design Tokens

Color · Spacing · Shape · Typography · Motion

---
layout: two-col
heading: Semantic Color Tokens
---

## Semantic tokens

Defined in `styles/tokens.css`. All components use only these — never raw palette values.

| Token | Light | Dark |
|---|---|---|
| `--primary` | `turquoise-900` | `turquoise-500` |
| `--fg-default` | `grey-100` | `grey-1500` |
| `--fg-muted` | `grey-700` | `grey-900` |
| `--fg-secondary` | `maroon-900` | `maroon-400` |
| `--bg-default` | `grey-1500` | `grey-100` |
| `--bg-surface` | `grey-1400` | `grey-400` |
| `--bg-elevated` | `grey-1500` | `grey-500` |
| `--outline-color` | `grey-1300` | `grey-600` |

::right::

## Raw palette swatches

<Stack gap="sm" style="margin-top:var(--space-2)">
  <Row gap="sm" v-for="[tok, label] in [
    ['--turquoise-800','turquoise-800'],
    ['--maroon-800','maroon-800'],
    ['--blue-800','blue-800'],
    ['--purple-800','purple-800'],
    ['--grey-500','grey-500'],
  ]" :key="tok">
    <div :style="`width:36px;height:36px;border-radius:var(--shape-sm);background:var(${tok});flex-shrink:0`"></div>
    <code style="font-size:0.75em;align-self:center">{{ label }}</code>
  </Row>
</Stack>

## Gradients

<Stack gap="sm" style="margin-top:var(--space-4)">
  <div style="height:36px;border-radius:var(--shape-md);background:var(--primary-gradient)"></div>
  <code style="font-size:0.7em">--primary-gradient</code>
  <div style="height:36px;border-radius:var(--shape-md);background:var(--primary-gradient-soft)"></div>
  <code style="font-size:0.7em">--primary-gradient-soft</code>
</Stack>

---
layout: two-col
heading: Spacing · Shape · Elevation
---

## Spacing (8-point grid)

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px — `--slide-padding` |
| `--space-12` | 48px |
| `--space-16` | 64px |

::right::

## Shape scale

<Row gap="sm" style="margin-top:var(--space-2);flex-wrap:wrap">
  <div v-for="[tok, label] in [['--shape-xs','xs'],['--shape-sm','sm'],['--shape-md','md'],['--shape-lg','lg'],['--shape-xl','xl'],['--shape-2xl','2xl'],['--shape-full','full']]" :key="tok" style="text-align:center">
    <div :style="`width:48px;height:48px;background:var(--primary);border-radius:var(${tok})`"></div>
    <code style="font-size:0.6em;display:block;margin-top:4px">{{ label }}</code>
  </div>
</Row>

## Elevation

<Row gap="sm" style="margin-top:var(--space-4);align-items:center">
  <div v-for="n in [1,2,3,4,5]" :key="n"
    :style="`width:52px;height:52px;border-radius:var(--shape-md);background:var(--bg-elevated);box-shadow:var(--elevation-${n});display:flex;align-items:center;justify-content:center;font-size:0.8em;font-weight:600`">
    {{ n }}
  </div>
</Row>

## Type scale

| Token | Size | Weight |
|---|---|---|
| `display` | 56px | 700 |
| `headline` | 36px | 700 |
| `title` | 24px | 600 |
| `body` | 16px | 400 |
| `label` | 12px | 500 |

---
layout: section
heading: Layout Components
---

# Layout Components

`Stack` · `Row` · `Grid` · `Center` · `Spacer`

---
layout: two-col
heading: Stack · Row · Grid
---

## Stack — vertical flex

```html
<Stack gap="md" align="start|center|end|stretch"
       justify="start|center|end|between|around">
```

## Row — horizontal flex

```html
<Row gap="md" align="start|center|end|stretch|baseline"
     justify="start|center|end|between|around" wrap>
```

## Grid — CSS grid

```html
<Grid cols="2" gap="md" rowGap="lg"
      align="start|center|end|stretch">
<!-- cols: number or raw template e.g. "1fr 2fr" -->
```

::right::

## Gap prop → space token

| `gap` prop | Token | Value |
|---|---|---|
| `xs` | `--space-2` | 8px |
| `sm` | `--space-3` | 12px |
| `md` | `--space-4` | 16px |
| `lg` | `--space-6` | 24px |
| `xl` | `--space-8` | 32px |
| `2xl` | `--space-12` | 48px |

## Live example

<Grid cols="3" gap="md" style="margin-top:var(--space-4)">
  <Card variant="filled"><strong>A</strong></Card>
  <Card variant="filled"><strong>B</strong></Card>
  <Card variant="filled"><strong>C</strong></Card>
  <Card variant="filled"><strong>D</strong></Card>
  <Card variant="filled"><strong>E</strong></Card>
  <Card variant="filled"><strong>F</strong></Card>
</Grid>

---
layout: two-col
heading: Center · Spacer
---

## Center

Centers slot content along a given axis.

```html
<Center axis="both">        <!-- default -->
<Center axis="horizontal">
<Center axis="vertical">
```

<Center axis="both" style="height:100px;background:var(--bg-surface);border-radius:var(--shape-lg);margin-top:var(--space-4)">
  <Chip>I'm centered</Chip>
</Center>

::right::

## Spacer

`<Spacer />` has `flex: 1`, pushing siblings apart. `<Spacer size="lg" />` is a fixed gap.

```html
<!-- flex spacer — pushes Right to the end -->
<Row gap="md">
  <Chip>Left</Chip>
  <Spacer />
  <Chip>Right</Chip>
</Row>

<!-- fixed gap -->
<Spacer size="lg" />
```

<Row gap="md" style="background:var(--bg-surface);padding:var(--space-4);border-radius:var(--shape-lg);margin-top:var(--space-6)">
  <Chip>Left</Chip>
  <Spacer />
  <Chip>Right</Chip>
</Row>

---
layout: section
heading: UI Components
---

# UI Components

`Chip` · `Card` · `Callout` · `Divider` · `Avatar`

---
layout: two-col
heading: Chip
---

## Live

<Stack gap="sm" style="margin-top:var(--space-4)">
  <Row gap="sm">
    <Chip variant="primary">primary</Chip>
    <Chip variant="secondary">secondary</Chip>
  </Row>
  <Row gap="sm">
    <Chip variant="outline">outline</Chip>
    <Chip variant="surface">surface</Chip>
  </Row>
  <Row gap="sm">
    <Chip variant="primary" icon="i-carbon:star">With icon</Chip>
  </Row>
</Stack>

::right::

```html
<Chip variant="primary">primary</Chip>
<Chip variant="secondary">secondary</Chip>
<Chip variant="outline">outline</Chip>
<Chip variant="surface">surface</Chip>

<!-- with UnoCSS icon -->
<Chip variant="primary" icon="i-carbon:star">
  Featured
</Chip>
```

| Prop | Options | Default |
|---|---|---|
| `variant` | `primary` `secondary` `outline` `surface` | `primary` |
| `icon` | UnoCSS icon class | — |

---
layout: two-col
heading: Card
---

## Live

<Stack gap="sm" style="margin-top:var(--space-4)">
  <Card variant="filled" padding="sm"><strong>filled</strong> — bg-surface</Card>
  <Card variant="elevated" padding="sm"><strong>elevated</strong> — shadow + bg-elevated</Card>
  <Card variant="outlined" padding="sm"><strong>outlined</strong> — outline-color border</Card>
  <Card variant="tonal" padding="sm"><strong>tonal</strong> — tab-active background</Card>
</Stack>

::right::

```html
<Card variant="filled" shape="xl" padding="md">
  Content here
</Card>
```

| Prop | Options | Default |
|---|---|---|
| `variant` | `filled` `elevated` `outlined` `tonal` | `filled` |
| `shape` | `sm` `md` `lg` `xl` `2xl` | `xl` |
| `padding` | `sm` `md` `lg` | `md` |

---
layout: two-col
heading: Callout
---

## Live

<Stack gap="sm" style="margin-top:var(--space-2)">
  <Callout type="note">Informational context.</Callout>
  <Callout type="tip" title="Pro tip">Custom title overrides the label.</Callout>
  <Callout type="caution">Double-check before shipping.</Callout>
  <Callout type="danger" title="Breaking">This API was removed in v2.</Callout>
</Stack>

::right::

```html
<Callout type="note">
  Informational message.
</Callout>

<Callout type="tip" title="Pro tip">
  Custom title overrides default label.
</Callout>

<Callout type="caution">Warning message.</Callout>

<Callout type="danger" title="Breaking change">
  Error message.
</Callout>
```

| Prop | Options | Default |
|---|---|---|
| `type` | `note` `tip` `caution` `danger` | `note` |
| `title` | string — overrides default label | — |

---
layout: two-col
heading: Divider · Avatar
---

## Divider

<Stack gap="sm" style="margin-top:var(--space-4)">
  <Divider variant="gradient" />
  <Divider variant="primary" />
  <Divider variant="subtle" label="or" />
</Stack>

```html
<Divider variant="gradient" />
<Divider variant="primary" />
<Divider variant="subtle" label="or" />
```

`gradient` (default) · `primary` · `subtle`

::right::

## Avatar

<Stack gap="md" style="margin-top:var(--space-4)">
  <Avatar name="Indermohan Singh" role="Developer Experience" size="sm" />
  <Avatar name="Indermohan Singh" role="Developer Experience" size="md" />
  <Avatar name="Indermohan Singh" role="Developer Experience" size="lg" />
</Stack>

```html
<!-- initials fallback -->
<Avatar name="Indermohan Singh"
        role="Developer Experience"
        size="md" />

<!-- with image -->
<Avatar src="/profile.webp"
        name="Indermohan Singh"
        size="lg" shape="rounded" />
```

| Prop | Options | Default |
|---|---|---|
| `size` | `sm` `md` `lg` | `md` |
| `shape` | `circle` `rounded` | `circle` |

---
layout: section
heading: New Components
---

# New Components

`Stepper` · `Timeline` · `Stats` · `CTAButton` · `HandsOnBadge` · `PromptBadge` · `SplitCallout` · `IconGrid`

---
layout: two-col
heading: Stepper
---

## Live

<Stepper style="margin-top:var(--space-4)">
  <StepperItem v-click title="Install the theme">
    `npm install slidev-theme-inders` then set `theme: inders` in frontmatter.
  </StepperItem>
  <StepperItem v-click title="Configure your deck">
    Set fonts, color schema, and global settings.
  </StepperItem>
  <StepperItem v-click title="Start building">
    Use layouts and components to compose slides.
  </StepperItem>
</Stepper>

::right::

```html
<Stepper color="teal" showAll>
  <StepperItem v-click title="Step one">
    Body shown on active step.
  </StepperItem>
  <StepperItem v-click title="Step two">
    Past steps fade to 40% opacity.
  </StepperItem>
  <StepperItem v-click title="Step three" />
</Stepper>
```

| Prop | Options | Default |
|---|---|---|
| `color` | `teal` `primary` `secondary` `blue` `purple` | cycles |
| `compact` | boolean | `false` |
| `showAll` | past items stay full opacity | `false` |
| `loop` | draws a loop bracket | `false` |

**StepperItem props:** `title` (required), `accent` (same color options)

---
layout: two-col
heading: Timeline
---

## Live

<Timeline color="teal" showAll style="margin-top:var(--space-8)">
  <TimelineItem title="Research" />
  <TimelineItem title="Design" />
  <TimelineItem title="Prototype" />
  <TimelineItem title="Build" />
  <TimelineItem title="Ship" />
</Timeline>

::right::

```html
<Timeline color="teal">
  <TimelineItem v-click title="Research" />
  <TimelineItem v-click title="Design">
    Optional body text.
  </TimelineItem>
  <TimelineItem v-click title="Build" />
  <TimelineItem v-click title="Ship" />
</Timeline>
```

Each item animates in on v-click — the connecting line fills left-to-right as items reveal.

| Prop | Options | Default |
|---|---|---|
| `color` | `teal` `primary` `secondary` `blue` `purple` | `teal` |
| `showAll` | skip v-click, show all | `false` |

**TimelineItem props:** `title` (required), default slot for body text

---
layout: two-col
heading: Stats
---

## Live

<Row gap="lg" justify="center" style="margin-top:var(--space-10)">
  <Stats value="98%" label="Satisfaction" trend="↑ 4%" accent="teal" />
  <Stats value="3.2×" label="Faster deploys" trend="↑ 60%" />
  <Stats value="< 1s" label="Cold start" accent="blue" />
</Row>

::right::

```html
<Row gap="lg" justify="center">
  <Stats
    value="98%"
    label="Satisfaction"
    trend="↑ 4%"
    accent="teal"
  />
  <Stats value="3.2×" label="Faster deploys" trend="↑ 60%" />
  <Stats value="< 1s" label="Cold start" accent="blue" />
</Row>
```

| Prop | Options | Default |
|---|---|---|
| `value` | string | required |
| `label` | string | required |
| `trend` | string e.g. `↑ 12%` | — |
| `accent` | `primary` `teal` `secondary` `blue` `purple` | `primary` |

---
layout: two-col
heading: CTAButton
---

## Live

<Stack gap="md" style="margin-top:var(--space-6)">
  <CTAButton href="https://inders.in" text="Visit inders.in" />
  <CTAButton href="https://sli.dev" text="Slidev docs" color="var(--fg-secondary)" />
</Stack>

::right::

```html
<!-- default: --primary background -->
<CTAButton href="https://inders.in" text="Visit inders.in" />

<!-- custom color -->
<CTAButton href="https://sli.dev" text="Slidev docs"
           color="var(--fg-secondary)" />

<!-- custom text color -->
<CTAButton href="..." text="Dark button"
           color="var(--grey-200)"
           textColor="var(--grey-1500)" />

<!-- with icon slot -->
<CTAButton href="..." text="GitHub">
  <template #icon><lucide-github /></template>
</CTAButton>
```

| Prop | Default |
|---|---|
| `href` | required |
| `text` | required |
| `color` | `var(--primary)` |
| `textColor` | `#fff` |
| `target` | `_blank` |

---
layout: two-col
heading: HandsOnBadge · PromptBadge
---

## HandsOnBadge

Signal interactive exercises with an optional time estimate.

<Stack gap="sm" style="margin-top:var(--space-4)">
  <HandsOnBadge />
  <HandsOnBadge :time="15" />
  <HandsOnBadge :time="1" unit="hr" />
</Stack>

## PromptBadge

Label prompt blocks in AI/LLM workshop slides.

<PromptBadge />

::right::

```html
<!-- no time -->
<HandsOnBadge />

<!-- with duration -->
<HandsOnBadge :time="15" />
<HandsOnBadge :time="1" unit="hr" />
```

| Prop | Default |
|---|---|
| `time` | — (hidden if omitted) |
| `unit` | `min` |

```html
<PromptBadge />
```

No props — always renders "Prompt" with a sparkles icon in teal.

---
layout: two-col
heading: SplitCallout
---

## Live

<SplitCallout
  heading="How it works"
  left="Input is tokenised and added to the context window"
  right="The model generates tokens conditioned on the full context"
>
  <lucide-cpu />
</SplitCallout>

::right::

```html
<!-- static — all visible at once -->
<SplitCallout
  heading="How it works"
  left="Left callout text"
  right="Right callout text"
>
  <lucide-cpu />   <!-- any icon in the centre circle -->
</SplitCallout>

<!-- animated — centre → left (v-click) → right (v-click) -->
<SplitCallout animate
  heading="..."
  left="..."
  right="..."
>
  <lucide-cpu />
</SplitCallout>
```

| Prop | Notes |
|---|---|
| `heading` | optional title above the panel |
| `left` / `right` | callout text (required) |
| `animate` | enables v-click step-by-step reveal |

---
layout: two-col
heading: IconGrid
---

## Live

<IconGrid :items="[
  { icon: 'lucide:layers', text: 'Tokens' },
  { icon: 'lucide:component', text: 'Components' },
  { icon: 'lucide:layout', text: 'Layouts' },
  { icon: 'lucide:palette', text: 'Colors' },
]" :columns="2" style="margin-top:0" />

::right::

```html
<IconGrid :items="[
  { icon: 'lucide:layers',    text: 'Design Tokens' },
  { icon: 'lucide:component', text: 'Components' },
  { icon: 'lucide:layout',    text: 'Layouts' },
  { icon: 'lucide:palette',   text: 'Color System' },
]" />

<!-- fixed column count -->
<IconGrid :columns="4" :items="[...]" />
```

- Icons resolved from Lucide via `lucide:<kebab-name>`
- Default grid: `auto-fit, minmax(10rem, 1fr)`
- Icon background: `--primary-gradient-soft`
- Icon color: `--primary`
- Text is `v-html` — safe for simple markup

---
layout: section
heading: Keyboard Components
---

# Keyboard Components

`KbdKey` · `KbdShortcut` · `ShortcutTable`

---
layout: two-col
heading: KbdKey · KbdShortcut
---

## KbdKey

<Row gap="sm" style="margin-top:var(--space-4);margin-bottom:var(--space-6)">
  <KbdKey k="⌘" />
  <KbdKey k="Shift" />
  <KbdKey k="K" />
</Row>

```html
<KbdKey k="⌘" />
<KbdKey k="Shift" />
<KbdKey k="K" />
```

## KbdShortcut

<KbdShortcut
  label="Open command palette"
  :osx="['⌘', 'K']"
  :windows="['Ctrl', 'K']"
  :linux="['Ctrl', 'K']"
  collapseDuplicates
  style="margin-top:var(--space-4)"
/>

::right::

```html
<KbdShortcut
  label="Open command palette"
  :osx="['⌘', 'K']"
  :windows="['Ctrl', 'K']"
  :linux="['Ctrl', 'K']"
  collapseDuplicates
/>
```

| Prop | Notes |
|---|---|
| `osx` / `windows` / `linux` | `string[]` key arrays |
| `label` | optional description above rows |
| `size` | `sm` `md` `lg` `xl` `2xl` — scales OS icons |
| `collapseDuplicates` | hides rows identical to previous |

---
layout: two-col
heading: ShortcutTable
---

## Live

<ShortcutTable
  title="Common Claude Code shortcuts"
  :shortcuts="[
    { label: 'Submit prompt',        osx: ['Return'],       windows: ['Enter'],         linux: ['Enter'] },
    { label: 'New line',             osx: ['⇧', 'Return'],  windows: ['Shift', 'Enter'], linux: ['Shift', 'Enter'] },
    { label: 'Interrupt generation', osx: ['Esc'],          windows: ['Esc'],            linux: ['Esc'] },
    { label: 'Clear conversation',   osx: ['⌘', 'K'],       windows: ['Ctrl', 'K'],      linux: ['Ctrl', 'K'] },
  ]"
/>

::right::

```html
<ShortcutTable
  title="Common shortcuts"
  :shortcuts="[
    {
      label: 'Submit prompt',
      osx: ['Return'],
      windows: ['Enter'],
      linux: ['Enter'],
    },
    {
      label: 'New line',
      osx: ['⇧', 'Return'],
      windows: ['Shift', 'Enter'],
      linux: ['Shift', 'Enter'],
    },
  ]"
/>
```

| Prop | Notes |
|---|---|
| `shortcuts` | `{ label, osx?, windows?, linux? }[]` |
| `title` | optional heading above the table |

---
layout: section
heading: Typography
---

# Typography

---
layout: two-col
heading: Type Scale · Code
---

# H1 — Display 56px/700

## H2 — Headline 36px/700

### H3 — Title 24px/600

Body text — Space Grotesk 16px/400. Line height 1.6.

`Inline code` uses Space Mono with a teal-tinted bg from `--bg-inline-code`.

> Blockquote with `--primary` left accent.

::right::

```ts
// Code blocks: vitesse-dark / vitesse-light
const greet = (name: string) =>
  `Hello, ${name}!`
```

**Lists**

- Unordered: 0.45em circle in `--primary`
- Second level indented by `--space-4`

1. Ordered: circle counter in `--primary`
2. Matches unordered bullet size

**Fonts**

| Role | Font |
|---|---|
| Display / Headings | Bricolage Grotesque |
| Body | Space Grotesk |
| Mono / Code | Space Mono |

---
layout: section
heading: Quick Reference
---

# Quick Reference

---
layout: two-col
heading: Component Reference
---

## UI Components

| Component | Key props |
|---|---|
| `Chip` | `variant`, `icon` |
| `Card` | `variant`, `shape`, `padding` |
| `Callout` | `type`, `title` |
| `Divider` | `variant`, `label` |
| `Avatar` | `name`, `src`, `size`, `shape` |

## New Components

| Component | Key props |
|---|---|
| `Stepper` + `StepperItem` | `color`, `compact`, `showAll`, `loop` |
| `Timeline` + `TimelineItem` | `color`, `showAll` |
| `Stats` | `value`, `label`, `trend`, `accent` |
| `CTAButton` | `href`, `text`, `color`, `textColor` |
| `HandsOnBadge` | `time`, `unit` |
| `PromptBadge` | — |
| `SplitCallout` | `heading`, `left`, `right`, `animate` |
| `IconGrid` | `items`, `columns` |

::right::

## Keyboard Components

| Component | Key props |
|---|---|
| `KbdKey` | `k` |
| `KbdShortcut` | `osx`, `windows`, `linux`, `label`, `size`, `collapseDuplicates` |
| `ShortcutTable` | `shortcuts`, `title` |

## Layout Components

| Component | Key props |
|---|---|
| `Stack` | `gap`, `align`, `justify` |
| `Row` | `gap`, `align`, `justify`, `wrap` |
| `Grid` | `cols`, `gap`, `rowGap`, `align` |
| `Center` | `axis` |
| `Spacer` | `size` |

## Layouts

| Layout | Notes |
|---|---|
| `cover` | `event`, `subheading`, `speakers[]` |
| `intro` | bio / speaker slide |
| `default` | `heading` prop |
| `two-col` | `heading`, `::right::` slot |
| `section` | `heading` — auto watermark number |
| `center` | centered single message |
| `quote` | blockquote style |
| `closing` | mirrors cover, `::footer::` slot |
| `statement` | bold text + `<strong>` in `--primary` |

All components are **auto-imported** — no `import` statement needed.

---
layout: closing
---

# Start building

```yaml
---
theme: inders
---
```

::footer::

github.com/imsingh · inders.in
