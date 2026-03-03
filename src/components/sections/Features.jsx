import { Layers, Cpu, Bot, ShieldCheck, TrendingUp, Plug } from 'lucide-react'
import SectionLabel from '../shared/SectionLabel'
import useReducedMotion from '../../hooks/useReducedMotion'
import { features } from '../../content/content'
import { motion } from 'framer-motion'

const iconMap = {
  Layers,
  Cpu,
  Bot,
  ShieldCheck,
  TrendingUp,
  Plug,
}

const colSpans = [
  'lg:col-span-3', // Row 1: 60%
  'lg:col-span-2', // Row 1: 40%
  'lg:col-span-2', 
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-2',
]

const Features = () => {
  const reduced = useReducedMotion()

  return (
    <section className="py-24 md:py-32 bg-bg-primary" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text={features.eyebrow} />
        <h2 id="features-heading" className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary max-w-4xl leading-tight">
          {features.headline}
        </h2>
        <p className="font-inter text-base md:text-lg text-text-muted mt-6 max-w-3xl leading-relaxed">
          {features.intro}
        </p>

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-4">
          {features.items.map((item, i) => {
            const Icon = iconMap[item.icon]
            const number = (i + 1).toString().padStart(2, '0')
            return (
              <motion.div
                key={item.id}
                className={`relative bg-bg-card border border-teal-border/20 p-8 group hover:border-teal-border hover:shadow-teal transition-all duration-500 overflow-hidden ${colSpans[i] || 'lg:col-span-1'}`}
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Big Number Accent */}
                <span className="absolute top-0 right-4 font-inter font-black text-6xl md:text-[120px] text-teal-primary/5 group-hover:text-teal-primary/10 transition-all duration-500 select-none pointer-events-none z-0">
                  {number}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-teal-primary/10 border border-teal-primary/20 rounded-lg group-hover:bg-teal-primary/20 transition-colors duration-300">
                      {Icon && <Icon size={24} className="text-teal-primary" aria-hidden="true" />}
                    </div>
                  </div>
                  <h3 className="font-playfair font-semibold text-xl lg:text-2xl text-text-primary mb-4 group-hover:text-teal-light transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm lg:text-base text-text-muted leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
