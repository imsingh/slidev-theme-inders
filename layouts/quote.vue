<script setup lang="ts">
defineProps<{
  author?: string
  role?: string
  avatar?: string
}>()
</script>

<template>
  <div class="slidev-layout quote">
    <div class="quote__mark" aria-hidden="true">"</div>

    <Stack gap="xl" align="start" justify="center" class="quote__content">
      <blockquote class="quote__text">
        <slot />
      </blockquote>

      <Row v-if="author" gap="md" align="center">
        <img v-if="avatar" :src="avatar" :alt="author" class="quote__avatar" />
        <Center v-else class="quote__avatar-placeholder" aria-hidden="true">
          {{ author.split(' ').map((w: string) => w[0]).slice(0, 2).join('') }}
        </Center>
        <Stack align="start" style="gap: 2px">
          <span class="quote__author-name">— {{ author }}</span>
          <span v-if="role" class="quote__author-role">{{ role }}</span>
        </Stack>
      </Row>
    </Stack>
  </div>
</template>

<style scoped>
.quote {
  position: relative;
  overflow: hidden;
}

.quote__mark {
  position: absolute;
  top: -0.05em;
  left: var(--space-8);
  font-family: var(--font-display);
  font-size: clamp(160px, 28vw, 280px);
  font-weight: 700;
  line-height: 1;
  color: var(--primary);
  opacity: 0.18;
  pointer-events: none;
  user-select: none;
}

.quote__content {
  position: relative;
  z-index: 1;
  height: 100%;
  max-width: 760px;
  margin: 0 auto;
  text-align: left;
}

.quote__text {
  font-size: clamp(var(--typescale-title-size), 3.5vw, var(--typescale-headline-size));
  font-weight: 500;
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: var(--fg-default);
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
}

.quote__text :deep(p) {
  color: var(--fg-default);
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
}

.quote__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--shape-full);
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: var(--elevation-2);
}

.quote__avatar-placeholder {
  width: 40px;
  height: 40px;
  border-radius: var(--shape-full);
  background: var(--primary-gradient);
  color: var(--grey-1500);
  font-size: var(--typescale-body-size);
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: var(--elevation-2);
}

.quote__author-name {
  font-size: var(--typescale-body-size);
  font-weight: 600;
  color: var(--fg-default);
  line-height: 1.2;
}

.quote__author-role {
  font-size: var(--typescale-label-size);
  font-weight: var(--typescale-label-weight);
  letter-spacing: var(--typescale-label-tracking);
  color: var(--fg-secondary);
  text-transform: uppercase;
}
</style>
