import { useLang } from '../../../i18n/LanguageContext'
import tenders from '../../../data/tenders'
import Arrow from './Arrow'

export default function Tenders() {
  const { t, tr } = useLang()
  return (
    <section className="hb-section" id="tenders">
      <div className="hb-thead">
        <h2>{t('tenders.heading')}</h2>
        <div>
          <p>
            <strong>{t('tenders.lead')}</strong> {t('tenders.body')}
          </p>
          <a className="hb-btn" href="#">
            <span>{t('tenders.browse')}</span>
            <Arrow />
          </a>
        </div>
      </div>

      <div className="hb-table">
        <div className="hb-listhead" aria-hidden="true">
          <span>{t('tenders.colTitle')}</span>
          <span>{t('tenders.colBuyer')}</span>
          <span>{t('tenders.colDeadline')}</span>
          <span />
        </div>
        {tenders.map((x) => (
          <a className="hb-row" href="#" key={x.id}>
            <div>
              <b>{tr(x.title)}</b>
              <span className="hb-cat">{tr(x.category)}</span>
            </div>
            <small className="hb-buyer">{tr(x.buyer)}</small>
            <span className="hb-due">
              {x.daysLeft} {t('tenders.days')} {t('tenders.left')}
            </span>
            <Arrow />
          </a>
        ))}
      </div>
    </section>
  )
}
