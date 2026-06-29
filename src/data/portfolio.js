export const profile = {
  name: '钟皓',
  role: '产品运营 / 采销运营 / 用户运营 / 渠道增长 / 数据驱动型业务执行者',
  disciplines: '产品运营 · 采销运营 · 用户运营 · 渠道增长 · 用户研究 · Vibe Coding',
  email: 'zhonghao23@connect.hku.hk',
  phoneCN: '+86 159 1117 6065',
  phoneHK: '+852 4637 7351',
  locations: '北京优先｜香港 / 深圳可沟通',
  profilePhoto: {
    normal: '/assets/profile/hero-portrait.webp',
    cutout: '/assets/profile/life-photo-cutout.png',
    useCutout: false,
  },
  floatingTags: ['足球', '徒步', '摄影', '宠物', 'AI 产品应用'],
  statement: [
    '我是一个对真实场景非常敏感的人。社会学训练让我习惯先观察人、关系和制度，再谈策略；运营实习让我意识到，好的执行不是把事情做完，而是让复杂流程变得可追踪、可复盘、可协作。',
    '我喜欢把模糊的问题拆成结构：用户从哪里来、为什么流失、渠道为什么有效或无效、供应商为什么产生结算争议、一个线下活动如何沉淀为可复用的数据系统。相比一次性任务，我更愿意把任务整理成表格、SOP、看板、原型或系统。',
    '生活中我喜欢踢球、徒步、摄影和宠物，也持续关注 AI 产品应用。它们分别训练我的协作、耐心、观察力、责任感和快速构建能力。',
  ],
}

export const hero = {
  titlePrefix: '把真实场景里的问题，',
  highlight: '做成可以运行的业务系统。',
  description:
    '我从社会学训练和用户研究出发，进入产品运营、采销运营和渠道增长现场。相比只描述经历，我更希望展示：一个模糊的用户、渠道或供应商问题，如何被拆成指标、流程、看板、代码和下一步动作。',
}

export const heroStats = [
  { value: 3, suffix: ' 类', label: '业务系统原型', color: 'blue' },
  { value: 10, suffix: '万字', label: '用户访谈资料分析', color: 'purple' },
  { value: 600, suffix: '+', label: '潜在合作渠道触达', color: 'green' },
  { value: 50, suffix: '万+', label: '内容累计播放', color: 'orange' },
  { value: 3, suffix: ' 份', label: 'R 课程代码档案', color: 'pink' },
]

export const mediaLibrary = {
  profile: {
    heroPhoto: '/assets/profile/hero-portrait.webp',
    heroCutout: '/assets/profile/life-photo-cutout.png',
  },
  academic: [
    { src: '/assets/academic/bjut-graduation.webp', alt: '北京工业大学学位授予仪式', caption: '社会学本科训练的阶段性完成。', usedIn: 'education-bjut' },
    {
      src: '/assets/academic/hku-main-building.webp',
      alt: '香港大学本部大楼',
      caption: '香港大学本部大楼：从社会学训练延伸到人口与政策分析。',
      usedIn: 'education-hku',
      credit: 'Adon3465 / Wikimedia Commons / CC BY-SA 3.0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:University_of_Hong_Kong_Main_Building.jpg',
    },
    { src: '/assets/academic/gganimate-demo.gif', alt: 'R 课程动态图示例', caption: '使用课程素材展示时间变化和集合关系。', usedIn: 'r-animated-plot' },
  ],
  projects: [
    { src: '/assets/projects/checkin-system.png', alt: '线下活动用户运营系统截图', caption: '活动签到与二维码核验流程', usedIn: 'project-checkin' },
    { src: '/assets/projects/retail-dashboard.png', alt: '零售品类增长决策看板截图', caption: '采销运营与品类经营看板', usedIn: 'project-retail' },
    { src: '/assets/projects/settlement-dashboard.png', alt: '渠道与采销结算管理看板截图', caption: '供应商费用与结算状态管理', usedIn: 'project-settlement' },
  ],
  life: [
    { src: '/assets/life/football-action-new.webp', alt: '夜间足球射门', caption: '足球：协作、空间判断与临场行动。', usedIn: 'personal-football' },
    { src: '/assets/life/hiking-new.webp', alt: '山顶日出', caption: '徒步：耐心、路线与长期主义。', usedIn: 'personal-hiking' },
    { src: '/assets/life/photography-new.webp', alt: '街头摄影作品', caption: '摄影：练习看见场景中的秩序与细节。', usedIn: 'personal-photography' },
    { src: '/assets/life/pet-new.webp', alt: '与宠物猫的合影', caption: '宠物：对具体生命保持敏感。', usedIn: 'personal-pet' },
    { src: '/assets/life/football-portrait-new.webp', alt: '足球场边的钟皓', caption: '场上 27 号：观察、判断、行动。', usedIn: 'profile-portrait' },
    { src: '/assets/life/football-team-new.webp', alt: '足球队合影', caption: '足球队：一起训练，也一起承担比赛结果。', usedIn: 'life-gallery-football' },
    { src: '/assets/life/basketball-new.webp', alt: '篮球投篮瞬间', caption: '运动：重复练习之后的动作判断。', usedIn: 'life-gallery-basketball' },
    { src: '/assets/life/photo-coast.webp', alt: '海岸摄影作品', caption: '海岸：在风景中寻找尺度与节奏。', usedIn: 'life-gallery-coast' },
    { src: '/assets/life/photo-temple.webp', alt: '建筑摄影作品', caption: '建筑：光线、结构与观看路径。', usedIn: 'life-gallery-temple' },
  ],
}

