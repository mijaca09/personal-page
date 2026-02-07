<script setup lang="ts">
import type { Experience } from '@/types'

defineProps<{
  experience: Experience
}>()
</script>

<template>
  <div class="timeline-item">
    <div class="timeline-item__marker"></div>
    <div class="timeline-item__content">
      <span class="timeline-item__period">{{ experience.period }}</span>
      <h3 class="timeline-item__role">{{ experience.role }}</h3>
      <h4 class="timeline-item__company">{{ experience.company }}</h4>
      <p class="timeline-item__description">{{ experience.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  position: relative;
  padding-bottom: 40px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item__marker {
  position: absolute;
  left: -40px;
  top: 6px;
  width: 16px;
  height: 16px;
  background: var(--accent-gradient);
  border-radius: 50%;
  border: 3px solid var(--bg-primary);
  box-shadow: var(--shadow-glow);
}

.timeline-item__content {
  background: var(--bg-card);
  padding: 28px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.timeline-item__content:hover {
  border-color: var(--border-hover);
  transform: translateX(8px);
}

.timeline-item__period {
  display: inline-block;
  padding: 6px 14px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--accent-primary);
  margin-bottom: var(--spacing-md);
  font-family: var(--font-mono);
}

.timeline-item__role {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin: 0 0 6px;
  color: var(--text-primary);
}

.timeline-item__company {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  margin: 0 0 var(--spacing-md);
}

.timeline-item__description {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--text-muted);
  margin: 0;
}
</style>
