import type { Language } from '@/lib/i18n';

export type CaseItem = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  link?: string;
  achievements?: string[];
  scope?: string[];
  story?: string;
};

export type CaseCategory = {
  id: string;
  name: string;
};

export const categories: CaseCategory[] = [
  { id: 'industrial', name: '工业制造' },
  { id: 'education', name: '教育平台' },
  { id: 'culture', name: 'AI 文旅' },
  { id: 'cloud', name: '云引擎服务' },
  { id: 'marketing', name: '全域 AI 营销' },
  { id: 'hardware', name: 'AI 硬件' },
];

export const categoriesEn: CaseCategory[] = [
  { id: 'industrial', name: 'Industrial Manufacturing' },
  { id: 'education', name: 'Education Platform' },
  { id: 'culture', name: 'AI Cultural Tourism' },
  { id: 'cloud', name: 'Cloud Engine Services' },
  { id: 'marketing', name: 'Omnichannel AI Marketing' },
  { id: 'hardware', name: 'AI Hardware' },
];

export const casesData: CaseItem[] = [
  // AI 文旅（调整至此处）
  {
    slug: 'culture-coming-soon',
    title: '城市文旅宣传片制作',
    summary: '打造高效、低成本、高质量的文旅宣传内容，助力城市旅游品牌推广',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Virtual%20tourism%20concept%2C%20VR%20headset%20view%20of%20ancient%20landmarks%2C%20digital%20cultural%20heritage%2C%20future%20travel&image_size=landscape_4_3',
    category: 'AI 文旅',
    achievements: ['潜在体验优化', '内容生态拓展'],
    scope: ['智能导览', '内容生成'],
    story: '采用 AI 脚本创作、AI 生成素材（图片 / 音乐 / 视频）+ 人工剪辑调优模式，缩短宣传片制作周期，降低人力与物力投入，适配文旅行业 “快速传播、广泛覆盖” 的推广需求。'
  },
  // 云引擎服务（案例1/案例2方向）
  {
    slug: 'cloud-foundation',
    title: '扣子智能体代搭建服务',
    summary: '覆盖企业管理、教育、电商、法律服务等多领域，累计打造数十款落地智能体',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Enterprise%20cloud%20infrastructure%20server%20room%20with%20blue%20neon%20lights%2C%20data%20center%2C%20high%20tech%2C%20secure%20hosting%2C%20cinematic%20lighting&image_size=landscape_4_3',
    category: '云引擎服务',
    achievements: ['故障定位时间缩短', '服务稳定性提升'],
    scope: ['容器编排', '弹性扩缩容', '日志指标与告警', '灰度发布与回滚'],
    story: '基于扣子平台低码快搭能力，提供从需求分析、工作流搭建到部署集成的全流程服务，支持微信、抖音、飞书等多渠道发布，降低企业 AI 智能体开发门槛，无需专业技术即可快速落地。'
  },
  {
    slug: 'cloud-observability',
    title: 'Hiagent 基于昇腾裸金属服务器联合解决方案（牵头火山引擎、华为）',
    summary: '落地国内首套联合解决方案，服务工业制造、通讯、政府单位等多行业标杆项目。',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Futuristic%20cloud%20monitoring%20dashboard%20interface%20with%20graphs%20and%20alerts%2C%20dark%20mode%2C%20cybersecurity%20center%2C%20data%20visualization&image_size=landscape_4_3',
    category: '云引擎服务',
    achievements: ['高并发数据处理', '大规模模型训练'],
    scope: ['日志采集', '硬件 + AI ', '云平台'],
    story: '整合火山引擎云资源与华为昇腾硬件优势，打造 “硬件 + AI 算法 + 云平台” 协同架构，适配高并发数据处理、大规模模型训练等复杂场景，实现技术标准化与商业落地双重突破。'
  },
  // 全域 AI 营销
  {
    slug: 'ai-marketing-suite',
    title: '多品牌数字人直播服务',
    summary: '覆盖素材生成、智能分发与效果评估，提升转化降低成本。',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Digital%20marketing%20AI%20concept%2C%20glowing%20nodes%20connecting%20social%20media%20icons%2C%20analytics%20growth%20chart%2C%20purple%20and%20blue%20gradient&image_size=landscape_4_3',
    category: '全域 AI 营销',
    achievements: ['素材生产自动化', '渠道触达效率提升', '转化效果可量化'],
    scope: ['内容生成', '渠道分发', '效果分析与归因'],
    story: '提供 7×24 小时全天候直播服务，覆盖淘宝、京东、拼多多、美团等多平台，通过 AI 话术生成、实时弹幕响应、商品链接实时切换功能，解决传统直播 “成本高、IP 不稳定、闲时流量浪费” 痛点。'
  },
  {
    slug: 'short-video-generator',
    title: '营销短视频自动生成',
    summary: '生成抖音、淘宝、小红书等多平台爆款文案，适配不同平台风格（短平快、场景化），提升文案点击率与转化率。',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20generating%20short%20videos%20on%20a%20smartphone%20screen%2C%20video%20editing%20timeline%2C%20creative%20content%20creation%2C%20modern%20studio&image_size=landscape_4_3',
    category: '全域 AI 营销',
    achievements: ['生产效率提升', '多渠道触达覆盖'],
    scope: ['脚本生成', '模板配置', '渠道分发'],
    story: '基于全网热点数据与行业优质文案库，AI 自动分析爆款逻辑，快速产出营销内容，解决企业 “营销人员不足、内容产出慢” 问题，降低内容创作时间成本。'
  },
  // AI 硬件
  {
    slug: 'edge-ai-hardware',
    title: '边缘 AI 硬件定制',
    summary: '按需定制板卡与固件，适配视觉/语音等场景，低功耗快速落地。',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Close%20up%20of%20advanced%20microchip%20processor%20on%20circuit%20board%2C%20edge%20computing%2C%20hardware%20engineering%2C%20macro%20photography&image_size=landscape_4_3',
    category: 'AI 硬件',
    achievements: ['端侧低功耗运行', '方案交付周期缩短', '场景适配度提升'],
    scope: ['硬件选型', '固件开发', '算法适配', '端侧部署'],
    story: '围绕实际场景定制软硬件，形成工具智能化与低功耗优化的工程方法。'
  },
  {
    slug: 'e-ink-smart-notebook',
    title: '墨水屏智能笔记本',
    summary: '以电子墨水屏实现长续航与舒适阅读，配合 AI 笔记与知识管理。支持六色高清电子墨水屏，30 秒快速投屏，零功耗 / 免电池 / 免充电；兼容华为、小米、苹果等多品牌手机，支持无线充电',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=E-ink%20digital%20notebook%20tablet%20on%20a%20minimalist%20wooden%20desk%20with%20coffee%2C%20paper-like%20display%2C%20stylus%20pen%2C%20productivity&image_size=landscape_4_3',
    category: 'AI 硬件',
    achievements: ['阅读与书写体验优化', '续航显著提升'],
    scope: ['设备设计', '笔记同步', '知识管理'],
    story: '搭载 R-nergy 射频能量算法及自研芯片，通过专属 APP 实现 AI 绘图、DIY 定制、NFC 传输功能，解决传统手机壳 “换壳繁琐、功能单一” 问题，满足用户个性化表达需求。'
  },
  {
    slug: 'ai-mouse-assistant',
    title: 'AI 鼠标助手',
    summary: '在鼠标固件层集成快捷指令与语音交互，提升办公与创作效率。',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Sleek%20modern%20computer%20mouse%20with%20AI%20voice%20assistant%20button%2C%20ergonomic%20design%2C%20office%20workspace%2C%20technology%20product&image_size=landscape_4_3',
    category: 'AI 硬件',
    achievements: ['操作效率提升', '多应用快捷场景覆盖'],
    scope: ['固件指令映射', '语音集成', '多应用适配'],
    story: '集成讯飞星火大模型，采用 “无线取电 + 射频通信” 技术，零功耗设计无需充电，适配办公汇报、教学演示、跨语言沟通等场景，打破传统鼠标 “仅作交互载体” 的局限。'
  },
  {
    slug: 'ai-painting-machine',
    title: 'AI 绘画一体机',
    summary: '软硬一体的内容生成设备，支持风格化绘画与批量素材生产。',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Robotic%20arm%20creating%20digital%20art%20on%20a%20screen%2C%20generative%20AI%20art%20tool%2C%20colorful%20abstract%20painting%2C%20creative%20studio&image_size=landscape_4_3',
    category: 'AI 硬件',
    achievements: ['批量素材生成', '多风格快速切换'],
    scope: ['模型微调', '风格模板', '批量生产流程'],
    story: '针对内容生产场景，沉淀可复用风格模板与批量化流程，提升创作效率。集成 43 寸高清触摸屏、INTEL i5 主板、Hiti525 打印机，支持文生图、图生图（真人转二次元、线稿生成等），适配文旅打卡、商业引流场景，降低艺术写真时间与金钱成本。'
  },
  // 教育平台
  {
    slug: 'edtech-platform',
    title: '科技教育一体化平台',
    summary: '聚焦教研、教学、评测与协作，支持多端统一体验。',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Online%20education%20platform%20interface%20showing%20video%20courses%20and%20progress%20bars%2C%20students%20collaborating%2C%20e-learning%20concept&image_size=landscape_4_3',
    category: '教育平台',
    achievements: ['教学流程标准化', '学习参与度提升'],
    scope: ['课程管理', '题库评测', '班级协作', '家校沟通'],
    story: '围绕教学与管理场景，统一教研与课堂数据，实现精细化运营覆盖教育行业 “教学、实训、运营、安全” 全场景，通过专项智能体协同，实现教育机构从 “人工驱动” 到 “AI 辅助” 的转型，适配 K12 学校、职业院校、培训机构等不同主体需求。'
  },
  {
    slug: 'smart-assessment',
    title: '海亮教育集团 AI 智能体搭建',
    summary: '完成多个标杆智能体；适配教育机构招生、管理、教学全场景需求。',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analytics%20dashboard%20for%20education%2C%20student%20performance%20metrics%2C%20radar%20charts%2C%20smart%20assessment%20system&image_size=landscape_4_3',
    category: '教育平台',
    achievements: ['完成多个标杆智能体', '适配多个教育场景'],
    scope: ['智能体搭建', '场景适配', '需求分析'],
    story: '精准识别海亮教育集团核心业务痛点，通过智能体助力学校规划（如校区扩建尽调）、教学管理（如校长需求匹配）、学生服务等工作，提升教育管理精细化水平，减少人工数据分析成本。'
  },
  // 工业制造
  {
    slug: 'industrial-agent',
    title: '东风集团定制化智能体集群',
    summary: '连接设备与业务，支持设备监测、工单流转与质量追溯。完成研发、销售、培训等工业方向30 余个定制化智能体；部门效率整体提升',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Smart%20factory%20interior%20with%20automated%20machinery%2C%20IoT%20sensors%20overlay%2C%20industrial%20internet%20of%20things%2C%20manufacturing&image_size=landscape_4_3',
    category: '工业制造',
    achievements: ['停机时间降低', '产线节拍优化'],
    scope: ['设备接入', '工单编排', '质量追溯'],
    story: '在复杂生产环境中实现数据采集与决策闭环，支撑产线持续优化。精准匹配东风集团旗下十余个特色业务场景，打通 “研发文档知识提取 - 财务数据分析 - 销售话术生成 - 员工培训辅助” 全流程，通过智能体协同替代人工重复操作，实现业务流程重构与效率跃迁'
  },
  {
    slug: 'quality-dashboard',
    title: '中国建筑 AI 幕墙智能体系统',
    summary: '面向产线的质量监控与异常分析，形成闭环管理。短时间内完成全流程光伏幕墙设计方案；替代低效人工手动画图模式',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Industrial%20quality%20control%20monitoring%20screen%2C%20defect%20detection%20AI%2C%20production%20line%20background%2C%20high%20tech&image_size=landscape_4_3',
    category: '工业制造',
    achievements: ['缺陷定位效率提升', '返工率降低'],
    scope: ['AI 设计师', '光伏幕墙设计', '设计方案生成'],
    story: '基于对话式交互逻辑，AI 设计师可根据需求自动生成设计方案，大幅压缩建筑设计周期（传统人工设计需数小时至数天），降低设计团队重复劳动成本，适配工程建筑行业 “高效落地” 需求。'
  },
];

