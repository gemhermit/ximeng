import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { jobsData, JobItem } from '../data/jobs';
import gsap from 'gsap';

const JobDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [job, setJob] = useState<JobItem | null>(null);

    useEffect(() => {
        const found = jobsData.find(j => j.id === id);
        if (found) {
            setJob(found);
        } else {
            navigate('/careers');
        }
    }, [id, navigate]);

    useLayoutEffect(() => {
        if (!job) return;
        
        let ctx = gsap.context(() => {
            gsap.from(".anim-up", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.2
            });
        }, containerRef);
        
        return () => ctx.revert();
    }, [job]);

    if (!job) return null;

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-950">
            <PageHeader title={job.title} subtitle="加入我们，共创未来" gradient="none" />
            
            <div className="container mx-auto px-6 py-12 md:py-20">
                {/* Back Link */}
                <Link to="/careers" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors anim-up">
                    <i className="fas fa-arrow-left"></i> 返回职位列表
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Basic Info Card (Mobile only) */}
                        <div className="lg:hidden bg-white/5 border border-white/10 rounded-2xl p-6 anim-up">
                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">部门</div>
                                    <div className="font-bold text-white">{job.dept}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">地点</div>
                                    <div className="font-bold text-white">{job.loc}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">薪资范围</div>
                                    <div className={`font-bold text-${job.color}-400`}>{job.salary}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">性质</div>
                                    <div className="font-bold text-white">{job.type}</div>
                                </div>
                            </div>
                        </div>

                        <div className="anim-up">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className={`w-2 h-8 rounded bg-${job.color}-500 block`}></span>
                                岗位职责
                            </h3>
                            <ul className="space-y-4">
                                {job.desc.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-gray-300 leading-relaxed">
                                        <i className={`fas fa-check-circle text-${job.color}-500 mt-1 shrink-0`}></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="anim-up">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className={`w-2 h-8 rounded bg-${job.color}-500 block`}></span>
                                任职要求
                            </h3>
                            <ul className="space-y-4">
                                {job.reqs.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-gray-300 leading-relaxed">
                                        <i className="fas fa-star text-yellow-500 mt-1 shrink-0"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="anim-up pt-8 border-t border-white/10">
                            <h3 className="text-xl font-bold mb-4">如何申请</h3>
                            <p className="text-gray-400 mb-6">
                                请将您的简历发送至 <a href="mailto:echo@ximengtech.cn" className="text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">echo@ximengtech.cn</a>，邮件标题格式为：<span className="text-white bg-white/10 px-2 py-0.5 rounded">应聘职位-姓名</span>。
                            </p>
                            <a 
                                href={`mailto:echo@ximengtech.cn?subject=应聘${job.title}-${job.dept}`} 
                                className={`inline-flex items-center gap-2 px-8 py-4 bg-${job.color}-600 hover:bg-${job.color}-700 text-white font-bold rounded-lg transition-all hoverable shadow-lg shadow-${job.color}-900/20`}
                            >
                                <i className="fas fa-paper-plane"></i> 立即申请
                            </a>
                        </div>
                    </div>

                    {/* Sidebar Info (Desktop) */}
                    <div className="hidden lg:block">
                        <div className="sticky top-32 anim-up">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">职位概览</h4>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">部门</div>
                                        <div className="font-bold text-white text-lg">{job.dept}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">地点</div>
                                        <div className="font-bold text-white text-lg">{job.loc}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">薪资范围</div>
                                        <div className={`font-bold text-${job.color}-400 text-2xl font-mono`}>{job.salary}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">性质</div>
                                        <div className="font-bold text-white text-lg">{job.type}</div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <a 
                                        href={`mailto:echo@ximengtech.cn?subject=应聘${job.title}-${job.dept}`} 
                                        className={`block w-full text-center py-3 bg-${job.color}-600 hover:bg-${job.color}-700 text-white font-bold rounded transition-all hoverable`}
                                    >
                                        投递简历
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;
