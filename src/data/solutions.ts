export type SolutionColor = 'blue' | 'green' | 'pink' | 'cyan' | 'purple' | 'orange';

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
}

export const solutionColorClasses: Record<SolutionColor, {
  text: string;
  bg: string;
  bgSoft: string;
  border: string;
  gradient: string;
  iconBg: string;
  shadow: string;
}> = {
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500',
    bgSoft: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    gradient: 'from-blue-500 via-cyan-400 to-blue-700',
    iconBg: 'bg-blue-500/20',
    shadow: 'shadow-blue-500/10',
  },
  green: {
    text: 'text-green-400',
    bg: 'bg-green-500',
    bgSoft: 'bg-green-500/10',
    border: 'border-green-500/30',
    gradient: 'from-green-500 via-emerald-400 to-teal-700',
    iconBg: 'bg-green-500/20',
    shadow: 'shadow-green-500/10',
  },
  pink: {
    text: 'text-pink-400',
    bg: 'bg-pink-500',
    bgSoft: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    gradient: 'from-pink-500 via-rose-400 to-purple-700',
    iconBg: 'bg-pink-500/20',
    shadow: 'shadow-pink-500/10',
  },
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500',
    bgSoft: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    gradient: 'from-cyan-500 via-sky-400 to-blue-700',
    iconBg: 'bg-cyan-500/20',
    shadow: 'shadow-cyan-500/10',
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-500',
    bgSoft: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    gradient: 'from-purple-500 via-fuchsia-400 to-indigo-700',
    iconBg: 'bg-purple-500/20',
    shadow: 'shadow-purple-500/10',
  },
  orange: {
    text: 'text-orange-400',
    bg: 'bg-orange-500',
    bgSoft: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    gradient: 'from-orange-500 via-amber-400 to-red-700',
    iconBg: 'bg-orange-500/20',
    shadow: 'shadow-orange-500/10',
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
];

export const getSolutionById = (id?: string) => solutionsData.find(item => item.id === id);
