<script setup lang="ts">
import type { Project } from '@/types'
import { useI18n } from '@/composables/useI18n'
import AppTag from '@/components/atoms/AppTag.vue'
import AppIcon from '@/components/atoms/AppIcon.vue'

defineProps<{
  project: Project
}>()

const { t } = useI18n()
</script>

<template>
  <article class="project-card">
    <div class="project-card__image">
      <img :src="project.image" :alt="project.title" />
      <div class="project-card__overlay">
        <a :href="project.demo" class="project-card__link" :title="t('projects.demoTitle')">
          <AppIcon name="external" :size="22" />
        </a>
        <a :href="project.github" class="project-card__link" :title="t('projects.codeTitle')">
          <AppIcon name="github" :size="22" />
        </a>
      </div>
    </div>
    <div class="project-card__info">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__description">{{ project.description }}</p>
      <div class="project-card__tags">
        <AppTag v-for="tag in project.tags" :key="tag" :label="tag" />
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.project-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.project-card__image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-card__image img {
  transform: scale(1.1);
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 15, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__link {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-hover);
  border-radius: 50%;
  color: var(--text-primary);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.project-card__link:hover {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  transform: scale(1.1);
}

.project-card__info {
  padding: 28px;
}

.project-card__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin: 0 0 var(--spacing-md);
  color: var(--text-primary);
}

.project-card__description {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--text-secondary);
  margin: 0 0 var(--spacing-lg);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}
</style>
