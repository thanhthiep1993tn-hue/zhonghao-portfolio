function PaperMockup({ file }) {
  return (
    <div className="paper-mockup">
      <a href={file} target="_blank" rel="noreferrer" className="paper-cover">
        <img src="/assets/papers/hutong-cover.jpg" alt="胡同研究论文首页" />
        <span>PDF · 10 页</span>
      </a>
      <div className="paper-insights">
        <div><span>研究问题</span><p>胡同空间如何影响居民情感、社会互动与文化认同？</p></div>
        <div><span>研究方法</span><p>半结构化访谈、空间视角与定性分析。</p></div>
        <div><span>关键认识</span><p>空间不是容器，而是持续塑造关系和行为的社会结构。</p></div>
      </div>
    </div>
  )
}

export default PaperMockup
