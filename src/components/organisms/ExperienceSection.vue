<script setup lang="ts">
import { computed } from 'vue'
import type { Experience } from '@/types'
import { useI18n } from '@/composables/useI18n'
import { translations } from '@/i18n/translations'
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import TimelineItem from '@/components/molecules/TimelineItem.vue'

const { t, locale } = useI18n()

const experiences = computed(() => {
  return translations[locale.value].experience.items as readonly Experience[]
})
</script>

<template>
  <section id="experience" class="experience">
    <div class="container">
      <SectionHeader :tag="t('experience.tag')" :title="t('experience.title')" />
      
      <div class="experience__timeline">
        <TimelineItem 
          v-for="(exp, index) in experiences" 
          :key="index" 
          :experience="exp" 
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.experience__timeline {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  padding-left: 40px;
}

.experience__timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), transparent);
}

@media (max-width: 600px) {
  .experience {
    padding: 60px 0;
  }
}
</style>
