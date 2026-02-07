<script setup lang="ts">
import { type GitHubRepo, getDeviconUrl } from '@/composables/useGitHubRepos'
import { useI18n } from '@/composables/useI18n'
import AppTag from '@/components/atoms/AppTag.vue'
import AppIcon from '@/components/atoms/AppIcon.vue'

defineProps<{
  repo: GitHubRepo
}>()

const { t } = useI18n()

function formatRepoName(name: string): string {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
}

function getLangIcon(lang: string): string {
  return getDeviconUrl(lang)
}
</script>

<template>
  <article class="gh-card">
    <div class="gh-card__header">
      <div class="gh-card__lang-badge" v-if="repo.language">
        <span class="gh-card__lang-dot" :class="`lang--${repo.language.toLowerCase()}`"></span>
        {{ repo.language }}
      </div>
      <div class="gh-card__meta">
        <span v-if="repo.stargazers_count > 0" class="gh-card__stat">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/>
          </svg>
          {{ repo.stargazers_count }}
        </span>
        <span v-if="repo.forks_count > 0" class="gh-card__stat">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 0-1.5 0v.878h-3v-.878a2.25 2.25 0 1 0-1.5 0ZM8 14.25a.75.75 0 0 1-.75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a.75.75 0 0 1-.75.75Z"/>
          </svg>
          {{ repo.forks_count }}
        </span>
      </div>
    </div>
    
    <div class="gh-card__body">
      <h3 class="gh-card__title">{{ formatRepoName(repo.name) }}</h3>
      <p class="gh-card__description">
        {{ repo.description || t('projects.noDescription') }}
      </p>
    </div>

    <div class="gh-card__footer">
      <div class="gh-card__technologies" v-if="repo.languages && repo.languages.length > 0">
        <div 
          v-for="lang in repo.languages" 
          :key="lang"
          class="gh-card__tech"
          :title="lang"
        >
          <img 
            v-if="getLangIcon(lang)"
            :src="getLangIcon(lang)" 
            :alt="lang" 
            class="gh-card__tech-icon"
          />
          <span v-else class="gh-card__tech-fallback">
            <span class="gh-card__lang-dot" :class="`lang--${lang.toLowerCase()}`"></span>
          </span>
          <span class="gh-card__tech-name">{{ lang }}</span>
        </div>
      </div>

      <div class="gh-card__tags" v-if="repo.topics.length > 0">
        <AppTag v-for="topic in repo.topics" :key="topic" :label="topic" />
      </div>
      
      <div class="gh-card__actions">
        <a 
          v-if="repo.homepage" 
          :href="repo.homepage" 
          target="_blank" 
          rel="noopener noreferrer"
          class="gh-card__link"
          :title="t('projects.demoTitle')"
        >
          <AppIcon name="external" :size="18" />
          <span>Demo</span>
        </a>
        <a 
          :href="repo.html_url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="gh-card__link gh-card__link--github"
          :title="t('projects.codeTitle')"
        >
          <AppIcon name="github" :size="18" />
          <span>{{ t('projects.codeTitle') }}</span>
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.gh-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.gh-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.gh-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px 0;
}

.gh-card__lang-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

.gh-card__lang-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--text-muted);
}

/* Language colors */
.lang--javascript { background: #f1e05a; }
.lang--typescript { background: #3178c6; }
.lang--vue { background: #41b883; }
.lang--python { background: #3572A5; }
.lang--html { background: #e34c26; }
.lang--css { background: #563d7c; }
.lang--java { background: #b07219; }
.lang--go { background: #00ADD8; }
.lang--rust { background: #dea584; }
.lang--ruby { background: #701516; }
.lang--php { background: #4F5D95; }
.lang--c\\+\\+ { background: #f34b7d; }
.lang--c { background: #555555; }
.lang--shell { background: #89e051; }
.lang--dart { background: #00B4AB; }
.lang--kotlin { background: #A97BFF; }
.lang--swift { background: #F05138; }

.gh-card__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.gh-card__stat {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: var(--font-size-sm);
  color: var(--text-muted);
}

.gh-card__body {
  padding: 16px 28px;
  flex: 1;
}

.gh-card__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin: 0 0 var(--spacing-md);
  color: var(--text-primary);
}

.gh-card__description {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--text-secondary);
  margin: 0;
}

.gh-card__footer {
  padding: 16px 28px 24px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.gh-card__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.gh-card__tech {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.gh-card__tech:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
}

.gh-card__tech-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.gh-card__tech-fallback {
  display: inline-flex;
  align-items: center;
}

.gh-card__tech-name {
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

.gh-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.gh-card__actions {
  display: flex;
  gap: var(--spacing-sm);
}

.gh-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--text-secondary);
  text-decoration: none;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
  font-family: var(--font-sans);
}

.gh-card__link:hover {
  color: var(--text-primary);
  border-color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.1);
}

.gh-card__link--github:hover {
  background: rgba(255, 255, 255, 0.05);
}
</style>
