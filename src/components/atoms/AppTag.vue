<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="tag">{{ label }}</span>
</template>

<style scoped>
.tag {
  display: inline-block;
  padding: 6px 14px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--accent-primary);
  font-family: var(--font-mono);
}
</style>
