import type { Language } from '@/lib/i18n';

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
        loc: '上海',
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
        loc: '上海',
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

export const jobsDataEn: JobItem[] = [
    {
        id: 'full-stack-engineer',
        title: 'Full-Stack Engineer',
        dept: 'R&D',
        loc: 'Shanghai',
        salary: '30k-60k',
        color: 'blue',
        type: 'Full-time',
        desc: [
            'Develop and maintain front-end and back-end capabilities for core company products.',
            'Participate in system architecture design and optimize performance and scalability.',
            'Work with product managers and designers to deliver requirements with high quality.',
            'Own technical problem solving and research promising new technologies.'
        ],
        reqs: [
            "Bachelor's degree or above in computer science or a related field, with 3+ years of full-stack development experience.",
            'Extensive experience with React/Vue and familiarity with Node.js, Go, Java, or similar back-end languages.',
            'Familiarity with database design, MySQL or MongoDB, and caching systems such as Redis.',
            'Good coding standards and documentation habits; open-source project experience is a plus.'
        ]
    },
    {
        id: 'product-designer',
        title: 'Product Experience Designer',
        dept: 'Design',
        loc: 'Shanghai',
        salary: '25k-45k',
        color: 'purple',
        type: 'Full-time',
        desc: [
            'Design user experiences for B2B SaaS platforms and consumer-facing applications.',
            'Participate in product requirement analysis and produce high-quality designs and interaction prototypes.',
            'Build and maintain the product design system.',
            'Follow design trends and continuously improve visual and interaction quality.'
        ],
        reqs: [
            "Bachelor's degree or above in design or a related field, with 3+ years of internet product design experience.",
            'Proficient with Figma, Sketch, Adobe XD, or similar design tools.',
            'Strong visual taste, logical thinking, and attention to detail.',
            'Experience with B2B dashboards or data visualization design is preferred.'
        ]
    },
    {
        id: 'saas-architect',
        title: 'SaaS Architect',
        dept: 'Pre-Sales Technology',
        loc: 'Shanghai',
        salary: '40k-70k',
        color: 'green',
        type: 'Full-time',
        desc: [
            'Design and select architecture for core SaaS platforms.',
            'Lead solutions for high concurrency, high availability, microservice decomposition, and other key technical challenges.',
            'Guide engineering teams on refactoring and performance optimization.',
            'Participate in pre-sales technical conversations and provide solution consulting for customers.'
        ],
        reqs: [
            "Bachelor's degree or above in computer science or a related field, with 5+ years of large-scale internet system architecture experience.",
            'Proficient in Java, Go, or Node.js and familiar with microservice frameworks such as Spring Cloud and container orchestration such as Kubernetes.',
            'Deep understanding of distributed systems; large-scale data processing experience is a plus.',
            'Strong communication skills and team leadership.'
        ]
    }
];

export const getJobsData = (language: Language = 'zh') => (
    language === 'en' ? jobsDataEn : jobsData
);

export const getJobById = (id?: string, language: Language = 'zh') => (
    getJobsData(language).find(job => job.id === id)
);
