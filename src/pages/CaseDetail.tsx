import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import { getCaseBySlug, getCategoryImage } from '@/data/cases';
import { absoluteUrl, buildBreadcrumbSchema, getSiteMeta } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';

const CaseDetail: React.FC = () => {
  const { slug } = useParams();
  const { isEnglish, language, route } = useLanguage();
  const site = getSiteMeta(language);
  const item = getCaseBySlug(slug, language);
  const text = isEnglish ? {
    notFound: 'Case Not Found',
    notFoundMessage: 'The case you are looking for does not exist. Please return to the case library.',
    backList: 'Back to Case Library',
    contact: 'Contact Us',
    home: 'Home',
    cases: 'Innovation Cases',
    details: 'Project Details',
    scope: 'Implementation Scope',
    achievements: 'Results',
    external: 'External Link',
  } : {
    notFound: '案例未找到',
    notFoundMessage: '未找到对应案例，请返回列表。',
    backList: '返回案例列表',
    contact: '联系我们',
    home: '首页',
    cases: '创新案例',
    details: '项目详情',
    scope: '实施范围',
    achievements: '成果数据',
    external: '外部链接',
  };

  if (!item) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Seo title={text.notFound} path="/cases" noindex />
        <PageHeader title={text.notFound} subtitle="Not Found" gradient="from-purple-400 via-pink-400 to-red-400" />
        <div className="container mx-auto px-6 py-12">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <p className="text-gray-300">{text.notFoundMessage}</p>
            <Link to={route('/cases')} className="mt-4 inline-block px-4 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600">{text.backList}</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Seo
        title={item.title}
        description={`${item.summary}${item.story ? ` ${item.story}` : ''}`}
        path={`/cases/${item.slug}`}
        image={item.image || getCategoryImage(item.category)}
        type="article"
        keywords={[item.title, item.category, ...(item.scope ?? []), ...(item.achievements ?? [])]}
        structuredData={[
          buildBreadcrumbSchema([
            { name: text.home, path: route('/') },
            { name: text.cases, path: route('/cases') },
            { name: item.title, path: route(`/cases/${item.slug}`) },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: item.title,
            description: item.summary,
            image: absoluteUrl(item.image || getCategoryImage(item.category)),
            author: {
              '@type': 'Organization',
              name: site.name,
            },
            publisher: {
              '@type': 'Organization',
              name: site.name,
              logo: {
                '@type': 'ImageObject',
                url: absoluteUrl('/images/logo.png'),
              },
            },
            mainEntityOfPage: absoluteUrl(route(`/cases/${item.slug}`)),
            articleSection: item.category,
          },
        ]}
      />
      <PageHeader title={item.title} subtitle={item.category} gradient="from-purple-400 via-pink-400 to-red-400" />
      <div className="container mx-auto px-6 py-12">
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
          <div className="relative w-full aspect-[21/9] overflow-hidden">
            <img
              src={item.image || getCategoryImage(item.category)}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="text-sm text-blue-400 font-bold tracking-widest uppercase mb-3">{item.category}</div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{item.title}</h1>
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">{item.summary}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {item.story && (
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                  <h2 className="text-xl font-bold text-white">{text.details}</h2>
                </div>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">{item.story}</p>
              </div>
            )}
            {item.scope && item.scope.length > 0 && (
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                  <h2 className="text-xl font-bold text-white">{text.scope}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.scope.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                      <span className="text-slate-300 text-base">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {item.achievements && item.achievements.length > 0 && (
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                  <h2 className="text-xl font-bold text-white">{text.achievements}</h2>
                </div>
                <div className="space-y-3">
                  {item.achievements.map((a, i) => (
                    <div key={i} className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-base font-medium">
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="space-y-3">
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="block w-full text-center px-6 py-3 rounded-xl bg-white/10 text-slate-200 text-base border border-white/20 hover:bg-white/20 transition-colors">{text.external}</a>
              )}
              <Link to={route('/contact')} className="block w-full text-center px-6 py-3 rounded-xl bg-blue-600 text-white text-base hover:bg-blue-500 transition-colors">{text.contact}</Link>
              <Link to={route('/cases')} className="block w-full text-center px-6 py-3 rounded-xl bg-white/10 text-slate-200 text-base border border-white/20 hover:bg-white/20 transition-colors">{text.backList}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default CaseDetail;
