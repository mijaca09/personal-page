<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <a href="#" class="logo" :class="`logo--${size || 'md'}`">
    <span class="logo__bracket">&lt;</span>
    <span class="logo__text">MJ</span>
    <span class="logo__bracket">/&gt;</span>
  </a>
</template>

<style scoped>
.logo {
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-family: var(--font-mono);
}

.logo--sm {
  font-size: 20px;
}

.logo--md {
  font-size: 24px;
}

.logo--lg {
  font-size: 28px;
}

.logo__bracket {
  color: var(--accent-primary);
}

.logo__text {
  color: var(--text-primary);
}
</style>
