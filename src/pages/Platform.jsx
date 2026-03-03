import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Link as LinkIcon, BrainCircuit, Bot, Database, ShieldCheck, Zap } from 'lucide-react'
import SectionLabel from '../components/shared/SectionLabel'
import { platform, platformPage } from '../content/content'

// Import platform images
import img1 from '../assets/howItWorks/img1.png'
import img2 from '../assets/howItWorks/img2.png'
import img3 from '../assets/howItWorks/img3.png'
import img4 from '../assets/howItWorks/img4.png'

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

const Platform = () => {
  const [activeTab, setActiveTab] = useState(platform.tabs[0].id)

  return (
    <main className="bg-bg-primary min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text={platformPage.eyebrow} />
        <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary max-w-4xl leading-tight">
          {platformPage.headline}
        </h1>
        <p className="font-inter text-lg text-text-muted mt-6 max-w-3xl leading-relaxed">
          {platformPage.intro}
        </p>

        {/* Tab Switcher */}
        <div 
          className="mt-16 flex overflow-x-auto scrollbar-hide gap-2 border-b border-white/10 pb-4"
          role="tablist"
          aria-label="Platform feature layers"
        >
          {platform.tabs.map((tab) => {
            const Icon = iconMap[tab.icon]
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex items-center gap-2 relative px-6 py-3 font-inter text-sm font-medium transition-colors ${
                  activeTab === tab.id ? 'text-teal-primary' : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {Icon && <Icon size={14} aria-hidden="true" />}
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-[-17px] left-0 right-0 h-px bg-teal-primary"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {platform.tabs.map((tab) => {
              const ImageSrc = imageMap[tab.id]
              const IconComp = iconMap[tab.icon]
              return activeTab === tab.id ? (
                <motion.div
                  key={tab.id}
                  id={`panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch outline-none"
                  tabIndex="0"
                >
                  <div className="relative overflow-hidden">
                    {/* Background icon */}
                    {IconComp && (
                      <IconComp 
                        size={200} 
                        className="absolute left-2 -top-4 text-teal-primary/[0.04] rotate-[12deg] pointer-events-none select-none z-0" 
                        aria-hidden="true" 
                      />
                    )}
                    <div className="relative z-10">
                      <div className="mb-6">
                        <h2 className="font-playfair font-bold text-2xl lg:text-3xl text-text-primary">{tab.headline}</h2>
                        <p className="font-inter text-sm lg:text-base text-teal-primary mt-1">{tab.sublabel}</p>
                      </div>
                      <p className="font-inter text-text-muted leading-relaxed mb-8 lg:text-lg">
                        {tab.body}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div className="bg-bg-card border border-teal-border/20 p-4 flex-1 min-w-[200px]">
                          <p className="font-inter text-xs lg:text-sm text-text-dim uppercase tracking-widest mb-2 text-teal-primary">Architecture</p>
                          <p className="font-inter text-sm lg:text-base text-text-primary">Fully decoupled Microservices</p>
                        </div>
                        <div className="bg-bg-card border border-teal-border/20 p-4 flex-1 min-w-[200px]">
                          <p className="font-inter text-xs lg:text-sm text-text-dim uppercase tracking-widest mb-2 text-teal-primary">Performance</p>
                          <p className="font-inter text-sm lg:text-base text-text-primary">Sub-100ms Latency</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative bg-bg-card border border-teal-border/20 overflow-hidden min-h-[250px]">
                    {ImageSrc && (
                      <img 
                        src={ImageSrc} 
                        alt={`${tab.label} Feature Visualization`}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                      />
                    )}
                  </div>
                </motion.div>
              ) : null
            })}
          </AnimatePresence>
        </div>

        {/* Architecture Table */}
        <div className="mt-32">
          <SectionLabel text="SYSTEM SPECIFICATIONS" />
          <h2 className="font-playfair font-bold text-3xl text-text-primary mb-12">Full Stack Specifications</h2>
          <div className="overflow-x-auto border border-teal-border/20 bg-bg-card">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-teal-border/20">
                  <th className="p-6 font-inter text-xs uppercase tracking-widest text-text-muted font-semibold">Layer</th>
                  <th className="p-6 font-inter text-xs uppercase tracking-widest text-text-muted font-semibold">Technology</th>
                  <th className="p-6 font-inter text-xs uppercase tracking-widest text-text-muted font-semibold">Primary Function</th>
                </tr>
              </thead>
              <tbody>
                {platformPage.architectureLayers.map((layer, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-inter text-sm font-semibold text-text-primary">{layer.layer}</td>
                    <td className="p-6 font-inter text-sm text-teal-light">{layer.tech}</td>
                    <td className="p-6 font-inter text-sm text-text-muted">{layer.function}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Platform
