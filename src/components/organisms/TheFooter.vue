<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import AppLogo from '@/components/atoms/AppLogo.vue'

defineProps<{
  name: string
}>()

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <AppLogo size="lg" />
        
        <p class="footer__text">
          {{ t('footer.madeWith') }} {{ name }}
        </p>
        
        <p class="footer__copyright">
          © {{ currentYear }} {{ t('footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--spacing-2xl) 0;
  border-top: 1px solid var(--border-color);
  background: var(--bg-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.footer__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  text-align: center;
}

.footer__text {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  margin: 0;
}

.footer__copyright {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  margin: 0;
}
</style>
