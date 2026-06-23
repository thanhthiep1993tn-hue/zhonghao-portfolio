import { strengths, toolLoopItems } from '../data/portfolio'
import LogoLoop from './effects/LogoLoop'
import Reveal from './effects/Reveal'

function SkillsMethods() {
  return (
    <section className="toolchain-section" id="methods">
      <div className="shell">
        <Reveal className="toolchain-heading">
          <div><span>07 / 能力工具链</span><h2>工具不是清单，而是完成工作的组合。</h2></div>
          <p>从研究方法到运营分析，再到可运行的产品原型，我会按问题选择工具，而不是为了展示技术名词。</p>
        </Reveal>
        <LogoLoop items={toolLoopItems} speed={70} />
        <div className="toolchain-methods">
          {strengths.map((item) => <span key={item.number}>{item.title}</span>)}
        </div>
      </div>
    </section>
  )
}

export default SkillsMethods
