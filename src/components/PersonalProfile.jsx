import { getMediaByUsage, interests, lifeGallery, profile, strengths } from '../data/portfolio'
import BlurText from './effects/BlurText'
import Reveal from './effects/Reveal'
import ENFPIllustration from './mockups/ENFPIllustration'

function PersonalProfile() {
  const portrait = getMediaByUsage('life', 'profile-portrait')
  return (
    <section className="section section-anchor profile-section" id="profile">
      <div className="shell">
        <div className="section-number">06 / 个人方法与生活</div>
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

        <Reveal className="profile-methods">
          <div className="profile-methods-heading">
            <span>我的工作方法</span>
            <p>从现场理解问题，再把判断变成团队可以继续使用的结构。</p>
          </div>
          <div className="profile-methods-grid">
            {strengths.slice(0, 4).map((item) => (
              <article key={item.number}>
                <small>{item.number}</small>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="interest-grid">
          {interests.map((interest, index) => (
            <Reveal as="article" className={`interest-card ${interest.color}`} delay={(index % 3) * 0.05} key={interest.id}>
              {interest.image ? <img src={interest.image} alt={interest.title} /> : <div className="ai-interest-visual"><span>AI</span><i>想法</i><b>→</b><strong>原型</strong></div>}
              <div><span>0{index + 1}</span><h3>{interest.title}</h3><p>{interest.copy}</p></div>
            </Reveal>
          ))}
        </div>

        <Reveal className="life-gallery-heading">
          <span>更多生活切片</span>
          <p>比赛、训练、旅行与拍摄，构成工作之外持续发生的观察和行动。</p>
        </Reveal>
        <div className="life-gallery">
          {lifeGallery.map((photo, index) => (
            <Reveal as="figure" className={`life-gallery-item life-gallery-item-${index + 1}`} delay={index * 0.05} key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.caption}</figcaption>
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
