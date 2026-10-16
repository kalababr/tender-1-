import { useLang } from '../../../i18n/LanguageContext'

const LANGS = [
  { code: 'en', full: 'English', short: 'EN' },
  { code: 'am', full: 'አማርኛ', short: 'አማ' },
]

export default function LangToggle() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="lang" role="group" aria-label={t('nav.language')}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </svg>
      {LANGS.map(({ code, full, short }) => (
        <button key={code} type="button" lang={code} aria-pressed={lang === code} onClick={() => setLang(code)}>
          <span className="full">{full}</span>
          <span className="short">{short}</span>
        </button>
      ))}
    </div>
  )
}
