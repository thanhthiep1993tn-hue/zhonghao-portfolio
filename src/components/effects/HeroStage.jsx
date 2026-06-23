import { motion, useReducedMotion } from 'motion/react'

function HeroStage() {
  const reduced = useReducedMotion()
  return (
    <div className="hero-stage" aria-hidden="true">
      <motion.div
        className="hero-aurora hero-aurora-a"
        animate={reduced ? undefined : { x: [0, 36, -12, 0], y: [0, -22, 18, 0], scale: [1, 1.08, 0.98, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-aurora hero-aurora-b"
        animate={reduced ? undefined : { x: [0, -28, 14, 0], y: [0, 24, -16, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="hero-prism" />
    </div>
  )
}

export default HeroStage
