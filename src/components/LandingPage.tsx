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
import { translate } from '@/lib/translations';

const string = (language: 'zh' | 'en', path: string) => translate(language, path) as string;
const strings = (language: 'zh' | 'en', path: string) => translate(language, path) as string[];

const LandingPage: React.FC = () => {
  const { language, isEnglish, route } = useLanguage();
  const site = getSiteMeta(language);
  const t = (path: string) => string(language, path);
  const keywords = strings(language, 'landing.keywords');

  return (
    <>
      <Seo
        title={t('landing.title')}
        description={t('landing.description')}
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
