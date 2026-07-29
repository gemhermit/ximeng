import React, { useLayoutEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import { getSolutionById, solutionColorClasses } from '@/data/solutions';
import { absoluteUrl, buildBreadcrumbSchema, getSiteMeta } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';
import { translate } from '@/lib/translations';
import gsap from 'gsap';

const string = (language: 'zh' | 'en', path: string) => translate(language, path) as string;

const SolutionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const containerRef = useRef(null);
  const { language, route } = useLanguage();
  const site = getSiteMeta(language);
  const solution = getSolutionById(id, language);
  const t = (path: string) => string(language, path);

  useLayoutEffect(() => {
    if (!solution) return;

    const ctx = gsap.context(() => {
      gsap.from('.solution-detail-anim', {
        y: 36,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.15,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [solution]);

  if (!solution) {
    return <Navigate to={route('/solutions')} replace />;
  }

  const color = solutionColorClasses[solution.color];

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950">
      <Seo
        title={solution.title}
        description={`${solution.desc}${solution.overview}`}
        path={`/solutions/${solution.id}`}
        image={solution.image}
        keywords={[solution.title, solution.subtitle, ...solution.features, ...solution.scenarios]}
        structuredData={[
          buildBreadcrumbSchema([
            { name: t('solutionDetail.home'), path: route('/') },
            { name: t('solutionDetail.solutions'), path: route('/solutions') },
            { name: solution.title, path: route(`/solutions/${solution.id}`) },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: solution.title,
            serviceType: solution.subtitle,
            description: solution.overview,
            image: absoluteUrl(solution.image),
            provider: {
              '@type': 'Organization',
              name: site.name,
            },
            areaServed: 'CN',
            url: absoluteUrl(route(`/solutions/${solution.id}`)),
          },
        ]}
      />
      <PageHeader title={solution.title} subtitle={solution.subtitle} gradient={color.gradient} />

      <div className="container mx-auto px-6 py-12 md:py-16">
        <Link to={route(`/solutions#${solution.id}`)} className="solution-detail-anim inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <i className="fas fa-arrow-left"></i>
          {t('solutionDetail.back')}
        </Link>

        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3 solution-detail-anim">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
              <img src={solution.image} alt={solution.title} className="w-full aspect-video object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div className="absolute left-5 bottom-5 right-5 flex flex-wrap items-center gap-3">
                <div className={`h-12 w-12 rounded-xl ${color.iconBg} border ${color.border} backdrop-blur-md flex items-center justify-center`}>
                  <i className={`fas ${solution.icon} text-xl ${color.text}`}></i>
                </div>
                <div className="min-w-0">
                  <div className={`${color.text} text-xs font-bold tracking-widest`}>{solution.subtitle}</div>
                  <div className="text-white text-xl md:text-2xl font-bold">{solution.title}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 solution-detail-anim">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className={`${color.text} text-xs font-bold tracking-widest mb-3`}>{t('solutionDetail.overview')}</div>
              <p className="text-slate-300 leading-relaxed">{solution.overview}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {solution.metrics.map((metric) => (
                  <span key={metric} className={`px-3 py-1 rounded-full ${color.bgSoft} ${color.border} border text-slate-200 text-xs`}>
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="solution-detail-anim rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
              <span className={`block h-7 w-1 rounded-full ${color.bg}`}></span>
              {t('solutionDetail.capabilities')}
            </h2>
            <div className="space-y-3">
              {solution.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-950/40 p-3">
                  <span className={`h-2 w-2 rounded-full ${color.bg} shadow-[0_0_10px_currentColor]`}></span>
                  <span className="text-slate-200 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="solution-detail-anim rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
              <span className={`block h-7 w-1 rounded-full ${color.bg}`}></span>
              {t('solutionDetail.scenarios')}
            </h2>
            <ul className="space-y-3">
              {solution.scenarios.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <i className={`fas fa-check-circle ${color.text} mt-0.5`}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="solution-detail-anim rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
              <span className={`block h-7 w-1 rounded-full ${color.bg}`}></span>
              {t('solutionDetail.outcomes')}
            </h2>
            <ul className="space-y-3">
              {solution.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <i className={`fas fa-arrow-trend-up ${color.text} mt-0.5`}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="solution-detail-anim mt-12 rounded-2xl border border-white/10 bg-slate-900/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <div className="text-white text-xl font-bold mb-2">{t('solutionDetail.ctaTitle')}</div>
            <p className="text-slate-400 text-sm">{t('solutionDetail.ctaDesc')}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            {solution.link && (
              <a
                href={solution.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-lg ${color.bg} px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity`}
              >
                {t('solutionDetail.tryNow')}
                <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            )}
            <Link
              to={route('/contact')}
              className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white transition-colors ${
                solution.link
                  ? 'border border-white/15 bg-white/5 hover:bg-white/10'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {t('solutionDetail.cta')}
              <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>
        </section>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default SolutionDetail;
