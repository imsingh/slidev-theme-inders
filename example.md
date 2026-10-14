---
theme: ./
addons:
  - slidev-addon-fancy-arrow
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
section: "Core Layouts"
---

The workhorse layout — a heading with a gradient underline, and a content area below.

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
section: "Core Layouts"
---

::left::

Use `::left::` and `::right::` to fill each side. Great for code + explanation or before/after comparisons.

```ts
function greet(name: string) {
  return `Hello, ${name}!`
}
```

::right::

Control the split ratio with the `split` prop.

```yaml
layout: two-col
heading: My Slide
split: 40/60
```

<Callout type="tip">Both columns clip independently — no scrollbars on projectors.</Callout>

---
layout: statement
section: "Core Layouts"
---

# Good software is discovered, not designed.

The best APIs emerge from the problems they solve.

---
layout: statement
section: "Core Layouts"
---

Ship early. **Iterate fast.** Learn always.

---
layout: quote
author: "Indermohan Singh"
role: "Lead Developer Advocate · Dynatrace"
section: "Core Layouts"
---

"The best developer experience is the one that gets out of your way."

---
layout: center
chip: "Focused"
section: "Core Layouts"
---

# Sometimes one idea is enough.

Use `layout: center` when the slide needs to breathe.

---
layout: section
number: "02"
chip: "Layouts"
section: "Visual Layouts"
---

# Visual Layouts

Image-driven layouts for richer storytelling.

---
layout: big-number
value: "98%"
label: "Developer satisfaction"
sublabel: "Based on 4,200 survey responses across 38 countries"
section: "Visual Layouts"
---

---
layout: big-number
value: "14ms"
label: "Median cold start"
sublabel: "Measured across 1M edge function invocations"
section: "Visual Layouts"
---

---
layout: image-full
src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1280&q=80"
overlay: 0.6
section: "Visual Layouts"
---

# The code is the craft.

Every detail matters — from the API surface to the error message.

---
layout: image-full
src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&q=80"
overlay: 0.45
position: "center 30%"
section: "Visual Layouts"
---

# Build in public.

Share what you learn. The community grows when you do.

---
layout: image-side
src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80"
side: right
split: "55/45"
heading: Image on the Right
section: "Visual Layouts"
---

Use `image-side` to pair a photo with content. Control which side the image sits on and how columns split.

```yaml
layout: image-side
image: /my-photo.jpg
side: right
split: 55/45
```

---
layout: image-side
src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80"
side: left
split: "40/60"
heading: Image on the Left
position: "center 20%"
section: "Visual Layouts"
---

Flip the image to the left with `side: left`. The `position` prop controls the crop anchor — any valid CSS `background-position` value works.

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
chip: "Layouts"
section: "Structured Layouts"
---

# Structured Layouts

side-title, compare, agenda, logos, bleed.

---
layout: side-title
title: Why Observability Matters
section: "Structured Layouts"
---

When your app breaks at 3 AM, you have two choices: guess, or know.

Observability gives you the data to **know** — traces, error rates, and latency distributions all pointing at the same root cause.

- No more `console.log` archaeology
- No more guessing which service failed
- No more blind deploys

---
layout: agenda
heading: Today's Agenda
section: "Structured Layouts"
animated: true
clicks: 4
items:
  - title: Foundations
    description: What observability actually means
  - title: The Three Pillars
    description: Logs, metrics, and traces in practice
  - title: Distributed Tracing
    description: Following requests across services
  - title: Alerting
    description: Waking the right person at the right time
---

---
layout: compare
heading: Before vs After
leftLabel: "Without tracing"
rightLabel: "With tracing"
section: "Structured Layouts"
---

::left::

```
[10:42:03] ERROR: Something went wrong
[10:42:03] WARN:  DB query slow
[10:42:04] ERROR: Request failed
```

20 minutes of manual log correlation. Which service? Which instance? No idea.

::right::

One trace ID. Full request waterfall. Root cause in 30 seconds — no guessing.

<Callout type="tip">Traces connect every hop automatically via the `traceparent` header.</Callout>

---
layout: logos
heading: Built With
columns: 4
section: "Structured Layouts"
---

<div class="logo-item">
  <span class="i-ph-lightning-bold" style="width: 48px; height: 48px; color: var(--primary);" />
  <span>Vite</span>
</div>
<div class="logo-item">
  <span class="i-ph-diamond-bold" style="width: 48px; height: 48px; color: var(--turquoise-700);" />
  <span>Vue</span>
