import 'server-only';

interface Dictionary {
  welcome: string;
  description: string;
  getStarted: string;
  learnMore: string;
  services: string;
  whyChooseUs: string;
  contactUs: string;
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  sv: () => import('./dictionaries/sv.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Default to 'en' if the locale is not supported
  const lang = locale in dictionaries ? locale : 'en';
  return dictionaries[lang]();
};
