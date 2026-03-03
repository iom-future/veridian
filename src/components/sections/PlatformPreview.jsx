import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Link as LinkIcon, BrainCircuit, Bot, ArrowRight } from 'lucide-react'
import SectionLabel from '../shared/SectionLabel'
import useReducedMotion from '../../hooks/useReducedMotion'
import { platform } from '../../content/content'

// Import platform images
import img1 from '../../assets/howItWorks/img1.png'
import img2 from '../../assets/howItWorks/img2.png'
import img3 from '../../assets/howItWorks/img3.png'
import img4 from '../../assets/howItWorks/img4.png'

const iconMap = {
  Cpu,
  Link: LinkIcon,
  BrainCircuit,
  Bot,
}

const imageMap = {
  'iot': img1,
  'blockchain': img2,
  'ml': img3,
  'agents': img4,
}

const PlatformPreview = () => {
  const reduced = useReducedMotion()
  const [activeTab, setActiveTab] = useState(platform.tabs[0].id)

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

        {/* Tabbed interface */}
        <div className="mt-16 bg-bg-card border border-teal-border/10">
          {/* Navigator */}
          <div className="flex overflow-x-auto scrollbar-hide border-b border-white/5">
            {platform.tabs.map((tab) => {
              const Icon = iconMap[tab.icon]
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 flex items-center gap-2 py-4 px-6 font-inter text-xs font-bold tracking-widest uppercase transition-all duration-300 border-r border-white/5 last:border-r-0 ${
                    activeTab === tab.id 
                      ? 'bg-teal-primary/10 text-teal-primary' 
                      : 'text-text-muted hover:bg-white/[0.02] hover:text-text-primary'
                  }`}
                >
                  {Icon && <Icon size={14} />}
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {platform.tabs.map((tab) => {
                const Icon = iconMap[tab.icon]
                const ImageSrc = imageMap[tab.id]
                return activeTab === tab.id ? (
                  <motion.div
                    key={tab.id}
                    initial={reduced ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch"
                  >
                    <div className="relative overflow-hidden">
                      {/* Background icon */}
                      {Icon && (
                        <Icon 
                          size={200} 
                          className="absolute left-2 -top-4 text-teal-primary/[0.07] rotate-[12deg] pointer-events-none select-none z-0" 
                          aria-hidden="true" 
                        />
                      )}
                      <div className="relative z-10">
                        <div className="mb-6">
                          <h3 className="font-playfair font-bold text-2xl lg:text-3xl text-text-primary">{tab.headline}</h3>
                          <p className="font-inter text-sm text-teal-primary/80 tracking-wide mt-1">{tab.sublabel}</p>
                        </div>
                        <p className="font-inter text-sm md:text-base lg:text-lg text-text-muted leading-relaxed mb-8">
                          {tab.body}
                        </p>
                        <Link
                          to="/platform"
                          className="inline-flex items-center gap-2 font-inter text-sm font-bold text-teal-primary hover:text-teal-light transition-colors group"
                        >
                          Deep Dive Technical Specs
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    <div className="relative bg-bg-primary border border-white/5 overflow-hidden min-h-[250px]">
                      {ImageSrc && (
                        <img 
                          src={ImageSrc} 
                          alt={tab.label}
                          loading="lazy"
                          className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                        />
                      )}
                    </div>
                  </motion.div>
                ) : null
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Convergence banner */}
        <div className="mt-12 text-center">
          <p className="inline-block font-inter text-xs md:text-sm text-teal-primary/60 tracking-[0.2em] uppercase border border-teal-primary/20 px-6 py-2">
            {platform.convergenceBanner}
          </p>
        </div>
      </div>
    </section>
  )
}

export default PlatformPreview
