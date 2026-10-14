<script setup lang="ts">
const props = defineProps<{
  src: string
  side?: 'left' | 'right'
  split?: string
  position?: string
  heading?: string
}>()

function gridCols() {
  const [a, b] = (props.split ?? '50/50').split('/').map(Number)
  // order CSS handles visual placement; grid cols always map to [first-order]fr [second-order]fr
  return `${a}fr ${b}fr`
}
</script>

<template>
  <div class="slidev-layout image-side" :style="{ gridTemplateColumns: gridCols() }">
    <div
      class="image-side__image"
      :class="side === 'right' ? 'image-side__image--right' : ''"
      :style="{
        backgroundImage: `url(${src})`,
        backgroundPosition: position ?? 'center',
      }"
    />

    <div class="image-side__content" :class="side === 'right' ? 'image-side__content--right' : ''">
      <header v-if="heading" class="image-side__header">
        <h1 class="image-side__title">{{ heading }}</h1>
        <div class="image-side__title-underline" />
      </header>
      <div class="image-side__body">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.image-side {
  position: absolute;
  inset: 0;
  display: grid;
  overflow: hidden;
  padding: 0;
}

.image-side__image {
  background-size: cover;
  background-repeat: no-repeat;
  order: 0;
}

.image-side__image--right {
  order: 1;
}

.image-side__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-5);
  padding: var(--space-12) var(--space-10);
  background-color: var(--bg-default);
  order: 1;
  overflow: hidden;
}

.image-side__content--right {
  order: 0;
  border-right: 1px solid var(--outline-color);
}

.image-side__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex-shrink: 0;
}

.image-side__title {
  font-family: var(--font-display);
  font-size: var(--typescale-headline-size);
  font-weight: var(--typescale-headline-weight);
  color: var(--fg-default);
  margin: 0;
  line-height: var(--typescale-headline-line);
  letter-spacing: var(--typescale-headline-tracking);
}

.image-side__title-underline {
  height: 3px;
  width: 48px;
  flex-shrink: 0;
  border-radius: var(--shape-full);
  background: var(--primary-gradient);
}

.image-side__body {
  flex: 1;
  overflow: hidden;
  color: var(--fg-muted);
}
</style>
