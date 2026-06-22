function SettlementMockup() {
  const rows = [
    ['Nexus', '42', 'HK$ 18,400', '待确认'],
    ['Growin', '31', 'HK$ 12,680', '可结算'],
    ['Nexgroup', '18', 'HK$ 9,200', '复核中'],
    ['Blumenzo', '27', 'HK$ 14,560', '可结算'],
  ]

  return (
    <div className="product-mockup settlement-mockup" aria-label="渠道结算看板示意图">
      <div className="mockup-topbar">
        <span>Channel Settlement</span>
        <small>JUNE · HKD</small>
      </div>
      <div className="settlement-summary">
        <div><span>总费用</span><strong>HK$ 84,620</strong></div>
        <div><span>待复核</span><strong>3 项</strong></div>
        <div><span>供应商</span><strong>5 家</strong></div>
      </div>
      <div className="settlement-table">
        <div className="settlement-row table-head">
          <span>供应商</span><span>有效开户</span><span>应结金额</span><span>状态</span>
        </div>
        {rows.map((row) => (
          <div className="settlement-row" key={row[0]}>
            {row.map((cell, index) => (
              <span key={cell} className={index === 3 ? 'status-cell' : ''}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="settlement-note">
        <span>复核提示</span>
        <p>2 笔 CPA 条件与入金到账状态不一致，需要供应商确认。</p>
      </div>
    </div>
  )
}

export default SettlementMockup
