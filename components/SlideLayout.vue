<script setup lang="ts">
const props = defineProps<{
  gap?: 'xs' | 'sm' | 'md' | 'lg'
}>()

const gapMap: Record<string, string> = {
  xs: 'var(--space-3)',
  sm: 'var(--space-4)',
  md: 'var(--space-5)',
  lg: 'var(--space-6)',
}
</script>

<template>
  <div
    class="slide-layout"
    :style="{ '--zone-gap': gapMap[props.gap ?? 'md'] }"
  >
    <div v-if="$slots.header" class="slide-layout__header">
      <slot name="header" />
    </div>
    <div class="slide-layout__content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
/*
  SlideLayout — single source of truth for the vertical rhythm of all
  content slides. Layouts that use this never need to manage flex columns,
  Footer placement, or overflow themselves.

  Usage:
    <SlideLayout>
      <template #header>
        <h1 class="slide-heading">Title</h1>
        <div class="slide-heading-bar" />
      </template>
      <!-- main content here -->
    </SlideLayout>

  The outer `.slidev-layout.X` wrapper in each layout file is still required
  by Slidev for theming — SlideLayout is the inner chrome, not the outer shell.
*/

.slide-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: var(--zone-gap, var(--space-5));
  padding-bottom: 0;
  overflow: hidden;
}

.slide-layout__header {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/*
  Content area: fills remaining space, shrinks to prevent overflow,
  clips at boundaries. display:flex+column lets children use flex:1
  to fill it (e.g. two-col__grid, agenda__list).
*/
.slide-layout__content {
  flex: 1;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