export function getMediaByUsage(category, usage) {
  const collection = mediaLibrary[category]
  return Array.isArray(collection) ? collection.find((item) => item.usedIn === usage) : null
}

export const education = [
  {
    school: '香港大学',
    schoolEn: 'The University of Hong Kong',
    degree: '社会科学硕士｜人口与政策分析',
    period: '2025.09 — 2026.11',
    keywords: ['人口分析', '政策评估', '社会统计', '计算社会科学', 'R 语言', 'DID / RDD / IV'],
    description: '研究生阶段，我进一步把社会问题转化为可计算、可比较、可解释的问题：通过人口方法、政策评估、社会统计和 R 语言分析，将抽象的社会过程落到数据结构、模型结果和可视化表达上。',
    image: '/assets/academic/hku-main-building.webp',
    credit: 'Adon3465 / Wikimedia Commons / CC BY-SA 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:University_of_Hong_Kong_Main_Building.jpg',
  },
  {
    school: '北京工业大学',
    schoolEn: 'Beijing University of Technology',
    degree: '法学学士｜社会学',
    period: '2021.08 — 2025.07',
    keywords: ['社会研究方法', '田野调查', '质性访谈', '问卷设计', '统计分析', '城市社会学'],
    description: '本科阶段的社会学训练让我习惯从具体场景出发理解人：人如何在空间中行动，如何在关系中选择，如何受到制度、文化和组织结构的影响。这也成为我后来理解用户、渠道和业务现场的基础。',
    image: '/assets/academic/bjut-graduation.webp',
  },
]

