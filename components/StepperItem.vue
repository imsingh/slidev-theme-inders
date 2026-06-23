<script setup>
import { inject, ref, computed } from 'vue'

const props = defineProps({
  title:  { type: String, required: true },
  accent: { type: String, default: null },
})

const palette = [
  'var(--turquoise-800)',
  'var(--blue-800)',
  'var(--maroon-800)',
  'var(--purple-800)',
]
const accentMap = {
  teal:      'var(--turquoise-800)',
  primary:   'var(--primary)',
  secondary: 'var(--fg-secondary)',
  blue:      'var(--blue-800)',
  purple:    'var(--purple-800)',
}

const register  = inject('stepper-register', null)
const compact   = inject('stepper-compact', ref(false))
const monoColor = inject('stepper-color',   ref(null))

if (!register)
  throw new Error('[slidev-theme-inders] <StepperItem> must be used inside <Stepper>.')

const index = register()

const color = computed(() => {
  if (monoColor.value) return accentMap[monoColor.value] ?? monoColor.value
  if (props.accent)    return accentMap[props.accent]    ?? props.accent
  return palette[index % palette.length]
})
</script>

<template>
  <div class="stepper-item" :class="{ 'stepper-item--compact': compact }">
    <div v-if="index > 0" class="stepper-item__line" />

    <div
      class="stepper-item__indicator"
      :style="{ background: color, '--indicator-color': color }"
    >
      <slot v-if="$slots.icon" name="icon" />
      <span v-else class="stepper-item__number">{{ index + 1 }}</span>
    </div>

    <div class="stepper-item__content">
      <div class="stepper-item__title">{{ title }}</div>
      <div v-if="$slots.default" class="stepper-item__body"><slot /></div>
    </div>
  </div>
</template>

<style scoped>
.stepper-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85em;
  position: relative;
  margin-top: 0.75em;
  transition: opacity 0.35s ease;
  animation: stepper-item-in 0.35s ease both;
}

@keyframes stepper-item-in {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.stepper-item__line {
  position: absolute;
  left: calc(0.9em - 1px);
  bottom: 100%;
  width: 2px;
  height: 0.75em;
  background: var(--outline-color);
}

.stepper-item__indicator {
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.35s ease;
  width: 2em;
  height: 2em;
  font-size: 0.9em;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--indicator-color) 16%, transparent);
}

.stepper-item__number {
  font-family: var(--font-body);
  font-weight: 600;
  color: #fff;
  font-size: 0.9em;
  line-height: 1;
}

.stepper-item__content {
  flex: 1;
  padding-top: 0.1em;
}

.stepper-item__title {
  font-family: var(--font-body);
  font-weight: 600;
  line-height: 1.3;
  font-size: 1em;
  color: var(--fg-default);
}

.stepper-item__body {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 0.85em;
  line-height: 1.55;
  color: var(--fg-muted);
  margin-top: 0.3em;
}

.stepper-item--compact { margin-top: 0.4em; }
.stepper-item--compact .stepper-item__indicator { width: 1.5em; height: 1.5em; font-size: 0.75em; }
.stepper-item--compact .stepper-item__line { height: 0.4em; left: calc(0.675em - 1px); }
.stepper-item--compact .stepper-item__title { font-size: 0.85em; }
.stepper-item--compact .stepper-item__body  { font-size: 0.78em; }
</style>
