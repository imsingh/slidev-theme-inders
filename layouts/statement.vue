<template>
  <div class="slidev-layout statement">
    <div class="statement__accent" />
    <div class="statement__body">
      <slot />
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
  width: 6px;
  flex-shrink: 0;
  background: var(--primary-gradient);
}

.statement__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--space-10) var(--space-16);
}

.statement__body :deep(h1),
.statement__body :deep(h2),
.statement__body :deep(p) {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 2.2em;
  line-height: 1.4;
  margin: 0;
  border: none;
  padding: 0;
  color: inherit;
}

.statement__body :deep(strong) {
  font-weight: 700;
  color: var(--primary);
}
</style>
