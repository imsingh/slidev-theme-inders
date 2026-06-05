<script setup lang="ts">
defineProps<{
  src?: string
  name: string
  role?: string
  size?: 'sm' | 'md' | 'lg'
  shape?: 'circle' | 'rounded'
}>()
</script>

<template>
  <div class="avatar-block" :class="`avatar-block--${size ?? 'md'}`">
    <div class="avatar-block__image-wrap" :class="`avatar-block__image-wrap--${shape ?? 'circle'}`">
      <img v-if="src" :src="src" :alt="name" class="avatar-block__image" />
      <div v-else class="avatar-block__initials" aria-hidden="true">
        {{ name.split(' ').map(w => w[0]).slice(0, 2).join('') }}
      </div>
    </div>
    <div class="avatar-block__text">
      <span class="avatar-block__name">{{ name }}</span>
      <span v-if="role" class="avatar-block__role">{{ role }}</span>
    </div>
  </div>
</template>

<style scoped>
.avatar-block {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.avatar-block--sm .avatar-block__image-wrap--circle  { width: 40px;  height: 40px;  font-size: 14px; }
.avatar-block--md .avatar-block__image-wrap--circle  { width: 56px;  height: 56px;  font-size: 20px; }
.avatar-block--lg .avatar-block__image-wrap--circle  { width: 80px;  height: 80px;  font-size: 28px; }

.avatar-block--sm .avatar-block__image-wrap--rounded { width: 40px;  height: 40px;  font-size: 14px; }
.avatar-block--md .avatar-block__image-wrap--rounded { width: 56px;  height: 56px;  font-size: 20px; }
.avatar-block--lg .avatar-block__image-wrap--rounded { width: 80px;  height: 80px;  font-size: 28px; }

.avatar-block__image-wrap--circle  { border-radius: var(--shape-full); }
.avatar-block__image-wrap--rounded { border-radius: var(--shape-xl); }

.avatar-block__image-wrap {
  overflow: hidden;
  flex-shrink: 0;
  background: var(--primary-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--elevation-2);
}

.avatar-block__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-block__initials {
  color: var(--grey-1500);
  font-family: var(--font-body);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.avatar-block__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.avatar-block__name {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--fg-default);
  line-height: 1.2;
}

.avatar-block--sm .avatar-block__name { font-size: 14px; }
.avatar-block--md .avatar-block__name { font-size: 18px; }
.avatar-block--lg .avatar-block__name { font-size: 24px; }

.avatar-block__role {
  font-size: var(--typescale-label-size);
  font-weight: var(--typescale-label-weight);
  letter-spacing: var(--typescale-label-tracking);
  color: var(--fg-primary);
  text-transform: uppercase;
}
</style>
