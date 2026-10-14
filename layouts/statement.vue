<template>
  <div class="slidev-layout statement">
    <div class="statement__accent" />
    <div class="statement__body">
      <div class="statement__content">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.statement {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background: var(--bg-default);
  color: var(--fg-default);
  position: relative;
  overflow: hidden;
  padding: 0;
}

.statement__accent {
  width: 4px;
  flex-shrink: 0;
  background: var(--primary-gradient);
}

.statement__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--slide-padding);
  padding-bottom: 0;
}

.statement__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 820px;
}

.statement__body :deep(h1) {
  font-family: var(--font-display);
  font-weight: var(--typescale-display-weight);
  font-size: clamp(36px, 4.5vw, var(--typescale-display-size));
  line-height: 1.15;
  margin: 0;
  border: none;
  padding: 0;
  color: inherit;
}

.statement__body :deep(h2),
.statement__body :deep(p) {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(28px, 3.5vw, var(--typescale-headline-size));
  line-height: 1.4;
  margin: 0;
  border: none;
  padding: 0;
  color: var(--fg-muted);
}

.statement__body :deep(strong) {
  font-weight: 700;
  color: var(--primary);
}

.statement__body :deep(em) {
  font-style: italic;
  color: var(--fg-secondary);
}
</style>