export const archiveItems = [
  {
    id: 'fieldwork',
    type: '方法卡',
    title: '社会学训练与场景观察',
    description: '社会学训练让我习惯从具体场景出发理解用户、空间和组织关系。当前不把照片作为展示重点，但这种观察方法贯穿了我后来的用户研究、渠道运营和产品化项目。',
    tags: ['社会学训练', '场景观察', '用户研究方法'],
    tone: 'blue',
    visual: 'method',
  },
  {
    id: 'paper',
    type: '论文',
    title: '巷陌之间的“去”与“留”',
    description: '发表于《交叉科学快报》的胡同研究，讨论空间、情感纽带、社区互动与文化传承。',
    image: '/assets/papers/hutong-cover.jpg',
    file: '/assets/papers/hutong-paper.pdf',
    tags: ['北京胡同', '城市空间', '定性研究'],
    tone: 'orange',
  },
  {
    id: 'graduate',
    type: '研究',
    title: '研究生 Capstone 与量化分析',
    description: '基于 CFPS 数据研究代际教育期望差距与生育意愿，包含回归、异质性、机制和稳健性分析。',
    image: '/assets/academic/graduate-cover.jpg',
    file: '/assets/academic/graduate-paper.pdf',
    tags: ['CFPS', '回归分析', '政策评估'],
    tone: 'green',
  },
  {
    id: 'code',
    type: '代码',
    title: 'R 语言与数据可视化',
    description: '人口方法、政策评估和统计分析课程中的 R 代码，可下载查看分析结构。',
    file: '/assets/academic/graduate-code.zip',
    tags: ['R', '可视化', '数据清洗'],
    tone: 'purple',
    visual: 'code',
  },
  {
    id: 'github',
    type: 'GitHub',
    title: '线下活动用户运营系统',
    description: 'Flask + SQLite 的完整签到系统：名单导入、二维码核验、权限控制、临时访客和记录导出。',
    url: 'https://github.com/thanhthiep1993tn-hue/lecture-checkin/tree/main',
    tags: ['Flask', 'SQLite', '二维码'],
    tone: 'pink',
    visual: 'github',
  },
  {
    id: 'work',
    type: '实践材料',
    title: '金融产品内容与线下物料',
    description: '参与金融产品传播、线下广告物料与竞品信息整理，把复杂规则转译成可理解的信息。',
    assets: ['/assets/work/webull-cover.jpg', '/assets/work/webull-fee-table.jpg'],
    tags: ['内容运营', '信息设计', '金融科技'],
    tone: 'cyan',
    size: 'wide',
  },
]

export const rVisualization = {
  title: 'R 语言与数据可视化：把社会问题转化为可解释的图形。',
  description: '研究生阶段，我使用 R 进行数据清洗、统计建模、人口分析、政策评估和可视化表达。这里展示的不只是代码，而是我如何把抽象社会问题转化为变量、模型、图表和解释。',
  tools: ['R', 'ggplot2', 'dplyr', 'gtsummary', 'broom', 'performance', 'lme4', 'poLCA', 'gganimate', '回归分析', '人口方法', '政策评估', 'DID', 'RDD', 'IV', '生命表', 'Leslie 矩阵'],
  codeExample: `library(tidyverse)
library(lme4)
library(performance)
library(broom.mixed)

model <- lmer(fert ~ urbnrr + mean_age + (1 | district), data = x)

tidy(model, conf.int = TRUE) %>%
  filter(effect == "fixed") %>%
  ggplot(aes(estimate, term)) +
  geom_point(size = 2.4, color = "#2563eb") +
  geom_errorbarh(aes(xmin = conf.low, xmax = conf.high), height = .12) +
  theme_minimal()`,
}

export const rCourseWorks = [
  {
    title: '多层模型与地区差异分析',
    type: '课程代码 / R 模型',
    description: '基于 Bangladesh 地区数据，把区县层级差异转化为固定效应、随机截距和模型比较问题。',
    tools: ['R', 'lme4', 'broom.mixed', 'performance', 'ggeffects'],
    assets: { code: '/assets/academic/r-code-01.R', figure: '/assets/academic/r-visual-01.png', pdf: '/assets/academic/course-paper-01.pdf' },
  },
  {
    title: 'ggplot2 与数据可视化表达',
    type: '课程代码 / 图表设计',
    description: '围绕联合国人口数据练习数据清洗、分组、坐标轴、图例和学术汇报风格图表。',
    tools: ['R', 'ggplot2', 'dplyr', 'tidyr'],
    assets: { code: '/assets/academic/r-code-02.R', figure: '/assets/academic/r-visual-02.png' },
  },
  {
    title: '重复测量与随机斜率模型',
    type: '课程作业 / R 代码',
    description: '使用 sleepstudy 数据理解个体内变化、个体间差异、ICC 与随机斜率模型。',
    tools: ['R', 'lme4', 'performance', 'broom.mixed'],
    assets: { code: '/assets/academic/r-code-03.R' },
  },
]

