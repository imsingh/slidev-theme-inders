<script setup lang="ts">
defineProps<{
  heading?: string
  leftLabel?: string
  rightLabel?: string
  leftAccent?: string
  rightAccent?: string
}>()
</script>

<template>
  <div class="slidev-layout compare">
    <header v-if="heading" class="compare__header">
      <h1 class="compare__title">{{ heading }}</h1>
      <div class="compare__title-underline" />
    </header>
    <div class="compare__body">
      <div class="compare__panel compare__panel--left">
        <div class="compare__label" :style="{ color: leftAccent ?? 'var(--fg-muted)' }">
          {{ leftLabel ?? 'Before' }}
        </div>
        <div class="compare__content">
          <slot name="left" />
        </div>
      </div>
      <div class="compare__divider" />
      <div class="compare__panel compare__panel--right">
        <div class="compare__label" :style="{ color: rightAccent ?? 'var(--primary)' }">
          {{ rightLabel ?? 'After' }}
        </div>
        <div class="compare__content">
          <slot name="right" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.compare {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  height: 100%;
  background: var(--bg-default);
  overflow: hidden;
  padding-bottom: 0;
}

.compare__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex-shrink: 0;
}

.compare__title {
  font-family: var(--font-display);
  font-size: var(--typescale-headline-size);
  font-weight: var(--typescale-headline-weight);
  color: var(--fg-default);
  margin: 0;
}

.compare__title-underline {
  height: 3px;
  width: 48px;
  flex-shrink: 0;
  border-radius: var(--shape-full);
  background: var(--primary-gradient);
}

.compare__body {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: var(--space-6);
  overflow: hidden;
  min-height: 0;
}

.compare__divider {
  background: var(--outline-color);
  align-self: stretch;
}

.compare__panel {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  overflow: hidden;
}

.compare__label {
  font-family: var(--font-body);
  font-size: var(--typescale-label-size);
  font-weight: var(--typescale-label-weight);
  letter-spacing: var(--typescale-label-tracking);
  text-transform: uppercase;
  flex-shrink: 0;
}

.compare__content {
  flex: 1;
  overflow: hidden;
  color: var(--fg-muted);
}
</style>
