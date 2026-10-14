<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  dot?: boolean
}>()
</script>

<template>
  <span class="badge" :class="`badge--${variant ?? 'default'}`">
    <span v-if="dot" class="badge__dot" />
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px;
  border-radius: var(--shape-full);
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  vertical-align: middle;
}

.badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
}

.badge--default {
  background: var(--bg-surface);
  color: var(--fg-muted);
  border: 1px solid var(--outline-color);
}

.badge--success {
  background: color-mix(in srgb, var(--green-800) 15%, transparent);
  color: var(--green-800);
  border: 1px solid color-mix(in srgb, var(--green-800) 30%, transparent);
}
.dark .badge--success {
  background: color-mix(in srgb, var(--green-300) 15%, transparent);
  color: var(--green-300);
  border-color: color-mix(in srgb, var(--green-300) 30%, transparent);
}

.badge--warning {
  background: color-mix(in srgb, var(--yellow-800) 15%, transparent);
  color: var(--yellow-800);
  border: 1px solid color-mix(in srgb, var(--yellow-800) 30%, transparent);
}
.dark .badge--warning {
  background: color-mix(in srgb, var(--yellow-300) 15%, transparent);
  color: var(--yellow-300);
  border-color: color-mix(in srgb, var(--yellow-300) 30%, transparent);
}

.badge--danger {
  background: color-mix(in srgb, var(--maroon-800) 15%, transparent);
  color: var(--maroon-800);
  border: 1px solid color-mix(in srgb, var(--maroon-800) 30%, transparent);
}
.dark .badge--danger {
  background: color-mix(in srgb, var(--maroon-300) 15%, transparent);
  color: var(--maroon-300);
  border-color: color-mix(in srgb, var(--maroon-300) 30%, transparent);
}

.badge--info {
  background: color-mix(in srgb, var(--turquoise-800) 15%, transparent);
  color: var(--turquoise-800);
  border: 1px solid color-mix(in srgb, var(--turquoise-800) 30%, transparent);
}
.dark .badge--info {
  background: color-mix(in srgb, var(--turquoise-300) 15%, transparent);
  color: var(--turquoise-300);
  border-color: color-mix(in srgb, var(--turquoise-300) 30%, transparent);
}
</style>
