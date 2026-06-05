<script setup lang="ts">
defineProps<{
  number?: string | number
  chip?: string
}>()
</script>

<template>
  <div class="slidev-layout section">
    <Flex justify="between" align="center" flex="1">
      <!-- left: chip + title + subtitle -->
      <Flex direction="column" gap="sm" align="start">
        <span v-if="chip" class="section__chip">{{ chip }}</span>
        <div class="section__text">
          <slot />
        </div>
      </Flex>

      <!-- right: decorative number -->
      <div v-if="number" class="section__number" aria-hidden="true">
        {{ number }}
      </div>
    </Flex>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color: var(--bg-default);
}

.section__number {
  font-family: var(--font-display);
  font-size: clamp(180px, 30vw, 320px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--primary);
  opacity: 0.18;
  pointer-events: none;
  user-select: none;
  flex-shrink: 0;
}

.section__chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: var(--shape-full);
  background-color: var(--bg-button-default);
  color: var(--fg-button-default);
  font-size: var(--typescale-label-size);
  font-weight: var(--typescale-label-weight);
  letter-spacing: var(--typescale-label-tracking);
  text-transform: uppercase;
}

.section__text :deep(h1),
.section__text :deep(h2) {
  font-family: var(--font-display);
  font-size: var(--typescale-display-size);
  font-weight: var(--typescale-display-weight);
  line-height: var(--typescale-display-line);
  letter-spacing: var(--typescale-display-tracking);
  color: var(--fg-default);
  margin: 0;
}

.section__text :deep(p) {
  font-size: var(--typescale-title-size);
  color: var(--fg-muted);
  margin-top: var(--space-4);
  margin-bottom: 0;
}
</style>
