<script setup lang="ts">
import type { NavItem } from '@/types'

defineProps<{
  item: NavItem
}>()
</script>

<template>
  <a :href="item.href" class="nav-link">
    {{ item.label }}
  </a>
</template>

<style scoped>
.nav-link {
  padding: 10px 18px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-tertiary);
}
</style>
