import { useLang } from '../../../i18n/LanguageContext'
import SocialLinks from './SocialLinks'
import { site, phoneHref } from '../../../config/site'

const explore = [
  ['tenders', '#tenders'],
  ['directory', '#directory'],
  ['news', '#news'],
  ['advertise', '#advertise'],
]

const company = [
  ['about', '#about'],
  ['contact', '#contact'],
  ['terms', '#'],
]

export default function Footer() {
  const { t } = useLang()
  return (
    <footer>
      <div className="wrap">
        <div className="hb-f-grid">
          <div className="hb-f-brand-col">
            <a className="hb-f-brand" href="#top">
              <span className="hb-mark" aria-hidden="true" />
              {site.name}
            </a>
            <p className="hb-f-blurb">{t('footer.blurb')}</p>
            <div className="footer-social">
              <SocialLinks />
            </div>
          </div>

          <div className="hb-f-col">
            <h3>{t('footer.explore')}</h3>
            <nav aria-label={t('footer.explore')}>
              {explore.map(([key, href]) => (
                <a href={href} key={key}>
                  {t(`footer.${key}`)}
                </a>
              ))}
            </nav>
          </div>

          <div className="hb-f-col">
            <h3>{t('footer.company')}</h3>
            <nav aria-label={t('footer.company')}>
              {company.map(([key, href]) => (
                <a href={href} key={key}>
                  {t(`footer.${key}`)}
                </a>
              ))}
            </nav>
          </div>

          <div className="hb-f-col">
            <h3>{t('footer.getInTouch')}</h3>
            <div className="hb-f-contact">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={`tel:${phoneHref}`}>{site.phone}</a>
              <span>{t('contact.address')}</span>
            </div>
          </div>
        </div>

        <div className="hb-f-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <a href="#top">{t('hb.home')}</a>
        </div>
      </div>
    </footer>
  )
}
