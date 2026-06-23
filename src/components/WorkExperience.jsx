import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { workExperience } from '../data/portfolio'
import BlurText from './effects/BlurText'
import Reveal from './effects/Reveal'

function WorkExperience() {
  const [open, setOpen] = useState(0)
  const reduced = useReducedMotion()

  return (
    <section className="section section-anchor experience-section" id="experience">
      <div className="shell">
        <div className="section-number">05 / 工作经历</div>
        <div className="section-heading split-heading">
          <BlurText text="经历要看见问题、行动和产出。" as="h2" className="section-title" />
          <Reveal delay={0.1}>
            <p className="section-subtitle">每段经历都不是一行职位，而是一组真实业务问题，以及我如何参与拆解和推进。</p>
          </Reveal>
        </div>
        <div className="experience-list">
          {workExperience.map((item, index) => {
            const isOpen = open === index
            return (
              <Reveal as="article" className={`experience-card ${item.tone} ${isOpen ? 'is-open' : ''}`} key={item.company}>
                <button className="experience-summary" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span className="experience-index">{String(index + 1).padStart(2, '0')}</span>
                  <time>{item.date}</time>
                  <div><h3>{item.company}</h3><p>{item.role}</p></div>
                  <span className="experience-toggle">{isOpen ? '收起 −' : '展开 +'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="experience-detail"
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="experience-problem"><span>我面对的问题</span><p>{item.problem}</p></div>
                      <div><span>我做的事情</span><ul>{item.actions.map((action) => <li key={action}>{action}</li>)}</ul></div>
                      <div><span>代表产出</span><div className="output-list">{item.outputs.map((output) => <strong key={output}>{output}</strong>)}</div></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
