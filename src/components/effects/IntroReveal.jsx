import { motion, useReducedMotion } from 'motion/react'

function IntroReveal() {
  const reduced = useReducedMotion()
  if (reduced) return null

  return (
    <motion.div
      className="intro-reveal"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, visibility: 'hidden' }}
      transition={{ duration: 0.45, delay: 1.55, ease: [0.7, 0, 0.84, 0] }}
      aria-hidden="true"
    >
      <motion.div
        className="intro-reveal-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.p
        initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.55, delay: 0.18 }}
      >
        钟皓｜产品运营 / 采销运营 / 用户增长
      </motion.p>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
      >
        从真实场景出发
      </motion.span>
      <motion.div
        className="intro-shutter intro-shutter-left"
        initial={{ x: 0 }}
        animate={{ x: '-102%' }}
        transition={{ duration: 0.72, delay: 1.35, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="intro-shutter intro-shutter-right"
        initial={{ x: 0 }}
        animate={{ x: '102%' }}
        transition={{ duration: 0.72, delay: 1.35, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.div>
  )
}

export default IntroReveal
