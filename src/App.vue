<script setup lang="ts">
import { computed } from 'vue'
import mijaFoto from './assets/mijaca.jpeg'
import { useI18n } from '@/composables/useI18n'
import { translations } from '@/i18n/translations'

// Data
import { 
  skills, 
  socialLinks,
  personalInfo 
} from '@/data/portfolio'

// Organisms
import TheNavbar from '@/components/organisms/TheNavbar.vue'
import HeroSection from '@/components/organisms/HeroSection.vue'
import AboutSection from '@/components/organisms/AboutSection.vue'
import ExperienceSection from '@/components/organisms/ExperienceSection.vue'
import ProjectsSection from '@/components/organisms/ProjectsSection.vue'
import ContactSection from '@/components/organisms/ContactSection.vue'
import TheFooter from '@/components/organisms/TheFooter.vue'

const { locale } = useI18n()

const navItems = computed(() => {
  const t = translations[locale.value].nav
  return [
    { label: t.about, href: '#about' },
    { label: t.experience, href: '#experience' },
    { label: t.projects, href: '#projects' },
    { label: t.contact, href: '#contact' }
  ]
})
</script>

<template>
  <div class="app">
    <TheNavbar :items="navItems" />
    
    <HeroSection
      :photo="mijaFoto"
      :name="personalInfo.name"
      :socialLinks="socialLinks"
    />
    
    <AboutSection
      :skills="skills"
    />
    
    <ExperienceSection />
    
    <ProjectsSection />
    
    <ContactSection
      :email="personalInfo.email"
      :socialLinks="socialLinks"
    />
    
    <TheFooter :name="personalInfo.name" />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
</style>
