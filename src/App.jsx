import { MotionConfig } from 'motion/react'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import ArchiveWall from './components/ArchiveWall'
import MethodMap from './components/MethodMap'
import RPortfolio from './components/RPortfolio'
import Projects from './components/Projects'
import BusinessDemos from './components/BusinessDemos'
import ProjectDetail from './components/ProjectDetail'
import WorkExperience from './components/WorkExperience'
import PersonalProfile from './components/PersonalProfile'
import SkillsMethods from './components/SkillsMethods'
import Contact from './components/Contact'
import QuickProfileModal from './components/QuickProfileModal'
import IntroReveal from './components/effects/IntroReveal'
import SectionProgress from './components/effects/SectionProgress'
// import SplashCursor from './components/effects/SplashCursor'

const ENABLE_SPLASH_CURSOR = false

function HomePage({ onQuickOpen }) {
  return (
    <main>
      <IntroReveal />
      <SectionProgress />
      <Navbar />
      {ENABLE_SPLASH_CURSOR ? (
        <div aria-hidden="true">
          {/* <SplashCursor COLOR="#2563EB" SPLAT_RADIUS={0.04} SPLAT_FORCE={900}
            DENSITY_DISSIPATION={7.5} VELOCITY_DISSIPATION={5} CURL={0.8} TRANSPARENT /> */}
        </div>
      ) : null}
      <button className="quick-profile-fab" onClick={onQuickOpen}>快速了解我</button>
      <Hero onQuickOpen={onQuickOpen} />
      <Education />
      <ArchiveWall />
      <MethodMap />
      <RPortfolio />
      <Projects />
      <BusinessDemos />
      <WorkExperience />
      <PersonalProfile />
      <SkillsMethods />
      <Contact />
    </main>
  )
}

function AppRoutes() {
  const [quickOpen, setQuickOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = window.location.hash.slice(1)
    const scrollToHash = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto' })
    }
    const timer = window.setTimeout(scrollToHash, 900)
    window.addEventListener('load', scrollToHash, { once: true })
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('load', scrollToHash)
    }
  }, [location.hash, location.pathname])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage onQuickOpen={() => setQuickOpen(true)} />} />
        <Route path="/works/:slug" element={<ProjectDetail />} />
      </Routes>
      <QuickProfileModal open={quickOpen} onClose={() => setQuickOpen(false)} />
    </>
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AppRoutes />
    </MotionConfig>
  )
}

export default App
