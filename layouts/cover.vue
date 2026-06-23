<script setup lang="ts">
interface Speaker {
  name: string
  role?: string
  avatar?: string
}

defineProps<{
  subheading?: string
  event?: string
  speakers?: Speaker[]
}>()
</script>

<template>
  <div class="slidev-layout cover">
    <div class="cover__body">

      <!-- event name -->
      <div v-if="event" class="cover__event">
        <span class="cover__event-dot" aria-hidden="true" />
        {{ event }}
      </div>

      <!-- heading from slot, subheading from prop -->
      <div class="cover__heading-block">
        <slot />
        <p v-if="subheading" class="cover__subheading">{{ subheading }}</p>
      </div>

      <!-- speakers -->
      <div v-if="speakers?.length" class="cover__speakers">
        <div v-for="s in speakers.slice(0, 2)" :key="s.name" class="cover__speaker">
          <div class="cover__speaker-avatar">
            <img v-if="s.avatar" :src="s.avatar" :alt="s.name" />
            <span v-else>{{ s.name.split(' ').map(w => w[0]).slice(0, 2).join('') }}</span>
          </div>
          <div class="cover__speaker-info">
            <span class="cover__speaker-name">{{ s.name }}</span>
            <span v-if="s.role" class="cover__speaker-role">{{ s.role }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- decorative accent bar -->
    <div class="cover__accent" aria-hidden="true" />
  </div>
</template>

<style scoped>
.cover {
  position: absolute;
  inset: 0;
  padding: var(--space-12) var(--space-12) var(--space-10);
  background-color: var(--turquoise-1100);
  color: var(--grey-1500);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

/* subtle gradient wash at bottom-right for depth */
.cover::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 60% at 110% 110%, var(--turquoise-800) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at -10% -10%, var(--maroon-1100) 0%, transparent 55%);
  pointer-events: none;
}

.cover__body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: var(--space-8);
}

/* ── event ───────────────────────────────────────────────── */
.cover__event {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--typescale-label-size);
  font-weight: var(--typescale-label-weight);
  letter-spacing: var(--typescale-label-tracking);
  text-transform: uppercase;
  color: var(--turquoise-400);
  align-self: flex-start;
}

.cover__event-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--turquoise-500);
  flex-shrink: 0;
}

/* ── heading block ───────────────────────────────────────── */
.cover__heading-block {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 820px;
}

.cover :deep(h1) {
  font-family: var(--font-display);
  font-size: clamp(40px, 5.5vw, var(--typescale-display-size));
  font-weight: var(--typescale-display-weight);
  line-height: 1.05;
  letter-spacing: var(--typescale-display-tracking);
  color: var(--grey-1500);
  margin: 0;
}

.cover__subheading {
  font-family: var(--font-body);
  font-size: var(--typescale-title-size);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin: var(--space-5) 0 0;
  line-height: 1.5;
  max-width: 640px;
}

/* ── speakers ────────────────────────────────────────────── */
.cover__speakers {
  display: flex;
  gap: var(--space-8);
  align-items: center;
}

.cover__speaker {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.cover__speaker-avatar {
  width: 44px;
  height: 44px;
  border-radius: var(--shape-full);
  background: var(--turquoise-800);
  border: 2px solid var(--turquoise-600);
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 14px;
  color: var(--grey-1500);
}

.cover__speaker-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover__speaker-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cover__speaker-name {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--grey-1500);
  line-height: 1.2;
}

.cover__speaker-role {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.2;
}

/* ── accent bar ──────────────────────────────────────────── */
.cover__accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--turquoise-600) 0%, var(--maroon-700) 60%, transparent 100%);
}
</style>
