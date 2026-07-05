import type { Language } from '@/lib/i18n';

export type SolutionColor = 'blue' | 'green' | 'pink' | 'cyan' | 'purple' | 'orange' | 'fuchsia';

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  icon: string;
  color: SolutionColor;
  image: string;
  metrics: string[];
  overview: string;
  scenarios: string[];
  outcomes: string[];
  /** Optional external link, e.g. AI Music studio URL. When present, the
   *  solution detail page renders a primary "Try it now" button pointing to it. */
  link?: string;
}

export const solutionColorClasses: Record<SolutionColor, {
  text: string;
  bg: string;
  bgSoft: string;
  border: string;
  gradient: string;
  iconBg: string;
  shadow: string;
  // Static classes used by Modules cards (previously dynamic `from-${color}-900` etc.
  // which Tailwind JIT could not detect and silently dropped).
  gradientDeep: string;
  iconHoverText: string;
  descHoverText: string;
  overviewText: string;
}> = {
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500',
    bgSoft: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    gradient: 'from-blue-500 via-cyan-400 to-blue-700',
    iconBg: 'bg-blue-500/20',
    shadow: 'shadow-blue-500/10',
    gradientDeep: 'from-blue-900 via-blue-800 to-blue-600',
    iconHoverText: 'group-hover:text-blue-600',
    descHoverText: 'group-hover:text-blue-100',
    overviewText: 'text-blue-50/80',
  },
  green: {
    text: 'text-green-400',
    bg: 'bg-green-500',
    bgSoft: 'bg-green-500/10',
    border: 'border-green-500/30',
    gradient: 'from-green-500 via-emerald-400 to-teal-700',
    iconBg: 'bg-green-500/20',
    shadow: 'shadow-green-500/10',
    gradientDeep: 'from-green-900 via-green-800 to-green-600',
    iconHoverText: 'group-hover:text-green-600',
    descHoverText: 'group-hover:text-green-100',
    overviewText: 'text-green-50/80',
  },
  pink: {
    text: 'text-pink-400',
    bg: 'bg-pink-500',
    bgSoft: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    gradient: 'from-pink-500 via-rose-400 to-purple-700',
    iconBg: 'bg-pink-500/20',
    shadow: 'shadow-pink-500/10',
    gradientDeep: 'from-pink-900 via-pink-800 to-pink-600',
    iconHoverText: 'group-hover:text-pink-600',
    descHoverText: 'group-hover:text-pink-100',
    overviewText: 'text-pink-50/80',
  },
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500',
    bgSoft: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    gradient: 'from-cyan-500 via-sky-400 to-blue-700',
    iconBg: 'bg-cyan-500/20',
    shadow: 'shadow-cyan-500/10',
    gradientDeep: 'from-cyan-900 via-cyan-800 to-cyan-600',
    iconHoverText: 'group-hover:text-cyan-600',
    descHoverText: 'group-hover:text-cyan-100',
    overviewText: 'text-cyan-50/80',
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-500',
    bgSoft: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    gradient: 'from-purple-500 via-fuchsia-400 to-indigo-700',
    iconBg: 'bg-purple-500/20',
    shadow: 'shadow-purple-500/10',
    gradientDeep: 'from-purple-900 via-purple-800 to-purple-600',
    iconHoverText: 'group-hover:text-purple-600',
    descHoverText: 'group-hover:text-purple-100',
    overviewText: 'text-purple-50/80',
  },
  orange: {
    text: 'text-orange-400',
    bg: 'bg-orange-500',
    bgSoft: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    gradient: 'from-orange-500 via-amber-400 to-red-700',
    iconBg: 'bg-orange-500/20',
    shadow: 'shadow-orange-500/10',
    gradientDeep: 'from-orange-900 via-orange-800 to-orange-600',
    iconHoverText: 'group-hover:text-orange-600',
    descHoverText: 'group-hover:text-orange-100',
    overviewText: 'text-orange-50/80',
  },
  fuchsia: {
    text: 'text-fuchsia-400',
    bg: 'bg-fuchsia-500',
    bgSoft: 'bg-fuchsia-500/10',
    border: 'border-fuchsia-500/30',
    gradient: 'from-fuchsia-500 via-pink-400 to-purple-700',
    iconBg: 'bg-fuchsia-500/20',
    shadow: 'shadow-fuchsia-500/10',
    gradientDeep: 'from-fuchsia-900 via-fuchsia-800 to-fuchsia-600',
    iconHoverText: 'group-hover:text-fuchsia-600',
    descHoverText: 'group-hover:text-fuchsia-100',
    overviewText: 'text-fuchsia-50/80',
  },
};