</div>
<div class="logo-item">
  <span class="i-ph-code-bold" style="width: 48px; height: 48px; color: var(--blue-700);" />
  <span>TypeScript</span>
</div>
<div class="logo-item">
  <span class="i-ph-paint-brush-broad-bold" style="width: 48px; height: 48px; color: var(--maroon-700);" />
  <span>UnoCSS</span>
</div>

---
layout: bleed
section: "Structured Layouts"
---

<img src="https://images.unsplash.com/photo-1614729939124-032d1e6c9945?w=1280&q=80" style="width:100%;height:100%;object-fit:cover;" />

---
layout: section
number: "04"
chip: "Components"
section: "Components"
---

# Components

Composable primitives for consistent, expressive slides.

---
layout: default
heading: Cards
section: "Components"
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
section: "Components"
---

<Grid cols="2" gap="md" rowGap="md" style="margin-bottom: 1.5rem;">
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
heading: Badge & StickyNote
section: "Components"
---

<Grid cols="2" gap="lg" rowGap="lg">
  <Card variant="filled">
    <Stack gap="md">
      <strong>Badge — inline status labels</strong>
      <Row gap="sm" wrap>
        <Badge variant="info">new</Badge>
        <Badge variant="warning" :dot="true">beta</Badge>
        <Badge variant="danger">deprecated</Badge>
        <Badge variant="success">stable</Badge>
        <Badge>default</Badge>
      </Row>
      <p class="text-sm opacity-60">Different from Chip — smaller, inline, uppercase. Use next to headings or list items.</p>
    </Stack>
  </Card>
  <Card variant="filled">
    <Stack gap="md">
      <strong>StickyNote — workshop feel</strong>
      <Row gap="lg" align="center">
        <StickyNote color="yellow">Ship it and learn.</StickyNote>
        <StickyNote color="teal" :rotate="-1.5">Observe everything.</StickyNote>
      </Row>
    </Stack>
  </Card>
</Grid>

---
layout: default
heading: Terminal & FileTree
section: "Components"
---

<Grid cols="2" gap="lg">
  <Terminal title="bash">
    <span class="cmd">$ npm install</span>
    <span class="output">added 42 packages in 1.2s</span>
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
section: "Components"
---

<Grid cols="2" gap="lg" align="center">
  <Stack gap="md" align="center">
    <div style="background: white; padding: 0.75rem; border-radius: 1rem; line-height: 0; width: fit-content;">
      <QRCode url="https://inders.in" :size="140" />
    </div>
    <p class="text-sm opacity-60">inders.in</p>
  </Stack>

  <Stack gap="md" align="start">
    <p class="text-sm opacity-60">Fit scales content to fill the container width:</p>
    <Fit>
      <span style="font-family: var(--font-display); font-weight: 700; font-size: 4rem; color: var(--primary);">OBSERVABLE</span>
    </Fit>
  </Stack>
</Grid>

---
layout: default
heading: Avatars & Dividers
section: "Components"
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
heading: Stepper & Timeline
section: "Components"
---

<Grid cols="2" gap="xl">
  <Stepper color="teal">
    <StepperItem title="Install the theme">Add to your Slidev project via npm.</StepperItem>
    <StepperItem title="Set the theme">Use <code>theme: inders</code> in frontmatter.</StepperItem>
    <StepperItem title="Pick a layout">Choose from 15+ layouts for every slide type.</StepperItem>
  </Stepper>

  <Timeline color="teal">
    <TimelineItem title="2023">Theme created for internal talks.</TimelineItem>
    <TimelineItem title="2024">Open-sourced on GitHub.</TimelineItem>
    <TimelineItem title="2025">Major redesign with token system.</TimelineItem>
  </Timeline>
</Grid>

---
layout: default
heading: Fancy Arrows
section: "Components"
---

Use `<FancyArrow>` from the addon to draw annotated arrows between elements.

<div style="position: relative; height: 180px; margin-top: 1rem;">
  <div style="position: absolute; left: 80px; top: 60px; background: var(--bg-surface); border: 1px solid var(--outline-color); border-radius: 8px; padding: 12px 20px;">
    Input
  </div>
  <div style="position: absolute; right: 80px; top: 60px; background: var(--bg-surface); border: 1px solid var(--outline-color); border-radius: 8px; padding: 12px 20px;">
    Output
  </div>
  <FancyArrow x1="200" y1="80" x2="860" y2="80" color="var(--primary)" label="transforms" />
</div>

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
