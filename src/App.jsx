import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageTransition from './components/shared/PageTransition'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Platform = lazy(() => import('./pages/Platform'))
const Solutions = lazy(() => import('./pages/Solutions'))
const ForEnterprises = lazy(() => import('./pages/ForEnterprises'))
const ForGovernments = lazy(() => import('./pages/ForGovernments'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const PageLoader = () => (
  <div className="min-h-screen bg-bg-primary flex items-center justify-center">
    <div className="w-12 h-12 border-2 border-teal-primary/30 border-t-teal-primary rounded-full animate-spin" aria-hidden="true" />
  </div>
)

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"                element={<PageTransition><Home /></PageTransition>} />
          <Route path="/platform"        element={<PageTransition><Platform /></PageTransition>} />
          <Route path="/solutions"       element={<PageTransition><Solutions /></PageTransition>} />
          <Route path="/for-enterprises" element={<PageTransition><ForEnterprises /></PageTransition>} />
          <Route path="/for-governments" element={<PageTransition><ForGovernments /></PageTransition>} />
          <Route path="/case-studies"    element={<PageTransition><CaseStudies /></PageTransition>} />
          <Route path="/contact"         element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*"                element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </HashRouter>
  )
}

export default App
