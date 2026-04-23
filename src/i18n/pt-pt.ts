// pt-PT dictionary — European Portuguese (pt-PT, not pt-BR).
//
// Scope of this pass (translator, 2026-04-23): pricing/resources/global-chrome
// keys only. Per CTO spec (thread #69ea948fc5006dc554555d54) this covers:
//   - meta, nav, languageSwitcher, footer, news (blog-chrome)
// All other top-level keys (home, about, brands, contact, privacy, notFound)
// remain re-exported from EN verbatim and are out of scope for this pass.
//
// Blog post BODIES stay EN-only across locales. Only news chrome is pt-PT.
// Preserve inline HTML and placeholders (e.g. `{year}`) exactly.

import { en } from './en';
import type { Dictionary } from './en';

// Widen: en.ts uses `as const`, so `Dictionary` has literal string types that
// reject translated strings. Cast through `unknown` to retain the key-shape
// contract without the literal-value constraint.
export const ptPt: Dictionary = ({
  ...en,

  meta: {
    siteName: 'AISO Group',
    titleSuffix: 'AISO Group',
  },

  nav: {
    home: 'Início',
    brands: 'Marcas',
    about: 'Sobre',
    news: 'Notícias',
    contact: 'Contacto',
    cta: 'Encontre o seu especialista →',
    openMenu: 'Abrir menu',
    skipToContent: 'Saltar para o conteúdo principal',
    homeAriaLabel: 'AISO Group — Início',
    primaryAriaLabel: 'Navegação principal',
  },

  languageSwitcher: {
    label: 'Idioma',
    english: 'English',
    portuguese: 'Português',
    french: 'Français',
  },

  footer: {
    partOf: 'Parte do grupo AISO',
    tagline:
      'Quatro empresas especialistas em IA, sob o mesmo tecto. Pesquisa com IA. Sistemas de IA. Redes sociais potenciadas por IA. Formação em IA.',
    location: 'Lisboa, Portugal',
    siblingBrandsHeading: 'Marcas do grupo',
    siblingHub: 'AISO Hub — Pesquisa com IA',
    siblingDev: 'AISO Dev — Sistemas de IA',
    siblingBuzz: 'AISO Buzz — Redes sociais com IA',
    siblingLearn: 'AISO Learn — Formação em IA',
    groupHeading: 'AISO Group',
    linkHome: 'Início',
    linkBrands: 'Marcas',
    linkAbout: 'Sobre',
    linkNews: 'Notícias e notas',
    linkContact: 'Contacto',
    contactLegalHeading: 'Contacto e informações legais',
    privacyPolicy: 'Política de privacidade',
    copyright:
      '© 2025–{year} AISO Group · Precious Episode LDA · Lisboa, Portugal',
    strapline: 'O grupo de IA especialista, ao serviço das empresas reais.',
  },

  news: {
    meta: {
      title: 'Notícias e notas',
      description:
        'Estratégia ao nível do grupo, anúncios e ensaios pontuais sobre IA especialista para empresas reais. Um a dois artigos por mês. Anti-blogue por princípio.',
    },
    hero: {
      kicker: 'Baixa frequência · Alto sinal',
      title: 'Notícias e notas.',
      lead:
        'Anúncios ao nível do grupo. Ensaios pontuais sobre IA especialista para empresas reais. Um a dois artigos por mês. Nunca mais, raramente menos.',
    },
    intro: {
      p1: 'Isto não é uma fábrica de conteúdos. Publicamos quando temos algo a dizer — um lançamento, uma contratação, uma viragem na categoria, uma ferramenta de autodiagnóstico para escolher entre as nossas marcas.',
      p2: 'Se procura textos tácticos sobre AISO, encontra-os em <a href="https://aiso-hub.com/insights" rel="noopener">aiso-hub.com/insights</a>. Se procura registos de construção e análises técnicas aprofundadas, estão em <a href="https://aiso-dev.com" rel="noopener">aiso-dev.com</a>. Se procura análises de tendências sociais e de conteúdo, estão em <a href="https://aiso-buzz.com" rel="noopener">aiso-buzz.com</a>. Se procura programas de formação em IA e orientações sobre o Regulamento Europeu da IA, estão em <a href="https://aiso-learn.com" rel="noopener">aiso-learn.com</a>.',
      p3: 'Esta página destina-se apenas à vista de portefólio.',
    },
    card: {
      readTimeSuffix: 'min de leitura',
      readCta: 'Ler →',
    },
    categories: {
      announcement: 'Anúncio',
      'specialist-series': 'Série especialistas',
      'meta-essay': 'Meta-ensaio',
    },
    articleEnNotice: 'Artigo disponível apenas em inglês.',
    breadcrumbNews: 'Notícias',
    breadcrumbHome: 'Início',
    routerFallback: {
      title: 'Quatro especialistas. Uma vantagem concreta.',
      lead: 'Não tem a certeza de qual marca se adequa?',
      cta: 'Encontre o seu especialista AISO →',
    },
    postBack: '← Voltar a Notícias e notas',
    postCta: 'Encontre o seu especialista AISO →',
  },
} as unknown) as Dictionary;
