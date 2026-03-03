import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cpu, Link as LinkIcon, BrainCircuit, Bot, ArrowRight } from 'lucide-react'
import SectionLabel from '../shared/SectionLabel'
import useReducedMotion from '../../hooks/useReducedMotion'
import { platform } from '../../content/content'

const iconMap = {
  Cpu,
  Link: LinkIcon,
  BrainCircuit,
  Bot,
}

const colSpans = [
  'lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
]

const PlatformPreview = () => {
  const reduced = useReducedMotion()

  return (
    <section className="py-24 md:py-32 bg-bg-primary" aria-labelledby="platform-preview-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text={platform.eyebrow} />
        <h2 id="platform-preview-heading" className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary max-w-4xl leading-tight">
          {platform.headline}
        </h2>
        <p className="font-inter text-base md:text-lg text-text-muted mt-6 max-w-3xl leading-relaxed">
          {platform.intro}
        </p>

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-4">
          {platform.tabs.map((tab, i) => {
            const Icon = iconMap[tab.icon]
            const firstSentence = tab.body.split('. ')[0] + '.'
            const number = (i + 1).toString().padStart(2, '0')
            return (
              <motion.div
                key={tab.id}
                className={`relative bg-bg-card border border-teal-border/20 p-8 group hover:border-teal-border hover:shadow-teal transition-all duration-500 overflow-hidden ${colSpans[i]}`}
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Big Number Accent */}
                <span className="absolute top-0 left-4 font-inter font-black text-7xl md:text-[150px] text-teal-primary/5 group-hover:text-teal-primary/10 transition-all duration-500 select-none pointer-events-none z-0">
                  {number}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && <Icon size={24} className="text-teal-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />}
                    <div>
                      <p className="font-inter font-semibold text-sm text-text-primary">{tab.label}</p>
                      <p className="font-inter text-xs text-text-dim">{tab.sublabel}</p>
                    </div>
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-text-primary mb-3 group-hover:text-teal-light transition-colors duration-300">{tab.headline}</h3>
                  <p className="font-inter text-sm text-text-muted leading-relaxed group-hover:text-text-primary transition-colors duration-300">{firstSentence}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Link to full platform page */}
        <div className="mt-8 text-center">
          <Link
            to="/platform"
            className="inline-flex items-center gap-2 font-inter text-sm text-teal-primary hover:text-teal-light transition-colors"
          >
            Explore Full Platform Architecture
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        {/* Convergence banner */}
        <div className="mt-12 bg-white/[0.03] border-t border-b border-white/[0.08] py-6 text-center">
          <p className="font-inter text-sm md:text-base text-teal-primary tracking-wide">
            {platform.convergenceBanner}
          </p>
        </div>
      </div>
    </section>
  )
}

export default PlatformPreview
