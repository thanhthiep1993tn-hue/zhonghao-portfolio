import { academicWorks } from '../data/portfolio'
import BlurText from './effects/BlurText'
import GradientText from './effects/GradientText'
import Reveal from './effects/Reveal'
import FieldworkStrip from './mockups/FieldworkStrip'
import PaperMockup from './mockups/PaperMockup'
import CodeArchiveMockup from './mockups/CodeArchiveMockup'

function AcademicVisual({ work }) {
  if (work.id === 'fieldwork-study') return <FieldworkStrip />
  if (work.id === 'hutong-paper') return <PaperMockup file={work.file} />
  return <CodeArchiveMockup paper={work.paper} code={work.code} />
}

function AcademicWork() {
  return (
    <section className="section section-anchor academic-section" id="academic">
      <div className="shell">
        <div className="section-number">03 / 学业与研究</div>
        <div className="academic-heading">
          <BlurText
            text="学业不是背景，而是我理解用户和社会场景的方法。"
            as="h2"
            className="section-title"
          />
          <Reveal delay={0.1}>
            <p className="section-subtitle">
              从进入
              <GradientText>真实场景</GradientText>
              ，到整理访谈，再到把社会问题转化为可计算的问题。
            </p>
          </Reveal>
        </div>

        <div className="academic-list">
          {academicWorks.map((work, index) => (
            <Reveal as="article" className={`academic-card academic-${index + 1}`} key={work.id}>
              <div className="academic-copy">
                <span>{work.number}</span>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <div className="tag-list">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="academic-visual"><AcademicVisual work={work} /></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicWork
