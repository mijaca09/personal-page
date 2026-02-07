<script setup lang="ts">
import type { Skill } from '@/types'

defineProps<{
  skill: Skill
}>()
</script>

<template>
  <div class="skill">
    <div class="skill__header">
      <span class="skill__name">{{ skill.name }}</span>
      <span class="skill__level">{{ skill.level }}%</span>
    </div>
    <div class="skill__bar">
      <div class="skill__progress" :style="{ width: `${skill.level}%` }"></div>
    </div>
  </div>
</template>

<style scoped>
.skill {
  background: var(--bg-card);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.skill__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
}

.skill__name {
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  font-family: var(--font-mono);
}

.skill__level {
  color: var(--accent-primary);
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-mono);
}

.skill__bar {
  height: 8px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.skill__progress {
  height: 100%;
  background: var(--accent-gradient);
  border-radius: var(--radius-full);
  transition: width 1s ease;
}
</style>
