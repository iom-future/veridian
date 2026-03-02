import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageTransition from './components/shared/PageTransition'

import Home          from './pages/Home'
import Platform      from './pages/Platform'
import Solutions     from './pages/Solutions'
import ForEnterprises from './pages/ForEnterprises'
import ForGovernments from './pages/ForGovernments'
import CaseStudies   from './pages/CaseStudies'
import Contact       from './pages/Contact'
import NotFound      from './pages/NotFound'

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
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
