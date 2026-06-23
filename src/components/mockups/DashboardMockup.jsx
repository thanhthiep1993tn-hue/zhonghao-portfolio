import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'

const views = {
  overview: {
    label: '经营总览',
    note: '资源配置判断',
    dots: [
      ['美妆', 'dot-a'], ['家电', 'dot-b'], ['宠物', 'dot-c'], ['食品', 'dot-d'],
    ],
  },
  sku: {
    label: 'SKU 机会',
    note: '潜力与风险排序',
    rows: [
      ['SKU-084', '高增长 / 高退货', '复核'],
      ['SKU-117', '毛利改善', '加资源'],
      ['SKU-026', '库存偏高', '控采'],
      ['SKU-203', '活动敏感', '测试'],
    ],
  },
  roi: {
    label: '活动 ROI',
    note: '预算情景模拟',
    bars: [
      ['自然流量', 58], ['站内资源', 82], ['达人合作', 66], ['价格补贴', 43],
    ],
  },
}

function DashboardMockup() {
  const [view, setView] = useState('overview')
  const reduced = useReducedMotion()
  const active = views[view]
  const kpis = [
    ['GMV', '¥8.42M', '+12.4%'],
    ['毛利率', '27.8%', '+1.6pt'],
    ['退货率', '6.2%', '-0.8pt'],
    ['库存周转', '58 天', '-6 天'],
  ]

  return (
    <div className="product-mockup dashboard-mockup" aria-label="可交互的品类增长看板示意图">
      <div className="dashboard-scan" />
      <div className="mockup-topbar">
        <span>品类增长决策看板</span>
        <small>测试环境 · WEEK 24</small>
      </div>
      <div className="dashboard-view-tabs" role="tablist" aria-label="看板视图">
        {Object.entries(views).map(([id, item]) => (
          <button role="tab" aria-selected={view === id} className={view === id ? 'is-active' : ''} onClick={() => setView(id)} key={id}>
            {item.label}
          </button>
        ))}
      </div>
      <div className="dashboard-kpis">
        {kpis.map(([label, value, change], index) => (
          <motion.div whileHover={reduced ? undefined : { y: -4 }} key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{change}</small>
            <i style={{ '--kpi-delay': `${index * .25}s` }} />
          </motion.div>
        ))}
      </div>
      <div className="dashboard-main">
        <div className="matrix-panel">
          <div className="mockup-heading"><span>{active.label}</span><small>{active.note}</small></div>
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              className="dashboard-view"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: .28 }}
            >
              {view === 'overview' ? (
                <div className="matrix-chart">
                  <span className="axis-y">增长</span><span className="axis-x">毛利</span>
                  {active.dots.map(([name, className]) => <i className={`matrix-dot ${className}`} key={name}>{name}</i>)}
                </div>
              ) : null}
              {view === 'sku' ? (
                <div className="sku-opportunity-list">
                  {active.rows.map(([sku, signal, action]) => <div key={sku}><strong>{sku}</strong><span>{signal}</span><em>{action}</em></div>)}
                </div>
              ) : null}
              {view === 'roi' ? (
                <div className="roi-simulator">
                  {active.bars.map(([name, value]) => <div key={name}><span>{name}</span><i><b style={{ width: `${value}%` }} /></i><strong>{value}%</strong></div>)}
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="risk-panel">
          <div className="mockup-heading"><span>经营风险</span><small>实时提示</small></div>
          {[
            ['库存压力', '家居生活', '高'],
            ['结算异常', '供应商 S-17', '中'],
            ['退货偏高', 'SKU-084', '中'],
            ['毛利承压', '消费电子', '关注'],
          ].map(([risk, item, level], index) => (
            <motion.div className="risk-row" initial={reduced ? false : { opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * .08 }} key={`${risk}-${item}`}>
              <span>{risk}</span><small>{item}</small><em>{level}</em>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mockup-progress"><span /></div>
    </div>
  )
}

export default DashboardMockup