export const methodMap = [
  { title: '真实场景观察', description: '先进入现场，理解用户、渠道、供应商或活动流程中的真实摩擦。' },
  { title: '用户 / 渠道问题识别', description: '把“感觉不顺”的地方拆成角色、动作、流失节点和责任边界。' },
  { title: '指标与数据结构拆解', description: '定义手机号、账户状态、SKU、CPA、ROI、库存周转等可追踪字段。' },
  { title: '表格 / 看板 / 系统原型', description: '用 Excel、R、Flask、React 或 Streamlit 做成能被团队操作的工具。' },
  { title: '运营复盘与下一步动作', description: '复盘不是汇报结果，而是沉淀下一轮执行的优先级和动作清单。' },
]

export const academicWorks = [
  {
    id: 'fieldwork-study',
    number: '01',
    title: '场景观察与用户研究方法',
    description:
      '社会学训练让我长期接触田野调查、访谈和场景观察。相比只看抽象数据，我更习惯先进入真实场景，观察人如何行动、如何选择、如何在制度和空间中形成自己的行为逻辑。',
    tags: ['半结构化访谈', '参与式观察', '场景记录', '质性编码'],
  },
  {
    id: 'hutong-paper',
    number: '02',
    title: '本科论文：北京胡同的情感纽带与文化传承研究',
    description:
      '研究关注北京胡同中的空间经验、邻里关系、文化记忆和地方认同。它让我意识到，用户并不是孤立的个体，而是嵌入在空间、关系和制度之中的行动者。',
    tags: ['北京胡同', '情感纽带', '文化传承', '城市空间', '社会记忆'],
    file: '/assets/papers/hutong-paper.pdf',
  },
  {
    id: 'graduate-research',
    number: '03',
    title: '研究生论文与代码：把社会问题转化为可计算的问题',
    description:
      '研究生阶段，我用人口分析、政策评估和社会统计方法处理真实社会议题。课程项目覆盖数据清洗、描述统计、回归分析、异质性检验、机制分析与可视化。',
    tags: ['R', 'Python', '政策评估', '人口方法', '社会统计', 'DID / RDD / IV'],
    paper: '/assets/academic/graduate-paper.pdf',
    code: '/assets/academic/graduate-code.zip',
  },
]

const sharedCheckin = {
  github: 'https://github.com/thanhthiep1993tn-hue/lecture-checkin/tree/main',
  problem: '线下活动的报名名单、现场签到、临时访客、二维码核验和后续转化数据彼此割裂。',
  solution: '用 Flask + SQLite 搭建轻量级系统，将名单导入、移动端签到、工作人员扫码、权限控制和 Excel 导出接入同一流程。',
  value: '它不是为了替代大型 CRM，而是先接住线下活动中最容易丢失的数据：谁报名、谁到场、谁是临时访客、谁已经开户，以及哪些渠道带来了有效用户。',
  dataModel: [
    ['registrants', '报名信息、联系方式、来源、账户状态与唯一 token'],
    ['checkins', '签到方式、状态、时间、IP 与浏览器信息'],
    ['admin_users', '后台管理员账号与密码哈希'],
  ],
  logic: [
    '自动识别 Excel 中姓名、手机号、邮箱、单位等字段',
    '手机号标准化并优先匹配，邮箱作为备用匹配',
    '为每位用户生成唯一 checkin_token 与二维码链接',
    'event_id + registrant_id 唯一约束，重复扫码不重复计数',
    '工作人员登录后才能完成扫码核验',
    '支持临时访客登记、后台补签与 Webull 状态记录',
    '通过 Resend 邮件发送二维码，Excel 导出签到记录',
  ],
  next: ['PostgreSQL 持久化', '多活动 dashboard', '未签到名单对比', 'CRM 线索分层', '短信 / 邮件提醒'],
}

