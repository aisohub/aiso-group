// Dictionary dispatcher. Astro's built-in i18n handles URL routing; this file
// gives each page a one-liner to get the right dictionary for `Astro.currentLocale`.

import { en } from './en';
import { fr } from './fr';
import { ptPt } from './pt-pt';
import { defaultLocale, isLocale, type Locale } from './config';
import type { Dictionary } from './en';

const dictionaries: Record<Locale, Dictionary> = {
  en,
  fr,
  'pt-pt': ptPt,
};

/** Return the dictionary for a given locale (falls back to EN). */
export function getDictionary(locale: Locale | string | undefined): Dictionary {
  const safe: Locale = isLocale(locale) ? locale : defaultLocale;
  return dictionaries[safe];
}

/** Shortcut for page frontmatter — `const t = useT(Astro.currentLocale);` */
export function useT(locale: Locale | string | undefined): Dictionary {
  return getDictionary(locale);
}
