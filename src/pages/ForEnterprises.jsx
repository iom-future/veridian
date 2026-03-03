import { ShieldCheck, Layers, Plug, Bot, ArrowRight } from 'lucide-react'
import SectionLabel from '../components/shared/SectionLabel'
import { proof } from '../content/content'
import CTASection from '../components/sections/CTASection'

const ForEnterprises = () => {
  const enterpriseProof = proof.testimonials.find(t => t.id === 'webb')

  return (
    <main className="bg-bg-primary min-h-screen">
      <div className="pt-24 pb-32 max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text="ENTERPRISE" />
        <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-7xl text-text-primary max-w-5xl leading-tight">
          Enterprise Supply Chain Intelligence, Finally Unified.
        </h1>
        <p className="font-inter text-xl text-text-muted mt-8 max-w-3xl leading-relaxed">
          Veridian unifies edge IoT sensing, immutable blockchain provenance, predictive ML, and autonomous AI agents for Fortune 500 enterprises.
        </p>

        {/* Highlight Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: 'Full-Stack Integration', desc: 'The only platform unifying IoT, blockchain, ML, and agentic AI in one governed data model.', icon: Layers },
             { title: 'ERP Native', desc: 'Connect natively to SAP, Oracle, and Manhattan WMS/TMS with zero disruption to legacy workflows.', icon: Plug },
             { title: 'Autonomous Execution', desc: 'Agents execute rerouting, procurement, and compliance workflows at machine speed.', icon: Bot }
           ].map((feat) => {
             const Icon = feat.icon;
             return (
               <div key={feat.title} className="bg-bg-card border border-teal-border/20 p-8">
                 {Icon && <Icon className="text-teal-primary mb-6" size={32} />}
                 <h3 className="font-playfair font-bold text-xl lg:text-2xl text-text-primary mb-4">{feat.title}</h3>
                 <p className="font-inter text-sm lg:text-base text-text-muted leading-relaxed">{feat.desc}</p>
               </div>
             );
           })}
        </div>

        {/* Enterprise Testimonial */}
        {enterpriseProof && (
          <div className="mt-32 border-l-2 border-teal-primary pl-10">
             <p className="font-playfair italic text-2xl text-text-primary leading-relaxed">
               &ldquo;{enterpriseProof.quote}&rdquo;
             </p>
             <div className="mt-8">
               <p className="font-inter font-bold text-text-primary">{enterpriseProof.name}</p>
               <p className="font-inter text-sm lg:text-base text-text-muted">{enterpriseProof.title}, {enterpriseProof.badge}</p>
             </div>
          </div>
        )}
      </div>

      <CTASection />
    </main>
  )
}

export default ForEnterprises