export const projects = [
  {
    id: 'event-checkin',
    number: '01',
    title: '线下活动用户运营系统',
    subtitle: '从人工登记到可追踪、可复盘的数据流程',
    summary:
      '项目源自一个具体运营场景：报名名单、现场签到、临时到访、重复签到、Webull 注册开户状态和复盘数据分散在不同表格与人工流程里。我用 Flask + SQLite 搭建轻量系统，把名单导入、身份匹配、二维码核验和数据导出连接起来。',
    tags: ['Flask', 'SQLite', 'Excel', '二维码', '用户运营'],
    featured: true,
    mockup: 'checkin',
    sections: sharedCheckin,
  },
  {
    id: 'category-copilot',
    number: '02',
    title: '零售品类增长决策看板',
    subtitle: 'Retail Category Growth Copilot',
    summary:
      '我把采销工作理解为商品、商家、库存、价格、毛利和活动资源之间的协调。这个看板模拟周度经营中真正会问的问题：哪些 SKU 值得加资源，哪些商家有风险，活动 ROI 是否覆盖成本，库存周转是否健康。',
    tags: ['采销运营', 'GMV', 'SKU', 'ROI', '库存与毛利'],
    featured: true,
    mockup: 'dashboard',
    github: 'https://github.com/thanhthiep1993tn-hue/retail-category-growth-copilot',
    status: '测试中 · 待上线',
    statusDescription: '当前版本仍在测试与校准数据口径，GitHub 已开放查看。交互式经营看板和可视化决策视图会继续迭代。',
    points: ['品类经营总览', '商家健康评分', 'SKU 潜力排序', '活动 ROI 模拟', '增长机会矩阵', '周度复盘生成'],
    value: '把选品、毛利、库存、活动效率、商家协同和结算风险放进同一个资源配置框架。',
  },
  {
    id: 'settlement',
    number: '03',
    title: '渠道与采销结算管理看板',
    subtitle: '让费用、责任与付款条件进入同一张表',
    summary:
      '这个项目关注渠道运营里最容易变复杂的部分：不同供应商、活动、费用口径和转化状态混在一起后，如何判断该不该结算、结算多少、争议点在哪里。',
    tags: ['供应商管理', 'CPA', '费用核算', '结算风险'],
    featured: true,
    mockup: 'settlement',
    points: ['供应商明细', '异常费用标记', '开户与入金状态', '结算争议点', '付款判断'],
    value: '统一统计口径、责任边界和费用结构，为供应商沟通与后续谈判提供依据。',
  },
  {
    id: 'growth-review',
    number: '04',
    title: 'Webull 用户增长与渠道运营复盘',
    subtitle: '从获客数量走向渠道质量',
    summary:
      '围绕注册、开户、入金、留存、AUM、ARPU、CAC 与 PBP 复盘渠道质量，并参与 KOL 与线下渠道拓展。',
    tags: ['用户增长', '渠道运营', 'KOL', 'CAC', 'AUM'],
    visual: 'growth',
    metrics: ['600+ 渠道触达', '20+ 意向渠道', '10 个推进合作', '20+ KOL 对接'],
  },
  {
    id: 'seo',
    number: '05',
    title: 'SEO 内容增长与用户触达',
    subtitle: '把内容动作整理成稳定的增长流程',
    summary: '围绕 Ahrefs、关键词研究、Meta 信息、内容更新和社交媒体 SOP，支持搜索流量与用户触达。',
    tags: ['SEO', 'Ahrefs', '内容运营', 'SOP'],
    visual: 'content',
    metrics: ['50万+ 视频播放', '关键词分析', 'Meta 优化', '发布 SOP'],
  },
  {
    id: 'jtbd',
    number: '06',
    title: '用户研究与 JTBD 需求拆解',
    subtitle: '从分散表达中提取真实任务',
    summary: '基于 10万字访谈资料，提炼用户任务、痛点和场景，并转化为品牌策略与产品体验建议。',
    tags: ['用户研究', 'JTBD', '访谈分析', '需求洞察'],
    visual: 'research',
    metrics: ['10万字访谈', '问卷设计', '研究报告', '场景与痛点'],
  },
]

