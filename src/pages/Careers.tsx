import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import gsap from 'gsap';
import { getJobsData } from '@/data/jobs';
import { buildBreadcrumbSchema, buildItemListSchema } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';
import { translate } from '@/lib/translations';

const string = (language: 'zh' | 'en', path: string) => translate(language, path) as string;
const strings = (language: 'zh' | 'en', path: string) => translate(language, path) as string[];

type Track = { title: string; items: string[] };

const Careers: React.FC = () => {
    const containerRef = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const { language, route } = useLanguage();
    const jobsData = getJobsData(language);
    const t = (path: string) => string(language, path);
    const vision = strings(language, 'careers.vision');
    const highlights = strings(language, 'careers.highlights');
    const tracks = strings(language, 'careers.tracks') as unknown as Track[];
    const seeking = strings(language, 'careers.seeking');
    const extraKeywords = strings(language, 'careers.keywords');

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
                title={t('careers.title')}
                description={t('careers.description')}
                path="/careers"
                keywords={[...extraKeywords, ...jobsData.map((job) => job.title)]}
                structuredData={[
                    buildBreadcrumbSchema([
                        { name: t('careers.home'), path: route('/') },
                        { name: t('careers.careers'), path: route('/careers') },
                    ]),
                    buildItemListSchema(
                        jobsData.map((job) => ({
                            name: job.title,
                            path: route(`/careers/${job.id}`),
                        })),
                        t('careers.listName'),
                    ),
                ]}
            />
            <PageHeader title={t('careers.headerTitle')} subtitle={t('careers.subtitle')} gradient="from-green-400 via-emerald-400 to-teal-400" />

            <div className="container mx-auto px-6 pt-20 pb-6">
                <div className="vision-wrapper mb-16 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-4 text-white/90">{t('careers.visionTitle')}</h3>
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
                                    {expanded ? t('careers.collapse') : t('careers.expand')}
                                </button>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                            <h4 className="text-lg font-bold mb-3">{t('careers.growth')}</h4>
                            <div className="grid grid-cols-1 gap-3">
                                {tracks.map((track, idx) => (
                                    <div key={idx} className="track-card rounded-xl bg-white/5 border border-white/10 p-4">
                                        <div className="font-bold text-white mb-2">{track.title}</div>
                                        <div className="flex flex-wrap gap-2">
                                            {track.items.map((it, i) => (
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
                        {seeking.map((s, i) => (
                            <div key={i} className="seek-item rounded-2xl border border-white/10 bg-white/5 p-6">
                                <div className="text-sm text-blue-300 mb-2">{t('careers.seekingLabel')}</div>
                                <div className="font-bold text-white mb-2">{s}</div>
                                <p className="text-sm text-gray-400">{t('careers.seekingDesc')}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto" id="jobs">
                    <div className="job-header flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <h3 className="text-2xl font-bold">{t('careers.openRoles')}</h3>
                        <p className="text-sm text-gray-400">{t('careers.resume')} <span className="text-white font-mono bg-white/10 px-2 py-1 rounded select-all">echo@ximengtech.cn</span></p>
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
