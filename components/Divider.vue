<script setup lang="ts">
defineProps<{
  variant?: 'gradient' | 'primary' | 'subtle'
  label?: string
}>()
</script>

<template>
  <div class="divider" :class="`divider--${variant ?? 'gradient'}`">
    <span v-if="label" class="divider__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.divider {
  position: relative;
  width: 100%;
  height: 2px;
  border-radius: var(--shape-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--space-4) 0;
}

.divider--gradient { background: var(--primary-gradient); }
.divider--primary  { background-color: var(--primary); }
.divider--subtle   { background-color: var(--outline-color); }

.divider__label {
  position: absolute;
  background-color: var(--bg-default);
  color: var(--fg-muted);
  font-size: var(--typescale-label-size);
  font-weight: var(--typescale-label-weight);
  letter-spacing: var(--typescale-label-tracking);
  text-transform: uppercase;
  padding: 0 var(--space-4);
}
</style>
