<script setup lang="ts">
import type { ButtonVariant, ButtonSize } from '@/types'

defineProps<{
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  download?: boolean
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :download="download || undefined"
    class="btn"
    :class="[
      `btn--${variant || 'primary'}`,
      `btn--${size || 'md'}`
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-family: var(--font-sans);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  border-radius: var(--radius-full);
  transition: all var(--transition-normal);
  cursor: pointer;
  border: 2px solid transparent;
  white-space: nowrap;
}

/* Sizes */
.btn--sm {
  padding: 8px 16px;
  font-size: var(--font-size-sm);
}

.btn--md {
  padding: 14px 28px;
  font-size: var(--font-size-base);
}

.btn--lg {
  padding: 18px 36px;
  font-size: var(--font-size-lg);
}

/* Variants */
.btn--primary {
  background: var(--accent-gradient);
  color: white;
  box-shadow: var(--shadow-glow);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow-strong);
}

.btn--outline {
  background: transparent;
  color: var(--text-primary);
  border-color: var(--border-hover);
}

.btn--outline:hover {
  background: var(--bg-tertiary);
  border-color: var(--accent-primary);
}

.btn--ghost {
  background: transparent;
  color: var(--text-secondary);
}

.btn--ghost:hover {
  color: var(--text-primary);
  background: var(--bg-tertiary);
}
</style>