export const solutionsData: SolutionItem[] = [
  {
    id: 'industrial',
    title: '工业制造智能体',
    subtitle: '工业制造',
    desc: '面向工业的智能助手，为工业生产提供智能化解决方案。',
    features: ['设备监测', '工单审核', '质量追溯', '能耗分析'],
    icon: 'fa-industry',
    color: 'blue',
    image: '/images/solution-industrial.jpg',
    metrics: ['提升产能', '提升人效', '优化成本'],
    overview: '围绕产线现场、设备台账、工单流程与质量追溯建立智能协作入口，让生产、运维、质量和管理团队在同一套数据视图中完成判断与执行。',
    scenarios: ['产线设备状态监测与异常预警', '维修工单流转、审核与闭环复盘', '批次质量追溯与问题定位', '能耗、稼动率与产能指标分析'],
    outcomes: ['减少人工排查时间', '提升工单闭环效率', '降低停机与返工风险', '形成可持续优化的数据资产'],
  },
  {
    id: 'education',
    title: '科技教育平台',
    subtitle: '教育科技',
    desc: '一体化教研、教学、评测平台。',
    features: ['课程管理', '题库与评测', '班级协作', '教师培训'],
    icon: 'fa-graduation-cap',
    color: 'green',
    image: '/images/solution-education.jpg',
    metrics: ['提升参与度', '提高教学质量', '丰富教学成果'],
    overview: '把课程资源、教学活动、题库评测和教师成长沉淀到统一平台，支持学校、机构和教师团队更高效地组织数字化教学。',
    scenarios: ['课程内容配置与学习路径管理', '题库组卷、测评与学习反馈', '班级协作、作业流转与家校沟通', '教师培训、教研沉淀与成果展示'],
    outcomes: ['降低重复备课成本', '提升课堂互动与学习参与度', '让评测结果回流教学改进', '沉淀可复用的课程与教研资产'],
  },
  {
    id: 'culture',
    title: 'AI文旅文化',
    subtitle: '文旅文化',
    desc: '面向景区与博物馆等文娱方向的数字化服务。',
    features: ['AI数字人', 'AI文旅视频', 'AI内容讲解', 'AI活动运营'],
    icon: 'fa-landmark',
    color: 'pink',
    image: '/images/solution-culture.jpg',
    metrics: ['提升到馆转化', '丰富体验', '数据化运营'],
    overview: '面向文旅、展馆、景区和城市文化项目，将讲解、导览、活动与传播内容数字化，帮助文化资产获得更持续的触达和运营能力。',
    scenarios: ['AI数字人导览与讲解服务', '文旅宣传视频和互动内容生成', '展陈内容讲解与多语言适配', '活动运营、预约转化与用户数据分析'],
    outcomes: ['提升游客触达和到馆转化', '丰富线下体验层次', '降低内容更新和运营成本', '形成可分析的游客行为数据'],
  },
  {
    id: 'cloud',
    title: '云引擎服务',
    subtitle: '云引擎服务',
    desc: '牵头火山引擎和华为提出并落地国内首套Hiagent基于昇腾裸金属服务器联合解决方案。',
    features: ['容器编排', '弹性扩缩容', '日志告警', '灰度发布'],
    icon: 'fa-cloud',
    color: 'cyan',
    image: '/images/solution-cloud.jpg',
    metrics: ['可靠上线', '弹性扩展', '观察与告警'],
    overview: '为 AI 应用和业务系统提供稳定的云端运行底座，覆盖部署、监控、扩容、发布和回滚，让业务从试点更顺畅地走向规模化运行。',
    scenarios: ['AI 应用容器化部署与编排', '高峰期弹性扩缩容与资源管理', '日志、链路、告警和运行状态监控', '灰度发布、版本回滚与运维自动化'],
    outcomes: ['缩短上线周期', '增强系统稳定性和可观察性', '支持业务弹性增长', '降低运维响应成本'],
  },
  {
    id: 'marketing',
    title: '全域 AI 营销',
    subtitle: '全域 AI 营销',
    desc: '数据驱动的内容与投放协同。',
    features: ['素材生成', '智能分发', '效果评估', '数据整合'],
    icon: 'fa-bullseye',
    color: 'purple',
    image: '/images/solution-marketing.jpg',
    metrics: ['提升转化', '降低成本', '统一数据'],
    overview: '把用户数据、渠道数据、内容生产和效果评估连接起来，帮助品牌在多渠道场景中更快生成内容、更准触达用户、更清晰复盘结果。',
    scenarios: ['营销素材生成与多版本测试', '渠道策略配置和智能分发', '用户画像、线索数据和转化路径整合', '投放效果评估与复盘看板'],
    outcomes: ['提升内容生产效率', '降低获客与投放试错成本', '统一跨渠道数据视图', '让营销决策更贴近真实转化'],
  },
  {
    id: 'hardware',
    title: 'AI 硬件定制',
    subtitle: 'AI 硬件定制',
    desc: '按需定制边缘计算硬件与固件。',
    features: ['AI鼠标', 'AI陪伴', 'AI学习机', 'AI开发套件'],
    icon: 'fa-microchip',
    color: 'orange',
    image: '/images/solution-hardware.jpg',
    metrics: ['快速落地', '自定义模具', '场景定制'],
    overview: '针对端侧智能、交互设备和垂直场景硬件，提供从形态规划、板卡选型、算法适配到固件联调的定制服务。',
    scenarios: ['AI 鼠标、学习机、陪伴设备等产品定制', '边缘计算板卡和传感器方案选型', '语音、视觉和交互算法端侧适配', '开发套件、样机验证和小批量落地'],
    outcomes: ['缩短硬件验证周期', '降低端侧 AI 落地门槛', '支持差异化产品形态', '提升软硬件协同稳定性'],
  },
  {
    id: 'music',
    title: 'AI 情绪音乐',
    subtitle: 'AI 音乐',
    desc: '把你的故事谱成歌。AI 聆听你的情绪，用最贴合心境的旋律为你谱曲演唱。',
    features: ['AI 谱曲', '五语演唱', '声音选择', '记忆留存'],
    icon: 'fa-music',
    color: 'fuchsia',
    image: '/images/ai-generated/ai-music.jpg',
    metrics: ['情绪驱动', '五语演唱', '一键留存'],
    overview: '面向个人情感表达与内容创作场景，基于 AI 谱曲与多语言演唱能力，将文字故事转化为可聆听的歌曲，适配情感记录、内容营销、文旅纪念等多种用途。',
    scenarios: ['把心情日记或故事变成一首歌', '中英日韩粤五语演唱自由切换', '声音风格与人声质感选择', '作品云端留存与分享'],
    outcomes: ['降低音乐创作门槛', '让情绪获得可聆听的表达', '丰富内容创作的声音形态', '形成可分享的情感记忆资产'],
    link: 'https://xinshibandao.coze.site/studio',
  },
];

