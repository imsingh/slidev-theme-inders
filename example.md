---
theme: ./
addons:
  - slidev-addon-fancy-arrow
  - slidev-addon-window-mockup
layout: cover
event: "Theme Showcase"
speakers:
  - name: "Indermohan Singh"
    role: "Lead Developer Advocate · Dynatrace"
    avatar: "/profile.webp"
themeConfig:
  footerAvatar: "/profile.webp"
  footerName: "Indermohan Singh"
---

# slidev-theme-inders
A modern, developer-focused Slidev theme.

---
layout: intro
name: "Indermohan Singh"
role: "Lead Developer Advocate · Dynatrace"
avatar: "/profile.webp"
bio: "Passionate about developer experience, observability, and making complex things simple."
social:
  website: "inders.in"
  github: "imsingh"
  twitter: "imsinghk7"
  linkedin: "imsinghk7"
---

---
layout: section
number: "01"
chip: "Layouts"
section: "Core Layouts"
---

# Core Layouts

The building blocks of every presentation.

---
layout: default
heading: Default Layout
---

The workhorse layout — a heading with a gradient underline, and a clean content area below.

- Use `heading` in frontmatter (not `title` — Slidev reserves that for navigation)
- Supports any content: text, components, code, grids
- Footer renders automatically from `themeConfig`

```yaml
---
layout: default
heading: My Slide Title
---
```

---
layout: two-col
heading: Two Columns
---

::left::

### Left column

Use `::left::` and `::right::` to fill each side independently. Great for code + explanation, before/after, or feature comparisons.

```ts
function greet(name: string) {
  return `Hello, ${name}!`
}
```

::right::

### Right column

Control the split ratio with the `split` prop — e.g. `split: 40/60` gives 40% left, 60% right.

<Callout type="tip">Both columns scroll independently if content overflows.</Callout>

---
layout: statement
---

# Good software is discovered, not designed.

The best APIs emerge from the problems they solve.

---
layout: statement
---

Ship early. **Iterate fast.** Learn always.

---
layout: quote
author: "Indermohan Singh"
role: "Lead Developer Advocate · Dynatrace"
---

"The best developer experience is the one that gets out of your way."

---
layout: center
chip: "Focused"
---

# Sometimes one idea is enough.

Use `layout: center` when the slide needs to breathe.

---
layout: section
number: "02"
chip: "Layouts"
section: "New Layouts"
---

# New Layouts

Three new layouts for richer visual storytelling.

---
layout: big-number
value: "98%"
label: "Developer satisfaction"
sublabel: "Based on 4,200 survey responses across 38 countries"
---

---
layout: big-number
value: "14ms"
label: "Median cold start"
sublabel: "Measured across 1M edge function invocations"
---

---
layout: image-full
image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1280&q=80"
overlay: 0.6
---

# The code is the craft.

Every detail matters — from the API surface to the error message.

---
layout: image-full
image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&q=80"
overlay: 0.45
position: "center 30%"
---

# Build in public.

Share what you learn. The community grows when you do.

---
layout: image-side
image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80"
side: right
split: "55/45"
heading: Image on the Right
---

Use `image-side` to pair a photo with content. Control which side the image sits on, and how the columns split.

```yaml
layout: image-side
image: /my-photo.jpg
side: right
split: 55/45
```

- Works great for case studies and context slides
- `position` prop controls the image crop anchor

---
layout: image-side
image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80"
side: left
split: "40/60"
heading: Image on the Left
position: "center 20%"
---

Flip the image to the left with `side: left`. Adjust the crop anchor with `position` — any valid CSS `background-position` value works.

```yaml
layout: image-side
image: /my-photo.jpg
side: left
split: 40/60
position: center top
```

---
layout: section
number: "03"
chip: "Components"
section: "Components"
---

# Components

Composable primitives for consistent, expressive slides.

---
layout: default
heading: Cards
---

<Grid cols="2" gap="lg" rowGap="lg">
  <Card variant="filled">
    <Stack gap="xs">
      <strong>Filled</strong>
      <p>Surface container background. Great for primary content.</p>
    </Stack>
  </Card>
  <Card variant="tonal">
    <Stack gap="xs">
      <strong>Tonal</strong>
      <p>Primary container background. Subtle emphasis.</p>
    </Stack>
  </Card>
  <Card variant="elevated">
    <Stack gap="xs">
      <strong>Elevated</strong>
      <p>Elevation shadow on surface. Creates visual hierarchy.</p>
    </Stack>
  </Card>
  <Card variant="outlined">
    <Stack gap="xs">
      <strong>Outlined</strong>
      <p>Border on clean surface. Lightweight and minimal.</p>
    </Stack>
  </Card>
</Grid>

---
layout: default
heading: Callouts & Chips
---

<Grid cols="2" gap="md" rowGap="md" class="mb-6">
  <Callout type="note" title="Note">Use for supplementary context.</Callout>
  <Callout type="tip" title="Tip">Use for helpful suggestions.</Callout>
  <Callout type="caution" title="Caution">Use for things to watch out for.</Callout>
  <Callout type="danger" title="Danger">Use for critical warnings.</Callout>
</Grid>

<Row gap="sm" wrap>
  <Chip variant="primary">Primary</Chip>
  <Chip variant="secondary">Secondary</Chip>
  <Chip variant="outline">Outline</Chip>
  <Chip variant="surface">Surface</Chip>
</Row>

---
layout: default
heading: Avatars & Dividers
---

<Stack gap="lg" align="center" style="max-width: 480px; margin: 0 auto;">
  <Avatar name="Indermohan Singh" role="Lead Developer Advocate" size="lg" src="/profile.webp" shape="rounded" />
  <Divider variant="gradient" />
  <Avatar name="Jane Doe" role="Engineer" size="md" />
  <Divider variant="primary" label="or" />
  <Avatar name="Alex Kim" size="sm" />
