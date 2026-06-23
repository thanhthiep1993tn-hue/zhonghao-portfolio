import { getMediaByUsage, interests, profile } from '../data/portfolio'
import BlurText from './effects/BlurText'
import Reveal from './effects/Reveal'
import ENFPIllustration from './mockups/ENFPIllustration'

function PersonalProfile() {
  const portrait = getMediaByUsage('life', 'profile-portrait')
  return (
    <section className="section section-anchor profile-section" id="profile">
      <div className="shell">
        <div className="section-number">07 / 关于我</div>
        <BlurText text="我如何工作，也如何生活。" as="h2" className="section-title" />
        <div className="profile-story">
          <div className="profile-copy">
            {profile.statement.map((paragraph, index) => (
              <Reveal delay={index * 0.06} key={paragraph}><p>{paragraph}</p></Reveal>
            ))}
          </div>
          <Reveal className="profile-portrait-card" delay={0.1}>
            <img src={portrait?.src} alt={portrait?.alt || '钟皓在足球场上'} />
            <div><span>场上 27 号</span><strong>协作、判断、行动。</strong></div>
          </Reveal>
        </div>

        <div className="interest-grid">
          {interests.map((interest, index) => (
            <Reveal as="article" className={`interest-card ${interest.color}`} delay={(index % 3) * 0.05} key={interest.id}>
              {interest.image ? <img src={interest.image} alt={interest.title} /> : <div className="ai-interest-visual"><span>AI</span><i>想法</i><b>→</b><strong>原型</strong></div>}
              <div><span>0{index + 1}</span><h3>{interest.title}</h3><p>{interest.copy}</p></div>
            </Reveal>
          ))}
        </div>

        <Reveal className="enfp-card">
          <div>
            <span>我的工作风格</span>
            <h3>MBTI：ENFP</h3>
            <p>我把 ENFP 理解为一种工作风格：对新问题保持开放，对人和场景敏感，愿意连接不同资源，并把想法快速转化成可执行的行动。</p>
          </div>
          <ENFPIllustration />
        </Reveal>
      </div>
    </section>
  )
}

export default PersonalProfile
