import { useState } from 'react'
import { archiveItems } from '../data/portfolio'
import BlurText from './effects/BlurText'
import DotGrid from './effects/DotGrid'
import ArchiveLightbox from './effects/ArchiveLightbox'
import Reveal from './effects/Reveal'
import MagicBento from './effects/MagicBento'
import SplitText from './effects/SplitText'

function CodeVisual({ kind }) {
  if (kind === 'github') {
    return <div className="evidence-code-visual github-visual"><span>main</span><strong>lecture-checkin</strong><div><i /> Flask app.py</div><div><i /> SQLite schema</div><div><i /> QR check-in flow</div></div>
  }
  return <div className="evidence-code-visual"><span>analysis.R</span><code>model &lt;- lm(fertility ~ edu_gap)</code><code>tidy(model, conf.int = TRUE)</code><code>ggplot(coef, aes(estimate, term))</code><div className="code-chart"><i /><i /><i /><i /><i /></div></div>
}

function ArchiveWall() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="section section-anchor evidence-section archive-section" id="archive">
      <DotGrid dotSize={5} gap={20} baseColor="#D8DDE8" activeColor="#F97316" proximity={110} />
      <div className="shell archive-content">
        <div className="section-number">02 / 研究与实践档案</div>
        <div className="section-heading split-heading">
          <SplitText text="研究与实践档案：把经历变成可以看见的作品。" tag="h2" splitType="words" className="section-title" />
          <Reveal delay={0.1}><p className="section-subtitle">这里展示我如何把田野观察、论文写作、代码实践和业务项目整理成可复盘的材料。</p></Reveal>
        </div>
        <div className="evidence-grid">
          {archiveItems.map((item, index) => (
            <MagicBento className={`evidence-card ${item.size || ''}`} tone={item.tone} key={item.id}>
              <div className="evidence-card-top"><span>{item.type}</span><small>{String(index + 1).padStart(2, '0')}</small></div>
              {item.assets ? (
                <div className={`evidence-images ${item.id === 'fieldwork' ? 'fieldwork-filmstrip' : item.assets.length > 1 ? 'is-pair' : ''}`}>
                  {item.assets.map((asset) => <button key={asset} onClick={() => setLightbox({ item, image: asset })}><img src={asset} alt={item.title} /></button>)}
                </div>
              ) : item.image ? (
                <button className="evidence-cover" onClick={() => setLightbox({ item, image: item.image })}><img src={item.image} alt={item.title} /><span>点击预览</span></button>
              ) : <CodeVisual kind={item.visual} />}
              <div className="evidence-copy">
                <h3>{item.title}</h3><p>{item.description}</p>
                <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {(item.file || item.url) && <a className="evidence-link" href={item.file || item.url} target="_blank" rel="noreferrer">{item.type === '代码' ? '下载代码档案' : '打开完整材料'} ↗</a>}
              </div>
            </MagicBento>
          ))}
        </div>
      </div>
      <ArchiveLightbox item={lightbox?.item} image={lightbox?.image} onClose={() => setLightbox(null)} />
    </section>
  )
}

export default ArchiveWall
