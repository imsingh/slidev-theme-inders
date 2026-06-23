<script setup lang="ts">
import KbdKey from './KbdKey.vue'
import OsIcon from './OsIcon.vue'

withDefaults(defineProps<{
  osx?: string[]
  windows?: string[]
  linux?: string[]
  label?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  collapseDuplicates?: boolean
}>(), {
  size: 'md',
  collapseDuplicates: false,
})

function keysEqual(a: string[] | undefined, b: string[] | undefined) {
  if (!a || !b) return false
  return a.length === b.length && a.every((k, i) => k === b[i])
}
</script>

<template>
  <div class="kbd-shortcut">
    <div v-if="label" class="kbd-label">{{ label }}</div>
    <div class="kbd-rows">
      <div v-if="osx" class="kbd-row">
        <OsIcon os="macos" :size="size" />
        <span class="kbd-os-name">macOS</span>
        <span class="kbd-keys">
          <template v-for="(key, i) in osx" :key="i">
            <KbdKey :k="key" />
            <span v-if="i < osx.length - 1" class="kbd-plus">+</span>
          </template>
        </span>
      </div>

      <div v-if="windows && !(collapseDuplicates && keysEqual(windows, osx))" class="kbd-row">
        <OsIcon os="windows" :size="size" />
        <span class="kbd-os-name">Windows</span>
        <span class="kbd-keys">
          <template v-for="(key, i) in windows" :key="i">
            <KbdKey :k="key" />
            <span v-if="i < windows.length - 1" class="kbd-plus">+</span>
          </template>
        </span>
      </div>

      <div v-if="linux && !(collapseDuplicates && keysEqual(linux, windows))" class="kbd-row">
        <OsIcon os="linux" :size="size" />
        <span class="kbd-os-name">Linux / WSL</span>
        <span class="kbd-keys">
          <template v-for="(key, i) in linux" :key="i">
            <KbdKey :k="key" />
            <span v-if="i < linux.length - 1" class="kbd-plus">+</span>
          </template>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kbd-shortcut {
  display: inline-flex;
  flex-direction: column;
  gap: 0.25em;
}

.kbd-label {
  font-family: var(--font-body);
  font-size: 0.8em;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.15em;
  letter-spacing: 0.02em;
}

.kbd-rows {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
}

.kbd-row {
  display: flex;
  align-items: center;
  gap: 0.6em;
}

.kbd-os-name {
  font-family: var(--font-body);
  font-size: 0.78em;
  color: var(--fg-muted);
  width: 6em;
  flex-shrink: 0;
}

.kbd-keys {
  display: flex;
  align-items: center;
  gap: 0.3em;
}

.kbd-plus {
  font-size: 0.75em;
  color: var(--fg-muted);
  user-select: none;
}
</style>
