// FR dictionary — European French.
//
// Scope of this pass (translator, 2026-04-23): pricing/resources/global-chrome
// keys only. Per CTO spec (thread #69ea948fc5006dc554555d54) this covers:
//   - meta, nav, languageSwitcher, footer, news (blog-chrome)
// All other top-level keys (home, about, brands, contact, privacy, notFound)
// remain re-exported from EN verbatim and are out of scope for this pass.
//
// Blog post BODIES stay EN-only across locales. Only news chrome is FR.
// Preserve inline HTML and placeholders (e.g. `{year}`) exactly.

import { en } from './en';
import type { Dictionary } from './en';

// Widen: en.ts uses `as const`, so `Dictionary` has literal string types that
// reject translated strings. Cast through `unknown` to retain the key-shape
// contract without the literal-value constraint.
export const fr: Dictionary = ({
  ...en,

  meta: {
    siteName: 'AISO Group',
    titleSuffix: 'AISO Group',
  },

  nav: {
    home: 'Accueil',
    brands: 'Marques',
    about: 'À propos',
    news: 'Actualités',
    contact: 'Contact',
    cta: 'Trouver votre spécialiste →',
    openMenu: 'Afficher le menu',
    skipToContent: 'Aller au contenu principal',
    homeAriaLabel: 'AISO Group — Accueil',
    primaryAriaLabel: 'Navigation principale',
  },

  languageSwitcher: {
    label: 'Langue',
    english: 'English',
    portuguese: 'Português',
    french: 'Français',
  },

  footer: {
    partOf: 'Membre du groupe AISO',
    tagline:
      'Quatre sociétés spécialistes de l’IA, sous un même toit. Recherche IA. Systèmes IA. Réseaux sociaux propulsés par l’IA. Formation IA.',
    location: 'Lisbonne, Portugal',
    siblingBrandsHeading: 'Marques sœurs',
    siblingHub: 'AISO Hub — Recherche IA',
    siblingDev: 'AISO Dev — Systèmes IA',
    siblingBuzz: 'AISO Buzz — Réseaux sociaux propulsés par l’IA',
    siblingLearn: 'AISO Learn — Formation IA',
    groupHeading: 'AISO Group',
    linkHome: 'Accueil',
    linkBrands: 'Marques',
    linkAbout: 'À propos',
    linkNews: 'Actualités et notes',
    linkContact: 'Contact',
    contactLegalHeading: 'Contact et mentions légales',
    privacyPolicy: 'Politique de confidentialité',
    copyright:
      '© 2025–{year} AISO Group · Precious Episode LDA · Lisbonne, Portugal',
    strapline: 'Le groupe IA spécialiste, au service des entreprises réelles.',
  },

  news: {
    meta: {
      title: 'Actualités et notes',
      description:
        'Annonces, prises de position et essais occasionnels sur l’IA spécialiste au service des entreprises réelles. Un à deux articles par mois. Anti-blog par principe.',
    },
    hero: {
      kicker: 'Faible fréquence · Signal élevé',
      title: 'Actualités et notes.',
      lead:
        'Annonces au niveau du groupe. Essais occasionnels sur l’IA spécialiste au service des entreprises réelles. Un à deux articles par mois. Jamais plus, rarement moins.',
    },
    intro: {
      p1: 'Ce n’est pas une ferme à contenus. Nous publions lorsque nous avons quelque chose à dire — un lancement, une arrivée dans l’équipe, un basculement du secteur, un outil d’auto-diagnostic pour choisir entre nos marques.',
      p2: 'Pour la rédaction AISO tactique, rendez-vous sur <a href="https://aiso-hub.com/insights" rel="noopener">aiso-hub.com/insights</a>. Pour les journaux de construction et les analyses techniques approfondies, consultez <a href="https://aiso-dev.com" rel="noopener">aiso-dev.com</a>. Pour les décryptages des tendances sociales et de contenu, voyez <a href="https://aiso-buzz.com" rel="noopener">aiso-buzz.com</a>. Pour les cursus de formation IA et les repères sur le règlement européen sur l’IA, direction <a href="https://aiso-learn.com" rel="noopener">aiso-learn.com</a>.',
      p3: 'Cette page offre uniquement la vue portefeuille.',
    },
    card: {
      readTimeSuffix: 'min de lecture',
      readCta: 'Lire →',
    },
    categories: {
      announcement: 'Annonce',
      'specialist-series': 'Série spécialistes',
      'meta-essay': 'Méta-essai',
    },
    articleEnNotice: 'Article disponible uniquement en anglais.',
    breadcrumbNews: 'Actualités',
    breadcrumbHome: 'Accueil',
    routerFallback: {
      title: 'Quatre spécialistes. Un avantage concret.',
      lead: 'Vous hésitez sur la marque adaptée ?',
      cta: 'Trouver votre spécialiste AISO →',
    },
    postBack: '← Retour aux Actualités et notes',
    postCta: 'Trouver votre spécialiste AISO →',
  },
} as unknown) as Dictionary;
