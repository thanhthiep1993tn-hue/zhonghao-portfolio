function DashboardMockup() {
  const kpis = [
    ['GMV', '¥8.42M', '+12.4%'],
    ['毛利率', '27.8%', '+1.6pt'],
    ['退货率', '6.2%', '-0.8pt'],
    ['库存周转', '58 天', '-6 天'],
  ]

  return (
    <div className="product-mockup dashboard-mockup" aria-label="品类增长看板示意图">
      <div className="mockup-topbar">
        <span>Category Overview</span>
        <small>WEEK 24 · ALL CATEGORIES</small>
      </div>
      <div className="dashboard-kpis">
        {kpis.map(([label, value, change]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{change}</small>
          </div>
        ))}
      </div>
      <div className="dashboard-main">
        <div className="matrix-panel">
          <div className="mockup-heading">
            <span>增长 × 毛利机会矩阵</span>
            <small>资源配置判断</small>
          </div>
          <div className="matrix-chart">
            <span className="axis-y">增长</span>
            <span className="axis-x">毛利</span>
            <i className="matrix-dot dot-a">美妆</i>
            <i className="matrix-dot dot-b">家电</i>
            <i className="matrix-dot dot-c">宠物</i>
            <i className="matrix-dot dot-d">食品</i>
          </div>
        </div>
        <div className="risk-panel">
          <div className="mockup-heading">
            <span>经营风险</span>
            <small>4 ITEMS</small>
          </div>
          {[
            ['库存压力', '家居生活', '高'],
            ['结算异常', '供应商 S-17', '中'],
            ['退货偏高', 'SKU-084', '中'],
            ['毛利承压', '消费电子', '关注'],
          ].map(([risk, item, level]) => (
            <div className="risk-row" key={`${risk}-${item}`}>
              <span>{risk}</span>
              <small>{item}</small>
              <em>{level}</em>
            </div>
          ))}
        </div>
      </div>
      <div className="mockup-progress"><span /></div>
    </div>
  )
}

export default DashboardMockup
