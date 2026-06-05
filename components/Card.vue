<script setup lang="ts">
defineProps<{
  variant?: 'filled' | 'outlined' | 'elevated' | 'tonal'
  shape?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  padding?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div
    class="card"
    :class="[
      `card--${variant ?? 'filled'}`,
      `card--shape-${shape ?? 'xl'}`,
      `card--pad-${padding ?? 'md'}`,
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition:
    background-color var(--speed-f) var(--motion-standard),
    box-shadow var(--speed-f) var(--motion-standard);
}

.card--shape-sm  { border-radius: var(--shape-sm);  }
.card--shape-md  { border-radius: var(--shape-md);  }
.card--shape-lg  { border-radius: var(--shape-lg);  }
.card--shape-xl  { border-radius: var(--shape-xl);  }
.card--shape-2xl { border-radius: var(--shape-2xl); }

.card--pad-sm  { padding: var(--space-4); }
.card--pad-md  { padding: var(--space-6); }
.card--pad-lg  { padding: var(--space-8); }

.card--filled {
  background-color: var(--bg-surface);
  color: var(--fg-default);
}

.card--tonal {
  background-color: var(--bg-color-tab-active);
  color: var(--fg-default);
}

.card--elevated {
  background-color: var(--bg-elevated);
  color: var(--fg-default);
  box-shadow: var(--elevation-2);
}

.card--outlined {
  background-color: var(--bg-default);
  color: var(--fg-default);
  box-shadow: inset 0 0 0 1.5px var(--outline-color);
}
</style>
