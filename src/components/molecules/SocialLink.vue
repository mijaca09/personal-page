<script setup lang="ts">
import type { SocialLink } from '@/types'
import AppIcon from '@/components/atoms/AppIcon.vue'

defineProps<{
  social: SocialLink
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <a
    :href="social.url"
    class="social-link"
    :class="[
      `social-link--${size || 'md'}`,
      { 'social-link--with-label': showLabel }
    ]"
    :title="social.name"
    target="_blank"
    rel="noopener noreferrer"
  >
    <AppIcon :name="social.icon" :size="size === 'lg' ? 22 : 20" />
    <span v-if="showLabel" class="social-link__label">{{ social.name }}</span>
  </a>
</template>

<style scoped>
.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.social-link--sm {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
}

.social-link--md {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
}

.social-link--lg {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-md);
}

.social-link--with-label {
  width: auto;
  padding: 14px 24px;
  gap: 10px;
  border-radius: var(--radius-full);
}

.social-link:hover {
  background: var(--bg-card);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
}

.social-link__label {
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
}
</style>
