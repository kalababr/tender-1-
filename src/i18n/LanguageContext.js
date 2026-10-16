import { createContext, useContext } from 'react'

export const LanguageContext = createContext(null)

/** @returns {{ lang: string, setLang: (lang: string) => void, t: (path: string) => unknown, tr: (obj: { en: string, am: string }) => string }} */
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang() must be called inside <LanguageProvider>')
  return ctx
}
