<script setup lang="ts">
import type { SocialLink } from '@/types'
import { useI18n } from '@/composables/useI18n'
import AppButton from '@/components/atoms/AppButton.vue'
import AppAvatar from '@/components/atoms/AppAvatar.vue'
import SocialLinkComponent from '@/components/molecules/SocialLink.vue'

defineProps<{
  photo: string
  name: string
  socialLinks: SocialLink[]
}>()

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <div class="hero__text">
        <p class="hero__greeting">{{ t('hero.greeting') }}</p>
        <h1 class="hero__title">{{ name }}</h1>
        <h2 class="hero__subtitle">
          <span class="gradient-text">{{ t('hero.role') }}</span>
        </h2>
        <p class="hero__description">{{ t('hero.description') }}</p>
        
        <div class="hero__actions">
          <AppButton href="#projects">
            {{ t('hero.viewProjects') }}
            <span class="hero__arrow">→</span>
          </AppButton>
          <AppButton href="#contact" variant="outline">
            {{ t('hero.contact') }}
          </AppButton>
        </div>
        
        <div class="hero__social">
          <SocialLinkComponent 
            v-for="social in socialLinks" 
            :key="social.name"
            :social="social"
          />
        </div>
      </div>
      
      <div class="hero__image">
        <AppAvatar 
          :src="photo" 
          :alt="name" 
          :size="350"
          :glow="true"
          :ring="true"
        />
      </div>
    </div>
    
    <div class="hero__scroll">
      <span>{{ t('hero.scroll') }}</span>
      <div class="hero__scroll-indicator"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px var(--spacing-lg) 60px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent),
    radial-gradient(ellipse 60% 40% at 80% 60%, rgba(99, 102, 241, 0.1), transparent);
  pointer-events: none;
}

.hero__content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero__greeting {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.hero__title {
  font-size: clamp(40px, 6vw, 64px);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
  margin: 0 0 var(--spacing-md);
  color: var(--text-primary);
}

.hero__subtitle {
  font-size: clamp(24px, 4vw, 36px);
  font-weight: var(--font-weight-semibold);
  margin: 0 0 var(--spacing-lg);
}

.gradient-text {
  background: var(--accent-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero__description {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 500px;
}

.hero__actions {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
}

.hero__arrow {
  transition: transform var(--transition-fast);
}

.hero__actions > *:first-child:hover .hero__arrow {
  transform: translateX(4px);
}

.hero__social {
  display: flex;
  gap: var(--spacing-md);
}

.hero__image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-muted);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero__scroll-indicator {
  width: 24px;
  height: 40px;
  border: 2px solid var(--border-hover);
  border-radius: 12px;
  position: relative;
}

.hero__scroll-indicator::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 2px;
  animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {
  0%, 100% { top: 8px; opacity: 1; }
  50% { top: 20px; opacity: 0.3; }
}

@media (max-width: 900px) {
  .hero__content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero__text {
    order: 2;
  }
  
  .hero__image {
    order: 1;
  }
  
  .hero__description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero__actions {
    justify-content: center;
  }
  
  .hero__social {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .hero__scroll {
    display: none;
  }
}
</style>
