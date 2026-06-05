<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'surface'
  icon?: string
}>()
</script>

<template>
  <span class="chip" :class="[`chip--${variant ?? 'primary'}`]">
    <span v-if="icon" class="chip__icon" :class="icon" />
    <slot />
  </span>
</template>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: var(--shape-full);
  font-family: var(--font-body);
  font-size: var(--typescale-label-size);
  font-weight: var(--typescale-label-weight);
  letter-spacing: var(--typescale-label-tracking);
  line-height: 1;
  white-space: nowrap;
  transition:
    background-color var(--speed-uf) var(--motion-standard),
    color var(--speed-uf) var(--motion-standard);
}

.chip__icon {
  font-size: 14px;
  flex-shrink: 0;
}

.chip--primary {
  background-color: var(--bg-button-default);
  color: var(--fg-button-default);
}

.chip--secondary {
  background-color: var(--fg-secondary);
  color: var(--fg-button-default);
}

.chip--outline {
  background-color: transparent;
  color: var(--fg-primary);
  box-shadow: inset 0 0 0 1.5px var(--primary);
}

.chip--surface {
  background-color: var(--bg-surface);
  color: var(--fg-muted);
  box-shadow: inset 0 0 0 1px var(--outline-color);
}
</style>
