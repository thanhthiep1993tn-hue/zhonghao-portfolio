import { useState } from 'react'
import { evidenceItems } from '../data/portfolio'
import BlurText from './effects/BlurText'
import EvidenceLightbox from './effects/EvidenceLightbox'
import Reveal from './effects/Reveal'

function CodeVisual({ kind }) {
  if (kind === 'github') {
    return (
      <div className="evidence-code-visual github-visual">
        <span>main</span>
        <strong>lecture-checkin</strong>
        <div><i /> Flask app.py</div>
        <div><i /> SQLite schema</div>
        <div><i /> QR check-in flow</div>
      </div>
    )
  }
  return (
    <div className="evidence-code-visual">
      <span>analysis.R</span>
      <code>model &lt;- lm(fertility ~ edu_gap)</code>
      <code>robust_se(model)</code>
      <code>plot(heterogeneity)</code>
      <div className="code-chart"><i /><i /><i /><i /><i /></div>
    </div>
  )
}

function EvidenceWall() {
  const [lightbox, setLightbox] = useState(null)

  const open = (item, image) => {
    if (image) setLightbox({ item, image })
  }

  return (
    <section className="section section-anchor evidence-section" id="evidence">
      <div className="shell">
        <div className="section-number">01 / 证据档案</div>
        <div className="section-heading split-heading">
          <BlurText
            text="证据墙：我做过什么，不只靠文字说明。"
            delay={70}
            animateBy="words"
            direction="bottom"
            stepDuration={0.42}
            as="h2"
            className="section-title"
          />
          <Reveal delay={0.12}>
            <p className="section-subtitle">田野照片、论文 PDF、研究代码、业务系统、GitHub 项目和工作产出，共同构成我的作品集证据。</p>
          </Reveal>
        </div>

        <div className="evidence-grid">
          {evidenceItems.map((item, index) => (
            <Reveal
              as="article"
              className={`evidence-card ${item.tone} ${item.size || ''}`}
              delay={(index % 3) * 0.06}
              key={item.id}
            >
              <div className="evidence-card-top">
                <span>{item.type}</span>
                <small>{String(index + 1).padStart(2, '0')}</small>
              </div>

              {item.assets ? (
                <div className={`evidence-images ${item.assets.length > 1 ? 'is-pair' : ''}`}>
                  {item.assets.map((asset) => (
                    <button key={asset} onClick={() => open(item, asset)}>
                      <img src={asset} alt="" />
                    </button>
                  ))}
                </div>
              ) : item.image ? (
                <button className="evidence-cover" onClick={() => open(item, item.image)}>
                  <img src={item.image} alt="" />
                  <span>点击预览</span>
                </button>
              ) : (
                <CodeVisual kind={item.visual} />
              )}

              <div className="evidence-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {(item.file || item.url) && (
                  <a
                    className="evidence-link"
                    href={item.file || item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.type === '代码' ? '下载代码档案' : '打开完整证据'} ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <EvidenceLightbox
        item={lightbox?.item}
        image={lightbox?.image}
        onClose={() => setLightbox(null)}
      />
    </section>
  )
}

export default EvidenceWall
