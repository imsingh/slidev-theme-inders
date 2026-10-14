<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps<{ maxSize?: number }>()

const container = ref<HTMLElement | null>(null)
const inner = ref<HTMLElement | null>(null)
const scale = ref(1)

let ro: ResizeObserver | null = null

function measure() {
  if (!container.value || !inner.value) return
  const cw = container.value.offsetWidth
  const iw = inner.value.scrollWidth
  if (iw === 0) return
  scale.value = Math.min(cw / iw, 1)
}

onMounted(() => {
  ro = new ResizeObserver(measure)
  if (container.value) ro.observe(container.value)
  measure()
})

onBeforeUnmount(() => ro?.disconnect())
</script>

<template>
  <div ref="container" class="fit-wrap">
    <div
      ref="inner"
      class="fit-inner"
      :style="{ transform: `scale(${scale})` }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fit-wrap {
  width: 100%;
  overflow: hidden;
}

.fit-inner {
  display: inline-block;
  white-space: nowrap;
  transform-origin: left center;
}
</style>
