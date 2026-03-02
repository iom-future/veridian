import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const animations = {
  fadeUp: (el, reduced) => {
    if (reduced) return
    gsap.fromTo(el,
      { opacity: 0, y: 48 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
    )
  },
  fadeIn: (el, reduced) => {
    if (reduced) return
    gsap.fromTo(el,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
    )
  },
  slideLeft: (el, reduced) => {
    if (reduced) return
    gsap.fromTo(el,
      { opacity: 0, x: -48 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
    )
  },
  slideRight: (el, reduced) => {
    if (reduced) return
    gsap.fromTo(el,
      { opacity: 0, x: 48 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
    )
  },
  staggerChildren: (el, reduced) => {
    if (reduced) return
    gsap.fromTo(el.children,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: el, start: 'top 83%', once: true } }
    )
  },
}

const useScrollAnimation = (type = 'fadeUp', reduced = false) => {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const fn = animations[type]
    if (fn) fn(ref.current, reduced)
    const el = ref.current
    return () => ScrollTrigger.getAll().forEach(t => { if (t.trigger === el) t.kill() })
  }, [type, reduced])
  return ref
}

export default useScrollAnimation
