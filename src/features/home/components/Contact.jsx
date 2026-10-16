import { useState } from 'react'
import { useLang } from '../../../i18n/LanguageContext'
import { site, phoneHref } from '../../../config/site'
import { MailIcon, PhoneIcon, PinIcon, SendIcon } from './icons'

const METHODS = [
  { key: 'emailLabel', Icon: MailIcon, value: site.email, href: `mailto:${site.email}` },
  { key: 'phoneLabel', Icon: PhoneIcon, value: site.phone, href: `tel:${phoneHref}` },
  { key: 'addressLabel', Icon: PinIcon, value: null, href: null },
]

export default function Contact() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    // TODO: POST the fields to your backend instead of the local-only success state.
    e.preventDefault()
    e.currentTarget.reset()
    setSent(true)
  }

  return (
    <section className="hb-zone" id="contact">
      <div className="wrap hb-zone-in">
        <div className="hb-zone-intro">
          <span className="eyebrow">{t('nav.contact')}</span>
          <h2>{t('contact.title')}</h2>
          <p className="hb-zone-lead">{t('contact.sub')}</p>

          <ul className="hb-methods">
            {METHODS.map(({ key, Icon, value, href }) => (
              <li key={key}>
                <span className="hb-method-ico">
                  <Icon />
                </span>
                <span>
                  <span className="hb-method-lbl">{t(`contact.${key}`)}</span>
                  {href ? (
                    <a href={href}>{value}</a>
                  ) : (
                    <b>{t('contact.address')}</b>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <form className="hb-zone-form" onSubmit={handleSubmit}>
          <h3>{t('contact.formTitle')}</h3>
          <div className="hb-form-row">
            <label>
              {t('contact.name')}
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label>
              {t('contact.email')}
              <input name="email" type="email" required autoComplete="email" />
            </label>
          </div>
          <label>
            {t('contact.message')}
            <textarea name="message" required />
          </label>
          <button className="btn light" type="submit">
            {t('contact.send')}
            <SendIcon />
          </button>
          <p className="ok" role="status" aria-live="polite">
            {sent ? t('contact.sent') : ''}
          </p>
        </form>
      </div>
    </section>
  )
}
