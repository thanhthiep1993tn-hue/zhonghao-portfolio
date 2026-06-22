function CodeArchiveMockup({ paper, code }) {
  return (
    <div className="code-archive">
      <div className="code-window">
        <div className="code-window-bar"><i /><i /><i /><span>fertility_analysis.R</span></div>
        <pre><code>{`cfps <- clean_data(raw)\nedu_gap <- expected_edu - parent_edu\nmodel <- lm(fertility_gap ~ edu_gap + controls)\nrobustness(model)\nheterogeneity(model, group = income)`}</code></pre>
        <div className="mini-plot">
          {[44, 72, 56, 88, 67, 92, 78].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
        </div>
      </div>
      <div className="archive-files">
        <a href={paper} target="_blank" rel="noreferrer"><span>PDF</span><strong>Capstone 研究报告</strong><small>55 页 · CFPS 2022</small></a>
        <a href={code} download><span>ZIP</span><strong>R 研究代码</strong><small>数据分析与可视化</small></a>
      </div>
    </div>
  )
}

export default CodeArchiveMockup
