export interface JobItem {
    id: string;
    title: string;
    dept: string;
    loc: string;
    salary: string;
    color: string;
    type: string;
    desc: string[];
    reqs: string[];
}

export const jobsData: JobItem[] = [
    { 
        id: 'full-stack-engineer',
        title: '全栈工程师', 
        dept: '研发部', 
        loc: '深圳', 
        salary: '30k-60k', 
        color: 'blue', 
        type: '全职',
        desc: [
            '负责公司核心产品的前后端开发与维护。',
            '参与系统架构设计，优化系统性能与扩展性。',
            '配合产品经理与设计师，高质量完成需求交付。',
            '负责技术难点攻关与新技术预研。'
        ],
        reqs: [
            '计算机相关专业本科及以上学历，3年以上全栈开发经验。',
            '精通 React/Vue 等前端框架，熟悉 Node.js/Go/Java 等后端语言。',
            '熟悉数据库设计（MySQL/MongoDB）与缓存技术（Redis）。',
            '具备良好的代码规范与文档编写习惯，有开源项目经验者优先。'
        ]
    },
    { 
        id: 'product-designer',
        title: '产品体验设计师', 
        dept: '设计部', 
        loc: '上海', 
        salary: '25k-45k', 
        color: 'purple', 
        type: '全职',
        desc: [
            '负责 B 端 SaaS 平台与 C 端应用的用户体验设计（UI/UX）。',
            '参与产品需求分析，输出高质量的设计稿与交互原型。',
            '建立并维护公司产品的设计规范（Design System）。',
            '关注行业设计趋势，持续优化现有产品的视觉体验。'
        ],
        reqs: [
            '设计类相关专业本科及以上学历，3年以上互联网产品设计经验。',
            '精通 Figma、Sketch、Adobe 等设计工具。',
            '具备优秀的美学素养与逻辑思维能力，关注细节。',
            '有 B 端后台或数据可视化设计经验者优先。'
        ]
    },
    { 
        id: 'saas-architect',
        title: 'SaaS 架构师', 
        dept: '售前技术部', 
        loc: '北京', 
        salary: '40k-70k', 
        color: 'green', 
        type: '全职',
        desc: [
            '负责公司核心 SaaS 平台的技术架构设计与选型。',
            '主导解决高并发、高可用、微服务拆分等关键技术难题。',
            '指导研发团队进行代码重构与性能优化。',
            '参与客户售前技术交流，提供解决方案咨询。'
        ],
        reqs: [
            '计算机相关专业本科及以上学历，5年以上大型互联网系统架构经验。',
            '精通 Java/Go/Node.js 其中一种语言，熟悉微服务架构（Spring Cloud/K8s）。',
            '深入理解分布式系统原理，有海量数据处理经验者优先。',
            '具备良好的沟通能力与团队领导力。'
        ]
    }
];
