import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../shared/SectionLabel'
import DummyImage from '../shared/DummyImage'
import useReducedMotion from '../../hooks/useReducedMotion'
import { proof } from '../../content/content'

gsap.registerPlugin(ScrollTrigger)

/* ── CountUp for stats ─────────────────────────────────────────────── */
const StatCountUp = ({ stat, reduced }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || reduced) return
    const el = ref.current
    const target = stat.value

    gsap.fromTo(el,
      { innerText: 0 },
      {
        innerText: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: target % 1 === 0 ? 1 : 0.1 },
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate() {
          const v = parseFloat(el.innerText)
          el.innerText = target % 1 === 0 ? Math.round(v) : v.toFixed(1)
        },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => { if (t.trigger === el) t.kill() })
  }, [stat.value, reduced])

  return (
    <span ref={ref} className="font-inter font-bold text-3xl md:text-4xl text-blue-accent">
      {reduced ? stat.value : 0}
    </span>
  )
}

const Proof = () => {
  const reduced = useReducedMotion()

  return (
    <section className="py-24 md:py-32 bg-bg-primary" aria-labelledby="proof-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text={proof.eyebrow} />
        <h2 id="proof-heading" className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary max-w-4xl leading-tight">
          {proof.headline}
        </h2>
        <p className="font-inter text-base md:text-lg text-text-muted mt-6 max-w-3xl leading-relaxed">
          {proof.intro}
        </p>

        {/* Stats strip */}
        <div className="mt-16 bg-white/[0.03] border-t border-b border-white/[0.08] py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {proof.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-baseline justify-center gap-0.5">
                  {stat.prefix && <span className="font-inter font-bold text-3xl md:text-4xl text-blue-accent">{stat.prefix}</span>}
                  <StatCountUp stat={stat} reduced={reduced} />
                  {stat.suffix && <span className="font-inter font-bold text-2xl md:text-3xl text-blue-accent">{stat.suffix}</span>}
                </div>
                <p className="font-inter text-xs text-text-dim mt-2 max-w-[200px] mx-auto">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {proof.testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="bg-bg-card border border-white/[0.08] p-8 flex flex-col"
              initial={reduced ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span className="font-playfair text-5xl text-teal-primary/40 leading-none mb-2" aria-hidden="true">&ldquo;</span>
              <p className="font-inter text-sm text-text-muted leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.06]">
                <DummyImage initials={t.initials} size="sm" className="w-12 h-12 flex-shrink-0" />
                <div>
                  <p className="font-inter font-semibold text-sm text-text-primary">{t.name}</p>
                  <p className="font-inter text-xs text-text-muted">{t.title}</p>
                  <span className="inline-block mt-1 font-inter text-[10px] tracking-wider uppercase text-teal-primary border border-teal-border px-2 py-0.5">
                    {t.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proof
