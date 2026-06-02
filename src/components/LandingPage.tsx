
import React from 'react';
import Hero from './Hero';
import Modules from './Modules';
import Showcase from './Showcase';
import Values from './Values';
import Partners from './Partners';
import Join from './Join';
import Seo from './Seo';
import { absoluteUrl, buildOrganizationSchema, getSiteMeta } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';

const LandingPage: React.FC = () => {
  const { isEnglish, language, route } = useLanguage();
  const site = getSiteMeta(language);
  const title = isEnglish ? 'AI Solutions and Digital Services' : 'AI 解决方案与数字化服务';
  const description = isEnglish
    ? 'Ximeng Tech builds AI agents, AI solutions, and digital transformation services for industrial manufacturing, education, cultural tourism, cloud infrastructure, AI marketing, and custom AI hardware.'
    : '羲梦科技为工业制造、教育科技、文旅文化、云引擎服务、全域 AI 营销和 AI 硬件定制提供智能体搭建、AI 解决方案与数字化转型服务。';
  const keywords = isEnglish
    ? ['enterprise AI solutions', 'AI agent development', 'AI marketing', 'AI hardware', 'cloud engine']
    : ['企业 AI 解决方案', '智能体搭建', 'AI 营销', 'AI 硬件', '云引擎'];

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/"
        keywords={keywords}
        structuredData={[
          buildOrganizationSchema(language),
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: site.name,
            url: site.url,
            inLanguage: isEnglish ? 'en' : 'zh-CN',
            potentialAction: {
              '@type': 'ContactAction',
              target: absoluteUrl(route('/contact')),
            },
          },
        ]}
      />
      <Hero />
      <Modules />
      <Showcase />
      <Values />
      <Partners />
      <Join />
    </>
  );
};

export default LandingPage;
