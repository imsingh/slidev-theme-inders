<script setup lang="ts">
import KbdKey from './KbdKey.vue'
import OsIcon from './OsIcon.vue'

interface Shortcut {
  label: string
  osx?: string[]
  windows?: string[]
  linux?: string[]
}

defineProps<{
  shortcuts: Shortcut[]
  title?: string
}>()

function renderKeys(keys: string[] | undefined) {
  return keys ?? []
}
</script>

<template>
  <div class="shortcut-table-wrap">
    <div v-if="title" class="shortcut-table-title">{{ title }}</div>
    <table class="shortcut-table">
      <thead>
        <tr>
          <th class="col-label">Action</th>
          <th class="col-os"><span class="th-inner"><OsIcon os="macos" size="sm" /> macOS</span></th>
          <th class="col-os"><span class="th-inner"><OsIcon os="windows" size="sm" /> Windows</span></th>
          <th class="col-os"><span class="th-inner"><OsIcon os="linux" size="sm" /> Linux / WSL</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(s, i) in shortcuts" :key="i">
          <td class="col-label">{{ s.label }}</td>
          <td class="col-os">
            <span class="keys-cell">
              <template v-for="(key, ki) in renderKeys(s.osx)" :key="ki">
                <KbdKey :k="key" />
                <span v-if="ki < renderKeys(s.osx).length - 1" class="kbd-plus">+</span>
              </template>
            </span>
          </td>
          <td class="col-os">
            <span class="keys-cell">
              <template v-for="(key, ki) in renderKeys(s.windows)" :key="ki">
                <KbdKey :k="key" />
                <span v-if="ki < renderKeys(s.windows).length - 1" class="kbd-plus">+</span>
              </template>
            </span>
          </td>
          <td class="col-os">
            <span class="keys-cell">
              <template v-for="(key, ki) in renderKeys(s.linux)" :key="ki">
                <KbdKey :k="key" />
                <span v-if="ki < renderKeys(s.linux).length - 1" class="kbd-plus">+</span>
              </template>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.shortcut-table-wrap { width: 100%; }

.shortcut-table-title {
  font-family: var(--font-body);
  font-size: 0.9em;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.6em;
  letter-spacing: 0.02em;
}

.shortcut-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85em;
}

.shortcut-table thead tr { border-bottom: 2px solid var(--primary); }

.shortcut-table th {
  padding: 0.5em 0.75em;
  font-family: var(--font-body);
  font-weight: 600;
  text-align: left;
  color: var(--fg-muted);
  white-space: nowrap;
}

.th-inner { display: inline-flex; align-items: center; gap: 0.4em; }

.shortcut-table tbody tr { border-bottom: 1px solid var(--outline-color); }
.shortcut-table tbody tr:last-child { border-bottom: none; }

.shortcut-table td {
  padding: 0.45em 0.75em;
  vertical-align: middle;
}

.col-label { color: var(--fg-default); font-weight: 400; width: 40%; }
.col-os { width: 20%; }

.keys-cell { display: inline-flex; align-items: center; gap: 0.3em; }
.kbd-plus { font-size: 0.75em; color: var(--fg-muted); user-select: none; }
</style>