export const workExperience = [
  {
    company: 'Webull Securities Limited',
    date: '2026.03 — 2026.06',
    role: '用户增长与渠道运营实习生',
    problem: '金融产品获客不能只追求新增，还要判断开户转化、入金质量、用户资产和长期留存。',
    actions: [
      '跟踪注册、开户、入金、AUM、ARPU、CAC、PBP 等指标并参与周度复盘',
      '按线上平台、媒体、KOL 与线下活动拆解流量质量和 bad case',
      '触达 600+ 潜在渠道，筛选 20+ 意向渠道，推进 10 个合作流程',
      '对接 20+ KOL，参与线下签到系统、结算表和内容物料沉淀',
    ],
    outputs: ['线下活动签到系统', '用户增长复盘', '渠道结算表', 'KOL 内容跟进'],
    evidence: '#projects',
    tone: 'blue',
  },
  {
    company: 'DL Holdings 德林控股',
    date: '2025.10 — 2026.03',
    role: '市场营销实习生',
    problem: '数字金融和 RWA 信息复杂，需要在内容准确性、传播效率与供应商交付之间取得平衡。',
    actions: ['参与 RWA 视频与数字金融内容制作', '支持线下广告投放与供应商沟通', '整理金融科技竞品和传播信息'],
    outputs: ['RWA 内容', '线下广告物料', '供应商沟通记录'],
    tone: 'purple',
  },
  {
    company: '北京威动科技有限公司',
    date: '2025.05 — 2025.08',
    role: 'SEO 实习生',
    problem: '内容生产需要从零散发布变为有关键词依据、有节奏和可复盘的增长流程。',
    actions: ['使用 Ahrefs 完成关键词与竞品分析', '配置 Meta 信息并更新内容', '搭建社交媒体发布 SOP'],
    outputs: ['50万+ 视频播放', '关键词清单', '内容发布 SOP'],
    tone: 'orange',
  },
  {
    company: '北京品创方略营销咨询有限公司',
    date: '2024.09 — 2024.12',
    role: '用户研究实习生',
    problem: '大量访谈和问卷信息需要被整理成团队能够使用的需求、场景和策略判断。',
    actions: ['整理分析 10万字访谈资料', '参与问卷设计、翻译与报告撰写', '使用 JTBD 拆解用户任务'],
    outputs: ['用户洞察报告', 'JTBD 框架', '问卷与访谈编码'],
    tone: 'green',
  },
]

export const experienceIndex = [
  ...workExperience.map((item, index) => ({
    id: `work-${index}`,
    title: item.company,
    subtitle: item.role,
    meta: item.date,
    type: 'work',
    sourceIndex: index,
  })),
  ...education.map((item, index) => ({
    id: `education-${index}`,
    title: item.school,
    subtitle: item.degree,
    meta: item.period,
    type: 'education',
    sourceIndex: index,
  })),
]

export const projectIndex = projects.map((item) => ({ id: item.id, title: item.title }))

