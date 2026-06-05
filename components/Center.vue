<script setup lang="ts">
defineProps<{
  axis?: 'both' | 'horizontal' | 'vertical'
}>()
</script>

<template>
  <div class="center-layout" :class="`center-layout--${axis ?? 'both'}`">
    <slot />
  </div>
</template>

<style scoped>
.center-layout {
  display: flex;
}

.center-layout--both {
  align-items: center;
  justify-content: center;
}

.center-layout--horizontal {
  justify-content: center;
  align-items: stretch;
}

.center-layout--vertical {
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}
</style>
