// Static search index for the /search results page.
//
// Purpose: power the on-site Search endpoint referenced by the homepage
// WebSite/SearchAction JSON-LD (`urlTemplate`). Google requires a working
// search endpoint to render the sitelinks searchbox on the brand SERP.
//
// Strategy: pre-compose a flat array of every canonical page on the site
// (homepages, hubs, brand pages, contact, news index) at build time. News
// article slugs are merged in at the page level via `getCollection('news')`
// inside `src/pages/search.astro` so this file stays static and dependency-free.
//
// Pages are tagged with locale so `/search`, `/pt-pt/search`, and `/fr/search`
// each filter to their language-scoped entries.

import type { Locale } from '../i18n/config';

export interface SearchEntry {
  url: string;
  title: string;
  description: string;
  locale: Locale;
  tags: string[];
}

// Sub-brand entries are generated once per locale so the search hits the
// per-locale brand-page slug. The brand titles are intentionally identical
// across locales because they are proper nouns.
const subBrands: Array<{ slug: string; title: string; descEn: string; descPtPt: string; descFr: string }> = [
  {
    slug: 'aiso-hub',
    title: 'AISO Hub',
    descEn: 'AI search optimization for brands.',
    descPtPt: 'Otimização de pesquisa por IA para marcas.',
    descFr: 'Optimisation de la recherche IA pour les marques.',
  },
  {
    slug: 'aiso-dev',
    title: 'AISO Dev',
    descEn: 'AI implementation and product engineering.',
    descPtPt: 'Implementação de IA e engenharia de produto.',
    descFr: 'Implémentation IA et ingénierie produit.',
  },
  {
    slug: 'aiso-buzz',
    title: 'AISO Buzz',
    descEn: 'AI-powered social and content for B2B teams.',
    descPtPt: 'Conteúdo e redes sociais com IA para equipas B2B.',
    descFr: 'Contenu et social media propulsés par IA pour équipes B2B.',
  },
  {
    slug: 'aiso-learn',
    title: 'AISO Learn',
    descEn: 'Corporate AI training and EU AI Act compliance.',
    descPtPt: 'Formação corporativa em IA e conformidade com a Lei da IA da UE.',
    descFr: 'Formation IA en entreprise et conformité au règlement européen IA.',
  },
];

