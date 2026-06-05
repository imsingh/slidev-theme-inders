<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  background?: string
  chip?: string
  animated?: boolean
}>()

const bgStyle = computed(() => {
  if (!props.background) return {}
  const isColor = props.background[0] === '#' || props.background.startsWith('rgb')
  return isColor
    ? { background: props.background }
    : { backgroundImage: `url("${props.background}")`, backgroundSize: 'cover', backgroundPosition: 'center' }
})
</script>

<template>
  <div class="slidev-layout cover" :style="bgStyle">
    <div v-if="!background" class="cover__gradient" aria-hidden="true">
      <template v-if="animated">
        <div class="cover__blob cover__blob--1" />
        <div class="cover__blob cover__blob--2" />
        <div class="cover__blob cover__blob--3" />
      </template>
    </div>

    <div class="cover__content">
      <div v-if="chip" class="cover__chip-wrap">
        <Chip variant="outline">{{ chip }}</Chip>
      </div>
      <slot />
    </div>

    <div class="cover__blob" aria-hidden="true" />
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  height: 100%;
  padding: 0;
  /* theme-locked: always dark, never affected by light/dark switch */
  background-color: var(--turquoise-1100);
  color: var(--grey-1500);
  transition: none;
}

.cover__gradient {
  position: absolute;
  inset: 0;
  background: var(--primary-gradient);
  z-index: 0;
  overflow: hidden;
}

/* aurora blobs — only rendered when animated=true */
.cover__blob {
  position: absolute;
  border-radius: var(--shape-full);
  filter: blur(48px);
  opacity: 0.9;
  pointer-events: none;
  will-change: transform;
}

.cover__blob--1 {
  width: 70%;
  height: 70%;
  top: -15%;
  left: -15%;
  background: radial-gradient(circle, var(--turquoise-600) 0%, transparent 65%);
  animation: blob-float-1 18s ease-in-out infinite;
}

.cover__blob--2 {
  width: 60%;
  height: 60%;
  bottom: -20%;
  right: -10%;
  background: radial-gradient(circle, var(--maroon-700) 0%, transparent 65%);
  animation: blob-float-2 22s ease-in-out infinite;
}

.cover__blob--3 {
  width: 55%;
  height: 55%;
  top: 25%;
  left: 30%;
  background: radial-gradient(circle, var(--turquoise-900) 0%, transparent 65%);
  animation: blob-float-3 26s ease-in-out infinite;
}

.cover__content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  width: 100%;
}

.cover__chip-wrap {
  margin-bottom: var(--space-6);
}

/* force chip colours to work on the dark gradient background */
.cover :deep(.chip--outline) {
  color: var(--grey-1500);
  box-shadow: inset 0 0 0 1.5px rgba(255, 255, 255, 0.5);
}

.cover :deep(h1) {
  font-family: var(--font-display);
  font-size: var(--typescale-display-size);
  font-weight: var(--typescale-display-weight);
  line-height: var(--typescale-display-line);
  letter-spacing: var(--typescale-display-tracking);
  color: var(--grey-1500);
}

.cover :deep(h1 + p),
.cover :deep(p) {
  color: rgba(255, 255, 255, 0.75);
  margin-top: var(--space-4);
  font-size: var(--typescale-title-size);
}

.cover :deep(a) {
  color: var(--turquoise-300);
}
</style>
