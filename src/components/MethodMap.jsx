import { methodMap } from '../data/portfolio'
import Reveal from './effects/Reveal'
import SplitText from './effects/SplitText'

function MethodMap() {
  return (
    <section className="section section-anchor method-map-section" id="methods">
      <div className="shell">
        <div className="section-number">03 / 我的工作方法</div>
        <div className="section-heading split-heading">
          <SplitText text="从真实场景到可运行系统。" tag="h2" splitType="words" className="section-title" />
          <Reveal delay={0.1}>
            <p className="section-subtitle">
              我习惯先进入场景，再拆解问题：用户从哪里来，在哪一步流失，渠道为什么有效或无效，供应商结算为什么产生争议，一个线下活动如何从一次性执行变成可复盘的数据材料。
            </p>
          </Reveal>
        </div>

        <div className="method-map" aria-label="从真实场景到可运行系统的方法流程">
          {methodMap.map((step, index) => (
            <Reveal className="method-node" delay={index * 0.08} key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
              {index < methodMap.length - 1 ? <i aria-hidden="true" /> : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MethodMap
