
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import gsap from 'gsap';
import { jobsData } from '../data/jobs';

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
        <div ref={containerRef} className="min-h-screen bg-slate-950">
            <PageHeader title="加入我们" subtitle="Join The Future" gradient="from-green-400 via-emerald-400 to-teal-400" />
            
            <div className="container mx-auto px-6 py-20">
                <div className="vision-wrapper mb-16 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-4 text-white/90">愿景与成长</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {highlights.map((h, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-blue-200">{h}</span>
                                ))}
                            </div>
                            <div className={`space-y-3 ${expanded ? '' : 'max-h-40 overflow-hidden'}`}>
                                {vision.map((v, i) => (
                                    <p key={i} className="text-gray-300 text-sm md:text-base leading-relaxed">{v}</p>
                                ))}
                            </div>
                            <div className="mt-4">
                                <button onClick={() => setExpanded(!expanded)} className="text-xs text-blue-400 bg-white/5 border border-white/10 px-3 py-1 rounded hover:bg-white/10">
                                    {expanded ? '收起' : '展开更多'}
                                </button>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                            <h4 className="text-lg font-bold mb-3">成长路径</h4>
                            <div className="grid grid-cols-1 gap-3">
                                {tracks.map((t, idx) => (
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
                        {['直面问题并解决它', '用数据与事实说话', '通过协作达成更大影响'].map((s, i) => (
                            <div key={i} className="seek-item rounded-2xl border border-white/10 bg-white/5 p-6">
                                <div className="text-sm text-blue-300 mb-2">我们在寻找</div>
                                <div className="font-bold text-white mb-2">{s}</div>
                                <p className="text-sm text-gray-400">期待你在真实业务中推动变化，与团队一起交付面向长期的成果。</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto" id="jobs">
                    <div className="job-header flex flex-col md:flex-row justify之间 items-end mb-10 gap-4">
                        <h3 className="text-2xl font-bold">开放职位</h3>
                        <p className="text-sm text-gray-400">简历投递至: <span className="text-white font-mono bg-white/10 px-2 py-1 rounded select-all">echo@ximengtech.cn</span></p>
                    </div>
                    
                    <div className="space-y-4">
                        {jobsData.map((job, i) => (
                            <Link to={`/careers/${job.id}`} key={i} className="job-item group p-6 rounded-xl bg-white/5 border border-white/5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/10 hover:border-white/20 hoverable">
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
            
             <div className="h-20"></div>
        </div>
    );
};

export default Careers;
