import { motion } from 'framer-motion'
import { Pill, Shield, Package, Gem } from 'lucide-react'
import SectionLabel from '../shared/SectionLabel'
import useReducedMotion from '../../hooks/useReducedMotion'
import { verticals } from '../../content/content'

const iconMap = {
  Pill,
  Shield,
  Package,
  Gem,
}

const slideVariants = (direction, reduced) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, x: direction === 'left' ? -48 : 48 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      }

const Verticals = () => {
  const reduced = useReducedMotion()

  return (
    <section className="py-24 md:py-32 bg-bg-secondary" aria-labelledby="verticals-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text={verticals.eyebrow} />
        <h2 id="verticals-heading" className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary max-w-4xl leading-tight">
          {verticals.headline}
        </h2>
        <p className="font-inter text-base md:text-lg text-text-muted mt-6 max-w-3xl leading-relaxed">
          {verticals.intro}
        </p>

        {/* Vertical cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {verticals.items.map((item, i) => {
            const Icon = iconMap[item.icon]
            const direction = i % 2 === 0 ? 'left' : 'right'
            return (
              <motion.div
                key={item.id}
                className="relative bg-bg-card border border-white/[0.08] p-8 group hover:border-teal-border transition-all duration-300 overflow-hidden"
                {...slideVariants(direction, reduced)}
              >
                {/* Large background icon */}
                {Icon && (
                  <Icon
                    size={80}
                    className="absolute top-4 right-4 text-teal-primary/[0.08] group-hover:text-teal-primary/[0.15] transition-colors duration-500"
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10">
                  {Icon && <Icon size={24} className="text-teal-primary mb-4" aria-hidden="true" />}
                  <h3 className="font-playfair font-semibold text-xl text-text-primary mb-3">{item.title}</h3>
                  <p className="font-inter text-sm text-text-muted leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Verticals
