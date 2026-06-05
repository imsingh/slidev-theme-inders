<script setup lang="ts">
const props = defineProps<{
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  wrap?: boolean
}>()

const gapMap: Record<string, string> = {
  xs: 'var(--space-2)', sm: 'var(--space-3)', md: 'var(--space-4)',
  lg: 'var(--space-6)', xl: 'var(--space-8)', '2xl': 'var(--space-12)',
}

const justifyMap: Record<string, string> = {
  start: 'flex-start', center: 'center', end: 'flex-end',
  between: 'space-between', around: 'space-around',
}

const style = {
  gap: gapMap[props.gap ?? 'md'],
  alignItems: props.align ?? 'center',
  justifyContent: justifyMap[props.justify ?? 'start'],
  flexWrap: props.wrap ? 'wrap' : 'nowrap',
}
</script>

<template>
  <div class="row" :style="style"><slot /></div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>
