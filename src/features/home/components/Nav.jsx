import { useMemo } from 'react'
import { useLang } from '../../../i18n/LanguageContext'
import { site, phoneHref } from '../../../config/site'
import useScrollSpy from '../useScrollSpy'
import LangToggle from './LangToggle'
import SocialLinks from './SocialLinks'
import Arrow from './Arrow'

const links = [
  ['hb.home', '#top'],
  ['nav.tenders', '#tenders'],
  ['nav.directory', '#directory'],
  ['nav.news', '#news'],
  ['nav.advertise', '#advertise'],
  ['nav.contact', '#contact'],
]

export default function Nav() {
  const { t } = useLang()
  const targets = useMemo(() => links.map(([, href]) => href), [])
  const activeHref = useScrollSpy(targets)

  return (
    <div className="hb-head">
      <div className="hb-topbar">
        <div className="wrap hb-topbar-in">
          <a href={`tel:${phoneHref}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span className="hb-grow" />
          <SocialLinks className="topbar-social" />
          <LangToggle />
        </div>
      </div>

      <header className="wrap hb-nav">
        <a className="hb-logo" href="#top">
          <i aria-hidden="true" />
          {site.name}
        </a>
        <nav className="hb-pill" aria-label={t('nav.aria')}>
          {links.map(([path, href]) => {
            const isActive = href === activeHref
            return (
              <a
                key={href}
                href={href}
                className={isActive ? 'on' : undefined}
                aria-current={isActive ? 'location' : undefined}
              >
                {t(path)}
              </a>
            )
          })}
        </nav>
        <div className="hb-right">
          <a className="hb-btn hb-cta" href="#advertise">
            <span className="lbl">{t('nav.post')}</span>
            <Arrow />
          </a>
        </div>
      </header>
    </div>
  )
}
