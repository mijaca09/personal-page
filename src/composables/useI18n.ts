import { ref, computed } from 'vue'
import type { Locale } from '@/types'
import { translations } from '@/i18n/translations'

const locale = ref<Locale>('es')

export function useI18n() {
  // Computed translator function - ensures reactivity in templates
  const t = computed(() => {
    const msgs = translations[locale.value]
    return (key: string): string => {
      const keys = key.split('.')
      let value: unknown = msgs
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = (value as Record<string, unknown>)[k]
        } else {
          return key
        }
      }
      return typeof value === 'string' ? value : key
    }
  })

  function setLocale(newLocale: Locale) {
    locale.value = newLocale
  }

  function toggleLocale() {
    locale.value = locale.value === 'es' ? 'en' : 'es'
  }

  const isSpanish = computed(() => locale.value === 'es')
  const isEnglish = computed(() => locale.value === 'en')

  return {
    locale,
    t,
    setLocale,
    toggleLocale,
    isSpanish,
    isEnglish
  }
}
