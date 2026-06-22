import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useState } from 'react'

function PhotoParallax({ normal, cutout, useCutout, alt }) {
  const [activeSrc, setActiveSrc] = useState(useCutout ? cutout : normal)
  const [failed, setFailed] = useState(false)
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 100, damping: 18 })
  const springY = useSpring(y, { stiffness: 100, damping: 18 })
  const move = (event) => {
    if (reduced || window.matchMedia('(pointer: coarse)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 16)
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * 12)
  }

  return (
    <motion.div
      className={`photo-parallax ${failed ? 'is-fallback' : ''}`}
      onMouseMove={move}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {!failed ? (
        <motion.img
          src={activeSrc}
          alt={alt}
          style={{ x: springX, y: springY }}
          onError={() => {
            if (activeSrc !== normal) {
              setActiveSrc(normal)
            } else {
              setFailed(true)
            }
          }}
        />
      ) : (
        <div className="photo-fallback"><span>ZH</span><strong>生活与现场</strong></div>
      )}
    </motion.div>
  )
}

export default PhotoParallax
