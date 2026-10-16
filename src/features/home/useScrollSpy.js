import { useEffect, useState } from 'react'

/**
 * Tracks which anchor section is currently in view so the nav can highlight it.
 *
 * @param {string[]} ids href values (e.g. '#tenders'), in document order
 * @param {number} offset distance from the top of the viewport that counts as "current"
 * @returns {string} the href of the active section
 */
export default function useScrollSpy(ids, offset = 132) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (ids.length === 0) return
    let frame = 0

    const compute = () => {
      frame = 0
      let current = ids[0]

      for (const id of ids) {
        const el = document.getElementById(id.replace(/^#/, ''))
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }

      // Pin the last item once the page bottom is reached, otherwise short
      // trailing sections can never become active.
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      if (atBottom) current = ids[ids.length - 1]

      setActive((prev) => (prev === current ? prev : current))
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('hashchange', schedule)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('hashchange', schedule)
    }
  }, [ids, offset])

  return active
}
