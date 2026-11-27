import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

const HTML_LANG_MAP: Record<Lang, string> = {
  en: 'en',
  cn: 'zh-CN',
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as Lang;
  return defaultLang;
}

export function getHtmlLang(lang: Lang): string {
  return HTML_LANG_MAP[lang];
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
