import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import { casesData } from '@/data/cases';
import { jobsData } from '@/data/jobs';
import { solutionsData } from '@/data/solutions';
import { buildBreadcrumbSchema, buildItemListSchema } from '@/lib/seo';

type SitemapGroup = {
  title: string;
  links: Array<{
    label: string;
    path: string;
    description?: string;
  }>;
};

const groups: SitemapGroup[] = [
  {
    title: '主导航',
    links: [
      { label: '首页', path: '/', description: '羲梦科技官网首页' },
      { label: '解决方案', path: '/solutions', description: '企业级 AI 解决方案总览' },
      { label: '创新案例', path: '/cases', description: 'AI 与数字化项目案例库' },
      { label: '加入我们', path: '/careers', description: '开放职位与团队介绍' },
      { label: '联系我们', path: '/contact', description: '业务咨询与联系方式' },
    ],
  },
  {
    title: '核心业务',
    links: solutionsData.map((item) => ({
      label: item.title,
      path: `/solutions/${item.id}`,
      description: item.desc,
    })),
  },
  {
    title: '创新案例',
    links: casesData.map((item) => ({
      label: item.title,
      path: `/cases/${item.slug}`,
      description: item.category,
    })),
  },
  {
    title: '开放职位',
    links: jobsData.map((job) => ({
      label: job.title,
      path: `/careers/${job.id}`,
      description: `${job.dept} · ${job.loc} · ${job.type}`,
    })),
  },
  {
    title: '法律信息',
    links: [
      { label: '隐私政策', path: '/privacy', description: '个人信息保护说明' },
      { label: '服务条款', path: '/terms', description: '网站和服务使用条款' },
      { label: '网站地图', path: '/sitemap', description: '完整站内链接列表' },
    ],
  },
];

const allLinks = groups.flatMap((group) => group.links);

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Seo
        title="网站地图"
        description="羲梦科技网站地图，包含首页、解决方案、创新案例、开放职位、联系方式、隐私政策和服务条款等全部主要页面。"
        path="/sitemap"
        keywords={['羲梦科技网站地图', '网站地图', '羲梦科技页面导航']}
        structuredData={[
          buildBreadcrumbSchema([
            { name: '首页', path: '/' },
            { name: '网站地图', path: '/sitemap' },
          ]),
          buildItemListSchema(
            allLinks.map((item) => ({ name: item.label, path: item.path })),
            '羲梦科技网站地图',
          ),
        ]}
      />
      <PageHeader title="网站地图" subtitle="Sitemap" gradient="from-blue-400 via-cyan-400 to-teal-400" />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">网站结构</h2>
            <p className="text-gray-300 leading-relaxed">
              以下链接覆盖羲梦科技官网的主要页面、业务方案、案例详情与招聘职位。
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
                        to={item.path}
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
