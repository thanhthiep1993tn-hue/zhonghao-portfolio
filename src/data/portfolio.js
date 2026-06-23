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
    '我从社会学、田野调查和用户研究出发，进入产品运营、采销运营和渠道增长现场。相比只描述经历，我更希望展示：一个模糊的用户、渠道或供应商问题，如何被拆成指标、流程、看板、代码和下一步动作。',
}

export const heroStats = [
  { value: 100, suffix: '+ 小时', label: '田野调查与市场观察', color: 'blue' },
  { value: 10, suffix: '万字', label: '用户访谈资料分析', color: 'purple' },
  { value: 600, suffix: '+', label: '潜在合作渠道触达', color: 'green' },
  { value: 50, suffix: '万+', label: '内容累计播放', color: 'orange' },
  { value: 6, suffix: ' 个', label: '业务与研究项目沉淀', color: 'pink' },
]

export const mediaLibrary = {
  profile: {
    heroPhoto: '/assets/profile/hero-portrait.webp',
  },
  fieldwork: [
    { src: '/assets/fieldwork/fieldwork-01.jpg', alt: '入户访谈现场', caption: '进入家庭场景，记录回答之外的空间与互动。', usedIn: 'academic-fieldwork-01' },
    { src: '/assets/fieldwork/fieldwork-02.jpg', alt: '乡村道路上的场景观察', caption: '把路线、空间和行动放回具体环境中理解。', usedIn: 'academic-fieldwork-02' },
    { src: '/assets/fieldwork/fieldwork-03.webp', alt: '田野调查团队合影', caption: '田野工作结束后，与社区参与者和团队留下记录。', usedIn: 'archive-fieldwork' },
    { src: '/assets/fieldwork/urban-observation.webp', alt: '广州地铁城市观察', caption: '城市基础设施也是理解流动与秩序的入口。', usedIn: 'academic-fieldwork-03' },
  ],
  academic: [
    { src: '/assets/academic/bjut-graduation.webp', alt: '北京工业大学学位授予仪式', caption: '社会学本科训练的阶段性完成。', usedIn: 'education-bjut' },
  ],
  life: [
    { src: '/assets/life/football-action-new.webp', alt: '夜间足球射门', caption: '足球：协作、空间判断与临场行动。', usedIn: 'personal-football' },
    { src: '/assets/life/hiking-new.webp', alt: '山顶日出', caption: '徒步：耐心、路线与长期主义。', usedIn: 'personal-hiking' },
    { src: '/assets/life/photography-new.webp', alt: '街头摄影作品', caption: '摄影：练习看见场景中的秩序与细节。', usedIn: 'personal-photography' },
    { src: '/assets/life/pet-new.webp', alt: '与宠物猫的合影', caption: '宠物：对具体生命保持敏感。', usedIn: 'personal-pet' },
    { src: '/assets/life/football-portrait-new.webp', alt: '足球场边的钟皓', caption: '场上 27 号：观察、判断、行动。', usedIn: 'profile-portrait' },
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
    type: '田野档案',
    title: '100+ 小时田野调查与市场观察',
    description: '进入社区和家庭现场，通过访谈、观察与记录理解行为背后的关系、空间与制度。',
    assets: ['/assets/fieldwork/fieldwork-03.webp'],
    tags: ['社会学', '入户访谈', '用户观察'],
    tone: 'blue',
    size: 'large',
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
  title: 'R 语言与数据可视化：把模型结果讲清楚。',
  description: '我使用 R 进行数据清洗、统计建模和可视化表达。R 对我来说不是简历里的工具名，而是一种把社会现象转化为可解释图形的工作方式。',
  tools: ['R', 'ggplot2', 'dplyr', 'gtsummary', 'broom', 'lme4', 'poLCA', 'gganimate', '回归分析', '人口方法', '政策评估'],
  codeExample: `library(tidyverse)
library(ggplot2)

df %>%
  group_by(group, year) %>%
  summarise(rate = mean(value, na.rm = TRUE)) %>%
  ggplot(aes(year, rate, color = group)) +
  geom_line(linewidth = 1.2) +
  geom_point(size = 2) +
  theme_minimal()`,
}

export const academicWorks = [
  {
    id: 'fieldwork-study',
    number: '01',
    title: '100+ 小时田野调查与市场观察',
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

export const interests = [
  { id: 'football', title: '足球', copy: '协作、空间判断与临场行动', image: '/assets/life/football-action-new.webp', color: 'blue' },
  { id: 'hiking', title: '徒步', copy: '耐心、路线与长期主义', image: '/assets/life/hiking-new.webp', color: 'green' },
  { id: 'photo', title: '摄影', copy: '观察具体场景的方式', image: '/assets/life/photography-new.webp', color: 'orange' },
  { id: 'pet', title: '宠物', copy: '对具体生命保持敏感', image: '/assets/life/pet-new.webp', color: 'pink' },
  { id: 'ai', title: 'AI 产品应用', copy: '效率工具、原型构建、个人生产力', color: 'purple', visual: 'ai' },
]

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