</Stack>

---
layout: default
heading: Fancy Arrows
---

Use `<FancyArrow>` from the addon to draw annotated arrows between elements.

<div style="position: relative; height: 200px; margin-top: 1rem;">
  <div style="position: absolute; left: 60px; top: 60px; background: var(--bg-surface); border: 1px solid var(--outline-color); border-radius: 8px; padding: 12px 20px;">
    Input
  </div>
  <div style="position: absolute; right: 60px; top: 60px; background: var(--bg-surface); border: 1px solid var(--outline-color); border-radius: 8px; padding: 12px 20px;">
    Output
  </div>
  <FancyArrow x1="160" y1="80" x2="920" y2="80" color="var(--primary)" label="transforms" />
</div>

---
layout: section
number: "04"
chip: "More Layouts"
section: "More Layouts"
---

# More Layouts

side-title, compare, agenda, bleed, logos.

---
layout: side-title
title: Why Observability Matters
---

When your app breaks at 3 AM, you have two choices: guess, or know.

Observability gives you the data to **know** — request traces, error rates, and latency distributions all pointing at the same root cause.

- No more `console.log` archaeology
- No more guessing which service failed
- No more blind deploys

---
layout: agenda
heading: Today's Agenda
:items="[
  { title: 'Foundations', description: 'What observability actually means' },
  { title: 'The Three Pillars', description: 'Logs, metrics, and traces in practice' },
  { title: 'Distributed Tracing', description: 'Following requests across services' },
  { title: 'Alerting', description: 'Waking the right person at the right time' },
]"
:current="2"
---

---
layout: compare
heading: Before vs After
leftLabel: "Without tracing"
rightLabel: "With tracing"
---

::left::

```
[10:42:03] ERROR: Something went wrong
[10:42:03] WARN: DB query slow
[10:42:04] ERROR: Request failed
```

20 minutes of manual log correlation.

::right::

One trace ID. Full waterfall in Dynatrace. Root cause in 30 seconds.

---
layout: logos
heading: Built With
:columns="5"
---

<div class="logo-item"><span class="i-logos-vue w-12 h-12" /><span>Vue</span></div>
<div class="logo-item"><span class="i-logos-vitejs w-12 h-12" /><span>Vite</span></div>
<div class="logo-item"><span class="i-logos-typescript-icon w-12 h-12" /><span>TypeScript</span></div>
<div class="logo-item"><span class="i-logos-unocss w-12 h-12" /><span>UnoCSS</span></div>
<div class="logo-item"><span class="i-logos-nodejs-icon w-12 h-12" /><span>Node.js</span></div>

---
layout: section
number: "05"
chip: "New Components"
section: "New Components"
---

# New Components

Badge, Terminal, FileTree, QRCode, StickyNote, Fit.

---
layout: default
heading: Badge & StickyNote
---

<Grid cols="2" gap="lg" rowGap="lg">
  <Card variant="filled">
    <Stack gap="sm">
      <Row gap="sm" align="center" wrap>
        <Badge variant="info">new</Badge>
        <Badge variant="warning" :dot="true">beta</Badge>
        <Badge variant="danger">deprecated</Badge>
        <Badge variant="success">stable</Badge>
        <Badge>default</Badge>
      </Row>
      <p class="text-sm opacity-60">Inline labels for status, version, or state.</p>
    </Stack>
  </Card>
  <Card variant="filled">
    <Center>
      <Row gap="lg">
        <StickyNote color="yellow">Ship it and learn.</StickyNote>
        <StickyNote color="teal" :rotate="-1.5">Observe everything.</StickyNote>
        <StickyNote color="pink" :rotate="2">Move fast.</StickyNote>
      </Row>
    </Center>
  </Card>
</Grid>

---
layout: default
heading: Terminal & FileTree
---

<Grid cols="2" gap="lg">
  <Terminal title="bash">
<span class="cmd">$ npm run dev</span>
<span class="output">  VITE v5.0.0  ready in 320ms</span>
<span class="output">  ➜  Local: </span><span class="path">http://localhost:5173/</span>
  </Terminal>

  <FileTree :items="[
    { name: 'src', type: 'dir', depth: 0 },
    { name: 'components', type: 'dir', depth: 1 },
    { name: 'Button.vue', depth: 2, badge: 'new' },
    { name: 'Card.vue', depth: 2 },
    { name: 'layouts', type: 'dir', depth: 1 },
    { name: 'default.vue', depth: 2, active: true, comment: '← you are here' },
    { name: 'styles', type: 'dir', depth: 1 },
    { name: 'tokens.css', depth: 2 },
  ]" />
</Grid>

---
layout: default
heading: QRCode & Fit
---

<Grid cols="2" gap="lg" align="center">
  <Stack gap="md" align="center">
    <div style="background: white; padding: 0.75rem; border-radius: 1rem; line-height: 0;">
      <QRCode url="https://slides.inders.in" :size="140" />
    </div>
    <p class="text-sm opacity-60">slides.inders.in</p>
  </Stack>

  <Stack gap="md">
    <p class="text-sm opacity-60 mb-2">Fit scales text to fill the container:</p>
    <Fit><span style="font-family: var(--font-display); font-weight: 700; font-size: 3rem; color: var(--primary);">OBSERVABLE</span></Fit>
  </Stack>
</Grid>

---
layout: closing
---

<template v-slot:image>
  <img src="/profile.webp" alt="Indermohan Singh" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block;" />
</template>

# Let's connect!

Find me online and grab the slides.

<template v-slot:footer>
  Indermohan Singh · Lead Developer Advocate · Dynatrace
</template>
