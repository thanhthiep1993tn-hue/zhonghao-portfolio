function RVisualizationMockup({ code }) {
  return (
    <div className="r-static-mockup">
      <div className="r-code-panel">
        <div className="r-window-bar"><i /><i /><i /><span>trend_analysis.R</span></div>
        <pre>{code}</pre>
      </div>
      <div className="r-plot-panel">
        <div className="plot-title"><strong>不同群体的时间趋势</strong><span>均值与变化率</span></div>
        <svg viewBox="0 0 560 340" role="img" aria-label="ggplot 风格趋势折线图">
          <g className="plot-grid"><path d="M58 55H530M58 120H530M58 185H530M58 250H530M58 315H530" /><path d="M58 30V315M175 30V315M292 30V315M409 30V315M530 30V315" /></g>
          <path className="plot-axis" d="M58 30V315H530" />
          <path className="plot-line plot-line-a" d="M58 264C125 250 150 218 205 205S292 172 350 155S445 106 530 82" />
          <path className="plot-line plot-line-b" d="M58 287C122 278 160 256 210 248S300 230 355 204S440 188 530 164" />
          {[58, 175, 292, 409, 530].map((x, index) => <circle className="plot-point point-a" cx={x} cy={[264, 220, 178, 132, 82][index]} r="6" key={`a${x}`} />)}
          {[58, 175, 292, 409, 530].map((x, index) => <circle className="plot-point point-b" cx={x} cy={[287, 260, 231, 193, 164][index]} r="6" key={`b${x}`} />)}
          <g className="plot-labels"><text x="50" y="335">2021</text><text x="165" y="335">2022</text><text x="282" y="335">2023</text><text x="399" y="335">2024</text><text x="510" y="335">2025</text></g>
        </svg>
        <div className="plot-legend"><span><i className="legend-a" />群体 A</span><span><i className="legend-b" />群体 B</span></div>
      </div>
    </div>
  )
}

export default RVisualizationMockup
