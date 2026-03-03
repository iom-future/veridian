import { AlertTriangle, Clock, ShieldOff, Layers } from 'lucide-react'
import SectionLabel from '../shared/SectionLabel'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useReducedMotion from '../../hooks/useReducedMotion'
import { problem } from '../../content/content'

const iconMap = {
  AlertTriangle,
  Clock,
  ShieldOff,
  Layers,
}

const Problem = () => {
  const reduced = useReducedMotion()
  const gridRef = useScrollAnimation('staggerChildren', reduced)
  const quoteRef = useScrollAnimation('fadeUp', reduced)

  return (
    <section id="problem" className="py-24 md:py-32 bg-bg-primary" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text={problem.eyebrow} />
        <h2 id="problem-heading" className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary max-w-4xl leading-tight">
          {problem.headline}
        </h2>
        <p className="font-inter text-base md:text-lg text-text-muted mt-6 max-w-3xl leading-relaxed">
          {problem.intro}
        </p>

        {/* Problem cards — gap-px grid with red-tinted bg for hairline effect */}
        <div ref={gridRef} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-red-500/10">
          {problem.cards.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <div key={card.id} className="bg-bg-card p-8 md:p-10 group transition-all duration-500">
                {Icon && <Icon size={28} className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />}
                <h3 className="font-playfair font-semibold text-xl lg:text-2xl text-text-primary mb-3 group-hover:text-red-400 transition-colors duration-300">{card.title}</h3>
                <p className="font-inter text-sm lg:text-base text-text-muted leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">{card.body}</p>
              </div>
            )
          })}
        </div>

        {/* Pull quote */}
        <div ref={quoteRef} className="mt-16 border-l-2 border-teal-primary pl-8 max-w-4xl">
          <p className="font-playfair italic text-xl md:text-2xl text-text-primary leading-relaxed">
            &ldquo;{problem.pullQuote}&rdquo;
          </p>
          <p className="font-inter text-sm lg:text-base text-teal-primary mt-4">{problem.pullQuoteAttribution}</p>
        </div>
      </div>
    </section>
  )
}

export default Problem
