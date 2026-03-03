import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SectionLabel from '../components/shared/SectionLabel'
import { proof, cta } from '../content/content'
import CTASection from '../components/sections/CTASection'

// Import testimonial images
import vasquezImg from '../assets/testimonial/v_test1.png'
import oseiImg from '../assets/testimonial/n_test2.png'
import webbImg from '../assets/testimonial/t_test3.png'

const imageMap = {
  vasquez: vasquezImg,
  osei: oseiImg,
  webb: webbImg,
}

const CaseStudies = () => {
  return (
    <main className="bg-bg-primary min-h-screen">
      <div className="pt-24 pb-32 max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text="PROVEN RESULTS" />
        <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-7xl text-text-primary max-w-5xl leading-tight">
          When the Supply Chain Thinks, Everything Changes.
        </h1>
        <p className="font-inter text-xl text-text-muted mt-8 max-w-3xl leading-relaxed">
          Our pilot cohorts are yielding unprecedented results in pharmaceutical safety, defense logistics, and luxury provenance.
        </p>

        {/* Stats Summary */}
        <div className="mt-24 bg-bg-card border border-teal-border/20 py-12 px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {proof.stats.map((stat) => (
                <div key={stat.label}>
                   <h3 className="font-inter font-bold text-4xl text-blue-accent mb-2">
                     {stat.prefix}{stat.value}{stat.suffix}
                   </h3>
                   <p className="font-inter text-xs text-text-muted uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Extended Testimonials */}
        <div className="mt-32 space-y-24">
           {proof.testimonials.map((t, idx) => {
             const ImageSrc = imageMap[t.id]
             return (
               <div key={t.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={idx % 2 !== 0 ? 'lg:order-last' : ''}>
                     <div className="bg-teal-primary/10 w-fit p-3 mb-6">
                        <span className="font-inter text-xs font-bold text-teal-primary tracking-widest uppercase">{t.badge}</span>
                     </div>
                     <h3 className="font-playfair font-bold text-3xl lg:text-4xl text-text-primary mb-6 leading-tight">
                       Implementation Case Study: {t.title}
                     </h3>
                     <p className="font-playfair italic text-lg lg:text-xl text-text-muted mb-8 leading-relaxed">
                       &ldquo;{t.quote}&rdquo;
                     </p>
                     <div className="flex items-center gap-4">
                        {ImageSrc ? (
                          <img 
                            src={ImageSrc} 
                            alt={`Portrait of ${t.name}`}
                            loading="lazy"
                            className="w-12 h-12 object-cover bg-bg-secondary border border-teal-border/30"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-bg-secondary border border-teal-border/30 flex items-center justify-center font-bold text-teal-primary">
                             {t.initials}
                          </div>
                        )}
                        <div>
                          <p className="font-inter font-bold text-text-primary">{t.name}</p>
                          <p className="font-inter text-sm text-text-muted">{t.title}</p>
                        </div>
                     </div>
                  </div>
                  <div className="bg-bg-card border border-teal-border/20 p-8 h-80 flex flex-col justify-center">
                     <p className="font-inter text-xs lg:text-sm text-teal-primary mb-4 tracking-[0.2em] uppercase">Impact Highlights</p>
                     <div className="space-y-4">
                        <div className="flex items-start gap-3">
                           <CheckCircle className="text-teal-primary mt-1" size={16} aria-hidden="true" />
                           <p className="font-inter text-sm lg:text-base text-text-muted leading-relaxed">Deployed across global multi-tier supply chain infrastructure.</p>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle className="text-teal-primary mt-1" size={16} aria-hidden="true" />
                           <p className="font-inter text-sm lg:text-base text-text-muted leading-relaxed">Enabled 72-hour disruption forecasting models.</p>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle className="text-teal-primary mt-1" size={16} aria-hidden="true" />
                           <p className="font-inter text-sm lg:text-base text-text-muted leading-relaxed">Full ERP integration with legacy TMS/WMS systems.</p>
                        </div>
                     </div>
                  </div>
               </div>
             )
           })}
        </div>
      </div>

      <CTASection />
    </main>
  )
}

export default CaseStudies
