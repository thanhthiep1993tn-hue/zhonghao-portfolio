import { education } from '../data/portfolio'
import BlurText from './effects/BlurText'
import Reveal from './effects/Reveal'
import SplitText from './effects/SplitText'

const flow = ['田野观察', '用户研究', '数据分析', '业务系统']

function Education() {
  return (
    <section className="section section-anchor education-section" id="education">
      <div className="shell">
        <div className="section-number">01 / 教育背景</div>
        <div className="section-heading split-heading">
          <SplitText text="教育背景：从社会学训练到计算社会科学方法。" tag="h2" splitType="words" className="section-title" />
          <Reveal delay={0.1}>
            <p className="section-subtitle">教育经历不是单纯的学历标签，而是形成问题意识、研究方法和数据分析能力的过程。</p>
          </Reveal>
        </div>

        <div className="education-grid">
          {education.map((item, index) => (
            <Reveal as="article" className={`education-card education-card-${index + 1}`} delay={index * 0.08} key={item.school}>
              <div className="education-meta">
                <span>0{index + 1}</span>
                <time>{item.period}</time>
              </div>
              {item.image ? (
                <figure className="education-image">
                  <img src={item.image} alt={item.school === '香港大学' ? '香港大学本部大楼' : '北京工业大学学位授予仪式'} />
                  {item.credit ? <a href={item.creditUrl} target="_blank" rel="noreferrer">{item.credit} ↗</a> : null}
                </figure>
              ) : <div className="education-monogram">HKU</div>}
              <div className="education-copy">
                <small>{item.schoolEn}</small>
                <h3>{item.school}</h3>
                <strong>{item.degree}</strong>
                <p>{item.description}</p>
                <div className="tag-list">{item.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="method-flow">
          <span>方法迁移</span>
          <div>{flow.map((item, index) => <div key={item}><strong>{item}</strong>{index < flow.length - 1 ? <i>→</i> : null}</div>)}</div>
        </Reveal>
      </div>
    </section>
  )
}

export default Education
