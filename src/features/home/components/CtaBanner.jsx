import { useLang } from '../../../i18n/LanguageContext'

export default function CtaBanner() {
  const { t } = useLang()
  return (
    <section className="cta">
      <div className="wrap cta-in">
        <div>
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.sub')}</p>
        </div>
        <div className="cta-actions">
          <a className="btn cta-btn" href="#">
            {t('cta.button')}
          </a>
          <a className="cta-alt" href="#contact">
            {t('hb.about.callback')}
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
