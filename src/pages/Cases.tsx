import React, { useLayoutEffect, useRef, useMemo, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import { getCaseCategories, getCasesData, getCategoryImage, CaseItem } from '@/data/cases';
import { buildBreadcrumbSchema, buildItemListSchema } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';
import { translate } from '@/lib/translations';
import gsap from 'gsap';

const string = (language: 'zh' | 'en', path: string) => translate(language, path) as string;
const strings = (language: 'zh' | 'en', path: string) => translate(language, path) as string[];

const Cases: React.FC = () => {
    const containerRef = useRef(null);
    const { language, route } = useLanguage();
    const t = (path: string) => string(language, path);
    const extraKeywords = strings(language, 'cases.keyword');
    const allLabel = t('cases.all');
    const [activeCat, setActiveCat] = useState<string>(allLabel);
    const location = useLocation();
    const casesFlat: CaseItem[] = useMemo(() => getCasesData(language), [language]);
    const caseCategories = useMemo(() => getCaseCategories(language), [language]);

    const cats = useMemo(() => {
        const set = new Set<string>([allLabel]);
        caseCategories.forEach(c => set.add(c));
        return Array.from(set);
    }, [allLabel, caseCategories]);

    const filtered = useMemo(() => {
        if (activeCat === allLabel) return casesFlat;
        return casesFlat.filter(c => c.category === activeCat);
    }, [activeCat, allLabel, casesFlat]);

    useEffect(() => {
        setActiveCat(allLabel);
    }, [allLabel]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".case-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, [activeCat]);

    useEffect(() => {
        if (location.hash) {
            const cat = location.hash.replace('#','');
            if (cats.includes(cat)) {
                setActiveCat(cat);
            }
        }
    }, [location, cats]);

    const CaseCard = ({ item }: { key?: React.Key; item: CaseItem }) => (
        <div className="case-card group h-full">
            <Link
                to={route(`/cases/${item.slug}`)}
                className="block relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
                <div className="flex flex-col h-full">
                    <div className="relative w-full aspect-video md:aspect-[4/3] overflow-hidden bg-slate-800">
                        <img
                            src={item.image || getCategoryImage(item.category)}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    </div>

                    <div className="p-6 flex flex-col flex-1 gap-4">
                        <div className="flex items-center justify-between">
                            <div className="text-xs text-blue-400 font-bold tracking-widest uppercase">{item.category}</div>
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">{item.title}</h3>

                        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 max-w-prose flex-1">
                            {item.summary}
                        </p>

                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                            <span className="inline-flex items-center gap-2 text-sm text-white font-medium group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
                                {t('cases.detail')}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={e => e.stopPropagation()}
                                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                    {t('cases.external')} ↗
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-950">
            <Seo
                title={t('cases.seoTitle')}
                description={t('cases.description')}
                path="/cases"
                image="/images/case-data.jpg"
                keywords={[...caseCategories, ...extraKeywords]}
                structuredData={[
                    buildBreadcrumbSchema([
                        { name: t('cases.home'), path: route('/') },
                        { name: t('cases.cases'), path: route('/cases') },
                    ]),
                    buildItemListSchema(
                        casesFlat.map((item) => ({
                            name: item.title,
                            path: route(`/cases/${item.slug}`),
                        })),
                        t('cases.listName'),
                    ),
                ]}
            />
            <PageHeader title={t('cases.title')} subtitle={t('cases.subtitle')} gradient="from-purple-400 via-pink-400 to-red-400" />
            <div className="container mx-auto px-4 sm:px-6 py-12">
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
                    {cats.map(c => (
                        <button
                            key={c}
                            onClick={() => setActiveCat(c)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCat === c ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {activeCat === allLabel ? (
                  <div className="space-y-12 md:space-y-16">
                    {caseCategories.map((cat, ci) => {
                      const list = casesFlat.filter(c => c.category === cat);
                      if (list.length === 0) return null;

                      return (
                        <div key={ci}>
                          <div className="flex items-center gap-4 mb-6 md:mb-8">
                            <div className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                                {cat}
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                              {list.map((item, idx) => (
                                <CaseCard key={`${item.slug}-${idx}`} item={item} />
                              ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                    {filtered.map((item, idx) => (
                      <CaseCard key={idx} item={item} />
                    ))}
                  </div>
                )}
            </div>

            <div className="h-20"></div>
        </div>
    );
};

export default Cases;
