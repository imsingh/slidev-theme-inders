<script setup lang="ts">
interface TreeItem {
  name: string
  type?: 'file' | 'dir'
  depth?: number
  active?: boolean
  badge?: string
  comment?: string
}

defineProps<{ items: TreeItem[] }>()

function icon(item: TreeItem) {
  if (item.type === 'dir') return 'i-ph-folder-open-bold'
  const ext = item.name.split('.').pop() ?? ''
  const map: Record<string, string> = {
    vue:  'i-ph-file-vue-bold',
    ts:   'i-ph-file-ts-bold',
    js:   'i-ph-file-js-bold',
    json: 'i-ph-file-code-bold',
    md:   'i-ph-file-text-bold',
    css:  'i-ph-file-css-bold',
    html: 'i-ph-file-html-bold',
  }
  return map[ext] ?? 'i-ph-file-bold'
}
</script>

<template>
  <div class="file-tree">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="file-tree__row"
      :class="{ 'file-tree__row--active': item.active }"
      :style="{ paddingLeft: `calc(${item.depth ?? 0} * 1.25rem + var(--space-3))` }"
    >
      <span class="file-tree__icon" :class="icon(item)" />
      <span class="file-tree__name" :class="{ 'file-tree__name--dir': item.type === 'dir' }">{{ item.name }}</span>
      <span v-if="item.badge" class="file-tree__badge">{{ item.badge }}</span>
      <span v-if="item.comment" class="file-tree__comment">{{ item.comment }}</span>
    </div>
  </div>
</template>

<style scoped>
.file-tree {
  font-family: var(--font-mono);
  font-size: 0.875em;
  background: var(--bg-surface);
  border: 1px solid var(--outline-color);
  border-radius: var(--shape-lg);
  overflow: hidden;
  padding: var(--space-3) 0;
}

.file-tree__row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: var(--space-4);
  transition: background var(--speed-uf) var(--motion-standard);
  min-height: 1.75rem;
}

.file-tree__row--active {
  background: color-mix(in srgb, var(--primary) 12%, transparent);
}

.file-tree__icon {
  width: 1em;
  height: 1em;
  color: var(--fg-muted);
  flex-shrink: 0;
}

.file-tree__row--active .file-tree__icon {
  color: var(--primary);
}

.file-tree__name {
  flex: 1;
  color: var(--fg-default);
  white-space: nowrap;
}

.file-tree__name--dir {
  font-weight: 600;
}

.file-tree__badge {
  font-size: 10px;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: var(--shape-full);
  background: color-mix(in srgb, var(--primary) 15%, transparent);
  color: var(--primary);
  flex-shrink: 0;
}

.file-tree__comment {
  color: var(--fg-muted);
  opacity: 0.5;
  font-size: 0.85em;
  flex-shrink: 0;
}
</style>
