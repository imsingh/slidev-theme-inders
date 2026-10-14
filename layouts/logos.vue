<script setup lang="ts">
withDefaults(defineProps<{
  heading?: string
  columns?: number
}>(), {
  columns: 4,
})
</script>

<template>
  <div class="slidev-layout logos">
    <header v-if="heading" class="logos__header">
      <h1 class="logos__title">{{ heading }}</h1>
      <div class="logos__underline" />
    </header>
    <div
      class="logos__grid"
      :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }"
    >
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.logos {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  height: 100%;
  background: var(--bg-default);
  overflow: hidden;
  padding-bottom: 0;
}

.logos__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex-shrink: 0;
}

.logos__title {
  font-family: var(--font-display);
  font-size: var(--typescale-headline-size);
  font-weight: var(--typescale-headline-weight);
  line-height: var(--typescale-headline-line);
  letter-spacing: var(--typescale-headline-tracking);
  color: var(--fg-default);
  margin: 0;
}

.logos__underline {
  height: 3px;
  width: 48px;
  flex-shrink: 0;
  border-radius: var(--shape-full);
  background: var(--primary-gradient);
}

.logos__grid {
  flex: 1;
  min-height: 0;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: var(--space-8);
  overflow: hidden;
}

.logos :deep(.logo-item) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  opacity: 0.75;
  transition: opacity var(--speed-f) var(--motion-standard);
}

.logos :deep(.logo-item:hover) {
  opacity: 1;
}

.logos :deep(.logo-item img),
.logos :deep(.logo-item svg) {
  max-height: 56px;
  max-width: 120px;
  object-fit: contain;
}

.logos :deep(.logo-item span) {
  font-size: var(--typescale-label-size);
  color: var(--fg-muted);
  text-align: center;
}
</style>
