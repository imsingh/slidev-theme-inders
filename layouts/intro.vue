<script setup lang="ts">
import { computed } from 'vue'

interface SocialLinks {
  website?: string
  github?: string
  twitter?: string
  linkedin?: string
  youtube?: string
  instagram?: string
  bluesky?: string
  mastodon?: string
}

const props = defineProps<{
  name?: string
  role?: string
  avatar?: string
  bio?: string
  social?: SocialLinks
  chips?: string[]
}>()

const platformMeta: Record<keyof SocialLinks, { icon: string; base: string; prefix?: string }> = {
  website:   { icon: 'i-carbon:link',           base: 'https://',         prefix: '' },
  github:    { icon: 'i-carbon:logo-github',    base: 'https://github.com/',      prefix: '' },
  twitter:   { icon: 'i-carbon:logo-twitter',   base: 'https://x.com/',           prefix: '@' },
  linkedin:  { icon: 'i-carbon:logo-linkedin',  base: 'https://linkedin.com/in/', prefix: '' },
  youtube:   { icon: 'i-carbon:logo-youtube',   base: 'https://youtube.com/@',    prefix: '' },
  instagram: { icon: 'i-carbon:logo-instagram', base: 'https://instagram.com/',   prefix: '@' },
  bluesky:   { icon: 'i-carbon:at',             base: 'https://bsky.app/profile/', prefix: '' },
  mastodon:  { icon: 'i-carbon:at',             base: 'https://',                 prefix: '' },
}

function resolveUrl(platform: keyof SocialLinks, value: string) {
  const meta = platformMeta[platform]
  if (platform === 'website') return value.startsWith('http') ? value : `https://${value}`
  if (platform === 'mastodon') return value.startsWith('http') ? value : `https://${value}`
  return `${meta.base}${value}`
}

function resolveLabel(platform: keyof SocialLinks, value: string) {
  const meta = platformMeta[platform]
  if (platform === 'website') return value.replace(/^https?:\/\//, '')
  return `${meta.prefix}${value}`
}

const socialEntries = computed(() =>
  props.social
    ? (Object.entries(props.social) as [keyof SocialLinks, string][])
        .filter(([, v]) => !!v)
        .map(([platform, value]) => ({
          platform,
          icon: platformMeta[platform].icon,
          url: resolveUrl(platform, value),
          label: resolveLabel(platform, value),
        }))
    : []
)
</script>

<template>
  <div class="slidev-layout intro">
    <!-- left: full-height photo -->
    <div class="intro__left">
      <img
        v-if="avatar"
        :src="avatar"
        :alt="name"
        class="intro__avatar"
      />
      <div v-else class="intro__avatar-fallback" aria-hidden="true">
        {{ (name ?? '?').split(' ').map((w: string) => w[0]).slice(0, 2).join('') }}
      </div>
    </div>

    <!-- right: speaker info -->
    <div class="intro__right">
      <div v-if="chips?.length" class="intro__chips">
        <Chip v-for="chip in chips" :key="chip" variant="surface">{{ chip }}</Chip>
      </div>

      <div class="intro__name-block">
        <h1 class="intro__name">{{ name }}</h1>
        <p v-if="role" class="intro__role">{{ role }}</p>
      </div>

      <div class="intro__accent" aria-hidden="true" />

      <p v-if="bio" class="intro__bio">{{ bio }}</p>

      <div v-if="socialEntries.length" class="intro__social">
        <a
          v-for="s in socialEntries"
          :key="s.platform"
          :href="s.url"
          :title="s.label"
          class="intro__social-link"
          target="_blank"
        >
          <span class="intro__social-icon" :class="s.icon" aria-hidden="true" />
          <span class="intro__social-label">{{ s.label }}</span>
        </a>
      </div>

      <div v-if="$slots.default" class="intro__extra">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  display: grid;
  grid-template-columns: 2fr 3fr;
  position: absolute;
  inset: 0;
  overflow: hidden;
  padding: 0;
}

/* ---- LEFT: solid color panel ---- */
.intro__left {
  position: relative;
  background-color: var(--turquoise-800);
  overflow: hidden;
}

.intro__avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  /* blend photo into the panel color */
  mix-blend-mode: luminosity;
  opacity: 0.75;
}

.intro__avatar-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.2);
  font-family: var(--font-display);
  font-size: 120px;
  font-weight: 700;
}

/* ---- RIGHT: plain background ---- */
.intro__right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-5);
  padding: var(--space-12) var(--space-12) var(--space-12) var(--space-10);
  background-color: var(--bg-default);
  border-left: 4px solid var(--turquoise-800);
}

.intro__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.intro__name-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.intro__name {
  font-family: var(--font-display);
  font-size: var(--typescale-display-size);
  font-weight: var(--typescale-display-weight);
  line-height: var(--typescale-display-line);
  letter-spacing: var(--typescale-display-tracking);
  color: var(--fg-default);
  margin: 0;
}

.intro__role {
  font-size: var(--typescale-body-size);
  font-weight: 500;
  color: var(--fg-secondary);
  margin: 0;
}

.intro__accent {
  height: 4px;
  width: 64px;
  border-radius: var(--shape-full);
  background: var(--primary-gradient);
}

.intro__bio {
  font-size: var(--typescale-body-size);
  line-height: 1.65;
  color: var(--fg-muted);
  margin: 0;
  max-width: 480px;
}

/* social — bare icon + label, no container */
.intro__social {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-5);
}

.intro__social-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--fg-muted);
  font-size: var(--typescale-label-size);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--speed-uf) var(--motion-standard);
  white-space: nowrap;
}

.intro__social-link:hover {
  color: var(--fg-primary);
}

.intro__social-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.intro__extra {
  color: var(--fg-muted);
}
</style>
