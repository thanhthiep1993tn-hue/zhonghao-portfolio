import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { education, experienceIndex, workExperience } from '../data/portfolio'
import AnimatedList from './effects/AnimatedList'
import Reveal from './effects/Reveal'
import SplitText from './effects/SplitText'

function WorkExperience() {
  const [selectedId, setSelectedId] = useState(experienceIndex[0].id)
  const reduced = useReducedMotion()
  const selected = experienceIndex.find((item) => item.id === selectedId)
  const detail = selected.type === 'work'
    ? workExperience[selected.sourceIndex]
    : education[selected.sourceIndex]

  return (
    <section className="section section-anchor experience-section" id="experience">
      <div className="shell">
        <div className="section-number">05 / 经历与训练</div>
        <div className="section-heading split-heading">
          <SplitText text="经历要看见问题、行动和产出。" tag="h2" splitType="words" className="section-title" />
          <Reveal delay={0.1}><p className="section-subtitle">选择一段经历，查看我面对的问题、做过的拆解，以及最后留下的材料与方法。</p></Reveal>
        </div>

        <div className="experience-browser">
          <AnimatedList items={experienceIndex} selectedId={selectedId} onSelect={setSelectedId} ariaLabel="经历与教育列表" />
          <div className="experience-detail-stage">
            <AnimatePresence mode="wait">
              <motion.article
                className="experience-focus-card"
                key={selectedId}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: .35 }}
              >
                <div className="experience-focus-head">
                  <span>{selected.type === 'work' ? '工作经历' : '教育背景'}</span>
                  <time>{selected.meta}</time>
                  <h3>{selected.title}</h3>
                  <strong>{selected.subtitle}</strong>
                </div>
                {selected.type === 'work' ? (
                  <div className="experience-focus-body">
                    <section><small>我面对的问题</small><p>{detail.problem}</p></section>
                    <section><small>我做了什么</small><ul>{detail.actions.map((action) => <li key={action}>{action}</li>)}</ul></section>
                    <section><small>代表产出</small><div className="output-list">{detail.outputs.map((output) => <strong key={output}>{output}</strong>)}</div></section>
                  </div>
                ) : (
                  <div className="experience-focus-body education-focus-body">
                    <section><small>训练如何形成</small><p>{detail.description}</p></section>
                    <section><small>方法关键词</small><div className="tag-list">{detail.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div></section>
                  </div>
                )}
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
