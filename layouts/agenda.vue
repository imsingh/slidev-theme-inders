<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { computed, ref } from 'vue'
import { useMovingHighlight } from '../composables/useMovingHighlight'

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

const enabled = computed(() => props.animated)
const { top: highlightTop, height: highlightH, visible: highlightVisible, ready: highlightReady, itemEls } =
  useMovingHighlight(activeIndex, enabled)
</script>

<template>
  <div class="slidev-layout agenda">
    <SlideLayout>
      <template #header>
        <h1 class="slide-heading">{{ heading }}</h1>
        <div class="slide-heading-bar" />
      </template>

      <div class="agenda__list">
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
          :style="!animated && activeIndex === i
            ? { background: 'color-mix(in srgb, var(--primary) 10%, transparent)' }
            : {}"
        >
          <div class="agenda__number">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="agenda__item-body">
            <div class="agenda__item-title">{{ item.title }}</div>
            <div v-if="item.description" class="agenda__item-desc">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  </div>
</template>

<style scoped>
/* list fills slide-layout__content flex column */
.agenda__list {
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-4);
  overflow: hidden;
}

/* ── Moving highlight pill ─────────────────────────────────────────────── */
.agenda__highlight {
  position: absolute;
  left: 0;
  right: 0;
  border-radius: var(--shape-lg);
  background: color-mix(in srgb, var(--primary) 10%, transparent);
  pointer-events: none;
  opacity: 0;
  will-change: top;
}

.agenda__highlight--ready {
  transition:
    top 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease;
}

.agenda__highlight--visible {
  opacity: 1;
}

/* ── Items ─────────────────────────────────────────────────────────────── */
.agenda__item {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--shape-lg);
  position: relative;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.agenda__item--upcoming { opacity: 0.35; }
.agenda__item--done     { opacity: 0.5; }

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
  font-size: var(--typescale-body-size);
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
  font-size: var(--typescale-label-size);
  color: var(--fg-muted);
  line-height: 1.5;
  transition: opacity 0.3s ease;
}

.agenda__item--upcoming .agenda__item-desc {
  opacity: 0.6;
}
</style>
