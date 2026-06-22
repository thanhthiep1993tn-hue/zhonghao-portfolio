function CheckinSystemMockup({ dataModel = [] }) {
  return (
    <div className="checkin-system-mockup">
      <div className="checkin-flow">
        <div className="checkin-mobile">
          <span>移动端签到</span>
          <strong>欢迎参加活动</strong>
          <label>手机号<input aria-label="手机号示意" readOnly value="159 **** 6065" /></label>
          <label>邮箱<input aria-label="邮箱示意" readOnly value="zh***@hku.hk" /></label>
          <button>确认签到</button>
        </div>
        <div className="qr-card">
          <span>工作人员核验</span>
          <div className="qr-grid"><i /><i /><i /><b /></div>
          <strong>核验成功</strong>
          <small>token · 84F2A1</small>
        </div>
        <div className="admin-panel">
          <div><strong>活动后台</strong><span>128 / 164 已到场</span></div>
          {[
            ['ZH-0248', '名单用户', '已签到'],
            ['VISITOR-19', '临时访客', '已签到'],
            ['ZH-0167', '已开户', '待到场'],
          ].map((row) => <p key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</p>)}
        </div>
      </div>
      <div className="schema-row">
        {dataModel.map(([table, detail]) => (
          <div key={table}><code>{table}</code><span>{detail}</span></div>
        ))}
      </div>
    </div>
  )
}

export default CheckinSystemMockup
