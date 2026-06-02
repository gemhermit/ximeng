import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import { getCasesData } from '@/data/cases';
import { getJobsData } from '@/data/jobs';
import { getSolutionsData } from '@/data/solutions';
import { buildBreadcrumbSchema, buildItemListSchema } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';

type SitemapGroup = {
  title: string;
  links: Array<{
    label: string;
    path: string;
    description?: string;
  }>;
};

const Sitemap: React.FC = () => {
  const { isEnglish, language, route } = useLanguage();
  const solutionsData = getSolutionsData(language);
  const casesData = getCasesData(language);
  const jobsData = getJobsData(language);
  const text = isEnglish ? {
    title: 'Sitemap',
    subtitle: 'Sitemap',
    description: 'Ximeng Tech sitemap, covering the homepage, solutions, cases, open roles, contact page, privacy policy, and terms of service.',
    keywords: ['Ximeng Tech sitemap', 'sitemap', 'Ximeng Tech navigation'],
    home: 'Home',
    structure: 'Site Structure',
    intro: 'These links cover the main pages, business solutions, case details, and open roles on the Ximeng Tech website.',
    listName: 'Ximeng Tech Sitemap',
    groups: {
      nav: 'Main Navigation',
      solutions: 'Core Business',
      cases: 'Innovation Cases',
      jobs: 'Open Roles',
      legal: 'Legal',
    },
    navLinks: [
      { label: 'Home', path: '/', description: 'Ximeng Tech homepage' },
      { label: 'Solutions', path: '/solutions', description: 'Enterprise AI solution overview' },
      { label: 'Innovation Cases', path: '/cases', description: 'AI and digital project case library' },
      { label: 'Careers', path: '/careers', description: 'Open roles and team introduction' },
      { label: 'Contact Us', path: '/contact', description: 'Business consulting and contact details' },
    ],
    legalLinks: [
      { label: 'Privacy Policy', path: '/privacy', description: 'Personal information protection notice' },
      { label: 'Terms of Service', path: '/terms', description: 'Website and service usage terms' },
      { label: 'Sitemap', path: '/sitemap', description: 'Complete internal link list' },
    ],
  } : {
    title: '网站地图',
    subtitle: 'Sitemap',
    description: '羲梦科技网站地图，包含首页、解决方案、创新案例、开放职位、联系方式、隐私政策和服务条款等全部主要页面。',
    keywords: ['羲梦科技网站地图', '网站地图', '羲梦科技页面导航'],
    home: '首页',
    structure: '网站结构',
    intro: '以下链接覆盖羲梦科技官网的主要页面、业务方案、案例详情与招聘职位。',
    listName: '羲梦科技网站地图',
    groups: {
      nav: '主导航',
      solutions: '核心业务',
      cases: '创新案例',
      jobs: '开放职位',
      legal: '法律信息',
    },
    navLinks: [
      { label: '首页', path: '/', description: '羲梦科技官网首页' },
      { label: '解决方案', path: '/solutions', description: '企业级 AI 解决方案总览' },
      { label: '创新案例', path: '/cases', description: 'AI 与数字化项目案例库' },
      { label: '加入我们', path: '/careers', description: '开放职位与团队介绍' },
      { label: '联系我们', path: '/contact', description: '业务咨询与联系方式' },
    ],
    legalLinks: [
      { label: '隐私政策', path: '/privacy', description: '个人信息保护说明' },
      { label: '服务条款', path: '/terms', description: '网站和服务使用条款' },
      { label: '网站地图', path: '/sitemap', description: '完整站内链接列表' },
    ],
  };
  const groups: SitemapGroup[] = [
    {
      title: text.groups.nav,
      links: text.navLinks,
    },
    {
      title: text.groups.solutions,
      links: solutionsData.map((item) => ({
        label: item.title,
        path: `/solutions/${item.id}`,
        description: item.desc,
      })),
    },
    {
      title: text.groups.cases,
      links: casesData.map((item) => ({
        label: item.title,
        path: `/cases/${item.slug}`,
        description: item.category,
      })),
    },
    {
      title: text.groups.jobs,
      links: jobsData.map((job) => ({
        label: job.title,
        path: `/careers/${job.id}`,
        description: `${job.dept} · ${job.loc} · ${job.type}`,
      })),
    },
    {
      title: text.groups.legal,
      links: text.legalLinks,
    },
  ];
  const allLinks = groups.flatMap((group) => group.links);

  return (
    <div className="min-h-screen bg-slate-950">
      <Seo
        title={text.title}
        description={text.description}
        path="/sitemap"
        keywords={text.keywords}
        structuredData={[
          buildBreadcrumbSchema([
            { name: text.home, path: route('/') },
            { name: text.title, path: route('/sitemap') },
          ]),
          buildItemListSchema(
            allLinks.map((item) => ({ name: item.label, path: route(item.path) })),
            text.listName,
          ),
        ]}
      />
      <PageHeader title={text.title} subtitle={text.subtitle} gradient="from-blue-400 via-cyan-400 to-teal-400" />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">{text.structure}</h2>
            <p className="text-gray-300 leading-relaxed">
              {text.intro}
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
