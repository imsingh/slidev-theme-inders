<script setup>
defineProps({
  time: { type: [Number, String], default: null },
  unit: { type: String, default: 'min' },
})
</script>

<template>
  <div class="hands-on-wrapper">
    <div class="hands-on-badge">
      <lucide-hand class="hands-on-badge__icon" />
      <span class="hands-on-badge__label">Hands-on</span>
      <template v-if="time != null">
        <span class="hands-on-badge__divider" />
        <lucide-clock class="hands-on-badge__icon" />
        <span class="hands-on-badge__label">{{ time }} {{ unit }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.hands-on-wrapper { display: block; margin: var(--space-4) 0; }

.hands-on-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  width: fit-content;
  background: color-mix(in srgb, var(--primary) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--primary) 40%, transparent);
  color: var(--primary);
  border-radius: var(--shape-full);
  padding: 0.2em 0.7em 0.2em 0.5em;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.72em;
  letter-spacing: 0.03em;
}

.hands-on-badge__icon { width: 1.1em; height: 1.1em; flex-shrink: 0; }
.hands-on-badge__label { line-height: 1; }
.hands-on-badge__divider {
  width: 1px;
  height: 0.9em;
  background: color-mix(in srgb, var(--primary) 40%, transparent);
  margin: 0 0.15em;
}
</style>
