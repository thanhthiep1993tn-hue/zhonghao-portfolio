import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function DotGrid({
  dotSize = 5,
  gap = 22,
  baseColor = '#B8C7FF',
  activeColor = '#2563EB',
  proximity = 120,
  className = '',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return undefined
    const ctx = canvas.getContext('2d')
    const pointer = { x: -9999, y: -9999, strength: 0 }
    let frame
    let width = 0
    let height = 0
    let ratio = 1

    const resize = () => {
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const columns = Math.ceil(width / gap) + 1
      const rows = Math.ceil(height / gap) + 1
      for (let column = 0; column < columns; column += 1) {
        for (let row = 0; row < rows; row += 1) {
          const x = column * gap
          const y = row * gap
          const distance = Math.hypot(pointer.x - x, pointer.y - y)
          const influence = Math.max(0, 1 - distance / proximity) * pointer.strength
          ctx.beginPath()
          ctx.fillStyle = influence > 0.08 ? activeColor : baseColor
          ctx.globalAlpha = 0.42 + influence * 0.5
          ctx.arc(x, y, dotSize * (0.5 + influence * 0.45), 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
      frame = requestAnimationFrame(draw)
    }

    const move = (event) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      gsap.to(pointer, { strength: 1, duration: 0.25, overwrite: true })
    }
    const leave = () => {
      gsap.to(pointer, { strength: 0, duration: 0.8, ease: 'elastic.out(1, 0.6)', overwrite: true })
    }

    const observer = new ResizeObserver(resize)
    observer.observe(parent)
    resize()
    draw()
    parent.addEventListener('pointermove', move)
    parent.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      parent.removeEventListener('pointermove', move)
      parent.removeEventListener('pointerleave', leave)
      gsap.killTweensOf(pointer)
    }
  }, [activeColor, baseColor, dotSize, gap, proximity])

  return <canvas className={`dot-grid ${className}`} ref={canvasRef} aria-hidden="true" />
}

export default DotGrid
