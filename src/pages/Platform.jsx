import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Link as LinkIcon, BrainCircuit, Bot, Database, ShieldCheck, Zap } from 'lucide-react'
import SectionLabel from '../components/shared/SectionLabel'
import DummyImage from '../components/shared/DummyImage'
import { platform, platformPage } from '../content/content'

const iconMap = {
  Cpu,
  Link: LinkIcon,
  BrainCircuit,
  Bot,
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
        <div className="mt-16 flex flex-wrap gap-2 border-b border-white/10 pb-4">
          {platform.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 font-inter text-sm font-medium transition-colors ${
                activeTab === tab.id ? 'text-teal-primary' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-17px] left-0 right-0 h-px bg-teal-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {platform.tabs.map((tab) =>
              activeTab === tab.id ? (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      {iconMap[tab.icon] ? (
                        (() => {
                          const IconComp = iconMap[tab.icon];
                          return <IconComp className="text-teal-primary" size={32} />;
                        })()
                      ) : null}
                      <div>
                        <h2 className="font-playfair font-bold text-2xl text-text-primary">{tab.headline}</h2>
                        <p className="font-inter text-sm text-teal-primary">{tab.sublabel}</p>
                      </div>
                    </div>
                    <p className="font-inter text-text-muted leading-relaxed mb-8">
                      {tab.body}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-bg-card border border-teal-border/20 p-4 flex-1 min-w-[200px]">
                        <p className="font-inter text-xs text-text-dim uppercase tracking-widest mb-2 text-teal-primary">Architecture</p>
                        <p className="font-inter text-sm text-text-primary">Fully decoupled Microservices</p>
                      </div>
                      <div className="bg-bg-card border border-teal-border/20 p-4 flex-1 min-w-[200px]">
                        <p className="font-inter text-xs text-text-dim uppercase tracking-widest mb-2 text-teal-primary">Performance</p>
                        <p className="font-inter text-sm text-text-primary">Sub-100ms Latency</p>
                      </div>
                    </div>
                  </div>
                  <DummyImage label={tab.label} initials={tab.label.substring(0,2)} size="xl" />
                </motion.div>
              ) : null
            )}
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
