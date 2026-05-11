// Author registry for /news/* posts. Powers Person + AuthorRole JSON-LD on
// every article and the /about/team/ author hub page.
//
// Each author has a stable URL on /about/team/<slug>/ that the article
// JSON-LD `author.url` property points to, plus sameAs links so AI engines
// (Perplexity, ChatGPT search, Google AI Overviews) can verify expertise.
//
// Bios are factual: title, role, areas of expertise, public profiles.

export type AuthorSlug = 'greg-stoos';

export interface AuthorLocaleCopy {
  bio: string;          // 1-2 sentence bio used in JSON-LD description + team page card
  longBio: string;      // 3-4 sentence bio used on the per-author page
  jobTitle: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Author {
  slug: AuthorSlug;
  name: string;
  // The /news author string in MDX frontmatter; matched against post.data.author.
  matchName: string;
  // Role within the AISO Group organisation. Drives schema.org/AuthorRole.
  roleName: string;
  // Areas of expertise / knowsAbout, machine-readable.
  knowsAbout: string[];
  // Public profile URLs (LinkedIn, Twitter/X, etc.). Power Person.sameAs.
  sameAs: string[];
  // Optional headshot URL (omitted for now; team page renders an initials block).
  image?: string;
  copy: {
    en: AuthorLocaleCopy;
    'pt-pt': AuthorLocaleCopy;
    fr: AuthorLocaleCopy;
  };
}

export const authors: Record<AuthorSlug, Author> = {
  'greg-stoos': {
    slug: 'greg-stoos',
    name: 'Greg Stoos',
    matchName: 'Greg Stoos',
    roleName: 'Founder, AISO Group',
    knowsAbout: [
      'AI Search Optimization',
      'Generative Engine Optimization',
      'AI Overviews',
      'ChatGPT search',
      'Perplexity citations',
      'Brand visibility on LLMs',
      'AI systems for SMBs',
    ],
    sameAs: [
      'https://www.linkedin.com/in/gregstoos/',
      'https://aiso-hub.com/about/',
    ],
    copy: {
      en: {
        jobTitle: 'Founder, AISO Group',
        bio: 'Greg Stoos founded AISO Group to give brands a specialist for every AI moment: search, systems, social, and training.',
        longBio:
          'Greg Stoos is the founder of AISO Group, a four-brand house covering AI Search Optimization (AISO Hub), AI Systems (AISO Dev), AI-Powered Social (AISO Buzz), and corporate AI Training (AISO Learn). He works with B2B and consumer brands across Europe to make their products the answer AI engines cite, integrate AI into daily operations, and train teams to use it well.',
        metaTitle: 'Greg Stoos - Founder, AISO Group',
        metaDescription:
          'Founder of AISO Group. Specialist in AI search optimization, generative engine optimization, and brand visibility on ChatGPT, Perplexity, and Google AI Overviews.',
      },
      'pt-pt': {
        jobTitle: 'Fundador, AISO Group',
        bio: 'Greg Stoos fundou o AISO Group para dar às marcas um especialista para cada momento de IA: pesquisa, sistemas, social e formação.',
        longBio:
          'Greg Stoos é o fundador do AISO Group, uma casa com quatro marcas que cobre Otimização para Pesquisa por IA (AISO Hub), Sistemas de IA (AISO Dev), Social com IA (AISO Buzz) e Formação Corporativa em IA (AISO Learn). Trabalha com marcas B2B e de consumo na Europa para tornar os seus produtos a resposta que os motores de IA citam, integrar IA nas operações diárias e formar equipas para a usar bem.',
        metaTitle: 'Greg Stoos - Fundador, AISO Group',
        metaDescription:
          'Fundador do AISO Group. Especialista em otimização para pesquisa por IA, generative engine optimization e visibilidade de marca no ChatGPT, Perplexity e Google AI Overviews.',
      },
      fr: {
        jobTitle: 'Fondateur, AISO Group',
        bio: 'Greg Stoos a fondé AISO Group pour offrir aux marques un spécialiste pour chaque moment IA : recherche, systèmes, social et formation.',
        longBio:
          'Greg Stoos est le fondateur de AISO Group, une maison de quatre marques couvrant l\'Optimisation pour la Recherche par IA (AISO Hub), les Systèmes d\'IA (AISO Dev), le Social Boosté par l\'IA (AISO Buzz) et la Formation IA en Entreprise (AISO Learn). Il travaille avec des marques B2B et grand public en Europe pour faire de leurs produits la réponse que les moteurs IA citent, intégrer l\'IA dans les opérations quotidiennes et former les équipes à bien l\'utiliser.',
        metaTitle: 'Greg Stoos - Fondateur, AISO Group',
        metaDescription:
          'Fondateur de AISO Group. Spécialiste de l\'optimisation pour la recherche par IA, de la generative engine optimization et de la visibilité de marque sur ChatGPT, Perplexity et Google AI Overviews.',
      },
    },
  },
};

export const authorSlugs: AuthorSlug[] = ['greg-stoos'];

/** Find an author by the free-form `author` field in news MDX frontmatter. */
export function findAuthorByName(name: string): Author | undefined {
  return Object.values(authors).find((a) => a.matchName === name);
}

/** Build the canonical /about/team/<slug>/ URL for a given locale. */
export function authorUrl(
  slug: AuthorSlug,
  locale: 'en' | 'pt-pt' | 'fr'
): string {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return `https://aiso-group.com${prefix}/about/team/${slug}/`;
}

/** Build Person + AuthorRole JSON-LD for embedding in NewsArticle markup. */
export function buildPersonJsonLd(
  author: Author,
  locale: 'en' | 'pt-pt' | 'fr'
): Record<string, unknown> {
  const t = author.copy[locale];
  const url = authorUrl(author.slug, locale);
  return {
    '@type': 'Person',
    '@id': url + '#person',
    name: author.name,
    url,
    jobTitle: t.jobTitle,
    description: t.bio,
    knowsAbout: author.knowsAbout,
    sameAs: author.sameAs,
    worksFor: {
      '@type': 'Organization',
      name: 'AISO Group',
      url: 'https://aiso-group.com/',
    },
    ...(author.image ? { image: author.image } : {}),
  };
}

/**
 * Wrap a Person in a schema.org/AuthorRole that names their role on this
 * specific article. AuthorRole is the structured way to attach role context
 * (e.g., "Founder, AISO Group") to an authoring relationship.
 */
export function buildAuthorRoleJsonLd(
  author: Author,
  locale: 'en' | 'pt-pt' | 'fr'
): Record<string, unknown> {
  return {
    '@type': 'AuthorRole',
    roleName: author.roleName,
    author: buildPersonJsonLd(author, locale),
  };
}
