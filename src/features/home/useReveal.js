import { useEffect } from 'react'

const REVEAL_SELECTOR = [
  '.hb-about-l',
  '.hb-about-r',
  '.hb-stat',
  '.hb-thead',
  '.hb-row',
  '.cell',
  '.plan',
  '.head',
  '.post',
].join(',')

/** Staggers scroll-reveal animations once their element scrolls into view.
 *  Re-runs whenever `deps` changes (the language, so translated text re-animates).
 */
export default function useReveal(deps) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      el.classList.add('rv')
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : []
      el.style.setProperty('--d', `${(siblings.indexOf(el) % 4) * 90}ms`)
      io.observe(el)
    })

    return () => io.disconnect()
  }, [deps])
}
