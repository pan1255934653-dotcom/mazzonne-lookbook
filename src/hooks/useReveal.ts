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
    return () => io.disconnect()
  }, [])

  return ref
}
