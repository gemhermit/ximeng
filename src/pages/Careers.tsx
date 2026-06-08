
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import gsap from 'gsap';
import { getJobsData } from '@/data/jobs';
import { buildBreadcrumbSchema, buildItemListSchema } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';

const vision = [
    '我们以长期主义为核心，专注于建设面向未来的数字基础设施与智能服务能力。',
    '公司目标是通过技术与产品的持续迭代，帮助行业客户实现可靠上线、降本增效与可持续增长。',
    '我们期待与同路人共同成长：在真实业务场景中打磨解决方案，在复杂系统中积累工程经验。',
    '在这里，清晰的目标、实事求是的文化与开放的协作氛围是我们最重要的“福利”。',
    '面向未来，我们愿与你一起把每一个小的确定性积累成长期的确定性。'
];

const highlights = ['长期主义', '务实迭代', '客户成功', '技术与产品并重'];

const tracks = [
    { title: '工程方向', items: ['前端/后端/嵌入式', 'DevOps/安全', '架构设计'] },
    { title: '产品方向', items: ['产品规划', '交互设计', '增长'] },
    { title: '行业解决方案', items: ['售前咨询', '交付与项目管理', '行业研究'] }
];

const Careers: React.FC = () => {
    const containerRef = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const { isEnglish, language, route } = useLanguage();
    const jobsData = getJobsData(language);
    const content = isEnglish ? {
        title: 'Careers',
        headerTitle: 'Join Us',
        subtitle: 'Join The Future',
        description: 'Join Ximeng Tech and build AI solutions, SaaS platforms, product experiences, and industry digitalization projects. Explore open roles including full-stack engineer, product experience designer, and SaaS architect.',
        keywords: ['Ximeng Tech careers', 'AI company jobs'],
        home: 'Home',
        careers: 'Careers',
        listName: 'Ximeng Tech Open Roles',
        visionTitle: 'Vision and Growth',
        vision: [
            'We are guided by long-term thinking and focused on building future-facing digital infrastructure and intelligent service capabilities.',
            'Our goal is to help industry customers launch reliably, reduce costs, improve efficiency, and grow sustainably through continuous product and technology iteration.',
            'We want to grow with people on the same path: shaping solutions in real business scenarios and building engineering judgment inside complex systems.',
            'Clear goals, practical culture, and open collaboration are among our most important values.',
            'For the future, we hope to turn small reliable improvements into long-term certainty together.',
        ],
        highlights: ['Long-Term Thinking', 'Practical Iteration', 'Customer Success', 'Technology and Product'],
        expand: 'Read More',
        collapse: 'Collapse',
        growth: 'Growth Paths',
        tracks: [
            { title: 'Engineering', items: ['Front-end / Back-end / Embedded', 'DevOps / Security', 'Architecture Design'] },
            { title: 'Product', items: ['Product Planning', 'Interaction Design', 'Growth'] },
            { title: 'Industry Solutions', items: ['Pre-sales Consulting', 'Delivery and Project Management', 'Industry Research'] },
        ],
        seekingLabel: 'We are looking for',
        seeking: ['Tackle problems head-on', 'Let data and facts drive decisions', 'Create greater impact through collaboration'],
        seekingDesc: 'We expect you to drive change in real business settings and deliver long-term outcomes with the team.',
        openRoles: 'Open Roles',
        resume: 'Send resume to:',
    } : {
        title: '加入我们',
        headerTitle: '加入我们',
        subtitle: 'Join The Future',
        description: '加入羲梦科技，参与 AI 解决方案、SaaS 平台、产品体验和行业数字化项目建设。查看全栈工程师、产品体验设计师、SaaS 架构师等开放职位。',
        keywords: ['羲梦科技招聘', 'AI 公司招聘'],
        home: '首页',
        careers: '加入我们',
        listName: '羲梦科技开放职位',
        visionTitle: '愿景与成长',
        vision,
        highlights,
        expand: '展开更多',
        collapse: '收起',
        growth: '成长路径',
        tracks,
        seekingLabel: '我们在寻找',
        seeking: ['直面问题并解决它', '用数据与事实说话', '通过协作达成更大影响'],
        seekingDesc: '期待你在真实业务中推动变化，与团队一起交付面向长期的成果。',
        openRoles: '开放职位',
        resume: '简历投递至:',
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });
            tl.from(".vision-wrapper", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out"
            })
            .from(".track-card", {
                y: 24,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.3")
            .from(".seek-item", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power2.out"
            }, "-=0.3")
            .from(".job-header", {
                y: 20,
                opacity: 0,
                duration: 0.5
            }, "-=0.2")
            .from(".job-item", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.4");
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-slate-950">
            <Seo
                title={content.title}
                description={content.description}
                path="/careers"
                keywords={[...content.keywords, ...jobsData.map((job) => job.title)]}
                structuredData={[
                    buildBreadcrumbSchema([
                        { name: content.home, path: route('/') },
                        { name: content.careers, path: route('/careers') },
                    ]),
                    buildItemListSchema(
                        jobsData.map((job) => ({
                            name: job.title,
                            path: route(`/careers/${job.id}`),
                        })),
                        content.listName,
                    ),
                ]}
            />
            <PageHeader title={content.headerTitle} subtitle={content.subtitle} gradient="from-green-400 via-emerald-400 to-teal-400" />
            
            <div className="container mx-auto px-6 pt-20 pb-6">
                <div className="vision-wrapper mb-16 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-4 text-white/90">{content.visionTitle}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {content.highlights.map((h, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-blue-200">{h}</span>
                                ))}
                            </div>
                            <div className={`space-y-3 ${expanded ? '' : 'max-h-40 overflow-hidden'}`}>
                                {content.vision.map((v, i) => (
                                    <p key={i} className="text-gray-300 text-sm md:text-base leading-relaxed">{v}</p>
                                ))}
                            </div>
                            <div className="mt-4">
                                <button onClick={() => setExpanded(!expanded)} className="text-xs text-blue-400 bg-white/5 border border-white/10 px-3 py-1 rounded hover:bg-white/10">
                                    {expanded ? content.collapse : content.expand}
                                </button>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                            <h4 className="text-lg font-bold mb-3">{content.growth}</h4>
                            <div className="grid grid-cols-1 gap-3">
                                {content.tracks.map((t, idx) => (
                                    <div key={idx} className="track-card rounded-xl bg-white/5 border border-white/10 p-4">
                                        <div className="font-bold text-white mb-2">{t.title}</div>
                                        <div className="flex flex-wrap gap-2">
                                            {t.items.map((it, i) => (
                                                <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-300">{it}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {content.seeking.map((s, i) => (
                            <div key={i} className="seek-item rounded-2xl border border-white/10 bg-white/5 p-6">
                                <div className="text-sm text-blue-300 mb-2">{content.seekingLabel}</div>
                                <div className="font-bold text-white mb-2">{s}</div>
                                <p className="text-sm text-gray-400">{content.seekingDesc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto" id="jobs">
                    <div className="job-header flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <h3 className="text-2xl font-bold">{content.openRoles}</h3>
                        <p className="text-sm text-gray-400">{content.resume} <span className="text-white font-mono bg-white/10 px-2 py-1 rounded select-all">echo@ximengtech.cn</span></p>
                    </div>
                    
                    <div className="space-y-4">
                        {jobsData.map((job, i) => (
                            <Link to={route(`/careers/${job.id}`)} key={i} className="job-item group p-6 rounded-xl bg-white/5 border border-white/5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/10 hover:border-white/20 hoverable">
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{job.title}</h4>
                                    <p className="text-gray-400 mt-1 text-sm">{job.dept} · {job.loc} · {job.type}</p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-green-400 font-mono font-bold">{job.salary}</span>
                                    <i className="fas fa-arrow-right text-gray-600 group-hover:text-white transition-colors"></i>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
