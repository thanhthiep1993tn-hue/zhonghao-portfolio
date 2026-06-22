import { strengths } from '../data/portfolio'
import BlurText from './effects/BlurText'
import Reveal from './effects/Reveal'

function SkillsMethods() {
  return (
    <section className="section methods-section" id="methods">
      <div className="shell">
        <div className="section-number">06 / 能力与方法</div>
        <div className="section-heading split-heading">
          <BlurText text="从现场到系统，我通常这样工作。" as="h2" className="section-title" />
          <Reveal delay={0.1}><p className="section-subtitle">观察不是终点，执行也不是终点。重要的是让判断留下结构，让行动能够继续被验证。</p></Reveal>
        </div>
        <div className="methods-grid">
          {strengths.map((item, index) => (
            <Reveal as="article" className={`method-card method-${index + 1}`} key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tag-list">{item.keywords.map((word) => <span key={word}>{word}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsMethods
