import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './LanguageContext'
import en from './en'
import am from './am'

const dictionaries = { en, am }
const STORAGE_KEY = 'tenderhub.lang'
const DEFAULT_LANG = 'en'

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && Object.hasOwn(dictionaries, stored)) return stored
  } catch {
    /* storage unavailable (private mode / disabled cookies) */
  }
  return DEFAULT_LANG
}

const resolve = (dict, path) => path.split('.').reduce((node, key) => node?.[key], dict)

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* storage unavailable */
    }
  }, [lang])

  // t('hero.sub') -> string (or array) from the active language, falling back to English.
  const t = useCallback(
    (path) => {
      const value = resolve(dictionaries[lang], path)
      if (value !== undefined) return value
      const fallback = resolve(en, path)
      if (fallback === undefined && import.meta.env.DEV) {
        console.warn(`[i18n] missing translation key: "${path}"`)
      }
      return fallback ?? path
    },
    [lang]
  )

  // tr({ en: '...', am: '...' }) -> the value for the active language.
  const tr = useCallback((obj) => obj?.[lang] ?? obj?.en ?? '', [lang])

  const value = useMemo(() => ({ lang, setLang, t, tr }), [lang, t, tr])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
