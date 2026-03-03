import { ShieldCheck, Link as LinkIcon, ShieldAlert, ArrowRight } from 'lucide-react'
import SectionLabel from '../components/shared/SectionLabel'
import { proof } from '../content/content'
import CTASection from '../components/sections/CTASection'

// Import government testimonial images
import vasquezImg from '../assets/testimonial/v_test1.png'
import oseiImg from '../assets/testimonial/n_test2.png'

const imageMap = {
  vasquez: vasquezImg,
  osei: oseiImg,
}

const ForGovernments = () => {
  const govtProof1 = proof.testimonials.find(t => t.id === 'vasquez')
  const govtProof2 = proof.testimonials.find(t => t.id === 'osei')

  return (
    <main className="bg-bg-primary min-h-screen">
      <div className="pt-24 pb-32 max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text="GOVERNMENT & PUBLIC UTILITY" />
        <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-7xl text-text-primary max-w-5xl leading-tight">
          The Infrastructure Layer for Public Supply Chains.
        </h1>
        <p className="font-inter text-xl text-text-muted mt-8 max-w-3xl leading-relaxed">
          Veridian provides the transparency and accountability required for public infrastructure and government procurement.
        </p>

        {/* Highlight Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             { title: 'Blockchain Provenance Ledger', desc: 'Every event is written as an immutable, timestamped record for auditability.', icon: LinkIcon },
             { title: 'Compliance-Grade Auditability', desc: 'FDA, EMA, and FSMA 204 compliant audit trails produced at machine speed.', icon: ShieldCheck },
             { title: 'FedRAMP Aligned', desc: 'Systems and data structures designed for federal security and compliance standards.', icon: ShieldAlert },
             { title: 'Public Transparency', desc: 'Secure, permissioned access for public oversight of infrastructure spending.', icon: ShieldCheck }
           ].map((feat) => {
             const Icon = feat.icon;
             return (
               <div key={feat.title} className="bg-bg-card border border-teal-border/20 p-8">
                 {Icon && <Icon className="text-teal-primary mb-6" size={32} aria-hidden="true" />}
                 <h3 className="font-playfair font-bold text-xl lg:text-2xl text-text-primary mb-4">{feat.title}</h3>
                 <p className="font-inter text-sm lg:text-base text-text-muted leading-relaxed">{feat.desc}</p>
               </div>
             );
           })}
        </div>

        {/* Government Testimonials */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
            {[govtProof1, govtProof2].filter(Boolean).map((proofItem) => {
               const ImageSrc = imageMap[proofItem.id]
               return (
                 <div key={proofItem.id} className="border-l-2 border-teal-primary pl-10">
                    <p className="font-playfair italic text-xl text-text-primary leading-relaxed border-teal-border mb-8">
                      &ldquo;{proofItem.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                       {ImageSrc && (
                         <img 
                           src={ImageSrc} 
                           alt={`Portrait of ${proofItem.name}`} 
                           loading="lazy"
                           className="w-12 h-12 object-cover bg-bg-secondary border border-teal-border/30"
                         />
                       )}
                       <div>
                         <p className="font-inter font-bold text-text-primary">{proofItem.name}</p>
                         <p className="font-inter text-sm lg:text-base text-text-muted">{proofItem.title}, {proofItem.badge}</p>
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

export default ForGovernments
