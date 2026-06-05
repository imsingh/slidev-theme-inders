<script setup lang="ts">
import { useNav, useSlideContext } from '@slidev/client'
import { computed } from 'vue'

const { currentPage, total } = useNav()
const { $frontmatter } = useSlideContext()

const hidden = computed(() => !!$frontmatter.hideFooter)
const section = computed(() => $frontmatter.section as string | undefined)

</script>

<template>
  <footer v-if="!hidden" class="slide-footer">
    <div class="slide-footer__left">
      <span v-if="section" class="slide-footer__section">{{ section }}</span>
    </div>

    <div class="slide-footer__right">
      <span class="slide-footer__page">
        {{ currentPage }}<span class="slide-footer__total"> / {{ total }}</span>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.slide-footer {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: var(--space-3) 0;
  border-top: 1px solid var(--outline-color);
  flex-shrink: 0;
}

.slide-footer__left  { display: flex; align-items: center; }
.slide-footer__right  { display: flex; justify-content: flex-end; }

.slide-footer__section {
  font-size: 11px;
  font-weight: 500;
  color: var(--fg-muted);
  white-space: nowrap;
}

.slide-footer__section,
.slide-footer__page {
  font-size: 11px;
  font-weight: 400;
  color: var(--fg-muted);
}

.slide-footer__page {
  font-variant-numeric: tabular-nums;
}

.slide-footer__total {
  font-weight: 400;
  opacity: 0.5;
}
</style>
