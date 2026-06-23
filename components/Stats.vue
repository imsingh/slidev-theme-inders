<script setup>
defineProps({
  value:  { type: String, required: true },
  label:  { type: String, required: true },
  trend:  { type: String, default: '' },
  accent: { type: String, default: 'primary' },
})

const accentMap = {
  primary:   'var(--primary)',
  teal:      'var(--turquoise-800)',
  secondary: 'var(--fg-secondary)',
  blue:      'var(--blue-800)',
  purple:    'var(--purple-800)',
}
</script>

<template>
  <div class="stat">
    <div class="stat__value" :style="{ color: accentMap[accent] ?? accentMap.primary }">{{ value }}</div>
    <div v-if="trend" class="stat__trend">{{ trend }}</div>
    <div class="stat__label">{{ label }}</div>
  </div>
</template>

<style scoped>
.stat { text-align: center; padding: 0.5em; }
.stat__value { font-family: var(--font-display); font-weight: 700; font-size: 3.5em; line-height: 1; }
.stat__trend { font-family: var(--font-body); font-size: 1em; color: var(--fg-muted); margin-top: 0.1em; }
.stat__label { font-family: var(--font-body); font-size: 0.85em; color: var(--fg-muted); margin-top: 0.3em; letter-spacing: 0.05em; text-transform: uppercase; }
</style>
