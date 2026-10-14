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
    <SlideLayout>
      <template v-if="heading" #header>
        <h1 class="slide-heading">{{ heading }}</h1>
        <div class="slide-heading-bar" />
      </template>

      <div class="compare__body">
        <div class="compare__panel">
          <div class="compare__label" :style="{ color: leftAccent ?? 'var(--fg-muted)' }">
            {{ leftLabel ?? 'Before' }}
          </div>
          <div class="compare__content">
            <slot name="left" />
          </div>
        </div>
        <div class="compare__divider" />
        <div class="compare__panel">
          <div class="compare__label" :style="{ color: rightAccent ?? 'var(--primary)' }">
            {{ rightLabel ?? 'After' }}
          </div>
          <div class="compare__content">
            <slot name="right" />
          </div>
        </div>
      </div>
    </SlideLayout>
  </div>
</template>

<style scoped>
/* body fills slide-layout__content flex column */
.compare__body {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: var(--space-6);
  overflow: hidden;
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
  min-height: 0;
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
  min-height: 0;
  overflow: hidden;
  color: var(--fg-muted);
}
</style>
