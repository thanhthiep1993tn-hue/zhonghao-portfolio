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

function FunPlotDemos() {
  const [step, setStep] = useState(0)
  const years = ['2019', '2020', '2021', '2022', '2023']
  const bubbles = [
    [
      { x: 74, y: 128, r: 18, label: 'A' },
      { x: 162, y: 82, r: 28, label: 'B' },
      { x: 262, y: 146, r: 20, label: 'C' },
      { x: 356, y: 66, r: 34, label: 'D' },
    ],
    [
      { x: 88, y: 116, r: 21, label: 'A' },
      { x: 182, y: 98, r: 24, label: 'B' },
      { x: 278, y: 112, r: 29, label: 'C' },
      { x: 376, y: 82, r: 31, label: 'D' },
    ],
    [
      { x: 96, y: 92, r: 25, label: 'A' },
      { x: 194, y: 122, r: 22, label: 'B' },
      { x: 292, y: 74, r: 37, label: 'C' },
      { x: 388, y: 132, r: 20, label: 'D' },
    ],
    [
      { x: 105, y: 72, r: 30, label: 'A' },
      { x: 214, y: 138, r: 20, label: 'B' },
      { x: 306, y: 94, r: 32, label: 'C' },
      { x: 404, y: 58, r: 38, label: 'D' },
    ],
    [
      { x: 116, y: 64, r: 34, label: 'A' },
      { x: 232, y: 112, r: 24, label: 'B' },
      { x: 326, y: 82, r: 36, label: 'C' },
      { x: 416, y: 48, r: 42, label: 'D' },
    ],
  ]
  const current = bubbles[step]

  useEffect(() => {
    const timer = window.setInterval(() => setStep((value) => (value + 1) % years.length), 1700)
    return () => window.clearInterval(timer)
  }, [years.length])

  return (
    <Reveal className="fun-plot-demos">
      <div className="fun-plot-heading">
        <span>更多 ggplot / gganimate demo</span>
        <strong>让图表有一点“研究生作业里的好玩劲”。</strong>
        <p>这里用前端模拟 R 图形的表达方式：气泡随年份移动、分布层叠、排名线变化。它们不跑 R，但保留 ggplot 的坐标、图例和解释感。</p>
      </div>

      <div className="fun-plot-grid">
        <article className="fun-plot-card bubble-demo">
          <div><strong>动态气泡图</strong><span>year: {years[step]}</span></div>
          <svg viewBox="0 0 500 230" role="img" aria-label="动态气泡图">
            <g className="plot-grid">
              {[55, 100, 145, 190].map((y) => <line key={y} x1="42" y1={y} x2="462" y2={y} />)}
              {[120, 220, 320, 420].map((x) => <line key={x} x1={x} y1="32" x2={x} y2="198" />)}
            </g>
            <line className="plot-axis" x1="42" y1="198" x2="462" y2="198" />
            <line className="plot-axis" x1="42" y1="32" x2="42" y2="198" />
            {current.map((dot, index) => (
              <motion.g key={dot.label} animate={{ x: dot.x, y: dot.y }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
                <motion.circle r={dot.r} className={`bubble bubble-${index}`} />
                <text textAnchor="middle" y="4">{dot.label}</text>
              </motion.g>
            ))}
          </svg>
        </article>

        <article className="fun-plot-card ridge-demo">
          <div><strong>分布山脊图</strong><span>density ridges</span></div>
          <svg viewBox="0 0 500 230" role="img" aria-label="分布山脊图">
            {[0, 1, 2, 3].map((row) => (
              <motion.path
                className={`ridge ridge-${row}`}
                d={`M 40 ${188 - row * 42} C 90 ${168 - row * 38}, 120 ${116 + row * 5}, 178 ${154 - row * 32} C 240 ${100 + row * 16}, 306 ${196 - row * 52}, 382 ${128 - row * 26} C 430 ${105 + row * 12}, 454 ${160 - row * 38}, 470 ${152 - row * 35} L 470 ${198 - row * 42} L 40 ${198 - row * 42} Z`}
                animate={{ opacity: [0.46, 0.82, 0.56] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: row * 0.22 }}
                key={row}
              />
            ))}
            {['低', '中低', '中高', '高'].map((label, index) => <text x="42" y={200 - index * 42} key={label}>{label}</text>)}
          </svg>
        </article>

        <article className="fun-plot-card bump-demo">
          <div><strong>排名变化图</strong><span>bump chart</span></div>
          <svg viewBox="0 0 500 230" role="img" aria-label="排名变化图">
            <g className="plot-grid">
              {[56, 98, 140, 182].map((y) => <line key={y} x1="48" y1={y} x2="452" y2={y} />)}
            </g>
            <path className="bump-line blue" d="M 60 178 C 150 120, 190 78, 260 96 S 386 154, 442 54" />
            <path className="bump-line green" d="M 60 54 C 142 84, 170 160, 260 148 S 374 80, 442 96" />
            <path className="bump-line orange" d="M 60 116 C 126 160, 190 174, 260 54 S 370 110, 442 168" />
            {[60, 160, 260, 360, 442].map((x) => <circle className="bump-point" cx={x} cy={step % 2 ? 96 : 116} r="4" key={x} />)}
          </svg>
        </article>
      </div>
    </Reveal>
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

        <FunPlotDemos />

        <Reveal className="r-tool-list"><LogoLoop items={rTools} speed={48} compact /></Reveal>
      </div>
    </section>
  )
}

export default RPortfolio
