<script setup>
import { inject, ref } from 'vue'

defineProps({
  title: { type: String, required: true },
})

const color = inject('timeline-color', ref('var(--turquoise-800)'))
</script>

<template>
  <div class="tl-item">
    <div class="tl-top">
      <div class="tl-line tl-line--left">
        <div class="tl-line__fill" :style="{ background: color }" />
      </div>

      <div class="tl-circle" :style="{ background: color, '--circle-color': color }">
        <span class="tl-number" />
      </div>

      <div class="tl-line tl-line--right">
        <div class="tl-line__fill" :style="{ background: color }" />
      </div>
    </div>

    <div class="tl-title">{{ title }}</div>
    <div v-if="$slots.default" class="tl-body"><slot /></div>
  </div>
</template>

<style scoped>
.tl-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.tl-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.tl-line {
  flex: 1;
  height: 2px;
  background: var(--outline-color);
  position: relative;
  overflow: hidden;
}

.tl-item:first-child .tl-line--left,
.tl-item:last-child  .tl-line--right {
  visibility: hidden;
}

.tl-line__fill {
  position: absolute;
  inset: 0;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
}

.tl-item:not(.slidev-vclick-hidden) .tl-line__fill {
  transform: scaleX(1);
}

.tl-circle {
  width: 2.4em;
  height: 2.4em;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  counter-increment: tl-counter;
  transition: box-shadow 0.4s ease;
}

.tl-item:not(.slidev-vclick-hidden) .tl-circle {
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--circle-color) 20%, transparent);
}

.tl-number::before {
  content: counter(tl-counter);
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.85em;
  color: #fff;
  line-height: 1;
}

.tl-title {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.8em;
  text-align: center;
  white-space: nowrap;
  margin-top: 0.5em;
  color: var(--fg-default);
}

.tl-body {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 0.72em;
  text-align: center;
  line-height: 1.5;
  color: var(--fg-muted);
  max-width: 10em;
  margin-top: 0.2em;
}
</style>
