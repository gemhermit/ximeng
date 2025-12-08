
import React, { useLayoutEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';

const gsap = (window as any).gsap;

const benefits = [
    { icon: 'fa-user-md', title: '六险一金', desc: '全方位的健康保障' },
    { icon: 'fa-laptop-house', title: '混合办公', desc: '灵活的远程工作机制' },
    { icon: 'fa-coins', title: '股票期权', desc: '共享公司成长红利' },
    { icon: 'fa-plane', title: '年度旅游', desc: '探索世界的脚步' },
];

const jobs = [
    { title: '嵌入式硬件工程师', dept: '硬件研发部', loc: '深圳', salary: '30k-60k', type: '全职' },
    { title: '产品体验设计师', dept: '设计部', loc: '上海', salary: '25k-45k', type: '全职' },
    { title: 'SaaS 架构师', dept: '售前技术部', loc: '北京', salary: '40k-70k', type: '全职' },
    { title: '高级前端工程师', dept: 'Web 研发部', loc: '杭州', salary: '25k-45k', type: '全职' },
    { title: 'AI 算法研究员', dept: 'AI Lab', loc: '北京', salary: '50k-80k', type: '全职' },
];

const Careers: React.FC = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });
            tl.from(".benefit-item", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            })
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
                {/* Benefits */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold mb-10 text-center text-white/90">福利待遇</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {benefits.map((b, i) => (
                            <div key={i} className="benefit-item p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                                <i className={`fas ${b.icon} text-3xl text-green-400 mb-4`}></i>
                                <h4 className="font-bold text-lg mb-2">{b.title}</h4>
                                <p className="text-sm text-gray-500">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Jobs */}
                <div className="max-w-4xl mx-auto">
                    <div className="job-header flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <h3 className="text-2xl font-bold">开放职位</h3>
                        <p className="text-sm text-gray-400">简历投递至: <span className="text-white font-mono bg-white/10 px-2 py-1 rounded select-all">hr@ximeng.tech</span></p>
                    </div>
                    
                    <div className="space-y-4">
                        {jobs.map((job, i) => (
                            <div key={i} className="job-item group p-6 rounded-xl bg-white/5 border border-white/5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{job.title}</h4>
                                    <p className="text-gray-400 mt-1 text-sm">{job.dept} · {job.loc} · {job.type}</p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-green-400 font-mono font-bold">{job.salary}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
             <div className="h-20"></div>
        </div>
    );
};

export default Careers;
