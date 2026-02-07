<script setup lang="ts">
import { getDeviconUrl } from '@/composables/useGitHubRepos'

const props = defineProps<{
  name: string
}>()

const iconUrl = getDeviconUrl(props.name)
</script>

<template>
  <div class="skill-icon" :title="name">
    <div class="skill-icon__logo">
      <img 
        v-if="iconUrl" 
        :src="iconUrl" 
        :alt="name" 
        class="skill-icon__img"
      />
      <span v-else class="skill-icon__fallback">{{ name.charAt(0) }}</span>
    </div>
    <span class="skill-icon__name">{{ name }}</span>
  </div>
</template>

<style scoped>
.skill-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  cursor: default;
}

.skill-icon:hover {
  border-color: var(--border-hover);
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.skill-icon:hover .skill-icon__img {
  transform: scale(1.15);
}

.skill-icon__logo {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform var(--transition-fast);
}

.skill-icon__fallback {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-gradient);
  border-radius: var(--radius-md);
  font-size: 22px;
  font-weight: var(--font-weight-bold);
  color: white;
}

.skill-icon__name {
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
  color: var(--text-secondary);
  font-family: var(--font-mono);
  text-align: center;
  white-space: nowrap;
}
</style>