function buildLocaleEntries(locale: Locale, prefix: string): SearchEntry[] {
  const labels: Record<string, { home: [string, string]; brands: [string, string]; about: [string, string]; contact: [string, string]; news: [string, string] }> = {
    en: {
      home: ['AISO Group - Specialist AI Group based in Lisbon', 'Four specialist AI companies under one roof. AI search, AI systems, AI-powered social, AI training.'],
      brands: ['Brands - AISO Group', 'The four specialist AI companies inside AISO Group: AISO Hub, AISO Dev, AISO Buzz, AISO Learn.'],
      about: ['About AISO Group', 'Who we are, where we operate, and why specialists beat generalists in AI.'],
      contact: ['Contact AISO Group', 'Get in touch with AISO Group in Lisbon, Portugal.'],
      news: ['News and notes - AISO Group', 'Announcements, specialist series, and meta-essays from the AISO Group team.'],
    },
    'pt-pt': {
      home: ['AISO Group - Grupo especialista em IA em Lisboa', 'Quatro empresas especialistas em IA sob o mesmo tecto. Pesquisa por IA, sistemas de IA, social com IA, formação em IA.'],
      brands: ['Marcas - AISO Group', 'As quatro empresas especialistas em IA do AISO Group: AISO Hub, AISO Dev, AISO Buzz, AISO Learn.'],
      about: ['Sobre o AISO Group', 'Quem somos, onde operamos e porque é que os especialistas superam os generalistas em IA.'],
      contact: ['Contacto - AISO Group', 'Fale com o AISO Group em Lisboa, Portugal.'],
      news: ['Notícias e notas - AISO Group', 'Anúncios, séries de especialistas e ensaios da equipa do AISO Group.'],
    },
    fr: {
      home: ['AISO Group - Groupe spécialiste IA basé à Lisbonne', 'Quatre entreprises spécialistes en IA réunies sous un même toit. Recherche IA, systèmes IA, social propulsé par IA, formation IA.'],
      brands: ['Marques - AISO Group', 'Les quatre entreprises spécialistes en IA du groupe AISO : AISO Hub, AISO Dev, AISO Buzz, AISO Learn.'],
      about: ['À propos d’AISO Group', 'Qui nous sommes, où nous opérons et pourquoi les spécialistes l’emportent sur les généralistes en IA.'],
      contact: ['Contact - AISO Group', 'Échangez avec AISO Group à Lisbonne, Portugal.'],
      news: ['Actualités et notes - AISO Group', 'Annonces, séries spécialistes et essais de l’équipe AISO Group.'],
    },
  };

  const L = labels[locale];

  const entries: SearchEntry[] = [
    { url: `${prefix}/`, title: L.home[0], description: L.home[1], locale, tags: ['home', 'aiso', 'group'] },
    { url: `${prefix}/brands/`, title: L.brands[0], description: L.brands[1], locale, tags: ['brands', 'specialists'] },
    { url: `${prefix}/about/`, title: L.about[0], description: L.about[1], locale, tags: ['about', 'group'] },
    { url: `${prefix}/contact/`, title: L.contact[0], description: L.contact[1], locale, tags: ['contact'] },
    { url: `${prefix}/news/`, title: L.news[0], description: L.news[1], locale, tags: ['news', 'blog'] },
  ];

  for (const b of subBrands) {
    const desc = locale === 'pt-pt' ? b.descPtPt : locale === 'fr' ? b.descFr : b.descEn;
    entries.push({
      url: `${prefix}/brands/${b.slug}/`,
      title: `${b.title} - AISO Group`,
      description: desc,
      locale,
      tags: ['brand', b.slug, b.slug.replace('aiso-', '')],
    });
  }

  return entries;
}

// Pre-computed static section (homepages, hubs, brand pages, contact, news index).
// News article entries are appended at runtime inside `src/pages/search.astro`.
export const STATIC_SEARCH_INDEX: SearchEntry[] = [
  ...buildLocaleEntries('en', ''),
  ...buildLocaleEntries('pt-pt', '/pt-pt'),
  ...buildLocaleEntries('fr', '/fr'),
];

/**
 * Tokenise a free-text query into trimmed, lowercased tokens.
 * Empty strings and tokens shorter than 2 chars are dropped to keep the
 * filter signal-rich.
 */
export function tokenise(query: string): string[] {
  return query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .map((tok) => tok.replace(/[^\p{L}\p{N}-]/gu, ''))
    .filter((tok) => tok.length >= 2);
}

/**
 * Score an entry against the tokenised query. Higher = better match.
 * Title hits weigh more than description/tag hits.
 */
export function scoreEntry(entry: SearchEntry, tokens: string[]): number {
  if (tokens.length === 0) return 0;
  const title = entry.title.toLowerCase();
  const desc = entry.description.toLowerCase();
  const tagSet = entry.tags.map((t) => t.toLowerCase()).join(' ');

  let score = 0;
  for (const tok of tokens) {
    if (title.includes(tok)) score += 3;
    if (desc.includes(tok)) score += 1;
    if (tagSet.includes(tok)) score += 2;
  }
  return score;
}

/**
 * Run a query against an arbitrary index slice (already locale-filtered).
 * Returns entries sorted by descending score, dropping zero-score rows.
 */
export function searchIndex(index: SearchEntry[], query: string): SearchEntry[] {
  const tokens = tokenise(query);
  if (tokens.length === 0) return [];
  return index
    .map((entry) => ({ entry, score: scoreEntry(entry, tokens) }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((row) => row.entry);
}
