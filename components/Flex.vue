<script setup lang="ts">
const props = defineProps<{
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  wrap?: boolean
  flex?: string  // e.g. "1" or "0 0 auto"
}>()

const gapMap: Record<string, string> = {
  xs: 'var(--space-2)', sm: 'var(--space-3)', md: 'var(--space-4)',
  lg: 'var(--space-6)', xl: 'var(--space-8)', '2xl': 'var(--space-12)',
}

const justifyMap: Record<string, string> = {
  start: 'flex-start', center: 'center', end: 'flex-end',
  between: 'space-between', around: 'space-around', evenly: 'space-evenly',
}

const style = {
  flexDirection: props.direction ?? 'row',
  gap: props.gap ? gapMap[props.gap] : undefined,
  alignItems: props.align ?? 'center',
  justifyContent: justifyMap[props.justify ?? 'start'],
  flexWrap: props.wrap ? 'wrap' : 'nowrap',
  flex: props.flex,
}
</script>

<template>
  <div class="flex-layout" :style="style"><slot /></div>
</template>

<style scoped>
.flex-layout { display: flex; }
</style>
