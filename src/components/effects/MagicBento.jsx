import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import { useState } from 'react'

function MagicBento({ children, className = '', tone = 'blue', onClick }) {
  const reduced = useReducedMotion()
  const [active, setActive] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 140, damping: 18 })
  const springY = useSpring(y, { stiffness: 140, damping: 18 })
  const rotateX = useTransform(springY, [-.5, .5], [1.4, -1.4])
  const rotateY = useTransform(springX, [-.5, .5], [-1.4, 1.4])

  const move = (event) => {
    if (reduced || window.matchMedia('(pointer: coarse)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    x.set(px - .5)
    y.set(py - .5)
    event.currentTarget.style.setProperty('--spot-x', `${px * 100}%`)
    event.currentTarget.style.setProperty('--spot-y', `${py * 100}%`)
  }

  return (
    <motion.article
      className={`magic-bento ${tone} ${active ? 'is-active' : ''} ${className}`}
      style={reduced ? undefined : { rotateX, rotateY }}
      onMouseMove={move}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => { setActive(false); x.set(0); y.set(0) }}
      onClick={onClick}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={reduced ? undefined : { scale: .992 }}
      viewport={{ once: true, amount: .15 }}
      transition={{ duration: .6, ease: [0.22, 1, 0.36, 1] }}
    >
      <i className="bento-star star-a" /><i className="bento-star star-b" /><i className="bento-star star-c" />
      {children}
    </motion.article>
  )
}

export default MagicBento
