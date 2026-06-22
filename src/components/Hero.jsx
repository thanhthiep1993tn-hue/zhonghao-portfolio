import { hero, heroStats, profile } from '../data/portfolio'
import AnimatedCounter from './effects/AnimatedCounter'
import BlurText from './effects/BlurText'
import FloatingTags from './effects/FloatingTags'
import GradientText from './effects/GradientText'
import MagneticButton from './effects/MagneticButton'
import PhotoParallax from './effects/PhotoParallax'
import Reveal from './effects/Reveal'

const colors = ['#2563EB', '#06B6D4', '#22C55E', '#F97316', '#2563EB']

function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero section-anchor" id="home">
      <div className="hero-shape hero-shape-blue" />
      <div className="hero-shape hero-shape-green" />
      <div className="shell hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="hero-kicker">
              <span>社会研究 × 业务运营 × 产品原型</span>
              <strong>{profile.locations}</strong>
            </div>
          </Reveal>
          <h1>
            <BlurText
              text={hero.titlePrefix}
              animateBy="words"
              delay={75}
              stepDuration={0.5}
              className="hero-title-line"
            />
            <span className="hero-title-line hero-title-line-second">
              {hero.titleSecond}{' '}
              <GradientText colors={colors} animationSpeed={6}>可执行的</GradientText>
              <GradientText className="hero-gradient-tail" colors={colors} animationSpeed={6}>业务系统。</GradientText>
            </span>
          </h1>
          <Reveal delay={0.14}><p className="hero-description">{hero.description}</p></Reveal>
          <Reveal delay={0.22}><p className="hero-disciplines">{profile.disciplines}</p></Reveal>
          <Reveal delay={0.28} className="hero-actions">
            <MagneticButton className="button button-primary" onClick={() => scrollTo('evidence')}>
              查看证据墙 <span>↘</span>
            </MagneticButton>
            <MagneticButton className="button button-secondary" onClick={() => scrollTo('projects')}>
              查看项目 <span>→</span>
            </MagneticButton>
            <MagneticButton className="button button-text" onClick={() => scrollTo('contact')}>
              联系我 <span>↗</span>
            </MagneticButton>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="hero-photo-stage">
          <div className="photo-color-card" />
          <PhotoParallax
            normal={profile.profilePhoto.normal}
            cutout={profile.profilePhoto.cutout}
            useCutout={profile.profilePhoto.useCutout}
            alt="钟皓的个人生活照片"
          />
          <FloatingTags tags={profile.floatingTags} />
          <div className="hero-photo-note">
            <span>ZHONG HAO</span>
            <strong>观察现场，也构建系统。</strong>
          </div>
        </Reveal>

        <div className="hero-stats">
          {heroStats.map((stat, index) => (
            <Reveal className={`hero-stat ${stat.color}`} delay={index * 0.06} key={stat.label}>
              <strong><AnimatedCounter value={stat.value} suffix={stat.suffix} /></strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
