<script setup lang="ts">
withDefaults(defineProps<{
  heading?: string
  items: { title: string; description?: string }[]
  current?: number
}>(), {
  heading: 'Agenda',
})
</script>

<template>
  <div class="slidev-layout agenda">
    <header class="agenda__header">
      <h1 class="agenda__title">{{ heading }}</h1>
      <div class="agenda__underline" />
    </header>
    <div class="agenda__list">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="agenda__item"
        :class="{
          'agenda__item--active': current === i + 1,
          'agenda__item--done': current != null && i + 1 < current,
          'agenda__item--upcoming': current != null && i + 1 > current,
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

.agenda__list {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-4);
  overflow: hidden;
}

.agenda__item {
  display: flex;
  align-items: baseline;
  gap: var(--space-5);
  padding: var(--space-4) var(--space-5);
  border-radius: var(--shape-lg);
  transition: background var(--speed-f) var(--motion-standard), opacity var(--speed-f) var(--motion-standard);
}

.agenda__item--active {
  background: color-mix(in srgb, var(--primary) 10%, transparent);
}

.agenda__item--upcoming {
  opacity: 0.4;
}

.agenda__item--done {
  opacity: 0.55;
}

.agenda__number {
  font-family: var(--font-mono);
  font-size: var(--typescale-label-size);
  font-weight: 600;
  color: var(--primary);
  letter-spacing: 0.05em;
  flex-shrink: 0;
  min-width: 2ch;
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
}

.agenda__item-desc {
  font-size: var(--typescale-body-size);
  color: var(--fg-muted);
  line-height: 1.5;
}
</style>
