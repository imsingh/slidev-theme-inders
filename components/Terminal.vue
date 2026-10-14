<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  prompt?: string
}>(), {
  title: 'Terminal',
  prompt: '$',
})
</script>

<template>
  <div class="terminal">
    <div class="terminal__bar">
      <div class="terminal__dots">
        <span class="terminal__dot terminal__dot--red" />
        <span class="terminal__dot terminal__dot--yellow" />
        <span class="terminal__dot terminal__dot--green" />
      </div>
      <span class="terminal__title">{{ title }}</span>
    </div>
    <div class="terminal__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.terminal {
  border-radius: var(--shape-lg);
  overflow: hidden;
  background: #0d1117;
  font-family: var(--font-mono);
  font-size: 0.85em;
  box-shadow: var(--elevation-3);
}

.terminal__bar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: #161b22;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.terminal__dots {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.terminal__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal__dot--red    { background: #ff5f57; }
.terminal__dot--yellow { background: #ffbd2e; }
.terminal__dot--green  { background: #28c840; }

.terminal__title {
  flex: 1;
  text-align: center;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  font-family: var(--font-body);
}

.terminal__body {
  padding: var(--space-5) var(--space-6);
  color: #e6edf3;
  line-height: 1.7;
  white-space: pre-wrap;
  overflow-x: auto;
  overflow-y: auto;
  max-height: calc(var(--slide-body-h) * 0.7);
}

.terminal__body :deep(.cmd)     { color: #7ee787; }
.terminal__body :deep(.comment) { color: rgba(255, 255, 255, 0.35); }
.terminal__body :deep(.path)    { color: #79c0ff; }
.terminal__body :deep(.output)  { color: rgba(255, 255, 255, 0.6); }
</style>
