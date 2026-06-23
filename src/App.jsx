import { MotionConfig } from 'motion/react'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import ArchiveWall from './components/ArchiveWall'
import AcademicWork from './components/AcademicWork'
import RVisualization from './components/RVisualization'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import PersonalProfile from './components/PersonalProfile'
import SkillsMethods from './components/SkillsMethods'
import Contact from './components/Contact'
// import SplashCursor from './components/effects/SplashCursor'

const ENABLE_SPLASH_CURSOR = false

function App() {
  useEffect(() => {
    if (!window.location.hash) return
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
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <main>
        <Navbar />
        {ENABLE_SPLASH_CURSOR ? (
          <div aria-hidden="true">
            {/* <SplashCursor COLOR="#2563EB" SPLAT_RADIUS={0.04} SPLAT_FORCE={900}
              DENSITY_DISSIPATION={7.5} VELOCITY_DISSIPATION={5} CURL={0.8} TRANSPARENT /> */}
          </div>
        ) : null}
        <Hero />
        <Education />
        <ArchiveWall />
        <AcademicWork />
        <RVisualization />
        <Projects />
        <WorkExperience />
        <PersonalProfile />
        <SkillsMethods />
        <Contact />
      </main>
    </MotionConfig>
  )
}

export default App
