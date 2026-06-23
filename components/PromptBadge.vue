<template>
  <div class="prompt-badge-wrapper">
    <div class="prompt-badge">
      <lucide-sparkles class="prompt-badge__icon" />
      <span class="prompt-badge__label">Prompt</span>
    </div>
  </div>
</template>

<style scoped>
.prompt-badge-wrapper { display: block; }

.prompt-badge {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 0.35em;
  background: color-mix(in srgb, var(--turquoise-800) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--turquoise-800) 40%, transparent);
  color: var(--turquoise-800);
  border-radius: var(--shape-full);
  padding: 0.2em 0.7em 0.2em 0.5em;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.72em;
  letter-spacing: 0.03em;
  margin-top: var(--space-4);
}

.dark .prompt-badge {
  background: color-mix(in srgb, var(--turquoise-500) 15%, transparent);
  border-color: color-mix(in srgb, var(--turquoise-500) 40%, transparent);
  color: var(--turquoise-500);
}

.prompt-badge__icon { width: 1.1em; height: 1.1em; flex-shrink: 0; }
.prompt-badge__label { line-height: 1; }
</style>
