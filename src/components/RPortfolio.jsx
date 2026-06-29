import { useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { rCourseWorks, rVisualization, toolLoopItems } from '../data/portfolio'
import LogoLoop from './effects/LogoLoop'
import Reveal from './effects/Reveal'
import SplitText from './effects/SplitText'

const fallbackCode = rVisualization.codeExample

function GgplotPanel() {
  const points = [
    [36, 166], [122, 137], [208, 118], [294, 90], [380, 64], [466, 48],
  ]
  const path = points.map(([x, y], index) => `${index ? 'L' : 'M'} ${x} ${y}`).join(' ')
  return (
    <div className="ggplot-panel" aria-label="ggplot 风格趋势图">
      <div className="plot-title">
        <strong>图 1：政策前后群体差异趋势</strong>
        <span>grouped yearly rate · ggplot style</span>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="分组趋势折线图">
        <g className="plot-grid">
          {[40, 80, 120, 160, 200].map((y) => <line key={y} x1="52" y1={y} x2="502" y2={y} />)}
          {[120, 208, 296, 384, 472].map((x) => <line key={x} x1={x} y1="32" x2={x} y2="205" />)}
        </g>
        <line className="plot-axis" x1="52" y1="205" x2="502" y2="205" />
        <line className="plot-axis" x1="52" y1="32" x2="52" y2="205" />
        <path className="plot-line main" d={path} />
        <path className="plot-line muted" d="M 36 178 L 122 165 L 208 149 L 294 137 L 380 116 L 466 98" />
        {points.map(([x, y]) => <circle key={`${x}-${y}`} className="plot-point" cx={x} cy={y} r="5" />)}
        <text x="235" y="237">年份 year</text>
        <text x="10" y="115" transform="rotate(-90 10 115)">结果变量 rate</text>
      </svg>
      <div className="plot-legend"><span><i />处理组</span><span><i />对照组</span></div>
    </div>
  )
}

function AnimatedRPlot() {
  const years = ['2018', '2019', '2020', '2021', '2022']
  const [yearIndex, setYearIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setYearIndex((value) => (value + 1) % years.length), 1500)
    return () => window.clearInterval(timer)
  }, [years.length])

  const bars = [
    [34, 52, 46, 68, 74],
    [42, 48, 63, 70, 82],
    [26, 38, 44, 57, 66],
    [18, 32, 50, 54, 61],
  ]

  return (
    <div className="animated-r-plot">
      <div>
        <span>gganimate 风格动态图</span>
        <strong>让时间变化被看见。</strong>
        <p>动态图不是为了炫技，而是为了让趋势、阶段和转折更容易被理解。</p>
      </div>
      <div className="animated-bars" aria-label={`当前年份 ${years[yearIndex]}`}>
        <b>{years[yearIndex]}</b>
        {bars.map((series, index) => (
          <motion.i
            key={index}
            animate={{ height: `${series[yearIndex]}%` }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
    </div>
  )
}

function RPortfolio() {
  const [activeWork, setActiveWork] = useState(rCourseWorks[0])
  const [code, setCode] = useState(fallbackCode)

  useEffect(() => {
    let alive = true
    fetch(activeWork.assets.code)
      .then((response) => (response.ok ? response.text() : fallbackCode))
      .then((text) => {
        if (!alive) return
        const cleaned = text.split('\n').filter((line) => !line.trim().startsWith('?')).slice(0, 18).join('\n')
        setCode(cleaned || fallbackCode)
      })
      .catch(() => setCode(fallbackCode))
    return () => { alive = false }
  }, [activeWork])

  const rTools = useMemo(
    () => toolLoopItems.filter((item) => rVisualization.tools.includes(item.title)),
    [],
  )

  return (
    <section className="section section-anchor r-section r-portfolio-section" id="r-visualization">
      <div className="shell">
        <div className="section-number">04 / R 语言与数据分析作品库</div>
        <div className="section-heading split-heading">
          <SplitText text={rVisualization.title} tag="h2" splitType="words" className="section-title" />
          <Reveal delay={0.1}><p className="section-subtitle">{rVisualization.description}</p></Reveal>
        </div>

        <div className="r-portfolio-grid">
          <Reveal className="r-editor-card">
            <div className="r-editor-top"><i /><i /><i /><span>{activeWork.assets.code.replace('/assets/academic/', '')}</span></div>
            <pre><code>{code}</code></pre>
          </Reveal>
          <Reveal delay={0.08} className="r-plot-stack">
            <GgplotPanel />
            <AnimatedRPlot />
          </Reveal>
        </div>

        <Reveal className="r-course-cards">
          {rCourseWorks.map((work) => (
            <button
              className={work.title === activeWork.title ? 'is-active' : ''}
              onClick={() => setActiveWork(work)}
              key={work.title}
            >
              <span>{work.type}</span>
              <strong>{work.title}</strong>
              <p>{work.description}</p>
              <div>{work.tools.map((tool) => <small key={tool}>{tool}</small>)}</div>
            </button>
          ))}
        </Reveal>

        <Reveal className="r-tool-list"><LogoLoop items={rTools} speed={48} compact /></Reveal>
      </div>
    </section>
  )
}

export default RPortfolio
