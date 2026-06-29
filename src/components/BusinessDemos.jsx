import { useMemo, useState } from 'react'
import { businessDemos } from '../data/portfolio'
import Reveal from './effects/Reveal'
import SplitText from './effects/SplitText'

function CheckinSimulator() {
  const [phone, setPhone] = useState('15911176065')
  const result = useMemo(() => {
    const cleaned = phone.replace(/\D/g, '')
    if (!cleaned) return { title: '等待输入', copy: '请输入手机号，模拟系统如何匹配报名名单。', tone: 'muted' }
    if (cleaned.endsWith('6065')) return { title: '已报名，签到成功', copy: '手机号匹配报名名单，同时记录 Webull 注册与开户状态。', tone: 'good' }
    if (cleaned.endsWith('0000')) return { title: '重复签到，不重复计数', copy: '同一个 event_id + registrant_id 已存在签到记录。', tone: 'warn' }
    return { title: '未匹配，进入临时访客登记', copy: '保留现场线索，后续可补充来源和转化状态。', tone: 'info' }
  }, [phone])

  return (
    <div className="demo-card">
      <span>{businessDemos[0].title}</span>
      <label>手机号<input value={phone} onChange={(event) => setPhone(event.target.value)} /></label>
      <div className={`demo-result ${result.tone}`}><strong>{result.title}</strong><p>{result.copy}</p></div>
    </div>
  )
}

function ROICalculator() {
  const [cost, setCost] = useState(12000)
  const [gmv, setGmv] = useState(68000)
  const [margin, setMargin] = useState(18)
  const [coupon, setCoupon] = useState(4500)
  const result = useMemo(() => {
    const profit = gmv * (margin / 100) - cost - coupon
    const roi = ((gmv * (margin / 100)) / Math.max(cost + coupon, 1)).toFixed(2)
    const breakEven = Math.ceil((cost + coupon) / Math.max(margin / 100, 0.01))
    const action = profit >= 0 ? '可继续加资源，但需要盯库存周转。' : '先缩小补贴，优先测试高毛利 SKU。'
    return { profit, roi, breakEven, action }
  }, [cost, gmv, margin, coupon])

  return (
    <div className="demo-card">
      <span>{businessDemos[1].title}</span>
      <div className="demo-input-grid">
        <label>活动成本<input type="number" value={cost} onChange={(event) => setCost(Number(event.target.value))} /></label>
        <label>预估 GMV<input type="number" value={gmv} onChange={(event) => setGmv(Number(event.target.value))} /></label>
        <label>毛利率 %<input type="number" value={margin} onChange={(event) => setMargin(Number(event.target.value))} /></label>
        <label>礼券成本<input type="number" value={coupon} onChange={(event) => setCoupon(Number(event.target.value))} /></label>
      </div>
      <div className="demo-result good">
        <strong>ROI {result.roi} · 盈亏平衡 GMV ¥{result.breakEven.toLocaleString()}</strong>
        <p>{result.action}</p>
      </div>
    </div>
  )
}

function ChannelQualityScorer() {
  const [registers, setRegisters] = useState(420)
  const [opens, setOpens] = useState(96)
  const [deposits, setDeposits] = useState(32)
  const [cpa, setCpa] = useState(180)
  const [retention, setRetention] = useState(42)
  const score = useMemo(() => {
    const openRate = opens / Math.max(registers, 1)
    const depositRate = deposits / Math.max(opens, 1)
    return Math.max(0, Math.min(100, Math.round(openRate * 35 + depositRate * 30 + retention * 0.55 - cpa * 0.04)))
  }, [registers, opens, deposits, cpa, retention])
  const risk = score > 70 ? '渠道质量较好，可以继续跟进高意向用户。' : score > 45 ? '质量中等，需要检查开户与入金断点。' : '风险偏高，建议重新评估 CPA 与流量来源。'

  return (
    <div className="demo-card">
      <span>{businessDemos[2].title}</span>
      <div className="demo-input-grid">
        <label>注册数<input type="number" value={registers} onChange={(event) => setRegisters(Number(event.target.value))} /></label>
        <label>开户数<input type="number" value={opens} onChange={(event) => setOpens(Number(event.target.value))} /></label>
        <label>入金数<input type="number" value={deposits} onChange={(event) => setDeposits(Number(event.target.value))} /></label>
        <label>CPA<input type="number" value={cpa} onChange={(event) => setCpa(Number(event.target.value))} /></label>
        <label>留存率 %<input type="number" value={retention} onChange={(event) => setRetention(Number(event.target.value))} /></label>
      </div>
      <div className="score-ring" style={{ '--score': `${score}%` }}><strong>{score}</strong><span>质量评分</span></div>
      <p className="demo-advice">{risk}</p>
    </div>
  )
}

function BusinessDemos() {
  return (
    <section className="section section-anchor business-demo-section" id="business-demos">
      <div className="shell">
        <div className="section-number">06 / 业务 Demo</div>
        <div className="section-heading split-heading">
          <SplitText text="把运营判断做成可以操作的小工具。" tag="h2" splitType="words" className="section-title" />
          <Reveal delay={0.1}><p className="section-subtitle">这些 demo 不追求商业精确计算，而是展示我如何把运营判断产品化：从规则、口径、输入输出到下一步建议。</p></Reveal>
        </div>
        <div className="business-demo-grid">
          <Reveal><CheckinSimulator /></Reveal>
          <Reveal delay={0.08}><ROICalculator /></Reveal>
          <Reveal delay={0.16}><ChannelQualityScorer /></Reveal>
        </div>
      </div>
    </section>
  )
}

export default BusinessDemos
