<script setup>
import { provide, computed } from 'vue'

const props = defineProps({
  color:   { type: String, default: 'teal' },
  showAll: { type: Boolean, default: false },
})

const accentMap = {
  teal:      'var(--turquoise-800)',
  primary:   'var(--primary)',
  secondary: 'var(--fg-secondary)',
  blue:      'var(--blue-800)',
  purple:    'var(--purple-800)',
}
const resolvedColor = computed(() => accentMap[props.color] ?? props.color)

provide('timeline-color', resolvedColor)
</script>

<template>
  <div class="timeline" :class="{ 'timeline--show-all': showAll }">
    <slot />
  </div>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin: var(--space-6) 0;
  counter-reset: tl-counter;
}
</style>

<style>
.timeline--show-all .tl-item { opacity: 1 !important; }
.timeline--show-all .tl-line__fill { transform: scaleX(1) !important; }
</style>
