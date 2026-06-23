import { rVisualization } from '../data/portfolio'
import BlurText from './effects/BlurText'
import Reveal from './effects/Reveal'
import GgAnimateMockup from './mockups/GgAnimateMockup'
import RVisualizationMockup from './mockups/RVisualizationMockup'
import SplitText from './effects/SplitText'
import LogoLoop from './effects/LogoLoop'
import { toolLoopItems } from '../data/portfolio'

function RVisualization() {
  return (
    <section className="section section-anchor r-section" id="r-visualization">
      <div className="shell">
        <div className="section-number">03 / R 语言与数据可视化</div>
        <div className="section-heading split-heading">
          <SplitText text={rVisualization.title} tag="h2" splitType="words" className="section-title" />
          <Reveal delay={0.1}><p className="section-subtitle">{rVisualization.description}</p></Reveal>
        </div>
        <div className="r-showcase-grid">
          <Reveal><RVisualizationMockup code={rVisualization.codeExample} /></Reveal>
          <Reveal delay={0.08}><GgAnimateMockup /></Reveal>
        </div>
        <Reveal className="r-tool-list"><LogoLoop items={toolLoopItems.filter((item) => rVisualization.tools.includes(item.title))} speed={48} compact /></Reveal>
      </div>
    </section>
  )
}

export default RVisualization
