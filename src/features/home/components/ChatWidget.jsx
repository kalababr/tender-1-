import { useEffect, useId, useRef, useState } from 'react'
import { useLang } from '../../../i18n/LanguageContext'

let nextId = 0

export default function ChatWidget() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [msgs, setMsgs] = useState([])
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const fabRef = useRef(null)
  const dialogId = useId()
  const titleId = `${dialogId}-title`

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [msgs, open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        fabRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  function send(e) {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    // TODO: POST `text` to your backend (or a live-chat provider) instead of the canned reply.
    setMsgs((m) => [
      ...m,
      { id: (nextId += 1), me: true, text },
      { id: (nextId += 1), me: false, key: 'chat.reply' },
    ])
    setDraft('')
  }

  return (
    <>
      {open && (
        <div
          className="chat"
          id={dialogId}
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
        >
          <header>
            <span id={titleId}>{t('chat.title')}</span>
            <button type="button" onClick={() => setOpen(false)} aria-label={t('chat.close')}>
              ×
            </button>
          </header>
          <div className="msgs" ref={listRef} aria-live="polite" aria-atomic="false">
            <div className="msg">{t('chat.greeting')}</div>
            {msgs.map((m) => (
              <div key={m.id} className={m.me ? 'msg me' : 'msg'}>
                {m.me ? m.text : t(m.key)}
              </div>
            ))}
          </div>
          <form onSubmit={send}>
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={t('chat.placeholder')}
              aria-label={t('chat.placeholder')}
            />
            <button className="btn sm" type="submit">
              {t('chat.send')}
            </button>
          </form>
        </div>
      )}
      <button
        ref={fabRef}
        type="button"
        className="btn chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={open ? dialogId : undefined}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
        </svg>
        {t('chat.button')}
      </button>    </>
  )
}
