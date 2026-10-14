<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'yellow' | 'teal' | 'pink' | 'blue'
  rotate?: number
}>(), {
  color: 'yellow',
  rotate: 1.5,
})

const colorMap: Record<string, { bg: string; text: string; shadow: string }> = {
  yellow: { bg: '#fef08a', text: '#713f12', shadow: '#ca8a04' },
  teal:   { bg: '#99f6e4', text: '#134e4a', shadow: '#0d9488' },
  pink:   { bg: '#fbcfe8', text: '#831843', shadow: '#db2777' },
  blue:   { bg: '#bfdbfe', text: '#1e3a5f', shadow: '#3b82f6' },
}
</script>

<template>
  <div
    class="sticky-note"
    :style="{
      '--sn-bg':     colorMap[color].bg,
      '--sn-text':   colorMap[color].text,
      '--sn-shadow': colorMap[color].shadow,
      '--sn-rotate': `${rotate}deg`,
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.sticky-note {
  background: var(--sn-bg);
  color: var(--sn-text);
  padding: var(--space-5) var(--space-6);
  border-radius: 2px;
  transform: rotate(var(--sn-rotate));
  box-shadow:
    2px 3px 6px rgba(0, 0, 0, 0.15),
    0 0 0 1px color-mix(in srgb, var(--sn-shadow) 25%, transparent);
  font-family: var(--font-body);
  font-size: var(--typescale-body-size);
  line-height: 1.5;
  display: inline-block;
  max-width: 240px;
  position: relative;
}

.sticky-note::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 28px;
  background: color-mix(in srgb, var(--sn-shadow) 20%, transparent);
  border-radius: 2px 2px 0 0;
}
</style>
