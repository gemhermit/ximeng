export type SiteLanguage = 'zh' | 'en';

export const SITE = {
  name: '羲梦科技',
  url: 'https://www.ximengai.top',
  defaultTitle: '羲梦科技 | AI 解决方案与数字化服务',
  defaultDescription:
    '羲梦科技专注于工业制造、教育科技、文旅文化、云引擎服务、全域 AI 营销与 AI 硬件定制，为企业提供 AI 解决方案、智能体搭建和数字化转型服务。',
  defaultKeywords: [
    '羲梦科技',
    'AI 解决方案',
    '数字化转型',
    '工业制造智能体',
    '教育科技平台',
    'AI 文旅',
    '云引擎服务',
    '全域 AI 营销',
    'AI 硬件定制',
  ],
  locale: 'zh_CN',
  email: 'echo@ximengtech.cn',
  phone: '+86 173 1432 4752',
  address: '上海市徐汇区龙台路180号“模速空间”创新生态社区',
  ogImage: '/images/logo.png',
};

export const SITE_EN = {
  name: 'Ximeng Tech',
  url: SITE.url,
  defaultTitle: 'Ximeng Tech | AI Solutions and Digital Services',
  defaultDescription:
    'Ximeng Tech delivers AI solutions, agent development, and digital transformation services for industrial manufacturing, education, cultural tourism, cloud infrastructure, AI marketing, and custom AI hardware.',
  defaultKeywords: [
    'Ximeng Tech',
    'AI solutions',
    'digital transformation',
    'industrial AI agents',
    'education technology',
    'AI tourism',
    'cloud infrastructure',
    'AI marketing',
    'custom AI hardware',
  ],
  locale: 'en_US',
  email: SITE.email,
  phone: SITE.phone,
  address: SITE.address,
  ogImage: SITE.ogImage,
};

export const getSiteMeta = (language: SiteLanguage = 'zh') => (
  language === 'en' ? SITE_EN : SITE
);

export type StructuredData = Record<string, unknown> | Record<string, unknown>[];

type KeywordInput = string | string[] | undefined;

export const buildPageTitle = (pageTitle?: string, language: SiteLanguage = 'zh') => {
  const site = getSiteMeta(language);
  const value = pageTitle?.trim();
  return value ? `${value} | ${site.name}` : site.defaultTitle;
};

export const absoluteUrl = (path: string) => {
  if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(path)) {
    return path;
  }

  return new URL(path.startsWith('/') ? path : `/${path}`, SITE.url).toString();
};

export const normalizeText = (value: string) => value.replace(/\s+/g, ' ').trim();

export const buildKeywords = (...args: Array<KeywordInput | SiteLanguage>) => {
  const [first, ...rest] = args;
  const language = first === 'en' || first === 'zh' ? first : 'zh';
  const inputs = (first === 'en' || first === 'zh' ? rest : args) as KeywordInput[];
  const site = getSiteMeta(language);
  const values = inputs.flatMap((input) =>
    Array.isArray(input) ? input : input ? [input] : [],
  );

  return Array.from(
    new Set(
      [...site.defaultKeywords, ...values]
        .map((keyword) => keyword.trim())
        .filter(Boolean),
    ),
  );
};

export const buildOrganizationSchema = (language: SiteLanguage = 'zh') => {
  const site = getSiteMeta(language);

  return {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: absoluteUrl(site.ogImage),
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CN',
    addressRegion: '上海',
    addressLocality: '上海市',
    streetAddress: site.address,
  },
  };
};

export const buildBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const buildItemListSchema = (
  items: Array<{ name: string; path: string }>,
  name?: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: absoluteUrl(item.path),
  })),
});
