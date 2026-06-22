import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from 'motion/react'
import { useState } from 'react'

function GradientText({
  children,
  className = '',
  colors = ['#2563EB', '#06B6D4', '#22C55E', '#F97316', '#2563EB'],
  animationSpeed = 6,
  direction = 'horizontal',
  showBorder = false,
  pauseOnHover = true,
}) {
  const [hovered, setHovered] = useState(false)
  const progress = useMotionValue(0)
  const backgroundPosition = useTransform(progress, (value) =>
    direction === 'horizontal' ? `${value}% 50%` : `50% ${value}%`,
  )

  useAnimationFrame((time) => {
    if (pauseOnHover && hovered) return
    const duration = Math.max(animationSpeed, 1) * 1000
    progress.set((time / duration) % 100)
  })

  return (
    <motion.span
      className={`gradient-text-wrap ${showBorder ? 'with-border' : ''} ${
        pauseOnHover ? 'pause-on-hover' : ''
      } ${className}`}
      style={{
        '--gradient-colors': colors.join(', '),
        backgroundPosition,
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {children}
    </motion.span>
  )
}

export default GradientText
