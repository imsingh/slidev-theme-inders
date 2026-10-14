<script setup lang="ts">
defineProps<{
  value: string
  label: string
  sublabel?: string
}>()
</script>

<template>
  <div class="slidev-layout big-number">
    <div class="big-number__content">
      <div class="big-number__value">{{ value }}</div>
      <div class="big-number__label">{{ label }}</div>
      <div v-if="sublabel" class="big-number__sublabel">{{ sublabel }}</div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.big-number {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-default);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.big-number::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in srgb, var(--turquoise-800) 20%, transparent) 0%, transparent 70%);
  pointer-events: none;
}

.big-number__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.big-number__value {
  font-family: var(--font-display);
  font-size: clamp(80px, 14vw, 140px);
  font-weight: var(--typescale-display-weight);
  line-height: 1;
  color: var(--primary);
  letter-spacing: -0.03em;
}

.big-number__label {
  font-family: var(--font-display);
  font-size: var(--typescale-headline-size);
  font-weight: 500;
  color: var(--fg-default);
  line-height: 1.2;
}

.big-number__sublabel {
  font-size: var(--typescale-body-size);
  color: var(--fg-muted);
  max-width: 480px;
  line-height: 1.5;
}
</style>
