import spanish from '@/locales/es.json';
import english from '@/locales/en.json';
import type { Traduction } from '@/types';

const LANGUAGES: Record<string, Traduction> = {
  en: english,
  es: spanish
}

export const getI18N = (currentLocale: string) => {
  return LANGUAGES[currentLocale] ?? LANGUAGES['es'];
}