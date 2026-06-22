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

function ProjectCase({ project, index }) {
  const checkin = project.id === 'event-checkin'
  return (
    <Reveal
      as="article"
      className={`project-case ${project.featured ? 'is-featured' : 'is-compact'} ${checkin ? 'is-checkin' : ''}`}
      delay={(index % 2) * 0.05}
    >
      <div className="project-case-copy">
        <div className="case-meta">
          <span>{project.number}</span>
          <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <h3>{project.title}</h3>
        <p className="case-subtitle">{project.subtitle}</p>
        <p className="case-summary">{project.summary}</p>

        {checkin ? (
          <div className="checkin-case-detail">
            <div><span>业务问题</span><p>{project.sections.problem}</p></div>
            <div><span>系统方案</span><p>{project.sections.solution}</p></div>
            <div className="logic-list">
              <span>核心代码逻辑</span>
              <ul>{project.sections.logic.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="next-list">
              <span>下一步优化</span>
              <p>{project.sections.next.join(' / ')}</p>
            </div>
            <a className="case-link" href={project.sections.github} target="_blank" rel="noreferrer">
              查看 GitHub 代码 ↗
            </a>
          </div>
        ) : project.points ? (
          <>
            <ul className="project-points">{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
            <div className="case-value"><span>业务价值</span><p>{project.value}</p></div>
          </>
        ) : null}
      </div>
      <div className="project-case-visual"><ProjectVisual project={project} /></div>
    </Reveal>
  )
}

export default ProjectCase
