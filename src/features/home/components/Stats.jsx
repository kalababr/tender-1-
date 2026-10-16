import { useLang } from '../../../i18n/LanguageContext'

export default function Stats() {
  const { t } = useLang()
  return (
    <section className="hb-band">
      <div className="wrap hb-stats">
        {t('hero.stats').map((s) => (
          <div className="hb-stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
