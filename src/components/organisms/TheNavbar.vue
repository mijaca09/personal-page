<script setup lang="ts">
import { ref } from 'vue'
import type { NavItem } from '@/types'
import { useI18n } from '@/composables/useI18n'
import AppLogo from '@/components/atoms/AppLogo.vue'
import AppButton from '@/components/atoms/AppButton.vue'
import NavLink from '@/components/molecules/NavLink.vue'
import LanguageToggle from '@/components/atoms/LanguageToggle.vue'
import CvDownloadModal from '@/components/molecules/CvDownloadModal.vue'

defineProps<{
  items: NavItem[]
}>()

const { t } = useI18n()
const showCvModal = ref(false)
</script>

<template>
  <nav class="navbar">
    <div class="navbar__container">
      <AppLogo />
      
      <ul class="navbar__menu">
        <li v-for="item in items" :key="item.href">
          <NavLink :item="item" />
        </li>
      </ul>
      
      <div class="navbar__actions">
        <LanguageToggle />
        <AppButton size="sm" @click="showCvModal = true">
          <span>↓</span>
          {{ t('nav.downloadCv') }}
        </AppButton>
      </div>
    </div>
    
    <CvDownloadModal :show="showCvModal" @close="showCvModal = false" />
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  padding: var(--spacing-md) 0;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
}

.navbar__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__menu {
  display: flex;
  gap: var(--spacing-sm);
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

@media (max-width: 900px) {
  .navbar__menu {
    display: none;
  }
  
  .navbar__actions > :last-child {
    display: none;
  }
}
</style>
