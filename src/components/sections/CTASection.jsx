import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import SectionLabel from '../shared/SectionLabel'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useReducedMotion from '../../hooks/useReducedMotion'
import { cta } from '../../content/content'

const CTASection = () => {
  const reduced = useReducedMotion()
  const formRef = useScrollAnimation('fadeUp', reduced)

  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', vertical: '' })
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo — no actual submission
  }

  return (
    <section className="py-24 md:py-32 bg-bg-primary" aria-labelledby="cta-heading">
      {/* Urgency banner */}
      <div className="bg-teal-primary/[0.06] border-t border-b border-teal-border/30 py-4 mb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center gap-3">
          <AlertCircle size={16} className="text-teal-primary flex-shrink-0" aria-hidden="true" />
          <p className="font-inter text-sm text-teal-primary text-center">{cta.urgencyBanner}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <SectionLabel text="GET STARTED" />
        <h2 id="cta-heading" className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary max-w-3xl mx-auto leading-tight">
          {cta.headline}
        </h2>
        <p className="font-inter text-base md:text-lg text-text-muted mt-6 max-w-2xl mx-auto leading-relaxed">
          {cta.subheadline}
        </p>

        {/* Form card */}
        <div ref={formRef} className="mt-12 bg-bg-card border border-teal-border/30 p-8 md:p-12 max-w-2xl mx-auto text-left">
          <h3 className="font-playfair font-bold text-xl text-text-primary mb-8">{cta.formHeadline}</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={cta.fields.name}
              required
              className="bg-bg-primary border border-white/10 px-4 py-3 text-text-primary font-inter text-sm placeholder:text-text-dim focus:border-teal-primary focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={cta.fields.email}
              required
              className="bg-bg-primary border border-white/10 px-4 py-3 text-text-primary font-inter text-sm placeholder:text-text-dim focus:border-teal-primary focus:outline-none transition-colors"
            />
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder={cta.fields.company}
              required
              className="bg-bg-primary border border-white/10 px-4 py-3 text-text-primary font-inter text-sm placeholder:text-text-dim focus:border-teal-primary focus:outline-none transition-colors"
            />
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="bg-bg-primary border border-white/10 px-4 py-3 text-text-primary font-inter text-sm focus:border-teal-primary focus:outline-none transition-colors appearance-none"
            >
              <option value="" disabled>{cta.fields.role}</option>
              {cta.roleOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <select
              name="vertical"
              value={form.vertical}
              onChange={handleChange}
              required
              className="bg-bg-primary border border-white/10 px-4 py-3 text-text-primary font-inter text-sm focus:border-teal-primary focus:outline-none transition-colors appearance-none"
            >
              <option value="" disabled>{cta.fields.vertical}</option>
              {cta.verticalOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full bg-teal-primary hover:bg-teal-light text-bg-primary font-inter font-semibold text-sm px-6 py-3 transition-colors mt-2"
            >
              {cta.submitLabel}
            </button>
          </form>
          <p className="font-inter text-xs text-text-dim mt-4 leading-relaxed">{cta.privacyNote}</p>
        </div>

        {/* Secondary CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {cta.secondaryCTAs.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="font-inter text-sm text-text-muted hover:text-teal-primary transition-colors underline underline-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CTASection
