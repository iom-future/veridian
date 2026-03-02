import { Layers, Cpu, Bot, ShieldCheck, TrendingUp, Plug } from 'lucide-react'
import SectionLabel from '../shared/SectionLabel'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useReducedMotion from '../../hooks/useReducedMotion'
import { features } from '../../content/content'

const iconMap = {
  Layers,
  Cpu,
  Bot,
  ShieldCheck,
  TrendingUp,
  Plug,
}

const Features = () => {
  const reduced = useReducedMotion()
  const gridRef = useScrollAnimation('staggerChildren', reduced)

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

        {/* Feature grid — gap-px with hairline grid effect */}
        <div ref={gridRef} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-teal-border/10">
          {features.items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.id}
                className="bg-bg-primary p-8 group hover:border-l-2 hover:border-teal-primary transition-all duration-200"
              >
                {Icon && <Icon size={28} className="text-teal-primary mb-4" aria-hidden="true" />}
                <h3 className="font-playfair font-semibold text-lg text-text-primary mb-3">{item.title}</h3>
                <p className="font-inter text-sm text-text-muted leading-relaxed">{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