export const projectDetails = [
  {
    slug: 'checkin-system',
    projectId: 'event-checkin',
    title: '线下活动用户运营系统',
    subtitle: '把报名、签到、临时到访与后续转化接进同一条数据链路。',
    github: sharedCheckin.github,
    background: '这个项目源自一个非常具体的运营场景：线下讲座报名名单、现场签到、临时到访用户、重复签到、Webull 注册开户状态和后续复盘数据分散在不同表格和人工流程里。',
    problem: '现场执行最怕“信息断裂”：报名表里有人，现场未必能快速匹配；临时用户可能有价值，却容易丢失；重复签到会污染数据；开户状态又在另一套表里。',
    approach: '我的做法是用 Flask + SQLite 搭建一个轻量系统，把这些动作连接起来。优先用手机号匹配，邮箱作为备用匹配；每个报名用户拥有唯一二维码 token；工作人员扫码后完成核验，后台可补签、导出和记录状态。',
    data: [
      ['registrants', '姓名、手机号、邮箱、来源、Webull 状态、唯一 token'],
      ['checkins', '签到时间、签到方式、工作人员、重复控制、设备信息'],
      ['admin_users', '后台账号、权限、密码哈希'],
    ],
    features: ['Excel 名单导入', '手机号优先匹配', '邮箱备用匹配', '临时访客登记', '管理员手动补签', '唯一二维码 token', '工作人员扫码核验', '重复签到控制', 'Webull 注册开户状态记录', '签到记录导出', '邮件发送二维码'],
    role: '我负责需求拆解、数据结构设计、主要代码实现、流程测试与业务复盘口径整理。',
    value: '把一次线下活动从“靠人记”变成可追踪、可导出、可复盘的数据材料。',
    next: ['多活动管理', 'CRM 线索分层', '短信提醒', '到场后转化漏斗', '活动复盘 dashboard'],
    mockup: 'checkin',
  },
  {
    slug: 'category-growth-copilot',
    projectId: 'category-copilot',
    title: '零售品类增长决策看板',
    subtitle: '把采销判断从经验讨论变成可交互的周度经营工具。',
    github: 'https://github.com/thanhthiep1993tn-hue/retail-category-growth-copilot',
    status: '测试中 · 待上线',
    background: '我把采销工作理解为商品、商家、库存、价格、毛利和活动资源之间的协调。这个看板模拟的是采销或品类运营团队在周度经营中真正会问的问题。',
    problem: '哪些 SKU 值得加资源，哪些商家有风险，活动 ROI 是否覆盖成本，库存周转是否健康，这些问题如果分散在多个表里，很难形成一致动作。',
    approach: '用 Streamlit / Python 思路整理品类、SKU、供应商、活动和周度指标，并在前端用交互式经营看板表达资源配置逻辑。',
    data: [
      ['category_weekly_metrics', 'GMV、毛利率、转化率、库存周转、活动成本'],
      ['sku_opportunity', '增长潜力、毛利空间、库存风险、资源建议'],
      ['campaign_roi', '活动成本、券成本、预估 GMV、ROI 与盈亏平衡点'],
    ],
    features: ['品类经营总览', '商家健康评分', 'SKU 潜力排序', '活动 ROI 模拟', '增长机会矩阵', '周度经营复盘', '下一步行动建议'],
    role: '我负责业务问题建模、指标口径设计、模拟数据结构、看板交互和 case study 表达。',
    value: '让采销运营从“看很多表”走向“围绕机会、风险和动作排序”。',
    next: ['接入真实 SKU 数据', '沉淀周报模板', '加入库存预警', '加入供应商沟通记录', '上线内测版本'],
    mockup: 'dashboard',
  },
  {
    slug: 'settlement-dashboard',
    projectId: 'settlement',
    title: '渠道与采销结算管理看板',
    subtitle: '让费用口径、转化状态和付款判断进入同一张表。',
    background: '这个项目关注的是渠道运营里最容易变复杂的部分：不同供应商、不同活动、不同费用口径和不同转化状态混在一起后，如何判断该不该结算、结算多少、争议点在哪里。',
    problem: '固定费用、CPA、礼券成本、运输费争议与开户 / 入金 / 仅注册状态混在一起时，结算沟通很容易变成来回对账。',
    approach: '我把供应商、活动、用户状态、费用类型和付款判断拆成明确字段，并用看板呈现异常项、争议点和下一步沟通建议。',
    data: [
      ['suppliers', '供应商、合作类型、联系人、结算周期'],
      ['campaigns', '活动、渠道、固定费用、礼券成本、运输费'],
      ['conversion_status', '注册、开户、入金、是否符合付款条件'],
    ],
    features: ['供应商维度', '活动维度', '固定费用', 'CPA', '礼券成本', '运输费争议', '开户 / 入金 / 仅注册状态', '付款判断', '供应商沟通价值'],
    role: '我负责结算问题拆解、费用口径整理、异常状态设计与看板表达。',
    value: '减少结算争议，把供应商沟通建立在同一套数据口径上。',
    next: ['加入附件凭证上传', '生成供应商对账单', '权限分级', '异常费用自动标记'],
    mockup: 'settlement',
  },
]

