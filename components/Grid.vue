<script setup lang="ts">
const props = defineProps<{
  cols?: number | string   // number → equal columns; string → raw template e.g. "1fr 2fr"
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  rowGap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  align?: 'start' | 'center' | 'end' | 'stretch'
}>()

const gapMap: Record<string, string> = {
  xs: 'var(--space-2)', sm: 'var(--space-3)', md: 'var(--space-4)',
  lg: 'var(--space-6)', xl: 'var(--space-8)', '2xl': 'var(--space-12)',
}

const cols = props.cols ?? 2
const colsNum = Number(cols)
const template = !isNaN(colsNum) ? `repeat(${colsNum}, 1fr)` : cols

const style = {
  gridTemplateColumns: template,
  gap: gapMap[props.gap ?? 'md'],
  rowGap: props.rowGap ? gapMap[props.rowGap] : undefined,
  alignItems: props.align ?? 'start',
}
</script>

<template>
  <div class="grid-layout" :style="style"><slot /></div>
</template>

<style scoped>
.grid-layout {
  display: grid;
}
</style>
