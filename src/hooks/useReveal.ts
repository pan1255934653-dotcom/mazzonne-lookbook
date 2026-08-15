import { useEffect, useRef } from 'react'

/**
 * IntersectionObserver-based scroll reveal.
 * Adds `.is-visible` to elements with `.reveal` inside the returned ref.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.classList.contains('reveal')
      ? [root]
      : Array.from(root.querySelectorAll<HTMLElement>('.reveal'))

    // No IO support (very old browsers): show everything immediately
    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    targets.forEach((t) => io.observe(t))

    // Safety net: if IO misfires, anything near the viewport still appears.
    // Elements far below the fold keep their scroll-in animation.
    const fallback = window.setTimeout(() => {
      const limit = window.innerHeight * 1.5
      targets.forEach((t) => {
        if (t.getBoundingClientRect().top < limit) t.classList.add('is-visible')
      })
    }, 3000)

    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return ref
}
