import { useTranslation } from 'react-i18next';
// utils
import localStorageAvailable from './localStorageAvailable';
// components
//
import { allLangs, defaultLang } from './config-lang';

// ----------------------------------------------------------------------

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();

  const storageAvailable = localStorageAvailable();

  const langStorage = storageAvailable
    ? localStorage.getItem('i18nextLng')
    : '';

  const currentLang =
    allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    t: (text: any, options?: any) => translate(text, options),
    currentLang,
    allLangs,
  };
}
