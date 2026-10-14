<script setup lang="ts">
// "heading" not "title" — Slidev reserves "title" for slide navigation
defineProps<{
  heading?: string
}>()
</script>

<template>
  <div class="slidev-layout default">
    <SlideLayout>
      <template v-if="heading" #header>
        <h1 class="slide-heading">{{ heading }}</h1>
        <div class="slide-heading-bar" />
      </template>
      <slot />
    </SlideLayout>
  </div>
</template>

<style scoped>
/* Content text color — only style specific to this layout */
.default :deep(.slide-layout__content) {
  color: var(--fg-muted);
}
</style>
