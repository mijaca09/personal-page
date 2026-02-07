<script setup lang="ts">
import { computed } from 'vue'
import type { Skill } from '@/types'
import { useI18n } from '@/composables/useI18n'
import { translations } from '@/i18n/translations'
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import SkillIcon from '@/components/molecules/SkillIcon.vue'

defineProps<{
  skills: Skill[]
}>()

const { t, locale } = useI18n()

const paragraphs = computed(() => {
  return translations[locale.value].about.paragraphs as readonly string[]
})
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <SectionHeader :tag="t('about.tag')" :title="t('about.title')" />
      
      <div class="about__content">
        <div class="about__text">
          <p v-for="(paragraph, index) in paragraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>
        
        <div class="about__skills">
          <h3 class="about__skills-title">{{ t('about.skillsTitle') }}</h3>
          <div class="about__skills-grid">
            <SkillIcon 
              v-for="skill in skills" 
              :key="skill.name" 
              :name="skill.name" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.about__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.about__text p {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

.about__text p:last-child {
  margin-bottom: 0;
}

.about__skills-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-lg);
  color: var(--text-primary);
}

.about__skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

@media (max-width: 900px) {
  .about__content {
    grid-template-columns: 1fr;
  }
  
  .about__skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .about {
    padding: 60px 0;
  }
  
  .about__skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
