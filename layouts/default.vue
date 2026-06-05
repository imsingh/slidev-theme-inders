<script setup lang="ts">
// "heading" not "title" — Slidev reserves "title" for slide navigation
defineProps<{
  heading?: string
}>()
</script>

<template>
  <div class="slidev-layout default">
    <header v-if="heading" class="default__header">
      <h1 class="default__title">{{ heading }}</h1>
      <div class="default__title-underline" />
    </header>
    <div class="default__content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.default {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  height: 100%;
  background-color: var(--bg-default);
}

.default__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex-shrink: 0;
}

.default__title {
  font-family: var(--font-display);
  font-size: var(--typescale-headline-size);
  font-weight: var(--typescale-headline-weight);
  line-height: var(--typescale-headline-line);
  letter-spacing: var(--typescale-headline-tracking);
  color: var(--fg-default);
  margin: 0;
}

.default__title-underline {
  height: 3px;
  width: 56px;
  border-radius: var(--shape-full);
  background: var(--primary-gradient);
}

.default__content {
  flex: 1;
  overflow-y: auto;
  color: var(--fg-muted);
}
</style>
