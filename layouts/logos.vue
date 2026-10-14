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
    <SlideLayout gap="lg">
      <template v-if="heading" #header>
        <h1 class="slide-heading">{{ heading }}</h1>
        <div class="slide-heading-bar" />
      </template>

      <div
        class="logos__grid"
        :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }"
      >
        <slot />
      </div>
    </SlideLayout>
  </div>
</template>

<style scoped>
/* grid fills slide-layout__content flex column */
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
