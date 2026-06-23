import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import CheckinSystemMockup from './mockups/CheckinSystemMockup'
import DashboardMockup from './mockups/DashboardMockup'
import SettlementMockup from './mockups/SettlementMockup'
import Reveal from './effects/Reveal'

function CompactVisual({ type, metrics }) {
  const labels = { growth: '增长漏斗', content: '内容触达', research: 'JTBD 洞察' }
  return (
    <div className={`compact-case-visual ${type}`}>
      <div><span>{labels[type]}</span><small>CASE ARCHIVE</small></div>
      <strong>{metrics?.[0]}</strong>
      <div className="case-bars">{[86, 61, 74, 49].map((width) => <i key={width}><span style={{ width: `${width}%` }} /></i>)}</div>
      <ul>{metrics?.slice(1).map((metric) => <li key={metric}>{metric}</li>)}</ul>
    </div>
  )
}

function ProjectVisual({ project }) {
  if (project.mockup === 'checkin') return <CheckinSystemMockup dataModel={project.sections.dataModel} />
  if (project.mockup === 'dashboard') return <DashboardMockup />
  if (project.mockup === 'settlement') return <SettlementMockup />
  return <CompactVisual type={project.visual} metrics={project.metrics} />
}

function ProjectCase({ project, index, focused, onFocus }) {
  const checkin = project.id === 'event-checkin'
  const [expanded, setExpanded] = useState(false)
  const reduced = useReducedMotion()
  return (
    <Reveal
      as="article"
      className={`project-case ${project.featured ? 'is-featured' : 'is-compact'} ${checkin ? 'is-checkin' : ''} ${focused && focused !== project.id ? 'is-dimmed' : ''}`}
      delay={(index % 2) * 0.05}
      onMouseEnter={() => onFocus(project.id)}
      onMouseLeave={() => onFocus(null)}
    >
      <div className="project-case-copy">
        <div className="case-meta">
          <span>{project.number}</span>
          <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <h3>{project.title}</h3>
        <p className="case-subtitle">{project.subtitle}</p>
        {project.status ? <span className="project-status"><i />{project.status}</span> : null}
        <p className="case-summary">{project.summary}</p>

        {checkin ? (
          <>
            <div className="case-value"><span>运营价值</span><p>{project.sections.value}</p></div>
            <button className="case-expand" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
              {expanded ? '收起完整拆解 −' : '查看完整拆解 +'}
            </button>
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  className="checkin-case-detail"
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div><span>我面对的问题</span><p>{project.sections.problem}</p></div>
                  <div><span>我做的拆解</span><p>{project.sections.solution}</p></div>
                  <div className="logic-list">
                    <span>系统与方法</span>
                    <ul>{project.sections.logic.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div className="next-list">
                    <span>下一步优化</span>
                    <p>{project.sections.next.join(' / ')}</p>
                  </div>
                  <a className="case-link" href={project.sections.github} target="_blank" rel="noreferrer">
                    查看 GitHub 代码 ↗
                  </a>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </>
        ) : project.points ? (
          <>
            <ul className="project-points">{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
            <div className="case-value"><span>业务价值</span><p>{project.value}</p></div>
            {project.statusDescription ? <p className="project-testing-note">{project.statusDescription}</p> : null}
            {project.github ? (
              <a className="case-link project-github-link" href={project.github} target="_blank" rel="noreferrer">
                查看 GitHub 项目 <span>↗</span>
              </a>
            ) : null}
          </>
        ) : null}
      </div>
      <div className="project-case-visual"><ProjectVisual project={project} /></div>
    </Reveal>
  )
}

export default ProjectCase