export const solutionsDataEn: SolutionItem[] = [
  {
    id: 'industrial',
    title: 'Industrial AI Agent',
    subtitle: 'Industrial Manufacturing',
    desc: 'AI assistants for production sites, equipment operations, and industrial workflows.',
    features: ['Equipment Monitoring', 'Work Order Review', 'Quality Traceability', 'Energy Analytics'],
    icon: 'fa-industry',
    color: 'blue',
    image: '/images/solution-industrial.jpg',
    metrics: ['Increase Capacity', 'Improve Productivity', 'Optimize Cost'],
    overview: 'We build an intelligent collaboration layer around production lines, equipment ledgers, work orders, and quality traceability so operations, maintenance, quality, and management teams can make decisions from one shared data view.',
    scenarios: ['Production-line monitoring and anomaly alerts', 'Maintenance work order routing, review, and closed-loop retrospectives', 'Batch quality traceability and issue localization', 'Energy, utilization, and capacity analytics'],
    outcomes: ['Reduce manual troubleshooting time', 'Improve work order closure efficiency', 'Lower downtime and rework risk', 'Turn operational data into a reusable improvement asset'],
  },
  {
    id: 'education',
    title: 'EdTech Platform',
    subtitle: 'Education Technology',
    desc: 'An integrated platform for curriculum, teaching, assessment, and collaboration.',
    features: ['Course Management', 'Question Bank & Assessment', 'Class Collaboration', 'Teacher Enablement'],
    icon: 'fa-graduation-cap',
    color: 'green',
    image: '/images/solution-education.jpg',
    metrics: ['Increase Engagement', 'Improve Teaching Quality', 'Enrich Learning Outcomes'],
    overview: 'We unify course resources, teaching activities, assessments, and teacher development in one platform, helping schools, institutions, and teaching teams organize digital learning more efficiently.',
    scenarios: ['Course content configuration and learning-path management', 'Question bank assembly, assessment, and learning feedback', 'Class collaboration, assignment workflows, and family-school communication', 'Teacher training, teaching research, and outcome showcase'],
    outcomes: ['Reduce repetitive lesson-preparation work', 'Increase classroom interaction and learner participation', 'Feed assessment results back into teaching improvements', 'Build reusable curriculum and teaching assets'],
  },
  {
    id: 'culture',
    title: 'AI Cultural Tourism',
    subtitle: 'Cultural Tourism',
    desc: 'Digital services for scenic areas, museums, exhibitions, and cultural venues.',
    features: ['AI Digital Guides', 'AI Tourism Videos', 'AI Content Narration', 'AI Event Operations'],
    icon: 'fa-landmark',
    color: 'pink',
    image: '/images/solution-culture.jpg',
    metrics: ['Increase Visitor Conversion', 'Enrich Experience', 'Data-Driven Operations'],
    overview: 'For cultural tourism, exhibition halls, scenic areas, and city culture projects, we digitize narration, guide services, events, and communication content so cultural assets can reach visitors continuously and operate with better data.',
    scenarios: ['AI digital-human guides and narration services', 'Tourism promotion videos and interactive content generation', 'Exhibition narration and multilingual adaptation', 'Event operations, booking conversion, and visitor behavior analytics'],
    outcomes: ['Improve visitor reach and venue conversion', 'Create richer offline experiences', 'Lower content update and operation costs', 'Generate analyzable visitor behavior data'],
  },
  {
    id: 'cloud',
    title: 'Cloud Engine Services',
    subtitle: 'Cloud Engine',
    desc: 'A stable cloud foundation for AI applications, business systems, and elastic scaling.',
    features: ['Container Orchestration', 'Elastic Scaling', 'Logs & Alerts', 'Canary Release'],
    icon: 'fa-cloud',
    color: 'cyan',
    image: '/images/solution-cloud.jpg',
    metrics: ['Reliable Launch', 'Elastic Growth', 'Observability'],
    overview: 'We provide a stable cloud runtime foundation for AI applications and business systems, covering deployment, monitoring, scaling, release, and rollback so pilots can move smoothly into production-scale operation.',
    scenarios: ['Containerized deployment and orchestration for AI applications', 'Peak-load elastic scaling and resource management', 'Log, trace, alert, and runtime-status monitoring', 'Canary release, version rollback, and automated operations'],
    outcomes: ['Shorten launch cycles', 'Improve stability and observability', 'Support elastic business growth', 'Reduce operations response cost'],
  },
  {
    id: 'marketing',
    title: 'Omnichannel AI Marketing',
    subtitle: 'AI Marketing',
    desc: 'Data-driven content generation, distribution, and campaign measurement.',
    features: ['Creative Generation', 'Smart Distribution', 'Performance Evaluation', 'Data Integration'],
    icon: 'fa-bullseye',
    color: 'purple',
    image: '/images/solution-marketing.jpg',
    metrics: ['Increase Conversion', 'Reduce Cost', 'Unify Data'],
    overview: 'We connect user data, channel data, content production, and performance evaluation so brands can generate assets faster, reach users more accurately, and review campaign results with clarity across channels.',
    scenarios: ['Marketing creative generation and multi-version testing', 'Channel strategy configuration and intelligent distribution', 'User profile, lead data, and conversion-path integration', 'Campaign performance evaluation and review dashboards'],
    outcomes: ['Increase content production efficiency', 'Lower acquisition and trial-and-error costs', 'Unify cross-channel data views', 'Make marketing decisions closer to real conversion signals'],
  },
  {
    id: 'hardware',
    title: 'Custom AI Hardware',
    subtitle: 'AI Hardware',
    desc: 'Custom edge-computing hardware, firmware, and product prototypes built for specific scenarios.',
    features: ['AI Mouse', 'AI Companion Devices', 'AI Learning Devices', 'AI Development Kits'],
    icon: 'fa-microchip',
    color: 'orange',
    image: '/images/solution-hardware.jpg',
    metrics: ['Fast Validation', 'Custom Form Factor', 'Scenario Fit'],
    overview: 'For edge intelligence, interaction devices, and vertical hardware scenarios, we provide custom services from form planning, board selection, and algorithm adaptation to firmware integration and pilot production.',
    scenarios: ['Custom AI mice, learning devices, companion devices, and similar products', 'Edge-computing board and sensor-solution selection', 'On-device adaptation for voice, vision, and interaction algorithms', 'Development kits, prototype validation, and small-batch rollout'],
    outcomes: ['Shorten hardware validation cycles', 'Lower the barrier to edge AI deployment', 'Support differentiated product forms', 'Improve software-hardware integration stability'],
  },
  {
    id: 'music',
    title: 'AI Emotion Music',
    subtitle: 'AI Music',
    desc: 'Turn your story into a song. AI listens to your emotion and composes a melody that fits your mood, then sings it for you.',
    features: ['AI Composition', '5-Language Vocals', 'Voice Selection', 'Memory Keepsake'],
    icon: 'fa-music',
    color: 'fuchsia',
    image: '/images/ai-generated/ai-music.jpg',
    metrics: ['Emotion-Driven', '5-Language Vocals', 'One-Tap Save'],
    overview: 'For personal expression and content creation, our AI composition and multilingual vocal capabilities turn written stories into listenable songs — fitting emotional keepsakes, content marketing, and tourism souvenirs.',
    scenarios: ['Turn a diary entry or story into a song', 'Switch freely across Mandarin, English, Japanese, Korean, and Cantonese vocals', 'Choose voice style and vocal texture', 'Save and share works in the cloud'],
    outcomes: ['Lower the barrier to music creation', 'Give emotions a listenable form', 'Enrich content with new sound formats', 'Build shareable emotional memory assets'],
    link: 'https://xinshibandao.coze.site/studio',
  },
];

export const getSolutionsData = (language: Language = 'zh') => (
  language === 'en' ? solutionsDataEn : solutionsData
);

export const getSolutionById = (id?: string, language: Language = 'zh') => (
  getSolutionsData(language).find(item => item.id === id)
);
