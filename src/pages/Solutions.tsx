
import React, { useLayoutEffect, useRef, useMemo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import TiltCard from '@/components/TiltCard';
import { getSolutionsData, solutionColorClasses } from '@/data/solutions';
import { buildBreadcrumbSchema, buildItemListSchema } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';
import gsap from 'gsap';

const Solutions: React.FC = () => {
    const containerRef = useRef(null);
    const { isEnglish, language, route } = useLanguage();
    const allLabel = isEnglish ? 'All' : '全部';
    const [activeFilter, setActiveFilter] = useState<string>(allLabel);
    const location = useLocation();
    const solutionsData = useMemo(() => getSolutionsData(language), [language]);
    const text = isEnglish ? {
        title: 'Full-Stack Solutions',
        subtitle: 'Solutions Matrix',
        description: 'Ximeng Tech provides enterprise AI solutions across industrial AI agents, education technology, AI cultural tourism, cloud engine services, omnichannel AI marketing, and custom AI hardware.',
        home: 'Home',
        solutions: 'Solutions',
        listName: 'Ximeng Tech Solutions',
        more: 'Learn More',
    } : {
        title: '全栈解决方案',
        subtitle: 'Solutions Matrix',
        description: '羲梦科技提供工业制造智能体、科技教育平台、AI 文旅文化、云引擎服务、全域 AI 营销与 AI 硬件定制等企业级 AI 解决方案。',
        home: '首页',
        solutions: '解决方案',
        listName: '羲梦科技解决方案',
        more: '了解更多',
    };

    const filters = useMemo(() => {
        const set = new Set<string>([allLabel]);
        solutionsData.forEach(s => set.add(s.title));
        return Array.from(set);
    }, [allLabel, solutionsData]);

    const filtered = useMemo(() => {
        if (activeFilter === allLabel) return solutionsData;
        return solutionsData.filter(s => s.title === activeFilter);
    }, [activeFilter, allLabel, solutionsData]);

    useEffect(() => {
        setActiveFilter(allLabel);
    }, [allLabel]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".anim-item", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 0);
            }
        }
    }, [location]);

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-950">
            <Seo
                title={text.title}
                description={text.description}
                path="/solutions"
                image="/images/solution-industrial.jpg"
                keywords={solutionsData.flatMap((item) => [item.title, item.subtitle])}
                structuredData={[
                    buildBreadcrumbSchema([
                        { name: text.home, path: route('/') },
                        { name: text.solutions, path: route('/solutions') },
                    ]),
                    buildItemListSchema(
                        solutionsData.map((item) => ({
                            name: item.title,
                            path: route(`/solutions/${item.id}`),
                        })),
                        text.listName,
                    ),
                ]}
            />
            <PageHeader title={text.title} subtitle={text.subtitle} />
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-wrap gap-3 mb-10">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-3 py-1 rounded-full text-xs font-mono border ${activeFilter === f ? 'bg-blue-500 text-white border-blue-500' : 'bg-white/5 text-blue-300 border-white/10 hover:bg-white/10'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="space-y-20">
                    {filtered.map((item, index) => (
                        <div key={item.id} id={item.id} className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center anim-item ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            {(() => {
                                const color = solutionColorClasses[item.color];
                                return (
                                  <>
                            <div className="w-full md:w-1/2">
                                <TiltCard className="h-[300px] md:h-[400px]">
                                    <Link to={route(`/solutions/${item.id}`)} className={`relative block w-full h-full rounded-2xl overflow-hidden border border-white/10 group hover:border-white/20 transition-colors shadow-2xl ${color.shadow}`}>
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent"></div>
                                        <div className={`absolute top-4 left-4 p-3 ${color.iconBg} backdrop-blur-md rounded-lg border ${color.border}`}>
                                            <i className={`fas ${item.icon} text-2xl ${color.text}`}></i>
                                        </div>
                                    </Link>
                                </TiltCard>
                            </div>

                            <div className="w-full md:w-1/2 space-y-6">
                                <div className={`${color.text} font-bold tracking-widest text-sm`}>{item.subtitle}</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">{item.title}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>

                                <div className="flex flex-wrap gap-2">
                                    {item.metrics?.map((m: string, i: number) => (
                                        <span key={i} className={`px-2 py-1 rounded-full ${color.bgSoft} text-slate-200 text-xs border ${color.border}`}>{m}</span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    {item.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                            <div className={`w-1.5 h-1.5 rounded-full ${color.bg} shadow-[0_0_8px_currentColor]`}></div>
                                            <span className="text-sm font-medium text-gray-200">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <Link to={route(`/solutions/${item.id}`)} className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600 transition-colors">
                                        {text.more}
                                        <i className="fas fa-arrow-right text-xs"></i>
                                    </Link>
                                </div>
                            </div>
                                  </>
                                );
                            })()}
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-20"></div>
        </div>
    );
};

export default Solutions;
