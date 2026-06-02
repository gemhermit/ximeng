import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  absoluteUrl,
  buildKeywords,
  buildPageTitle,
  getSiteMeta,
  normalizeText,
} from '@/lib/seo';
import type { StructuredData } from '@/lib/seo';
import { stripLanguagePrefix, useLanguage } from '@/lib/i18n';

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  keywords?: string[];
  noindex?: boolean;
  structuredData?: StructuredData;
};

const setMeta = (
  selector: string,
  attributes: Record<string, string>,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([name, value]) => {
      element?.setAttribute(name, value);
    });
    element.setAttribute('data-seo', 'managed');
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const setLink = (rel: string, href: string, attributes?: Record<string, string>) => {
  const selector = attributes?.hreflang
    ? `link[rel="${rel}"][hreflang="${attributes.hreflang}"]`
    : `link[rel="${rel}"]`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    element.setAttribute('data-seo', 'managed');
    document.head.appendChild(element);
  }

  Object.entries(attributes ?? {}).forEach(([name, value]) => {
    element?.setAttribute(name, value);
  });
  element.setAttribute('href', href);
};

const Seo = ({
  title,
  description,
  path,
  image,
  type = 'website',
  keywords,
  noindex = false,
  structuredData,
}: SeoProps) => {
  const location = useLocation();
  const { language } = useLanguage();
  const site = getSiteMeta(language);

  useEffect(() => {
    const pagePath = path ?? location.pathname;
    const normalizedPath = stripLanguagePrefix(pagePath);
    const localizedPath = language === 'en'
      ? (normalizedPath === '/' ? '/en' : `/en${normalizedPath}`)
      : normalizedPath;
    const nextTitle = buildPageTitle(title, language);
    const nextDescription = normalizeText(description || site.defaultDescription);
    const canonicalUrl = absoluteUrl(localizedPath);
    const imageUrl = absoluteUrl(image || site.ogImage);
    const robots = noindex ? 'noindex, follow' : 'index, follow';

    document.title = nextTitle;

    setMeta('meta[name="description"]', { name: 'description' }, nextDescription);
    setMeta('meta[name="keywords"]', { name: 'keywords' }, buildKeywords(language, keywords).join(', '));
    setMeta('meta[name="author"]', { name: 'author' }, site.name);
    setMeta('meta[name="robots"]', { name: 'robots' }, robots);

    setMeta('meta[property="og:type"]', { property: 'og:type' }, type);
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, site.name);
    setMeta('meta[property="og:locale"]', { property: 'og:locale' }, site.locale);
    setMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    setMeta('meta[property="og:title"]', { property: 'og:title' }, nextTitle);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, nextDescription);
    setMeta('meta[property="og:image"]', { property: 'og:image' }, imageUrl);

    setMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    setMeta('meta[name="twitter:url"]', { name: 'twitter:url' }, canonicalUrl);
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, nextTitle);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, nextDescription);
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl);

    setLink('canonical', absoluteUrl(localizedPath));
    setLink('alternate', absoluteUrl(normalizedPath), { hreflang: 'zh-CN' });
    setLink('alternate', absoluteUrl(normalizedPath === '/' ? '/en' : `/en${normalizedPath}`), { hreflang: 'en' });

    document.head
      .querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"][data-seo="managed"]')
      .forEach((element) => element.remove());

    if (structuredData) {
      const graph = Array.isArray(structuredData) ? structuredData : [structuredData];
      graph.forEach((item) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo', 'managed');
        script.text = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }
  }, [
    description,
    image,
    keywords,
    language,
    location.pathname,
    noindex,
    path,
    site.defaultDescription,
    site.locale,
    site.name,
    structuredData,
    title,
    type,
  ]);

  return null;
};

export default Seo;
