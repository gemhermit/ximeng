import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import { getCasesData } from '@/data/cases';
import { getJobsData } from '@/data/jobs';
import { getSolutionsData } from '@/data/solutions';
import { buildBreadcrumbSchema, buildItemListSchema } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';
import { translate } from '@/lib/translations';

const string = (language: 'zh' | 'en', path: string) => translate(language, path) as string;
const strings = (language: 'zh' | 'en', path: string) => translate(language, path) as string[];

type SitemapGroup = {
  title: string;
  links: Array<{
    label: string;
    path: string;
    description?: string;
  }>;
};

type LinkEntry = { label: string; path: string; description?: string };

const linkEntries = (language: 'zh' | 'en', path: string) => strings(language, path) as unknown as LinkEntry[];

const Sitemap: React.FC = () => {
  const { language, route } = useLanguage();
  const solutionsData = getSolutionsData(language);
  const casesData = getCasesData(language);
  const jobsData = getJobsData(language);
  const t = (path: string) => string(language, path);
  const groupTitles = {
    nav: t('sitemap.groups.nav'),
    solutions: t('sitemap.groups.solutions'),
    cases: t('sitemap.groups.cases'),
    jobs: t('sitemap.groups.jobs'),
    legal: t('sitemap.groups.legal'),
  } as const;
  const navLinks = linkEntries(language, 'sitemap.navLinks');
  const legalLinks = linkEntries(language, 'sitemap.legalLinks');
  const keywords = strings(language, 'sitemap.keywords');

  const groups: SitemapGroup[] = [
    { title: groupTitles.nav, links: navLinks },
    {
      title: groupTitles.solutions,
      links: solutionsData.map((item) => ({
        label: item.title,
        path: `/solutions/${item.id}`,
        description: item.desc,
      })),
    },
    {
      title: groupTitles.cases,
      links: casesData.map((item) => ({
        label: item.title,
        path: `/cases/${item.slug}`,
        description: item.category,
      })),
    },
    {
      title: groupTitles.jobs,
      links: jobsData.map((job) => ({
        label: job.title,
        path: `/careers/${job.id}`,
        description: `${job.dept} · ${job.loc} · ${job.type}`,
      })),
    },
    { title: groupTitles.legal, links: legalLinks },
  ];
  const allLinks = groups.flatMap((group) => group.links);

  return (
    <div className="min-h-screen bg-slate-950">
      <Seo
        title={t('sitemap.title')}
        description={t('sitemap.description')}
        path="/sitemap"
        keywords={keywords}
        structuredData={[
          buildBreadcrumbSchema([
            { name: t('sitemap.home'), path: route('/') },
            { name: t('sitemap.title'), path: route('/sitemap') },
          ]),
          buildItemListSchema(
            allLinks.map((item) => ({ name: item.label, path: route(item.path) })),
            t('sitemap.listName'),
          ),
        ]}
      />
      <PageHeader title={t('sitemap.title')} subtitle={t('sitemap.subtitle')} gradient="from-blue-400 via-cyan-400 to-teal-400" />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">{t('sitemap.structure')}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t('sitemap.intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {groups.map((group) => (
              <section key={group.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-5">{group.title}</h3>
                <ul className="space-y-4">
                  {group.links.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={route(item.path)}
                        className="group flex items-start gap-3 text-gray-300 hover:text-blue-300 transition-colors"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500 group-hover:bg-blue-300"></span>
                        <span>
                          <span className="block font-medium text-white group-hover:text-blue-300">
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="mt-1 block text-sm text-gray-500 group-hover:text-gray-400">
                              {item.description}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default Sitemap;
