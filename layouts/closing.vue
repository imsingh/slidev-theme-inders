<template>
  <div class="slidev-layout closing">
    <div class="closing__panel">
      <slot name="image" />
    </div>
    <div class="closing__right">
      <div class="closing__content">
        <slot />
      </div>
      <div v-if="$slots.footer" class="closing__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.closing {
  position: absolute;
  inset: 0;
  overflow: hidden;
  padding: 0;
  display: grid;
  grid-template-columns: 2fr 3fr;
  color: var(--grey-1500);
}

.closing__panel {
  background-color: var(--turquoise-800);
  overflow: hidden;
}

.closing__panel :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.closing__right {
  background-color: var(--turquoise-1100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-12) var(--space-12) var(--space-12) var(--space-10);
  border-left: 4px solid var(--turquoise-700);
  position: relative;
}

.closing__content :deep(h1),
.closing__content :deep(h2) {
  font-family: var(--font-display);
  font-size: var(--typescale-display-size);
  font-weight: var(--typescale-display-weight);
  line-height: var(--typescale-display-line);
  letter-spacing: var(--typescale-display-tracking);
  color: var(--grey-1500);
  margin: 0;
}

.closing__content :deep(p) {
  color: rgba(255, 255, 255, 0.65);
  margin-top: var(--space-4);
  font-size: var(--typescale-title-size);
}

.closing__content :deep(a) {
  color: var(--turquoise-300);
  text-decoration: none;
}

.closing__content :deep(a:hover) {
  color: var(--turquoise-200);
}

.closing__footer {
  position: absolute;
  bottom: var(--space-8);
  left: var(--space-10);
  right: var(--space-12);
  font-size: 0.85em;
  color: rgba(255, 255, 255, 0.4);
}
</style>
