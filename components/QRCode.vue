<script setup lang="ts">
import { onMounted, ref } from 'vue'
import QRCodeLib from 'qrcode'

const props = withDefaults(defineProps<{
  url: string
  size?: number
  dark?: string
  light?: string
}>(), {
  size: 160,
  dark: '#0a1628',
  light: '#ffffff',
})

const dataUrl = ref('')

onMounted(async () => {
  dataUrl.value = await QRCodeLib.toDataURL(props.url, {
    width: props.size * 2,
    margin: 2,
    color: { dark: props.dark, light: props.light },
  })
})
</script>

<template>
  <img
    v-if="dataUrl"
    :src="dataUrl"
    :width="size"
    :height="size"
    :alt="`QR code for ${url}`"
    class="qrcode"
  />
</template>

<style scoped>
.qrcode {
  border-radius: var(--shape-md);
  display: block;
}
</style>
