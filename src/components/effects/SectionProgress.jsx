import { motion, useScroll, useSpring } from 'motion/react'

function SectionProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 })
  return <motion.div className="section-progress" style={{ scaleY }} aria-hidden="true" />
}

export default SectionProgress
