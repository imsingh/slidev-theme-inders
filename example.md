---
theme: ./
addons:
  - slidev-addon-fancy-arrow
  - slidev-addon-window-mockup
  - slidev-addon-asciinema
layout: cover
chip: "GDE · Speaker · Engineer"
themeConfig:
  footerAvatar: "/profile.webp"
  footerName: "Indermohan Singh"
---

# Building for the Web
Ideas, craft, and a bit of obsession.

---
layout: intro
name: "Indermohan Singh"
role: "Lead Developer Advocate @Dynatrace"
avatar: "/profile.webp"
bio: "Passionate about learning, advocacy and music."
social:
  website: "inders.in"
  github: "inders"
  twitter: "inders"
  linkedin: "indermohan-singh"
---

---
layout: default
heading: What is Slidev?
section: "Introduction"
---

Slidev is a slide maker and presentation tool designed for developers.

- **Text-based** — focus on content with Markdown, style later
- **Themable** — themes shared and reused as npm packages
- **Developer Friendly** — code highlighting, live coding with autocompletion
- **Interactive** — embed Vue components to enhance your expressions
- **Portable** — export to PDF, PPTX, PNGs, or a hostable SPA

---
layout: section
number: "01"
chip: "Chapter One"
section: "Chapter One"
---

# Foundations

A solid base makes everything else easy.

---
layout: two-col
heading: Two Columns
section: "Chapter One"
---

::left::

### Left side

Use the `left` and `right` slots to fill each column independently.

```ts
function greet(name: string) {
  return `Hello, ${name}!`
}
```

::right::

### Right side

Any content works here — text, components, code, images.

1. First item
1. Second item
1. Third item

---
layout: quote
author: "Indermohan Singh"
role: "GDE · Web Platform"
---

"Great design is invisible — it just feels right."

---
layout: center
chip: "Components"
hideFooter: true
---

# Building Blocks

Everything you see is composed from a small set of primitives.

---
layout: default
heading: Chips & Callouts
---

**Chips**

<Row gap="sm" wrap>
  <Chip variant="primary">Primary</Chip>
  <Chip variant="secondary">Secondary</Chip>
  <Chip variant="outline">Outline</Chip>
  <Chip variant="surface">Surface</Chip>
</Row>

<Spacer size="md" />

**Callouts**

<Grid cols="2" gap="md" rowGap="md">
  <Callout type="note">This is a note callout.</Callout>
  <Callout type="tip">This is a tip callout.</Callout>
  <Callout type="caution">This is a caution callout.</Callout>
  <Callout type="danger">This is a danger callout.</Callout>
</Grid>

---
layout: default
heading: Cards
---

<Grid cols="2" gap="lg" rowGap="lg">
  <Card variant="filled">
    <Stack gap="xs">
      <h3>Filled</h3>
      <p>Surface container background.</p>
    </Stack>
  </Card>
  <Card variant="tonal">
    <Stack gap="xs">
      <h3>Tonal</h3>
      <p>Primary container background.</p>
    </Stack>
  </Card>
  <Card variant="elevated">
    <Stack gap="xs">
      <h3>Elevated</h3>
      <p>Elevation shadow on surface.</p>
    </Stack>
  </Card>
  <Card variant="outlined">
    <Stack gap="xs">
      <h3>Outlined</h3>
      <p>Border on clean surface.</p>
    </Stack>
  </Card>
</Grid>

---
layout: center
---

<Stack gap="lg" align="center" style="max-width: 480px; margin: 0 auto;">
  <Avatar name="Indermohan Singh" role="GDE · Web Platform" size="lg" src="/profile.webp" shape="rounded" />
  <Divider variant="gradient" />
  <Avatar name="Jane Doe" role="Engineer" size="md" />
  <Divider variant="primary" label="or" />
  <Avatar name="Alex Kim" size="sm" />
</Stack>

---
layout: section
number: "02"
chip: "Addons"
section: "Addons"
---

# Addons

Community-built extensions for richer slides.

---
layout: default
heading: Fancy Arrows
section: "Addons"
---

Use `<FancyArrow>` to draw annotated arrows between elements on your slide.

<div style="position: relative; height: 260px;">
  <div style="position: absolute; left: 60px; top: 60px; background: var(--bg-surface); border: 1px solid var(--outline-color); border-radius: 8px; padding: 12px 20px;">
    Input
  </div>
  <div style="position: absolute; right: 60px; top: 60px; background: var(--bg-surface); border: 1px solid var(--outline-color); border-radius: 8px; padding: 12px 20px;">
    Output
  </div>
  <FancyArrow
    x1="160" y1="80"
    x2="920" y2="80"
    color="var(--primary)"
    label="transforms"
  />
</div>

---
layout: default
heading: Window Mockup
section: "Addons"
---

Wrap any content in a browser or terminal chrome with `<WindowMockup>`.

<WindowMockup style="max-width: 640px; margin: 0 auto;">
  <div style="padding: 24px; font-family: var(--font-mono, monospace); font-size: 14px; background: var(--bg-surface);">
    <span style="color: var(--primary);">$</span> npm run dev<br/>
    <span style="opacity: 0.6;">  VITE v5.0.0  ready in 320 ms</span><br/>
    <br/>
    <span style="opacity: 0.6;">  ➜  Local:   </span><span style="color: var(--primary);">http://localhost:5173/</span>
  </div>
</WindowMockup>

---
layout: default
heading: Asciinema
section: "Addons"
---

Embed recorded terminal sessions with `<Asciinema>`. Point it at a `.cast` file in `/public`.

```md
<Asciinema src="/demo.cast" />
```

<Callout type="tip">Record with <code>asciinema rec demo.cast</code>, place the file in <code>public/</code>, then reference it as <code>/demo.cast</code>.</Callout>

---
layout: cover
chip: "Thank you"
animated: true
---

# Let's build something great.

[inders.in](https://inders.in)
