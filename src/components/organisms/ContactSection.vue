<script setup lang="ts">
import type { SocialLink } from '@/types'
import { useI18n } from '@/composables/useI18n'
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import SocialLinkComponent from '@/components/molecules/SocialLink.vue'

defineProps<{
  email: string
  socialLinks: SocialLink[]
}>()

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <SectionHeader :tag="t('contact.tag')" :title="t('contact.title')" />
      
      <div class="contact__content">
        <p class="contact__text">
          {{ t('contact.text') }}
        </p>

        <a :href="`mailto:${email}`" class="contact__email">
          {{ email }}
        </a>

        <div class="contact__social">
          <SocialLinkComponent 
            v-for="social in socialLinks" 
            :key="social.name"
            :social="social"
            :showLabel="true"
            size="lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.contact__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-xl);
  max-width: 600px;
  margin: 0 auto;
}

.contact__text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--text-secondary);
  margin: 0;
}

.contact__email {
  font-size: clamp(20px, 3vw, 32px);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  text-decoration: none;
  background: var(--accent-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all var(--transition-fast);
  font-family: var(--font-mono);
}

.contact__email:hover {
  opacity: 0.8;
  transform: scale(1.03);
  display: inline-block;
}

.contact__social {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 600px) {
  .contact {
    padding: 60px 0;
  }
}
</style>