export const businessDemos = [
  {
    id: 'checkin',
    title: '签到流程模拟器',
    description: '输入手机号，模拟报名匹配、重复签到、临时访客和 Webull 状态判断。',
  },
  {
    id: 'roi',
    title: '采销活动 ROI 计算器',
    description: '输入活动成本、GMV、毛利率和礼券成本，得到 ROI、盈亏平衡点和动作建议。',
  },
  {
    id: 'channel',
    title: '渠道质量评分器',
    description: '输入注册、开户、入金、CPA 和留存率，模拟渠道质量评分和风险提示。',
  },
]

export const quickProfile = {
  name: '钟皓',
  target: '产品运营 / 采销运营 / 用户运营 / 渠道增长',
  base: '北京优先，其次香港 / 深圳',
  directions: ['业务系统原型', '用户路径拆解', '渠道与供应商管理', '数据分析与可视化表达'],
  projects: ['线下活动用户运营系统', '零售品类增长决策看板', '渠道与采销结算管理看板'],
  abilities: ['用户路径拆解', '渠道与供应商管理', '数据分析与可视化表达'],
  resume: '/assets/academic/resume-zhonghao.pdf',
  contact: {
    phone: profile.phoneCN,
    email: profile.email,
  },
}

export const toolLoopItems = [
  'R', 'ggplot2', 'dplyr', 'gtsummary', 'broom', 'performance', 'lme4', 'poLCA',
  'Python', 'pandas', 'Flask', 'Streamlit', 'React', 'Vite', 'SQLite',
  'Excel', 'SQL', 'Ahrefs', 'JTBD', 'KHB', 'DID', 'RDD', 'IV',
].map((title) => ({ title }))

export const interests = [
  { id: 'football', title: '足球', copy: '协作、空间判断与临场行动', image: '/assets/life/football-action-new.webp', color: 'blue' },
  { id: 'hiking', title: '徒步', copy: '耐心、路线与长期主义', image: '/assets/life/hiking-new.webp', color: 'green' },
  { id: 'photo', title: '摄影', copy: '观察具体场景的方式', image: '/assets/life/photography-new.webp', color: 'orange' },
  { id: 'pet', title: '宠物', copy: '对具体生命保持敏感', image: '/assets/life/pet-new.webp', color: 'pink' },
  { id: 'ai', title: 'AI 产品应用', copy: '效率工具、原型构建、个人生产力', color: 'purple', visual: 'ai' },
]

export const lifeGallery = mediaLibrary.life.filter((item) => item.usedIn.startsWith('life-gallery-'))

export const strengths = [
  { number: '01', title: '进入真实场景', description: '用访谈、观察与数据共同理解用户，不把指标从场景中剥离。', keywords: ['田野', '访谈', '用户路径'] },
  { number: '02', title: '定义业务结构', description: '把模糊问题拆成角色、流程、指标、口径和责任边界。', keywords: ['流程', '指标', 'SOP'] },
  { number: '03', title: '判断增长质量', description: '同时关注数量、成本、资产、留存和渠道的长期价值。', keywords: ['CAC', 'AUM', 'PBP'] },
  { number: '04', title: '推动协同执行', description: '把供应商、渠道与内部团队放进同一套可追踪的工作框架。', keywords: ['采销', '结算', '协作'] },
  { number: '05', title: '完成数据复盘', description: '使用 Excel、SQL、R 等工具完成清洗、分析、看板与行动建议。', keywords: ['分析', '复盘', '看板'] },
  { number: '06', title: '快速产品化', description: '用 React、Flask、Streamlit 和 AI 工具把运营需求做成可用原型。', keywords: ['原型', '代码', '自动化'] },
]

export const contact = {
  eyebrow: '把一次性的任务，沉淀成下一次可以复用的方法',
  titlePrefix: '让真实问题变得',
  highlight: '可执行',
  titleSuffix: '。',
  description:
    '如果你正在寻找一个既能进入用户和渠道现场，又能用数据、流程与工具推动项目落地的人，欢迎和我聊聊产品运营、采销运营、用户运营、渠道增长或商业分析机会。',
  email: profile.email,
  phoneCN: profile.phoneCN,
  phoneHK: profile.phoneHK,
  locations: profile.locations,
}
