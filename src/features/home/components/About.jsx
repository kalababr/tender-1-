import { useLang } from '../../../i18n/LanguageContext'
import Arrow from './Arrow'

export default function About() {
  const { t } = useLang()
  return (
    <section className="hb-section" id="about">
      <div className="hb-about">
        <div className="hb-about-l">
          <span className="eyebrow">{t('hb.about.tag')}</span>
          <h2>
            {t('hb.about.before')}
            <mark>{t('hb.about.mark')}</mark>
            {t('hb.about.after')}
          </h2>
        </div>
        <div className="hb-about-r">
          <p>{t('hb.about.text')}</p>
          <ul className="hb-points">
            {t('hb.points').map((p) => (
              <li key={p}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 10 17.5 19 7.5" /></svg>
                {p}
              </li>
            ))}
          </ul>
          <div className="hb-links">
            <a className="hb-btn" href="#">
              <span>{t('hb.about.more')}</span>
              <Arrow />
            </a>
            <a className="hb-text" href="#contact">{t('hb.about.callback')} →</a>
          </div>
        </div>
      </div>
    </section>
  )
}