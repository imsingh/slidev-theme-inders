<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type?: 'note' | 'tip' | 'caution' | 'danger'
  title?: string
}>()

const meta: Record<string, { icon: string; label: string }> = {
  note:    { icon: 'i-carbon:information',    label: 'Note'    },
  tip:     { icon: 'i-carbon:idea',           label: 'Tip'     },
  caution: { icon: 'i-carbon:warning-alt',    label: 'Caution' },
  danger:  { icon: 'i-carbon:warning-filled', label: 'Danger'  },
}

const resolved = computed(() => meta[props.type ?? 'note'])
const label    = computed(() => props.title ?? resolved.value.label)
</script>

<template>
  <aside class="callout" :class="`callout--${type ?? 'note'}`">
    <div class="callout__header">
      <span class="callout__icon" :class="resolved.icon" />
      <span class="callout__label">{{ label }}</span>
    </div>
    <div class="callout__body">
      <slot />
    </div>
  </aside>
</template>

<style scoped>
.callout {
  border-radius: var(--shape-xl);
  overflow: hidden;
  font-size: var(--typescale-body-size);
  line-height: 1.6;
}

.callout__header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  font-size: var(--typescale-label-size);
  font-weight: var(--typescale-label-weight);
  letter-spacing: var(--typescale-label-tracking);
  text-transform: uppercase;
}

.callout__icon {
  font-size: 16px;
  flex-shrink: 0;
}

.callout__body {
  padding: var(--space-4) var(--space-5);
}

/* note */
.callout--note {
  background-color: var(--note-bg);
  color: var(--note-text);
}
.callout--note .callout__header {
  background-color: color-mix(in srgb, var(--note-border) 15%, var(--note-bg));
  color: var(--note-text);
}

/* tip */
.callout--tip {
  background-color: var(--tip-bg);
  color: var(--tip-text);
}
.callout--tip .callout__header {
  background-color: color-mix(in srgb, var(--tip-border) 15%, var(--tip-bg));
  color: var(--tip-text);
}

/* caution */
.callout--caution {
  background-color: var(--caution-bg);
  color: var(--caution-text);
}
.callout--caution .callout__header {
  background-color: color-mix(in srgb, var(--caution-border) 15%, var(--caution-bg));
  color: var(--caution-text);
}

/* danger */
.callout--danger {
  background-color: var(--danger-bg);
  color: var(--danger-text);
}
.callout--danger .callout__header {
  background-color: color-mix(in srgb, var(--danger-border) 15%, var(--danger-bg));
  color: var(--danger-text);
}
</style>
