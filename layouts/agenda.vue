<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { computed, nextTick, onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  heading?: string
  items: { title: string; description?: string }[]
  animated?: boolean
  current?: number
}>(), {
  heading: 'Agenda',
  animated: false,
})

const { $clicks } = useSlideContext()

const activeIndex = computed(() => {
  if (props.animated) return $clicks.value - 1
  if (props.current != null) return props.current - 1
  return -1
})

// ── Moving highlight ──────────────────────────────────────────────────────────
const listEl = ref<HTMLElement | null>(null)
const itemEls = ref<HTMLElement[]>([])
// Use offsetTop/offsetHeight — relative to the positioned parent, stable in Slidev
const highlightTop = ref(0)
const highlightH = ref(0)
const highlightVisible = ref(false)
const highlightReady = ref(false) // false = skip transition on first placement

async function placeHighlight(index: number, instant = false) {
  if (!props.animated || index < 0 || index >= props.items.length) {
    highlightVisible.value = false
    return
  }
  await nextTick()
  const el = itemEls.value[index]
  if (!el) return

  if (instant) {
    // Position without transition, then reveal
    highlightReady.value = false
    highlightTop.value = el.offsetTop
    highlightH.value = el.offsetHeight
    await nextTick()
    highlightVisible.value = true
    // Allow transition only after the initial paint
    requestAnimationFrame(() => { highlightReady.value = true })
  } else {
    highlightTop.value = el.offsetTop
    highlightH.value = el.offsetHeight
    highlightVisible.value = true
  }
}

watch(activeIndex, idx => placeHighlight(idx, false))
onMounted(() => placeHighlight(activeIndex.value, true))
</script>

<template>
  <div class="slidev-layout agenda">
    <header class="agenda__header">
      <h1 class="agenda__title">{{ heading }}</h1>
      <div class="agenda__underline" />
    </header>

    <div ref="listEl" class="agenda__list">
      <!-- animated moving highlight pill -->
      <div
        v-if="animated"
        class="agenda__highlight"
        :class="{
          'agenda__highlight--visible': highlightVisible,
          'agenda__highlight--ready': highlightReady,
        }"
        :style="{ top: `${highlightTop}px`, height: `${highlightH}px` }"
      />

      <div
        v-for="(item, i) in items"
        :key="i"
        :ref="el => { if (el) itemEls[i] = el as HTMLElement }"
        class="agenda__item"
        :class="{
          'agenda__item--active':   activeIndex === i,
          'agenda__item--done':     activeIndex > i,
          'agenda__item--upcoming': activeIndex >= 0 && activeIndex < i,
        }"
      >
        <div class="agenda__number">{{ String(i + 1).padStart(2, '0') }}</div>
        <div class="agenda__item-body">
          <div class="agenda__item-title">{{ item.title }}</div>
          <div v-if="item.description" class="agenda__item-desc">{{ item.description }}</div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.agenda {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  height: 100%;
  background: var(--bg-default);
  overflow: hidden;
  padding-bottom: 0;
}

.agenda__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex-shrink: 0;
}

.agenda__title {
  font-family: var(--font-display);
  font-size: var(--typescale-headline-size);
  font-weight: var(--typescale-headline-weight);
  color: var(--fg-default);
  margin: 0;
}

.agenda__underline {
  height: 3px;
  width: 48px;
  flex-shrink: 0;
  border-radius: var(--shape-full);
  background: var(--primary-gradient);
}

/* list is position:relative so the highlight can be absolutely placed */
.agenda__list {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-4);
  overflow: hidden;
}

/* ── Moving highlight pill ───────────────────────────────────────────────── */
.agenda__highlight {
  position: absolute;
  left: 0;
  right: 0;
  border-radius: var(--shape-lg);
  background: color-mix(in srgb, var(--primary) 10%, transparent);
  pointer-events: none;
  opacity: 0;
  /* no transition until ready — prevents jump on first render */
  will-change: top;
}

/* only add transition after initial placement */
.agenda__highlight--ready {
  transition:
    top 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease;
}

.agenda__highlight--visible {
  opacity: 1;
}

/* ── Items ───────────────────────────────────────────────────────────────── */
.agenda__item {
  display: flex;
  align-items: baseline;
  gap: var(--space-5);
  padding: var(--space-4) var(--space-5);
  border-radius: var(--shape-lg);
  position: relative; /* above the highlight */
  z-index: 1;
  transition: opacity 0.3s ease;
}

/* in static mode, colour the active item directly */
.agenda__item--active:not(.agenda--animated *) {
  background: color-mix(in srgb, var(--primary) 10%, transparent);
}

.agenda__item--upcoming {
  opacity: 0.35;
}

.agenda__item--done {
  opacity: 0.5;
}

.agenda__number {
  font-family: var(--font-mono);
  font-size: var(--typescale-label-size);
  font-weight: 600;
  color: var(--primary);
  letter-spacing: 0.05em;
  flex-shrink: 0;
  min-width: 2ch;
  transition: color 0.3s ease;
}

.agenda__item--upcoming .agenda__number,
.agenda__item--done .agenda__number {
  color: var(--fg-muted);
}

.agenda__item-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.agenda__item-title {
  font-family: var(--font-display);
  font-size: var(--typescale-title-size);
  font-weight: 600;
  color: var(--fg-default);
  line-height: 1.3;
  transition: color 0.3s ease;
}

.agenda__item--upcoming .agenda__item-title,
.agenda__item--done .agenda__item-title {
  color: var(--fg-muted);
}

.agenda__item-desc {
  font-size: var(--typescale-body-size);
  color: var(--fg-muted);
  line-height: 1.5;
  transition: opacity 0.3s ease;
}

.agenda__item--upcoming .agenda__item-desc {
  opacity: 0.6;
}
</style>
