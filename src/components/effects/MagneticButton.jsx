import { motion, useMotionValue, useSpring } from 'motion/react'

function MagneticButton({ children, className = '', href, onClick }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18 })
  const springY = useSpring(y, { stiffness: 220, damping: 18 })

  const move = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 14)
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * 14)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }
  const Component = href ? motion.a : motion.button

  return (
    <Component
      className={className}
      href={href}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={reset}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span style={{ x: springX, y: springY }}>{children}</motion.span>
    </Component>
  )
}

export default MagneticButton
