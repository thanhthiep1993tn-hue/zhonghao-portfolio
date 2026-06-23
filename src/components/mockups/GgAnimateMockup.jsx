import { motion, useReducedMotion } from 'motion/react'

const points = [[50, 250], [140, 222], [230, 182], [320, 196], [410, 122], [500, 78]]

function GgAnimateMockup() {
  const reduced = useReducedMotion()
  const path = points.map(([x, y], index) => `${index ? 'L' : 'M'}${x} ${y}`).join(' ')

  return (
    <div className="gganimate-card">
      <div className="gganimate-copy"><span>时间趋势演示</span><strong>gganimate 风格动态图</strong><p>动态图不是为了炫技，而是让阶段、趋势和转折更容易被理解。</p></div>
      <svg viewBox="0 0 550 300" role="img" aria-label="逐步绘制的时间趋势图">
        <g className="plot-grid"><path d="M40 45H520M40 110H520M40 175H520M40 240H520" /></g>
        <motion.path
          className="animated-trend-line"
          d={path}
          initial={reduced ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />
        {points.map(([x, y], index) => (
          <motion.circle
            cx={x} cy={y} r="7" key={`${x}-${y}`}
            initial={reduced ? false : { opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + index * 0.25, duration: 0.35 }}
          />
        ))}
        <motion.text x="430" y="45" initial={reduced ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }}>2025</motion.text>
      </svg>
    </div>
  )
}

export default GgAnimateMockup
