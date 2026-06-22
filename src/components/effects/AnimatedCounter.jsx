import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

function AnimatedCounter({ value, suffix = '', duration = 0.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(reduced ? value : 0)

  useEffect(() => {
    if (!inView) return undefined
    if (reduced) {
      setDisplay(value)
      return undefined
    }
    let frame
    const startedAt = performance.now()
    const tick = (time) => {
      const progress = Math.min((time - startedAt) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [duration, inView, reduced, value])

  return <span ref={ref}>{display}{suffix}</span>
}

export default AnimatedCounter
