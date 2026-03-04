import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { site, footer as footerContent } from '../../content/content'

const Footer = () => {
  const platformLinks = footerContent.links.filter((_, i) => i < 4)
  const companyLinks  = footerContent.links.filter((_, i) => i >= 4)

  return (
    <footer className="relative bg-bg-secondary" aria-label="Site footer">
      {/* Top teal gradient border */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(71, 85, 105, 0.2), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Four-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="font-inter font-bold text-lg tracking-wide text-text-primary" aria-label="Veridian Home">
              {site.name}
            </Link>
            <p className="font-inter text-sm text-text-muted mt-4 leading-relaxed max-w-xs">
              {footerContent.tagline}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href={site.social.linkedin} className="text-text-dim hover:text-teal-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a href={site.social.twitter} className="text-text-dim hover:text-teal-primary transition-colors" aria-label="Twitter">
                <Twitter size={18} aria-hidden="true" />
              </a>
              <a href={site.social.youtube} className="text-text-dim hover:text-teal-primary transition-colors" aria-label="YouTube">
                <Youtube size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2 — Platform Links */}
          <div>
            <h4 className="font-inter font-semibold text-sm text-text-primary mb-4 tracking-wide uppercase">Platform</h4>
            <ul className="flex flex-col gap-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-inter text-sm text-text-muted hover:text-teal-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company Links */}
          <div>
            <h4 className="font-inter font-semibold text-sm text-text-primary mb-4 tracking-wide uppercase">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-inter text-sm text-text-muted hover:text-teal-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-inter font-semibold text-sm text-text-primary mb-4 tracking-wide uppercase">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-teal-primary flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${site.contact.general}`} className="font-inter text-sm text-text-muted hover:text-teal-primary transition-colors">
                  {site.contact.general}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-teal-primary flex-shrink-0" aria-hidden="true" />
                <span className="font-inter text-sm text-text-muted">{site.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-teal-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-inter text-sm text-text-muted block">{site.contact.hq}</span>
                  <span className="font-inter text-xs text-text-dim">
                    {site.contact.regional.join(' · ')}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Row */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-xs text-text-dim">
              {footerContent.copyright}
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {footerContent.legalLinks.map((label) => (
                <button
                  key={label}
                  className="font-inter text-xs text-text-dim hover:text-text-muted transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <p className="font-inter text-xs text-text-dim/60 mt-4 text-center md:text-left max-w-3xl">
            {footerContent.legalLine}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
