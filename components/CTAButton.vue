<script setup>
defineProps({
  href:      { type: String, required: true },
  text:      { type: String, required: true },
  color:     { type: String, default: 'var(--primary)' },
  textColor: { type: String, default: '#fff' },
  target:    { type: String, default: '_blank' },
})
</script>

<template>
  <a
    :href="href"
    :target="target"
    class="cta-button"
    :style="{ '--cta-bg': color, '--cta-text': textColor }"
  >
    <span v-if="$slots.icon" class="cta-button__icon"><slot name="icon" /></span>
    <span>{{ text }}</span>
    <lucide-arrow-up-right class="cta-button__trailing" />
  </a>
</template>

<style scoped>
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 2rem;
  background: var(--cta-bg);
  color: var(--cta-text);
  border-radius: var(--shape-lg);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
}

.cta-button:hover {
  animation: cta-pulse 2.5s ease-in-out infinite;
}

.cta-button__icon {
  display: flex;
  align-items: center;
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
}

.cta-button__trailing {
  width: 1.1rem;
  height: 1.1rem;
  flex-shrink: 0;
  opacity: 0.7;
}

@keyframes cta-pulse {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--cta-bg) 50%, transparent); }
  50%       { box-shadow: 0 0 0 14px color-mix(in srgb, var(--cta-bg) 0%, transparent); }
}
</style>
