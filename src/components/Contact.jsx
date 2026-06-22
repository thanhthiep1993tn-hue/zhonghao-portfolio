import { useState } from 'react'
import { contact } from '../data/portfolio'
import BlurText from './effects/BlurText'
import GradientText from './effects/GradientText'
import MagneticButton from './effects/MagneticButton'
import Reveal from './effects/Reveal'

function Contact() {
  const [copied, setCopied] = useState('')

  const copy = async (value, type) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = value
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      textarea.remove()
    }
    setCopied(type)
    window.setTimeout(() => setCopied(''), 1800)
  }

  return (
    <section className="contact-section section-anchor" id="contact">
      <div className="contact-grid-pattern" />
      <div className="shell contact-inner">
        <p className="contact-eyebrow">{contact.eyebrow}</p>
        <h2>
          <BlurText text={contact.titlePrefix} />
          {' '}
          <GradientText>{contact.highlight}</GradientText>
          {contact.titleSuffix}
        </h2>
        <Reveal delay={0.1}><p className="contact-description">{contact.description}</p></Reveal>
        <Reveal delay={0.16} className="contact-actions">
          <MagneticButton className="button button-primary" onClick={() => copy(contact.phoneCN, 'phone')}>
            {copied === 'phone' ? '已复制手机号 ✓' : '复制手机号'}
          </MagneticButton>
          <MagneticButton className="button button-secondary" onClick={() => copy(contact.email, 'email')}>
            {copied === 'email' ? '已复制邮箱 ✓' : '复制邮箱'}
          </MagneticButton>
          <MagneticButton className="button button-text" href={`mailto:${contact.email}`}>发送邮件 ↗</MagneticButton>
        </Reveal>
        <div className="contact-details">
          <div><small>内地电话</small><strong>{contact.phoneCN}</strong></div>
          <div><small>邮箱</small><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
          <div><small>香港电话</small><span>{contact.phoneHK}</span></div>
          <div><small>理想 base</small><span>{contact.locations}</span></div>
        </div>
        <footer>
          <span>© 2026 钟皓 · 中文个人作品集</span>
          <span>React · Vite · 社会研究 × 业务运营</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>回到顶部 ↑</button>
        </footer>
      </div>
    </section>
  )
}

export default Contact
