
import React from 'react';
import Hero from './Hero';
import Modules from './Modules';
import Showcase from './Showcase';
import Values from './Values';
import Partners from './Partners';
import Join from './Join';
import Seo from './Seo';
import { SITE, absoluteUrl, buildOrganizationSchema } from '@/lib/seo';

const LandingPage: React.FC = () => {
  return (
    <>
      <Seo
        title="AI 解决方案与数字化服务"
        description="羲梦科技为工业制造、教育科技、文旅文化、云引擎服务、全域 AI 营销和 AI 硬件定制提供智能体搭建、AI 解决方案与数字化转型服务。"
        path="/"
        keywords={['企业 AI 解决方案', '智能体搭建', 'AI 营销', 'AI 硬件', '云引擎']}
        structuredData={[
          buildOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE.name,
            url: SITE.url,
            inLanguage: 'zh-CN',
            potentialAction: {
              '@type': 'ContactAction',
              target: absoluteUrl('/contact'),
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
