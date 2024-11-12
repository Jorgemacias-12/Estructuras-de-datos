import spanish from '@/locales/es.json';
import english from '@/locales/en.json';

const LANGUAGES: Record<string, any> = {
  en: english,
  es: spanish
}

export const getI18N = (currentLocale: string) => {
  return LANGUAGES[currentLocale] ?? LANGUAGES['es'];
}