export const CASE_CATEGORIES = categories.map(c => c.name);
export const CASE_CATEGORIES_EN = categoriesEn.map(c => c.name);

export const casesDataEn: CaseItem[] = [
  {
    slug: 'culture-coming-soon',
    title: 'City Tourism Promotion Video Production',
    summary: 'Efficient, cost-effective, high-quality tourism promotion content that helps cities strengthen destination branding.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Virtual%20tourism%20concept%2C%20VR%20headset%20view%20of%20ancient%20landmarks%2C%20digital%20cultural%20heritage%2C%20future%20travel&image_size=landscape_4_3',
    category: 'AI Cultural Tourism',
    achievements: ['Experience optimization potential', 'Content ecosystem expansion'],
    scope: ['Smart guide services', 'Content generation'],
    story: 'Using AI scriptwriting, AI-generated visuals, music, and video materials plus human editing, we shorten production cycles and reduce labor and resource investment for tourism campaigns that need fast distribution and broad reach.',
  },
  {
    slug: 'cloud-foundation',
    title: 'Coze Agent Buildout Service',
    summary: 'Built dozens of deployed agents across enterprise management, education, e-commerce, legal services, and other fields.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Enterprise%20cloud%20infrastructure%20server%20room%20with%20blue%20neon%20lights%2C%20data%20center%2C%20high%20tech%2C%20secure%20hosting%2C%20cinematic%20lighting&image_size=landscape_4_3',
    category: 'Cloud Engine Services',
    achievements: ['Shorter fault localization time', 'Higher service stability'],
    scope: ['Container orchestration', 'Elastic scaling', 'Logs, metrics, and alerts', 'Canary release and rollback'],
    story: 'Based on Coze low-code build capabilities, we provide end-to-end services from requirement analysis and workflow construction to deployment and integration. Agents can be published across channels such as WeChat, Douyin, and Lark, lowering the threshold for enterprise AI agent delivery.',
  },
  {
    slug: 'cloud-observability',
    title: 'Hiagent Joint Solution on Ascend Bare-Metal Servers',
    summary: 'Led a domestic joint solution with Volcano Engine and Huawei, serving benchmark projects in industrial, communications, and government scenarios.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Futuristic%20cloud%20monitoring%20dashboard%20interface%20with%20graphs%20and%20alerts%2C%20dark%20mode%2C%20cybersecurity%20center%2C%20data%20visualization&image_size=landscape_4_3',
    category: 'Cloud Engine Services',
    achievements: ['High-concurrency data processing', 'Large-scale model training support'],
    scope: ['Log collection', 'Hardware plus AI', 'Cloud platform'],
    story: 'The solution combines Volcano Engine cloud resources with Huawei Ascend hardware to create a coordinated architecture across hardware, AI algorithms, and cloud platform capabilities, supporting complex workloads such as high-concurrency data processing and large-scale model training.',
  },
  {
    slug: 'ai-marketing-suite',
    title: 'Multi-Brand Digital Human Live Streaming',
    summary: 'Covers asset generation, intelligent distribution, and performance evaluation to raise conversion while reducing cost.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Digital%20marketing%20AI%20concept%2C%20glowing%20nodes%20connecting%20social%20media%20icons%2C%20analytics%20growth%20chart%2C%20purple%20and%20blue%20gradient&image_size=landscape_4_3',
    category: 'Omnichannel AI Marketing',
    achievements: ['Automated asset production', 'Higher channel reach efficiency', 'Measurable conversion results'],
    scope: ['Content generation', 'Channel distribution', 'Performance analysis and attribution'],
    story: 'We provide always-on live streaming services across platforms such as Taobao, JD.com, Pinduoduo, and Meituan. AI scripts, real-time comment responses, and dynamic product-link switching address the high cost, unstable IP, and off-peak traffic waste of traditional live commerce.',
  },
  {
    slug: 'short-video-generator',
    title: 'Automated Marketing Short-Video Generation',
    summary: 'Generates high-performing copy for Douyin, Taobao, Xiaohongshu, and other platforms, adapting to different platform styles to improve clicks and conversion.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20generating%20short%20videos%20on%20a%20smartphone%20screen%2C%20video%20editing%20timeline%2C%20creative%20content%20creation%2C%20modern%20studio&image_size=landscape_4_3',
    category: 'Omnichannel AI Marketing',
    achievements: ['Higher production efficiency', 'Multi-channel reach coverage'],
    scope: ['Script generation', 'Template configuration', 'Channel distribution'],
    story: 'Using web-wide trend data and high-quality industry copy libraries, AI analyzes viral content patterns and quickly produces marketing materials, helping teams overcome limited staffing and slow content production while lowering creation time costs.',
  },
  {
    slug: 'edge-ai-hardware',
    title: 'Custom Edge AI Hardware',
    summary: 'Custom boards and firmware for vision, voice, and other scenarios, enabling low-power and rapid deployment.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Close%20up%20of%20advanced%20microchip%20processor%20on%20circuit%20board%2C%20edge%20computing%2C%20hardware%20engineering%2C%20macro%20photography&image_size=landscape_4_3',
    category: 'AI Hardware',
    achievements: ['Low-power edge operation', 'Shorter delivery cycle', 'Better scenario fit'],
    scope: ['Hardware selection', 'Firmware development', 'Algorithm adaptation', 'Edge deployment'],
    story: 'We customize software and hardware around real operating scenarios, forming an engineering method focused on intelligent tooling and low-power optimization.',
  },
  {
    slug: 'e-ink-smart-notebook',
    title: 'E-Ink Smart Notebook',
    summary: 'Uses electronic ink for long battery life and comfortable reading, paired with AI notes and knowledge management. It supports a six-color HD e-ink display, 30-second casting, zero-power operation, no battery, no charging, and compatibility with major phone brands.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=E-ink%20digital%20notebook%20tablet%20on%20a%20minimalist%20wooden%20desk%20with%20coffee%2C%20paper-like%20display%2C%20stylus%20pen%2C%20productivity&image_size=landscape_4_3',
    category: 'AI Hardware',
    achievements: ['Optimized reading and writing experience', 'Significantly longer battery life'],
    scope: ['Device design', 'Note synchronization', 'Knowledge management'],
    story: 'Powered by an R-nergy RF energy algorithm and self-developed chip, the dedicated app supports AI drawing, DIY customization, and NFC transfer, addressing the limited functionality and frequent replacement needs of traditional phone cases while supporting personal expression.',
  },
  {
    slug: 'ai-mouse-assistant',
    title: 'AI Mouse Assistant',
    summary: 'Integrates shortcuts and voice interaction at the mouse firmware layer to improve office and creative productivity.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Sleek%20modern%20computer%20mouse%20with%20AI%20voice%20assistant%20button%2C%20ergonomic%20design%2C%20office%20workspace%2C%20technology%20product&image_size=landscape_4_3',
    category: 'AI Hardware',
    achievements: ['Higher operation efficiency', 'Shortcut coverage across multiple applications'],
    scope: ['Firmware command mapping', 'Voice integration', 'Multi-app adaptation'],
    story: 'Integrated with the iFlytek Spark large model and wireless power plus RF communication technology, the zero-power design supports office reporting, teaching presentations, and cross-language communication, extending the mouse beyond a basic interaction device.',
  },
  {
    slug: 'ai-painting-machine',
    title: 'AI Painting All-in-One Machine',
    summary: 'An integrated content-generation device that supports stylized painting and batch asset production.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Robotic%20arm%20creating%20digital%20art%20on%20a%20screen%2C%20generative%20AI%20art%20tool%2C%20colorful%20abstract%20painting%2C%20creative%20studio&image_size=landscape_4_3',
    category: 'AI Hardware',
    achievements: ['Batch asset generation', 'Fast switching across styles'],
    scope: ['Model fine-tuning', 'Style templates', 'Batch production workflow'],
    story: 'For content production scenarios, we package reusable style templates and batch workflows to improve creative efficiency. The device integrates a 43-inch HD touch screen, Intel i5 motherboard, and Hiti525 printer, supporting text-to-image and image-to-image workflows for tourism check-ins and commercial traffic acquisition.',
  },
  {
    slug: 'edtech-platform',
    title: 'Integrated EdTech Platform',
    summary: 'Focuses on teaching research, instruction, assessment, and collaboration with a unified multi-device experience.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Online%20education%20platform%20interface%20showing%20video%20courses%20and%20progress%20bars%2C%20students%20collaborating%2C%20e-learning%20concept&image_size=landscape_4_3',
    category: 'Education Platform',
    achievements: ['Standardized teaching processes', 'Higher learning participation'],
    scope: ['Course management', 'Question bank and assessment', 'Class collaboration', 'Family-school communication'],
    story: 'The platform unifies teaching and management data for refined operations across teaching, training, operations, and safety. Specialized agents support the shift from manual processes to AI-assisted workflows for K12 schools, vocational colleges, and training institutions.',
  },
  {
    slug: 'smart-assessment',
    title: 'Hailiang Education Group AI Agent Buildout',
    summary: 'Delivered multiple benchmark agents for enrollment, management, teaching, and other education scenarios.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analytics%20dashboard%20for%20education%2C%20student%20performance%20metrics%2C%20radar%20charts%2C%20smart%20assessment%20system&image_size=landscape_4_3',
    category: 'Education Platform',
    achievements: ['Multiple benchmark agents delivered', 'Adapted to diverse education scenarios'],
    scope: ['Agent buildout', 'Scenario adaptation', 'Requirement analysis'],
    story: 'We identified Hailiang Education Group core business pain points and used agents to support school planning, teaching management, student services, and other workflows, improving management precision and reducing manual data-analysis cost.',
  },
  {
    slug: 'industrial-agent',
    title: 'Dongfeng Group Custom Agent Cluster',
    summary: 'Connected equipment and business workflows for monitoring, work orders, and quality traceability. Delivered more than 30 industrial agents across R&D, sales, training, and other scenarios.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Smart%20factory%20interior%20with%20automated%20machinery%2C%20IoT%20sensors%20overlay%2C%20industrial%20internet%20of%20things%2C%20manufacturing&image_size=landscape_4_3',
    category: 'Industrial Manufacturing',
    achievements: ['Reduced downtime', 'Optimized production takt'],
    scope: ['Equipment integration', 'Work order orchestration', 'Quality traceability'],
    story: 'In a complex production environment, the agent cluster enabled data collection and decision loops for continuous production optimization. It matched more than ten distinctive business scenarios across Dongfeng Group, connecting document knowledge extraction, financial analysis, sales-script generation, and employee-training support.',
  },
  {
    slug: 'quality-dashboard',
    title: 'China State Construction AI Curtain-Wall Agent System',
    summary: 'A quality monitoring and anomaly-analysis system for production scenarios, enabling closed-loop management and rapid photovoltaic curtain-wall design-scheme generation.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Industrial%20quality%20control%20monitoring%20screen%2C%20defect%20detection%20AI%2C%20production%20line%20background%2C%20high%20tech&image_size=landscape_4_3',
    category: 'Industrial Manufacturing',
    achievements: ['Higher defect localization efficiency', 'Lower rework rate'],
    scope: ['AI designer', 'Photovoltaic curtain-wall design', 'Design-scheme generation'],
    story: 'Based on conversational interaction, the AI designer can generate design schemes from requirements, greatly shortening building design cycles and reducing repetitive drafting work for engineering teams that need efficient implementation.',
  },
];

