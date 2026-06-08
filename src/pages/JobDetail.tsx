import React, { useLayoutEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import { getJobById } from '@/data/jobs';
import { buildBreadcrumbSchema } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';
import gsap from 'gsap';

const jobColorClasses = {
    blue: {
        text: 'text-blue-400',
        textStrong: 'text-blue-500',
        bg: 'bg-blue-500',
        button: 'bg-blue-600 hover:bg-blue-700',
        shadow: 'shadow-blue-900/20',
    },
    purple: {
        text: 'text-purple-400',
        textStrong: 'text-purple-500',
        bg: 'bg-purple-500',
        button: 'bg-purple-600 hover:bg-purple-700',
        shadow: 'shadow-purple-900/20',
    },
    green: {
        text: 'text-green-400',
        textStrong: 'text-green-500',
        bg: 'bg-green-500',
        button: 'bg-green-600 hover:bg-green-700',
        shadow: 'shadow-green-900/20',
    },
};

const JobDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const containerRef = useRef(null);
    const { isEnglish, language, route } = useLanguage();
    const job = getJobById(id, language);
    const text = isEnglish ? {
        titleSuffix: 'Hiring',
        descriptionPrefix: 'Ximeng Tech is hiring',
        dept: 'Department',
        loc: 'Location',
        salary: 'Salary Range',
        type: 'Type',
        subtitle: 'Join us and build the future',
        back: 'Back to Open Roles',
        responsibilities: 'Responsibilities',
        requirements: 'Requirements',
        applyTitle: 'How to Apply',
        applyCopy: 'Please send your resume to',
        subjectFormat: 'Email subject format:',
        subjectExample: 'Role - Name',
        applyNow: 'Apply Now',
        overview: 'Role Overview',
        submit: 'Submit Resume',
        home: 'Home',
        careers: 'Careers',
        keywordHiring: 'hiring',
    } : {
        titleSuffix: '招聘',
        descriptionPrefix: '羲梦科技',
        dept: '部门',
        loc: '地点',
        salary: '薪资范围',
        type: '性质',
        subtitle: '加入我们，共创未来',
        back: '返回职位列表',
        responsibilities: '岗位职责',
        requirements: '任职要求',
        applyTitle: '如何申请',
        applyCopy: '请将您的简历发送至',
        subjectFormat: '邮件标题格式为：',
        subjectExample: '应聘职位-姓名',
        applyNow: '立即申请',
        overview: '职位概览',
        submit: '投递简历',
        home: '首页',
        careers: '加入我们',
        keywordHiring: '招聘',
    };

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

    if (!job) return <Navigate to={route('/careers')} replace />;

    const mailSubject = isEnglish
        ? `Application for ${job.title} - ${job.dept}`
        : `应聘${job.title}-${job.dept}`;

    const color = jobColorClasses[job.color];

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-950">
            <Seo
                title={isEnglish ? `${job.title} ${text.titleSuffix}` : `${job.title}${text.titleSuffix}`}
                description={isEnglish
                    ? `${text.descriptionPrefix} ${job.title}. Department: ${job.dept}. Location: ${job.loc}. Salary: ${job.salary}. Type: ${job.type}. ${job.desc[0] ?? ''}`
                    : `${text.descriptionPrefix}${job.title}岗位招聘，部门：${job.dept}，地点：${job.loc}，薪资范围：${job.salary}，职位性质：${job.type}。${job.desc[0] ?? ''}`}
                path={`/careers/${job.id}`}
                keywords={[job.title, `${job.title} ${text.keywordHiring}`, job.dept, job.loc, isEnglish ? 'Ximeng Tech careers' : '羲梦科技招聘']}
                structuredData={buildBreadcrumbSchema([
                    { name: text.home, path: route('/') },
                    { name: text.careers, path: route('/careers') },
                    { name: job.title, path: route(`/careers/${job.id}`) },
                ])}
            />
            <PageHeader title={job.title} subtitle={text.subtitle} gradient="none" />
            
            <div className="container mx-auto px-6 py-12 md:py-20">
                {/* Back Link */}
                <Link to={route('/careers')} className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors anim-up">
                    <i className="fas fa-arrow-left"></i> {text.back}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Basic Info Card (Mobile only) */}
                        <div className="lg:hidden bg-white/5 border border-white/10 rounded-2xl p-6 anim-up">
                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{text.dept}</div>
                                    <div className="font-bold text-white">{job.dept}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{text.loc}</div>
                                    <div className="font-bold text-white">{job.loc}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{text.salary}</div>
                                    <div className={`font-bold ${color.text}`}>{job.salary}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{text.type}</div>
                                    <div className="font-bold text-white">{job.type}</div>
                                </div>
                            </div>
                        </div>

                        <div className="anim-up">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className={`w-2 h-8 rounded ${color.bg} block`}></span>
                                {text.responsibilities}
                            </h3>
                            <ul className="space-y-4">
                                {job.desc.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-gray-300 leading-relaxed">
                                        <i className={`fas fa-check-circle ${color.textStrong} mt-1 shrink-0`}></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="anim-up">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className={`w-2 h-8 rounded ${color.bg} block`}></span>
                                {text.requirements}
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
                            <h3 className="text-xl font-bold mb-4">{text.applyTitle}</h3>
                            <p className="text-gray-400 mb-6">
                                {text.applyCopy} <a href="mailto:echo@ximengtech.cn" className="text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">echo@ximengtech.cn</a>{isEnglish ? '. ' : '，'}{text.subjectFormat}<span className="text-white bg-white/10 px-2 py-0.5 rounded">{text.subjectExample}</span>{isEnglish ? '.' : '。'}
                            </p>
                            <a 
                                href={`mailto:echo@ximengtech.cn?subject=${encodeURIComponent(mailSubject)}`} 
                                className={`inline-flex items-center gap-2 px-8 py-4 ${color.button} text-white font-bold rounded-lg transition-all hoverable shadow-lg ${color.shadow}`}
                            >
                                <i className="fas fa-paper-plane"></i> {text.applyNow}
                            </a>
                        </div>
                    </div>

                    {/* Sidebar Info (Desktop) */}
                    <div className="hidden lg:block">
                        <div className="sticky top-32 anim-up">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">{text.overview}</h4>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{text.dept}</div>
                                        <div className="font-bold text-white text-lg">{job.dept}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{text.loc}</div>
                                        <div className="font-bold text-white text-lg">{job.loc}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{text.salary}</div>
                                        <div className={`font-bold ${color.text} text-2xl font-mono`}>{job.salary}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{text.type}</div>
                                        <div className="font-bold text-white text-lg">{job.type}</div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <a 
                                        href={`mailto:echo@ximengtech.cn?subject=${encodeURIComponent(mailSubject)}`} 
                                        className={`block w-full text-center py-3 ${color.button} text-white font-bold rounded transition-all hoverable`}
                                    >
                                        {text.submit}
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
