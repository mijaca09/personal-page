<script setup lang="ts">
defineProps<{
  tag: string
  title: string
}>()
</script>

<template>
  <div class="section-header">
    <span class="section-header__tag">{{ tag }}</span>
    <h2 class="section-header__title">{{ title }}</h2>
  </div>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-header__tag {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--accent-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--spacing-md);
}

.section-header__title {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin: 0;
}
</style>
