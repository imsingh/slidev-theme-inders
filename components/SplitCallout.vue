<script setup lang="ts">
defineProps<{
  heading?: string
  left: string
  right: string
  animate?: boolean
}>()
</script>

<template>
  <div class="sc-panel">
    <p v-if="heading" class="sc-heading">{{ heading }}</p>
    <div class="sc-body">
      <template v-if="animate">
        <p v-click class="sc-text">{{ left }}</p>
        <span v-click="1" class="i-ph-arrow-up-left-bold sc-arrow" />
      </template>
      <template v-else>
        <p class="sc-text">{{ left }}</p>
        <span class="i-ph-arrow-up-left-bold sc-arrow" />
      </template>

      <div class="sc-centre"><slot /></div>

      <template v-if="animate">
        <span v-click="2" class="i-ph-arrow-up-right-bold sc-arrow" />
        <p v-click="2" class="sc-text">{{ right }}</p>
      </template>
      <template v-else>
        <span class="i-ph-arrow-up-right-bold sc-arrow" />
        <p class="sc-text">{{ right }}</p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.sc-panel {
  margin-top: var(--space-6);
  border-radius: var(--shape-xl);
  padding: var(--space-8) var(--space-10);
  background: var(--primary-gradient-soft);
  border: 1px solid var(--outline-color);
}

.sc-heading {
  text-align: center;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.1em;
  color: var(--fg-default);
  margin-bottom: var(--space-6);
}

.sc-body {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-5);
}

.sc-text {
  max-width: 11rem;
  text-align: center;
  font-family: var(--font-body);
  font-size: 0.85em;
  color: var(--fg-default);
  line-height: 1.5;
}

.sc-centre {
  background: var(--bg-elevated);
  border-radius: 50%;
  width: 5.5rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--elevation-3);
  font-size: 3rem;
  flex-shrink: 0;
}

.sc-arrow {
  width: 1.5em;
  height: 1.5em;
  flex-shrink: 0;
  color: var(--primary);
  display: inline-block;
}
</style>
