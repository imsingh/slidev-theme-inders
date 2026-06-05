<script setup lang="ts">
defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'auto'
}>()

const sizeMap: Record<string, string> = {
  xs: 'var(--space-2)', sm: 'var(--space-3)', md: 'var(--space-4)',
  lg: 'var(--space-6)', xl: 'var(--space-8)', '2xl': 'var(--space-12)',
  auto: 'auto',
}
</script>

<template>
  <div
    class="spacer"
    :style="{
      flex: size === 'auto' || !size ? '1' : '0 0 auto',
      width: sizeMap[size ?? 'auto'],
      height: sizeMap[size ?? 'auto'],
    }"
    aria-hidden="true"
  />
</template>

<style scoped>
.spacer {
  display: block;
  min-width: 0;
  min-height: 0;
}
</style>
