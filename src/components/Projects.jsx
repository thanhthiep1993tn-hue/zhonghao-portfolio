import { useState } from 'react'
import { projects } from '../data/portfolio'
import BlurText from './effects/BlurText'
import GradientText from './effects/GradientText'
import Reveal from './effects/Reveal'
import ProjectCase from './ProjectCase'
import SplitText from './effects/SplitText'

function Projects() {
  const [focused, setFocused] = useState(null)
  return (
    <section className="section section-anchor projects-section" id="projects">
      <div className="shell">
        <div className="section-number">04 / 产品与运营项目</div>
        <div className="section-heading split-heading">
          <h2 className="section-title"><SplitText text="把" splitType="chars" /><GradientText>运营问题做成系统。</GradientText></h2>
          <Reveal delay={0.1}>
            <p className="section-subtitle">我希望项目展示的不只是“完成了任务”，而是业务问题如何被拆解成指标、流程、界面和下一步动作。</p>
          </Reveal>
        </div>
        <BlurText text="重点案例与业务档案" as="p" className="projects-index-title" delay={55} />
        <div className={`projects-grid ${focused ? 'has-focus' : ''}`}>
          {projects.map((project, index) => (
            <ProjectCase
              project={project}
              index={index}
              focused={focused}
              onFocus={setFocused}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
