import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// utils
//
// import { defaultLang } from './config-lang';
//
import enLocales from './langs/en';
import hiLocales from './langs/hi';
import localStorageAvailable from './localStorageAvailable';

// ----------------------------------------------------------------------

let lng = 'en';

// ----------------------------------------------------------------------

const storageAvailable = localStorageAvailable();

if (storageAvailable) {
  lng = localStorage.getItem('i18nextLng') || 'en';
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enLocales },
      hi: { translations: hiLocales },
    },
    lng,
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
