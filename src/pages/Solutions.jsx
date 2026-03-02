import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Layers, Cpu, Bot, ShieldCheck, TrendingUp, Plug, Pill, Shield, Package, Gem, ArrowRight } from 'lucide-react'
import SectionLabel from '../components/shared/SectionLabel'
import { features, verticals } from '../content/content'

const iconMap = {
  Layers, Cpu, Bot, ShieldCheck, TrendingUp, Plug, Pill, Shield, Package, Gem
}

const Solutions = () => {
  return (
    <main className="bg-bg-primary min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text="SOLUTIONS OVERVIEW" />
        <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary max-w-4xl leading-tight">
          Precision Systems for Global Logistics.
        </h1>
        <p className="font-inter text-lg text-text-muted mt-6 max-w-3xl leading-relaxed">
          Veridian provides the essential infrastructure for industry-specific supply chain governance. Each vertical solution is built upon our core four-layer operating system.
        </p>

        {/* Features Expanded */}
        <div className="mt-32">
          <SectionLabel text={features.eyebrow} />
          <h2 className="font-playfair font-bold text-3xl text-text-primary mb-12">{features.headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-teal-border/20">
             {features.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <div key={item.id} className="bg-bg-card p-10 hover:bg-bg-hover transition-colors">
                  {Icon && <Icon className="text-teal-primary mb-6" size={28} />}
                  <h3 className="font-playfair font-bold text-xl text-text-primary mb-4">{item.title}</h3>
                  <p className="font-inter text-sm text-text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Verticals Expanded */}
        <div className="mt-32">
          <SectionLabel text={verticals.eyebrow} />
          <h2 className="font-playfair font-bold text-3xl text-text-primary mb-12">{verticals.headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <div key={item.id} className="relative group overflow-hidden border border-teal-border/20 bg-bg-card p-10 hover:border-teal-primary transition-all duration-300">
                   {Icon && (
                    <Icon size={120} className="absolute -bottom-4 -right-4 text-teal-primary/5 group-hover:text-teal-primary/10 transition-colors" />
                   )}
                  <div className="relative z-10">
                    <h3 className="font-playfair font-bold text-2xl text-text-primary mb-4">{item.title}</h3>
                    <p className="font-inter text-text-muted leading-relaxed mb-8">
                      {item.body}
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-teal-primary text-sm font-semibold hover:text-teal-light transition-colors">
                      Discuss Vertical Solutions <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 bg-bg-card border border-teal-border/30 p-12 text-center">
           <h2 className="font-playfair font-bold text-3xl text-text-primary mb-6">Ready to secure your supply chain?</h2>
           <Link to="/contact" className="inline-block bg-teal-primary text-bg-primary px-8 py-4 font-inter font-bold hover:bg-teal-light transition-colors">
              Request a Consultation
           </Link>
        </div>
      </div>
    </main>
  )
}

export default Solutions
