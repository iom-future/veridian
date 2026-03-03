import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShieldCheck, ChevronDown } from 'lucide-react'
import FloatingLines from '../ui/FloatingLines'
import useReducedMotion from '../../hooks/useReducedMotion'
import { hero } from '../../content/content'

gsap.registerPlugin(ScrollTrigger)

/* ── CountUp helper ────────────────────────────────────────────────── */
const CountUpNumber = ({ stat, reduced }) => {
  const numRef = useRef(null)

  useEffect(() => {
    if (!numRef.current || reduced) return
    const el = numRef.current
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
    <span ref={numRef} className="font-inter font-bold text-2xl md:text-3xl text-blue-accent">
      {reduced ? stat.value : 0}
    </span>
  )
}

/* ── Stagger wrapper ───────────────────────────────────────────────── */
const FadeItem = ({ children, delay, reduced }) => (
  <motion.div
    initial={reduced ? false : { opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

const Hero = () => {
  const reduced = useReducedMotion()
  const [chevronVisible, setChevronVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setChevronVisible(window.scrollY < 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = () => {
    const el = document.getElementById('problem')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-bg-primary overflow-hidden flex flex-col" aria-labelledby="hero-heading">
      {/* FloatingLines background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <FloatingLines
          linesGradient={['#38BDF8', '#0EA5E9', '#38BDF8']}
          enabledWaves={['middle', 'bottom']}
          lineCount={[8, 6]}
          lineDistance={[4, 5]}
          animationSpeed={0.4}
          interactive={true}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="screen"
        />
      </div>

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, transparent 30%, #060C18 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 md:px-8 pt-24 pb-16">
        {/* Eyebrow */}
        <FadeItem delay={0.1} reduced={reduced}>
          <p className="font-inter text-xs tracking-[0.25em] uppercase text-teal-primary mb-6 text-center">
            {hero.eyebrow}
          </p>
        </FadeItem>

        {/* Headline */}
        <FadeItem delay={0.2} reduced={reduced}>
          <h1 id="hero-heading" className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight">
            {hero.headlineLine1}
          </h1>
        </FadeItem>
        <FadeItem delay={0.3} reduced={reduced}>
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight" aria-hidden="true">
            {hero.headlineLine2}
          </h1>
        </FadeItem>
        <FadeItem delay={0.4} reduced={reduced}>
          <h1
            className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #38BDF8, #7DD3FC)' }}
            aria-hidden="true"
          >
            {hero.headlineLine3}
          </h1>
        </FadeItem>

        {/* Subheadline */}
        <FadeItem delay={0.5} reduced={reduced}>
          <p className="font-inter text-base md:text-lg text-text-muted max-w-2xl text-center mt-8 leading-relaxed">
            {hero.subheadline}
          </p>
        </FadeItem>

        {/* Supporting line */}
        <FadeItem delay={0.55} reduced={reduced}>
          <p className="font-inter text-sm text-text-dim mt-4 text-center">
            {hero.supportingLine}
          </p>
        </FadeItem>

        {/* CTAs */}
        <FadeItem delay={0.6} reduced={reduced}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <Link
              to={hero.ctaPrimary.path}
              className="font-inter font-semibold text-sm bg-teal-primary hover:bg-teal-light text-bg-primary px-8 py-3 transition-all w-full sm:w-auto text-center"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link
              to={hero.ctaSecondary.path}
              className="font-inter font-medium text-sm border border-teal-border hover:border-teal-primary text-text-primary px-8 py-3 transition-all w-full sm:w-auto text-center"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </FadeItem>

        {/* Trust badges */}
        <FadeItem delay={0.7} reduced={reduced}>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {hero.trustBadges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 border border-white/10 bg-white/5 px-3 py-1.5 font-inter text-xs text-text-muted"
              >
                <ShieldCheck size={12} className="text-teal-primary" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </FadeItem>
      </div>

      {/* Stats bar */}
      <FadeItem delay={0.85} reduced={reduced}>
        <div className="relative z-10 bg-white/[0.03] border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-baseline justify-center gap-0.5">
                    {stat.prefix && (
                      <span className="font-inter font-bold text-2xl md:text-3xl text-blue-accent">{stat.prefix}</span>
                    )}
                    <CountUpNumber stat={stat} reduced={reduced} />
                    {stat.suffix && (
                      <span className="font-inter font-bold text-xl md:text-2xl text-blue-accent">{stat.suffix}</span>
                    )}
                  </div>
                  <p className="font-inter text-xs text-text-dim mt-2 max-w-[180px] mx-auto">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeItem>

      {/* Scroll chevron */}
      <motion.button
        onClick={scrollToSection}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-teal-primary/60 hover:text-teal-primary transition-colors"
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity: chevronVisible ? 1 : 0, pointerEvents: chevronVisible ? 'auto' : 'none' }}
        aria-label="Scroll to problem section"
      >
        <ChevronDown size={28} aria-hidden="true" />
      </motion.button>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #060C18)' }}
        aria-hidden="true"
      />
    </section>
  )
}

export default Hero
