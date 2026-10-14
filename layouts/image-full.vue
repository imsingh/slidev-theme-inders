<script setup lang="ts">
const props = defineProps<{
  image: string
  overlay?: number
  position?: string
}>()
</script>

<template>
  <div
    class="slidev-layout image-full"
    :style="{
      backgroundImage: `url(${image})`,
      backgroundPosition: position ?? 'center',
    }"
  >
    <div
      class="image-full__overlay"
      :style="{ opacity: overlay ?? 0.55 }"
    />
    <div class="image-full__content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.image-full {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-12);
  overflow: hidden;
  color: #fff;
}

.image-full__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
  pointer-events: none;
}

.image-full__content {
  position: relative;
  z-index: 1;
  max-width: 820px;
}

.image-full :deep(h1),
.image-full :deep(h2) {
  font-family: var(--font-display);
  font-size: var(--typescale-display-size);
  font-weight: var(--typescale-display-weight);
  color: #fff;
  margin: 0 0 var(--space-3);
  line-height: 1.1;
}

.image-full :deep(p) {
  font-size: var(--typescale-title-size);
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
}
</style>
