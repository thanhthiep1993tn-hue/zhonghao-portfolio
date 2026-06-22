import { useEffect, useRef } from 'react'

function SplashCursor({
  COLOR = '#69F5D1',
  SPLAT_RADIUS = 0.08,
  SPLAT_FORCE = 1800,
  DENSITY_DISSIPATION = 5.5,
  VELOCITY_DISSIPATION = 3.5,
  CURL = 1.2,
  TRANSPARENT = true,
  RAINBOW_MODE = false,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktop = window.matchMedia('(pointer: fine) and (min-width: 901px)').matches
    if (reduced || !desktop) return undefined

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frame
    let width = window.innerWidth
    let height = window.innerHeight
    const particles = []

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const onMove = (event) => {
      if (particles.length > 22) particles.shift()
      particles.push({
        x: event.clientX,
        y: event.clientY,
        radius: Math.max(18, width * SPLAT_RADIUS * 0.24),
        alpha: 0.055,
      })
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      particles.forEach((particle) => {
        particle.radius += 0.45 + CURL * 0.05
        particle.alpha *= 0.968 - Math.min(DENSITY_DISSIPATION, 8) * 0.001
        const gradient = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius,
        )
        gradient.addColorStop(0, `${COLOR}22`)
        gradient.addColorStop(1, `${COLOR}00`)
        context.globalAlpha = particle.alpha
        context.fillStyle = gradient
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fill()
      })
      context.globalAlpha = 1
      for (let index = particles.length - 1; index >= 0; index -= 1) {
        if (particles[index].alpha < 0.004) particles.splice(index, 1)
      }
      frame = requestAnimationFrame(draw)
    }

    void SPLAT_FORCE
    void VELOCITY_DISSIPATION
    void TRANSPARENT
    void RAINBOW_MODE
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    draw()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [
    COLOR,
    SPLAT_RADIUS,
    SPLAT_FORCE,
    DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION,
    CURL,
    TRANSPARENT,
    RAINBOW_MODE,
  ])

  return <canvas ref={canvasRef} className="splash-cursor" aria-hidden="true" />
}

export default SplashCursor