export const getCaseCategories = (language: Language = 'zh') => (
  language === 'en' ? CASE_CATEGORIES_EN : CASE_CATEGORIES
);

export const getCasesData = (language: Language = 'zh') => (
  language === 'en' ? casesDataEn : casesData
);

export const getCaseBySlug = (slug?: string, language: Language = 'zh') => (
  getCasesData(language).find(c => c.slug === slug)
);

export const getCategoryImage = (name: string) => {
  switch (name) {
    case '工业制造': return '/images/solution-industrial.jpg';
    case 'Industrial Manufacturing': return '/images/solution-industrial.jpg';
    case '教育平台': return '/images/solution-education.jpg';
    case 'Education Platform': return '/images/solution-education.jpg';
    case '云引擎服务': return '/images/solution-cloud.jpg';
    case 'Cloud Engine Services': return '/images/solution-cloud.jpg';
    case '全域 AI 营销': return '/images/solution-marketing.jpg';
    case 'Omnichannel AI Marketing': return '/images/solution-marketing.jpg';
    case 'AI 硬件': return '/images/solution-hardware.jpg';
    case 'AI Hardware': return '/images/solution-hardware.jpg';
    case 'AI 文旅': return '/images/solution-culture.jpg';
    case 'AI Cultural Tourism': return '/images/solution-culture.jpg';
    default: return '/images/solution-1.jpg';
  }
};
