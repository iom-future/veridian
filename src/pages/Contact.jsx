import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Globe, Boxes } from 'lucide-react'
import SectionLabel from '../components/shared/SectionLabel'
import { site, cta } from '../content/content'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', vertical: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo implementation
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <main className="bg-bg-primary min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <div>
            <SectionLabel text="CONTACT US" />
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-7xl text-text-primary leading-tight mb-8">
              Let's Reinvent Your Supply Chain.
            </h1>
            <p className="font-inter text-lg text-text-muted mb-12 max-w-lg leading-relaxed">
              Veridian experts are ready to discuss your procurement, logistics, and compliance requirements. Request a direct consultation or a technical deep-dive.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-bg-card border border-teal-border/20 p-4 text-teal-primary">
                  <Mail size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl lg:text-2xl text-text-primary mb-2">Direct Communications</h3>
                  <div className="space-y-1">
                    <p className="font-inter text-sm lg:text-base text-text-muted">General: {site.contact.general}</p>
                    <p className="font-inter text-sm lg:text-base text-text-muted">Enterprise: {site.contact.enterprise}</p>
                    <p className="font-inter text-sm lg:text-base text-text-muted">Investors: {site.contact.investors}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-bg-card border border-teal-border/20 p-4 text-teal-primary">
                   <Globe size={24} aria-hidden="true" />
                </div>
                <div>
                   <h3 className="font-playfair font-bold text-xl lg:text-2xl text-text-primary mb-2">Global Headquarters</h3>
                   <p className="font-inter text-sm lg:text-base text-text-muted mb-4">{site.contact.hq}</p>
                   <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {site.contact.regional.map(city => (
                        <span key={city} className="font-inter text-xs text-text-dim uppercase tracking-widest">{city}</span>
                      ))}
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                 <a href={site.social.linkedin} className="text-text-muted hover:text-teal-primary transition-colors" aria-label="LinkedIn"><Linkedin aria-hidden="true" /></a>
                 <a href={site.social.twitter} className="text-text-muted hover:text-teal-primary transition-colors" aria-label="Twitter"><Twitter aria-hidden="true" /></a>
                 <a href={site.social.youtube} className="text-text-muted hover:text-teal-primary transition-colors" aria-label="YouTube"><Youtube aria-hidden="true" /></a>
              </div>
            </div>
          </div>

          {/* Right: Demo Form */}
          <div className="bg-bg-card border border-teal-border/30 p-8 md:p-12">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-text-primary mb-8">{cta.formHeadline}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-inter text-xs text-text-muted uppercase tracking-widest">{cta.fields.name}</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-primary border border-white/10 px-4 py-3 text-text-primary font-inter focus:border-teal-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-inter text-xs text-text-muted uppercase tracking-widest">{cta.fields.email}</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-primary border border-white/10 px-4 py-3 text-text-primary font-inter focus:border-teal-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-inter text-xs text-text-muted uppercase tracking-widest">{cta.fields.company}</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-primary border border-white/10 px-4 py-3 text-text-primary font-inter focus:border-teal-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-inter text-xs text-text-muted uppercase tracking-widest">{cta.fields.role}</label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                    className="w-full bg-bg-primary border border-white/10 px-4 py-3 text-text-primary font-inter focus:border-teal-primary focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>Select Role</option>
                    {cta.roleOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-inter text-xs text-text-muted uppercase tracking-widest">{cta.fields.vertical}</label>
                  <select
                    name="vertical"
                    value={form.vertical}
                    onChange={handleChange}
                    required
                    className="w-full bg-bg-primary border border-white/10 px-4 py-3 text-text-primary font-inter focus:border-teal-primary focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>Select Vertical</option>
                    {cta.verticalOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-primary hover:bg-teal-light text-bg-primary font-inter font-bold py-4 transition-colors"
              >
                {cta.submitLabel}
              </button>
            </form>
            <p className="font-inter text-xs text-text-dim mt-6 leading-relaxed">
              {cta.privacyNote}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
