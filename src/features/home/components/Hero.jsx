import { useLang } from '../../../i18n/LanguageContext'
import { site } from '../../../config/site'
import categories from '../../../data/categories'
import regions from '../../../data/regions'
import Arrow from './Arrow'

export default function Hero() {
  const { t, tr } = useLang()
  const proof = t('hero.stats').slice(0, 2)
  const backdrop = site.heroImage ? { backgroundImage: `url(${site.heroImage})` } : undefined

  return (
    <section className="hb-hero" style={backdrop}>
      <div className="hb-hero-in">
        <div className="hb-hero-copy">
          <h1>{t('hero.title')}</h1>
          <p className="hb-sub">{t('hero.sub')}</p>
          <div className="hb-hero-actions">
            <a className="hb-btn light" href="#tenders">
              <span>{t('tenders.browse')}</span>
              <Arrow />
            </a>
            <div className="hb-proof">
              {proof.map((s) => (
                <div key={s.label}>
                  <strong>{s.value}</strong>
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <form className="hb-card" role="search" onSubmit={(e) => e.preventDefault()}>
          <h2>{t('hb.cardTitle')}</h2>
          <input type="search" name="q" placeholder={t('hero.placeholder')} aria-label={t('hero.searchAria')} />
          <div className="f">
            <select name="category" aria-label={t('hero.categoryAria')}>
              <option value="">{t('hero.allCategories')}</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {tr(c.name)}
                </option>
              ))}
            </select>
            <select name="region" aria-label={t('hero.regionAria')}>
              <option value="">{t('hero.allRegions')}</option>
              {regions.map((r) => (
                <option key={r.id} value={r.id}>
                  {tr(r.name)}
                </option>
              ))}
            </select>
          </div>
          <button className="hb-submit" type="submit">
            {t('hero.searchBtn')}
          </button>
        </form>
      </div>
    </section>
  )
}
