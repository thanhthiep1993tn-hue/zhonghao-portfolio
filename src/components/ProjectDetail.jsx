import { Link, useParams } from 'react-router-dom'
import { projectDetails } from '../data/portfolio'
import CheckinSystemMockup from './mockups/CheckinSystemMockup'
import DashboardMockup from './mockups/DashboardMockup'
import SettlementMockup from './mockups/SettlementMockup'

const mockDataModel = [
  ['registrants', '报名、联系方式、状态'],
  ['checkins', '签到记录与重复控制'],
  ['admin_users', '后台权限'],
]

function DetailMockup({ type, data }) {
  if (type === 'checkin') return <CheckinSystemMockup dataModel={data || mockDataModel} />
  if (type === 'dashboard') return <DashboardMockup />
  if (type === 'settlement') return <SettlementMockup />
  return null
}

function ProjectDetail() {
  const { slug } = useParams()
  const detail = projectDetails.find((item) => item.slug === slug) || projectDetails[0]

  return (
    <main className="project-detail-page">
      <div className="detail-nav">
        <Link to="/#projects">← 返回首页项目</Link>
        <a href="/#contact">联系我 ↗</a>
      </div>
      <section className="detail-hero">
        <div>
          <span>CASE STUDY</span>
          <h1>{detail.title}</h1>
          <p>{detail.subtitle}</p>
          <div className="detail-actions">
            {detail.github ? <a href={detail.github} target="_blank" rel="noreferrer">查看 GitHub ↗</a> : null}
            {detail.status ? <small>{detail.status}</small> : null}
          </div>
        </div>
      </section>

      <section className="detail-grid">
        <article>
          <span>项目背景</span>
          <p>{detail.background}</p>
        </article>
        <article>
          <span>业务问题</span>
          <p>{detail.problem}</p>
        </article>
        <article className="wide">
          <span>我的拆解</span>
          <p>{detail.approach}</p>
        </article>
      </section>

      <section className="detail-system">
        <div className="detail-visual"><DetailMockup type={detail.mockup} data={detail.data} /></div>
        <div className="detail-side">
          <h2>数据结构 / 流程图</h2>
          <div className="detail-data-list">
            {detail.data.map(([name, copy]) => <p key={name}><code>{name}</code><span>{copy}</span></p>)}
          </div>
        </div>
      </section>

      <section className="detail-grid detail-bottom">
        <article className="wide">
          <span>关键功能</span>
          <ul>{detail.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </article>
        <article>
          <span>我的角色</span>
          <p>{detail.role}</p>
        </article>
        <article>
          <span>业务价值</span>
          <p>{detail.value}</p>
        </article>
        <article className="wide">
          <span>下一步优化</span>
          <ul>{detail.next.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>
    </main>
  )
}

export default ProjectDetail
