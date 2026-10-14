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
    <SlideLayout>
      <template v-if="heading" #header>
        <h1 class="slide-heading">{{ heading }}</h1>
        <div class="slide-heading-bar" />
      </template>

      <div class="two-col__grid">
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
    </SlideLayout>
  </div>
</template>

<style scoped>
/* CSS vars for split ratio set on the outer wrapper and cascade into the grid */
.two-col__grid {
  display: grid;
  grid-template-columns: var(--col-left, 1fr) 2px var(--col-right, 1fr);
  gap: 0 var(--space-8);
  flex: 1;        /* fills slide-layout__content flex column */
  min-height: 0;
  overflow: hidden;
}

.two-col__left,
.two-col__right {
  overflow: hidden;
  color: var(--fg-muted);
  min-height: 0;
}

.two-col__divider {
  width: 2px;
  border-radius: var(--shape-full);
  background: var(--primary-gradient);
  opacity: 0.5;
  align-self: stretch;
}
</style>
