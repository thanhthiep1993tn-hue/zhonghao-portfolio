import { useReducedMotion } from 'motion/react'

function LogoLoop({ items, speed = 58, ariaLabel = '工具与方法循环展示', compact = false }) {
  const reduced = useReducedMotion()
  return (
    <div className={`logo-loop ${compact ? 'is-compact' : ''} ${reduced ? 'is-static' : ''}`} aria-label={ariaLabel}>
      <div className="logo-loop-fade logo-loop-fade-left" />
      <div className="logo-loop-track" style={{ '--loop-duration': `${Math.max(18, 110 - speed)}s` }}>
        {[...items, ...items].map((item, index) => <span className="tool-pill" key={`${item.title}-${index}`}>{item.title}</span>)}
      </div>
      <div className="logo-loop-fade logo-loop-fade-right" />
    </div>
  )
}

export default LogoLoop
