import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export type Language = 'zh' | 'en';

export const DEFAULT_LANGUAGE: Language = 'zh';
export const EN_PREFIX = '/en';

type LanguageContextValue = {
  language: Language;
  isEnglish: boolean;
  route: (to: string) => string;
  switchTo: (language: Language) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const getLanguageFromPath = (pathname: string): Language => (
  pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`) ? 'en' : 'zh'
);

export const stripLanguagePrefix = (pathname: string) => {
  if (pathname === EN_PREFIX) return '/';
  if (pathname.startsWith(`${EN_PREFIX}/`)) {
    return pathname.slice(EN_PREFIX.length) || '/';
  }
  return pathname || '/';
};

const splitTo = (to: string) => {
  const hashIndex = to.indexOf('#');
  const queryIndex = to.indexOf('?');
  const indexes = [hashIndex, queryIndex].filter((index) => index >= 0);
  const splitIndex = indexes.length > 0 ? Math.min(...indexes) : -1;

  if (splitIndex < 0) {
    return { pathname: to, suffix: '' };
  }

  return {
    pathname: to.slice(0, splitIndex),
    suffix: to.slice(splitIndex),
  };
};

export const localizePath = (to: string, language: Language) => {
  if (
    to.startsWith('#') ||
    /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(to)
  ) {
    return to;
  }

  const { pathname, suffix } = splitTo(to);
  const normalized = pathname
    ? pathname.startsWith('/') ? pathname : `/${pathname}`
    : '/';
  const stripped = stripLanguagePrefix(normalized);

  if (language === 'en') {
    return `${stripped === '/' ? EN_PREFIX : `${EN_PREFIX}${stripped}`}${suffix}`;
  }

  return `${stripped}${suffix}`;
};

export const buildLanguageSwitchPath = (
  pathname: string,
  search: string,
  hash: string,
  language: Language,
) => `${localizePath(stripLanguagePrefix(pathname), language)}${search}${hash}`;

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  }, [language]);

  const value: LanguageContextValue = {
    language,
    isEnglish: language === 'en',
    route: (to) => localizePath(to, language),
    switchTo: (nextLanguage) => buildLanguageSwitchPath(
      location.pathname,
      location.search,
      location.hash,
      nextLanguage,
    ),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return value;
};
