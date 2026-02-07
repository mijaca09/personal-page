<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import { useGitHubRepos } from '@/composables/useGitHubRepos'
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import GitHubCard from '@/components/molecules/GitHubCard.vue'

const { t } = useI18n()
const { repos, loading, error, refetch } = useGitHubRepos()
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <SectionHeader :tag="t('projects.tag')" :title="t('projects.title')" />
      
      <!-- Loading state -->
      <div v-if="loading" class="projects__loading">
        <div class="projects__spinner"></div>
        <p>{{ t('projects.loading') }}</p>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="projects__error">
        <p>{{ t('projects.error') }}</p>
        <button class="projects__retry" @click="refetch">
          {{ t('projects.retry') }}
        </button>
      </div>

      <!-- Repos grid -->
      <div v-else class="projects__grid">
        <GitHubCard 
          v-for="repo in repos" 
          :key="repo.name" 
          :repo="repo" 
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
}

.projects__loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  padding: 60px 0;
  color: var(--text-muted);
}

.projects__spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.projects__error {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  padding: 60px 0;
  color: var(--text-muted);
}

.projects__retry {
  padding: 10px 24px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.projects__retry:hover {
  border-color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.1);
}

@media (max-width: 600px) {
  .projects {
    padding: 60px 0;
  }
  
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
