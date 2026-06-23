<script setup lang="ts">
defineProps<{ k: string }>()
</script>

<template>
  <kbd class="kbd-key">{{ k }}</kbd>
</template>

<style scoped>
.kbd-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.8em;
  padding: 0.15em 0.45em;
  font-family: var(--font-mono);
  font-size: 0.82em;
  font-weight: 600;
  line-height: 1.4;
  color: var(--fg-default);
  background-color: var(--bg-elevated);
  border: 1.5px solid var(--outline-color);
  border-radius: var(--shape-xs);
  box-shadow: 0 2px 0 var(--outline-color);
  white-space: nowrap;
}

/* Dark-background layouts (cover, intro, section) */
.slidev-layout.cover .kbd-key,
.slidev-layout.intro .kbd-key,
.slidev-layout.section .kbd-key {
  color: var(--grey-1500);
  background-color: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 0 rgba(255, 255, 255, 0.15);
}
</style>
