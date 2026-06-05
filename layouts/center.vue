<script setup lang="ts">
defineProps<{
  chip?: string
}>()
</script>

<template>
  <div class="slidev-layout center">
    <div class="center__content">
      <span v-if="chip" class="center__chip">{{ chip }}</span>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 0;
  background-color: var(--bg-default);
  text-align: center;
}

.center__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-5);
  max-width: 760px;
  margin: 0 auto;
}

.center__chip {
  display: inline-flex;
  align-items: center;
  padding: 5px 16px;
  border-radius: var(--shape-full);
  background-color: var(--bg-color-tab-active);
  color: var(--fg-primary);
  font-size: var(--typescale-label-size);
  font-weight: var(--typescale-label-weight);
  letter-spacing: var(--typescale-label-tracking);
  text-transform: uppercase;
}

.center :deep(h1),
.center :deep(h2) {
  font-family: var(--font-display);
  font-size: var(--typescale-display-size);
  font-weight: var(--typescale-display-weight);
  line-height: var(--typescale-display-line);
  letter-spacing: var(--typescale-display-tracking);
  color: var(--fg-default);
  margin: 0;
}

.center :deep(h3) {
  font-family: var(--font-display);
  font-size: var(--typescale-headline-size);
  font-weight: var(--typescale-headline-weight);
  color: var(--fg-default);
  margin: 0;
}

.center :deep(p) {
  font-size: var(--typescale-title-size);
  color: var(--fg-muted);
  max-width: 600px;
  margin: 0;
}

.center :deep(a) {
  color: var(--fg-primary);
  font-weight: 600;
}
</style>
