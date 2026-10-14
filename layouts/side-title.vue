<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="slidev-layout side-title">
    <div class="side-title__sidebar">
      <h1 class="side-title__title">{{ title }}</h1>
      <div class="side-title__accent" />
    </div>
    <div class="side-title__content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.side-title {
  display: grid;
  grid-template-columns: 28% 1fr;
  grid-template-rows: 1fr auto;
  gap: 0;
  height: 100%;
  background: var(--bg-default);
  overflow: hidden;
}

.side-title__sidebar {
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-4);
  /* left/top/bottom padding: 0 — global --slide-padding already provides the outer margin */
  padding: 0 var(--space-6) 0 0;
  background: var(--bg-surface);
  border-right: 1px solid var(--outline-color);
}

.side-title__title {
  font-family: var(--font-display);
  font-size: var(--typescale-headline-size);
  font-weight: var(--typescale-headline-weight);
  line-height: var(--typescale-headline-line);
  letter-spacing: var(--typescale-headline-tracking);
  color: var(--fg-default);
  margin: 0;
  word-break: break-word;
}

.side-title__accent {
  height: 3px;
  width: 40px;
  border-radius: var(--shape-full);
  background: var(--primary-gradient);
  flex-shrink: 0;
}

.side-title__content {
  /* right/top/bottom: 0 — global --slide-padding handles the outer margin */
  padding: 0 0 var(--space-4) var(--space-6);
  overflow: hidden;
  color: var(--fg-muted);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
