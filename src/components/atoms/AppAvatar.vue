<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  size?: number
  glow?: boolean
  ring?: boolean
}>()
</script>

<template>
  <div class="avatar" :style="{ width: `${size || 350}px`, height: `${size || 350}px` }">
    <div v-if="glow" class="avatar__glow"></div>
    <img :src="src" :alt="alt" class="avatar__image" />
    <div v-if="ring" class="avatar__ring"></div>
  </div>
</template>

<style scoped>
.avatar {
  position: relative;
}

.avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  border: 4px solid var(--bg-tertiary);
}

.avatar__glow {
  position: absolute;
  inset: -20px;
  background: var(--accent-gradient);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(40px);
  z-index: 0;
  animation: pulse 4s ease-in-out infinite;
}

.avatar__ring {
  position: absolute;
  inset: -15px;
  border: 2px dashed var(--accent-primary);
  border-radius: 50%;
  opacity: 0.3;
  animation: spin 20s linear infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
