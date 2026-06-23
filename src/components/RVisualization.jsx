import { rVisualization } from '../data/portfolio'
import BlurText from './effects/BlurText'
import Reveal from './effects/Reveal'
import GgAnimateMockup from './mockups/GgAnimateMockup'
import RVisualizationMockup from './mockups/RVisualizationMockup'

function RVisualization() {
  return (
    <section className="section section-anchor r-section" id="r-visualization">
      <div className="shell">
        <div className="section-number">03 / R 语言与数据可视化</div>
        <div className="section-heading split-heading">
          <BlurText text={rVisualization.title} as="h2" className="section-title" />
          <Reveal delay={0.1}><p className="section-subtitle">{rVisualization.description}</p></Reveal>
        </div>
        <Reveal><RVisualizationMockup code={rVisualization.codeExample} /></Reveal>
        <Reveal delay={0.08}><GgAnimateMockup /></Reveal>
        <Reveal className="r-tool-list"><div className="tag-list">{rVisualization.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></Reveal>
      </div>
    </section>
  )
}

export default RVisualization
