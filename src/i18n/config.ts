// Centralised i18n configuration for aiso-group.
// Pattern modelled after aiso-hub and aiso-learn.
// Astro's built-in i18n handles URL routing (see astro.config.mjs); this
// module exposes display labels, locale metadata, and helpers used by the
// BaseLayout, LanguageSwitcher, sitemap, and hreflang links.

export const locales = ['en', 'pt-pt', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Human-readable labels for the switcher dropdown.
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  'pt-pt': 'Português',
  fr: 'Français',
};

// Short labels for the top-bar switcher.
export const localeShortLabels: Record<Locale, string> = {
  en: 'EN',
  'pt-pt': 'PT',
  fr: 'FR',
};

// BCP-47 tags used in <html lang> and <link rel="alternate" hreflang>.
export const localeHtmlLang: Record<Locale, string> = {
  en: 'en',
  'pt-pt': 'pt-PT',
  fr: 'fr',
};

// Type guard.
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

/**
 * Given the current pathname and a target locale, return the equivalent path
 * in that locale.
 *
 * EN is the default and lives at root ("/", "/about/", "/news/").
 * FR and pt-PT live under "/fr/" and "/pt-pt/".
 */
export function localisePath(pathname: string, target: Locale): string {
  // Strip any existing locale prefix.
  const stripped = pathname.replace(/^\/(fr|pt-pt)(?=\/|$)/, '') || '/';
  const prefix = target === defaultLocale ? '' : `/${target}`;
  let result = `${prefix}${stripped}`;
  if (!result.endsWith('/')) result += '/';
  if (result === '') result = '/';
  return result;
}

/** Detect the active locale from an Astro URL pathname. Defaults to EN. */
export function detectLocale(pathname: string): Locale {
  const match = pathname.match(/^\/(fr|pt-pt)(?=\/|$)/);
  return (match?.[1] as Locale) ?? defaultLocale;
}
