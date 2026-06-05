<script setup lang="ts">
defineProps<{
  heading?: string
  split?: string  // e.g. "40/60"
}>()

const splitRatio = (split?: string) => {
  if (!split) return ['1fr', '1fr']
  const [l, r] = split.split('/')
  return [`${l}fr`, `${r}fr`]
}
</script>

<template>
  <div
    class="slidev-layout two-col"
    :style="{ '--col-left': splitRatio(split)[0], '--col-right': splitRatio(split)[1] }"
  >
    <div v-if="heading" class="two-col__header">
      <h1 class="two-col__title">{{ heading }}</h1>
      <div class="two-col__title-underline" />
    </div>

    <div class="two-col__body">
      <div class="two-col__left">
        <slot name="left">
          <slot />
        </slot>
      </div>

      <div class="two-col__divider" aria-hidden="true" />

      <div class="two-col__right">
        <slot name="right" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.two-col {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 0;
  background-color: var(--bg-default);
  gap: var(--space-6);
}

.two-col__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex-shrink: 0;
}

.two-col__title {
  font-family: var(--font-display);
  font-size: var(--typescale-headline-size);
  font-weight: var(--typescale-headline-weight);
  line-height: var(--typescale-headline-line);
  letter-spacing: var(--typescale-headline-tracking);
  color: var(--fg-default);
  margin: 0;
}

.two-col__title-underline {
  height: 3px;
  width: 56px;
  border-radius: var(--shape-full);
  background: var(--primary-gradient);
}

.two-col__body {
  display: grid;
  grid-template-columns: var(--col-left, 1fr) 2px var(--col-right, 1fr);
  gap: 0 var(--space-8);
  flex: 1;
  overflow: hidden;
}

.two-col__left,
.two-col__right {
  overflow: auto;
  color: var(--fg-muted);
}

.two-col__divider {
  width: 2px;
  border-radius: var(--shape-full);
  background: var(--primary-gradient);
  opacity: 0.5;
  align-self: stretch;
}
</style>
