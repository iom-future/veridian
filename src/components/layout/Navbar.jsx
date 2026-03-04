import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Boxes, Menu, X, ArrowRight } from 'lucide-react'
import { site, nav } from '../../content/content'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(true)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {/* ── Announcement Banner ── */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-50 bg-bg-dark border-b border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex items-center justify-center gap-4">
              <p className="font-inter text-xs md:text-sm text-text-dark text-center">
                {site.announcement}
                <Link
                  to="/case-studies"
                  className="ml-2 text-teal-primary hover:text-teal-light underline underline-offset-2 inline-flex items-center gap-1"
                >
                  {site.announcementCTA}
                  <ArrowRight size={12} aria-hidden="true" />
                </Link>
              </p>
              <button
                onClick={() => setBannerVisible(false)}
                className="absolute right-4 text-text-dark/60 hover:text-text-dark transition-colors"
                aria-label="Dismiss announcement"
              >
                <X size={14} aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Navbar ── */}
      <header
        className="sticky top-0 z-40 bg-bg-dark border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Veridian Home">
            <Boxes size={22} className="text-teal-primary group-hover:text-teal-light transition-colors" aria-hidden="true" />
            <span className="font-inter font-bold text-lg tracking-wide text-text-dark">
              {site.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {nav.links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="relative font-inter text-sm text-text-dark/70 hover:text-text-dark transition-colors px-4 py-2"
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-4 right-4 h-px bg-teal-primary"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to={nav.ctaSecondary.path}
              className="font-inter text-sm font-medium text-text-dark/70 hover:text-text-dark border border-teal-border hover:border-teal-primary px-5 py-2 transition-all"
            >
              {nav.ctaSecondary.label}
            </Link>
            <Link
              to={nav.ctaPrimary.path}
              className="font-inter text-sm font-medium bg-teal-primary hover:bg-teal-light text-bg-dark px-5 py-2 transition-all"
            >
              {nav.ctaPrimary.label}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-text-dark p-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/60 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-40 h-full w-72 bg-bg-dark border-l border-white/10 p-8 flex flex-col gap-6 lg:hidden"
              aria-label="Mobile navigation"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end text-text-dark/60 hover:text-text-dark mb-4"
                aria-label="Close menu"
              >
                <X size={24} aria-hidden="true" />
              </button>

              {nav.links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-inter text-base py-2 border-l-2 pl-4 transition-colors ${
                      isActive
                        ? 'text-teal-primary border-teal-primary'
                        : 'text-text-dark/60 border-transparent hover:text-text-dark hover:border-teal-border'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="mt-auto flex flex-col gap-3">
                <Link
                  to={nav.ctaSecondary.path}
                  className="font-inter text-sm text-center text-text-dark/70 border border-teal-border px-5 py-3 hover:border-teal-primary transition-all"
                >
                  {nav.ctaSecondary.label}
                </Link>
                <Link
                  to={nav.ctaPrimary.path}
                  className="font-inter text-sm text-center font-medium bg-teal-primary hover:bg-teal-light text-bg-primary px-5 py-3 transition-all"
                >
                  {nav.ctaPrimary.label}
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
