<template>
  <div class="slidev-layout bleed">
    <slot />
  </div>
</template>

<style scoped>
.bleed {
  position: absolute;
  inset: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}

.bleed :deep(img),
.bleed :deep(video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
