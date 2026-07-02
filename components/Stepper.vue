<script setup>
import { provide, ref, computed } from 'vue'

const props = defineProps({
  compact: { type: Boolean, default: false },
  color:   { type: String,  default: null },
  loop:    { type: Boolean, default: false },
  showAll: { type: Boolean, default: false },
})

const accentMap = {
  teal:    'var(--turquoise-800)',
  primary: 'var(--primary)',
  secondary: 'var(--fg-secondary)',
  blue:    'var(--blue-800)',
  purple:  'var(--purple-800)',
}
const resolvedColor = computed(() => props.color ? (accentMap[props.color] ?? props.color) : 'var(--primary)')

provide('stepper-register', () => { const n = itemCount.value; itemCount.value++; return n })
provide('stepper-compact',  computed(() => props.compact))
provide('stepper-color',    computed(() => props.color))
provide('stepper-show-all', computed(() => props.showAll))

const itemCount = ref(0)
</script>

<template>
  <div class="stepper" :class="{ 'stepper--show-all': showAll }">
    <slot />
    <div v-if="loop" class="stepper__loop" :style="{ borderColor: resolvedColor }" />
  </div>
</template>

<style scoped>
.stepper {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 1.4em;
}

.stepper__loop {
  position: absolute;
  left: 0;
  top: 0.9em;
  bottom: 0.9em;
  width: 1.2em;
  border-left: 2px solid;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-right: none;
  border-radius: 4px 0 0 4px;
  pointer-events: none;
}
</style>

<style>
.stepper .slidev-vclick-hidden {
  display: none !important;
}

.stepper-item:not(.slidev-vclick-hidden):has(~ .stepper-item:not(.slidev-vclick-hidden)) {
  opacity: 0.4;
}

.stepper-item:not(.slidev-vclick-hidden):not(:has(~ .stepper-item:not(.slidev-vclick-hidden))) {
  opacity: 1;
}

.stepper-item:not(.slidev-vclick-hidden):has(~ .stepper-item:not(.slidev-vclick-hidden)) .stepper-item__indicator {
  background: var(--outline-color) !important;
  box-shadow: none !important;
}

.stepper-item__body { display: none; }
.stepper-item:not(.slidev-vclick-hidden):not(:has(~ .stepper-item:not(.slidev-vclick-hidden))) .stepper-item__body {
  display: block;
}

.stepper--show-all .stepper-item:not(.slidev-vclick-hidden):has(~ .stepper-item:not(.slidev-vclick-hidden)) {
  opacity: 1;
}
.stepper--show-all .stepper-item:not(.slidev-vclick-hidden):has(~ .stepper-item:not(.slidev-vclick-hidden)) .stepper-item__indicator {
  background: var(--indicator-color, var(--primary)) !important;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--indicator-color, var(--primary)) 16%, transparent) !important;
}
.stepper--show-all .stepper-item__body {
  display: block;
}
</style>
