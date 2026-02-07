<script setup lang="ts">
defineProps<{
  icon: string
  text: string
  position?: 'top-right' | 'bottom-left'
  delay?: number
}>()
</script>

<template>
  <div 
    class="floating-badge" 
    :class="`floating-badge--${position || 'top-right'}`"
    :style="{ animationDelay: `${delay || 0}s` }"
  >
    <span class="floating-badge__icon">{{ icon }}</span>
    <span class="floating-badge__text">{{ text }}</span>
  </div>
</template>

<style scoped>
.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 12px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-md);
  animation: float 3s ease-in-out infinite;
}

.floating-badge--top-right {
  top: 20px;
  right: -20px;
}

.floating-badge--bottom-left {
  bottom: 40px;
  left: -30px;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating-badge__icon {
  font-size: 20px;
}

.floating-badge__text {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

@media (max-width: 600px) {
  .floating-badge {
    display: none;
  }
}
</style>
