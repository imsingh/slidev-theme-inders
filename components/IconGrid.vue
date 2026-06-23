<script setup lang="ts">
import { resolveComponent } from 'vue'

defineProps<{
  items: { icon: string; text: string }[]
  columns?: number
}>()

function lucide(name: string) {
  const slug = name.replace(/^lucide:/, '')
  const pascal = slug.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('')
  return resolveComponent(`Lucide${pascal}`)
}
</script>

<template>
  <div class="ig-grid" :style="columns ? { gridTemplateColumns: `repeat(${columns}, 1fr)` } : {}">
    <div v-for="item in items" :key="item.icon" class="ig-item">
      <div class="ig-icon-wrap">
        <component :is="lucide(item.icon)" class="ig-icon" />
      </div>
      <p class="ig-text" v-html="item.text" />
    </div>
  </div>
</template>

<style scoped>
.ig-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-8);
}

.ig-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-4);
}

.ig-icon-wrap {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: var(--primary-gradient-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ig-icon {
  width: 2.2rem;
  height: 2.2rem;
  color: var(--primary);
}

.ig-text {
  font-family: var(--font-body);
  font-size: 0.78em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.5;
  color: var(--fg-default);
}
</style>
