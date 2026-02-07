<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()

function downloadCv(lang: 'es' | 'en') {
  const url = lang === 'es' ? '/cv_es.pdf' : '/cv_en.pdf'
  const link = document.createElement('a')
  link.href = url
  link.download = lang === 'es' 
    ? 'Miguel_jaramillo_español.pdf' 
    : 'Miguel_jaramillo_english.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  emit('close')
}

function handleOverlayClick(e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains('cv-modal__overlay')) {
    emit('close')
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="cv-modal__overlay" @click="handleOverlayClick">
        <div class="cv-modal">
          <h3 class="cv-modal__title">{{ t('cvModal.title') }}</h3>
          
          <div class="cv-modal__buttons">
            <button class="cv-modal__option" @click="downloadCv('es')">
              <span class="cv-modal__flag">🇪🇸</span>
              <span class="cv-modal__lang">{{ t('cvModal.spanish') }}</span>
            </button>
            
            <button class="cv-modal__option" @click="downloadCv('en')">
              <span class="cv-modal__flag">🇺🇸</span>
              <span class="cv-modal__lang">{{ t('cvModal.english') }}</span>
            </button>
          </div>
          
          <button class="cv-modal__cancel" @click="emit('close')">
            {{ t('cvModal.cancel') }}
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.cv-modal__overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  padding: var(--spacing-lg);
}

.cv-modal {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.cv-modal__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-xl);
}

.cv-modal__buttons {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.cv-modal__option {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) var(--spacing-md);
  background: var(--bg-tertiary);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  color: var(--text-primary);
}

.cv-modal__option:hover {
  border-color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.1);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
}

.cv-modal__flag {
  font-size: 40px;
  line-height: 1;
}

.cv-modal__lang {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-sans);
}

.cv-modal__cancel {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: var(--font-size-sm);
  cursor: pointer;
  padding: var(--spacing-sm) var(--spacing-md);
  transition: color var(--transition-fast);
  font-family: var(--font-sans);
}

.cv-modal__cancel:hover {
  color: var(--text-primary);
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .cv-modal,
.modal-leave-active .cv-modal {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .cv-modal,
.modal-leave-to .cv-modal {
  transform: scale(0.9);
  opacity: 0;
}
</style>
