<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { locale, toggleLocale } = useI18n()
</script>

<template>
  <button class="lang-toggle" @click="toggleLocale" :title="locale === 'es' ? 'Switch to English' : 'Cambiar a Español'">
    <span class="lang-toggle__flag">{{ locale === 'es' ? '🇪🇸' : '🇺🇸' }}</span>
    <span class="lang-toggle__text">{{ locale === 'es' ? 'ES' : 'EN' }}</span>
  </button>
</template>

<style scoped>
.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.lang-toggle:hover {
  border-color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.1);
  transform: translateY(-1px);
}

.lang-toggle__flag {
  font-size: 16px;
  line-height: 1;
}

.lang-toggle__text {
  letter-spacing: 1px;
}
</style>
