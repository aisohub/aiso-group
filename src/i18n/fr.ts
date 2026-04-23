// FR dictionary — European French.
//
// Scope of passes covered so far (translator, 2026-04-23):
//   - meta, nav, languageSwitcher, footer, news (blog-chrome) — prior pass
//   - about, contact, privacy, notFound — thread #69ea9487c5006dc554555d3c
//   - home, brands — thread #69ea947ec5006dc554555d28 (this pass)
// "services" in CTO brief maps to `brands` — the four specialist brands
// ARE the services in this architecture (one page, one dictionary key).
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

  home: {
    meta: {
      title: 'AISO Group — Le groupe IA spécialiste, au service des entreprises réelles',
      description:
        'Quatre sociétés spécialistes de l’IA, sous un même toit. Recherche IA (Hub), systèmes IA (Dev), réseaux sociaux propulsés par l’IA (Buzz), formation IA (Learn). Choisissez celle qu’il vous faut, élargissez quand vous êtes prêt.',
    },
    hero: {
      kicker: 'Lisbonne · 2026 · IA spécialiste',
      title: 'Le groupe IA spécialiste, au service des entreprises réelles.',
      lead:
        'Quatre sociétés spécialistes de l’IA, sous un même toit. Recherche IA. Systèmes IA. Réseaux sociaux propulsés par l’IA. Formation IA. Choisissez celle qu’il vous faut. Élargissez quand vous êtes prêt.',
      ctaPrimary: 'Trouver votre spécialiste AISO →',
      ctaSecondary: 'Échanger avec Greg →',
    },
    router: {
      kicker: 'L’aiguillage',
      title: 'De quelle marque AISO ai-je besoin ?',
      lead: 'Trois questions. Un spécialiste. Une réponse en 20 secondes.',
      hub: {
        question: 'Ai-je besoin d’être trouvé par l’IA ?',
        answer: 'AISO Hub',
        audience:
          'Nous faisons de votre marque la réponse que ChatGPT, Perplexity et les AI Overviews de Google citent. Pour les entreprises prêtes à occuper la couche de la recherche IA.',
        cta: 'Visiter AISO Hub →',
      },
      dev: {
        question: 'Ai-je besoin d’IA pour faire tourner quelque chose dans mon entreprise ?',
        answer: 'AISO Dev',
        audience:
          'Nous construisons des systèmes IA que votre équipe sait faire tourner — pipelines de données, workflows d’agents, outils internes sur mesure. Pour les PME qui ont un processus, pas un slide deck.',
        cta: 'Visiter AISO Dev →',
      },
      buzz: {
        question: 'Ai-je besoin de contenus et de social qui sonnent comme ma marque ?',
        answer: 'AISO Buzz',
        audience:
          'Nous produisons du social et des contenus adossés à un brand book, validés avant publication. Pour les entreprises sans équipe marketing qui refusent de sonner comme une IA.',
        cta: 'Visiter AISO Buzz →',
      },
      learn: {
        question: 'Ai-je besoin que mon équipe utilise vraiment l’IA ?',
        answer: 'AISO Learn',
        audience:
          'Nous formons votre équipe, du stade « curieuse de l’IA » au stade « capable en IA », avec des cursus alignés sur l’EU AI Act. Pour les sociétés qui veulent des preuves, pas un PDF.',
        cta: 'Visiter AISO Learn →',
      },
      fallback: {
        question: 'Vous ne savez pas laquelle vous correspond ?',
        subtitle: 'Réservez 20 minutes. Nous vous orientons.',
        cta: 'Échanger avec Greg →',
      },
    },
    verbTest: {
      kicker: 'Le test du verbe',
      title: 'Une ligne chacun. Rendue visible.',
      hubKicker: 'Hub fait citer',
      hubLine: 'Nous faisons en sorte que l’IA cite votre marque.',
      devKicker: 'Dev construit',
      devLine: 'Nous livrons des systèmes IA qui tournent.',
      buzzKicker: 'Buzz raconte',
      buzzLine: 'Nous écrivons des contenus qui vous ressemblent.',
      learnKicker: 'Learn enseigne',
      learnLine: 'Nous transformons les équipes curieuses de l’IA en équipes capables en IA.',
    },
    founder: {
      kicker: 'Mot du fondateur',
      title: 'Pourquoi un groupe, pas un généraliste',
      p1: 'Les agences IA généralistes échouent auprès des PME. Le travail s’étire. L’équipe optimise les heures, pas les résultats.',
      p2: 'Nous avons construit un groupe à la place. Quatre sociétés spécialistes, chacune avec un seul métier.',
      p3: 'L’avantage : vous n’achetez pas un package. Vous achetez le spécialiste dont vous avez besoin maintenant. Vous appelez les autres au bon moment.',
      p4: 'Basé à Lisbonne. Tourné vers l’Europe. Construit en 2025.',
      signature: '— Greg Stoos, fondateur. Lisbonne, 2025.',
      cta: 'Lire la thèse →',
    },
  },

  brands: {
    meta: {
      title: 'Nos marques — AISO Hub, AISO Dev, AISO Buzz, AISO Learn',
      description:
        'Quatre sociétés spécialistes de l’IA. Ce que chacune fait. Ce que chacune ne fait pas. Choisissez le spécialiste qui correspond à votre problème.',
    },
    hero: {
      kicker: 'Les quatre spécialistes',
      title: 'Quatre spécialistes. Un avantage concret.',
      lead:
        'Chaque marque AISO a un seul métier. Quand le métier correspond, le travail est plus rapide, plus précis et moins cher qu’avec un généraliste. Voici ce que chacune fait — et ce qu’elle ne fait pas.',
    },
    oneJob: 'Le métier :',
    whatWeDo: 'Ce que nous faisons :',
    whatWeDoNot: 'Ce que nous ne faisons pas :',
    whoItFits: 'Pour qui :',
    hub: {
      kicker: 'AISO Hub',
      heading: 'Optimisation pour la recherche IA',
      cta: 'Visiter AISO Hub →',
      oneJob: 'Nous faisons de votre marque la réponse que l’IA cite.',
      do1: 'Audits AISO pour ChatGPT, Perplexity, Gemini, Google AI Overviews.',
      do2: 'Données structurées, architecture de contenu et pages prêtes à être citées.',
      do3: 'Suivi mensuel de la visibilité IA sur tous les moteurs.',
      dont1: 'Nous n’écrivons pas de posts pour les réseaux sociaux. C’est Buzz.',
      dont2: 'Nous ne développons pas de logiciels sur mesure. C’est Dev.',
      fits:
        'Marques dont les clients interrogent désormais l’IA avant Google. SaaS, juridique, santé, finance, immobilier — toute entreprise pour laquelle être <em>citée</em> compte plus que d’être classée.',
    },
    dev: {
      kicker: 'AISO Dev',
      heading: 'Systèmes IA pour PME',
      cta: 'Visiter AISO Dev →',
      oneJob: 'Nous construisons de l’IA qui tourne dans votre entreprise.',
      do1: 'Outils internes, workflows d’agents, pipelines de données.',
      do2: 'Sites web et systèmes de génération de leads enrichis par l’IA.',
      do3: 'Projets cadrés, calendrier fixe et fourchette de prix fixe.',
      dont1: 'Nous ne faisons pas d’optimisation pour la recherche IA. C’est Hub.',
      dont2: 'Nous ne gérons pas vos canaux sociaux. C’est Buzz.',
      fits:
        'PME avec un processus qui ne devrait plus être manuel — un formulaire mal routé, un rapport qui prend 8 heures, un flux de leads qui perd les contacts entre deux systèmes.',
    },
    buzz: {
      kicker: 'AISO Buzz',
      heading: 'Réseaux sociaux et contenus propulsés par l’IA',
      cta: 'Visiter AISO Buzz →',
      oneJob: 'Nous produisons des contenus qui vous ressemblent, pas qui sonnent IA.',
      do1: 'Gestion sociale adossée à un brand book sur LinkedIn, Instagram, TikTok et YouTube.',
      do2: 'Création de contenus avec une étape de validation humaine avant chaque publication.',
      do3: 'Reporting mensuel des résultats : portée, leads et alignement avec la marque.',
      dont1: 'Nous ne faisons pas de recherche IA. C’est Hub.',
      dont2: 'Nous ne développons pas de logiciels. C’est Dev.',
      fits:
        'Entreprises sans équipe marketing qui ont besoin d’une présence sociale réelle — et refusent de sonner générique.',
    },
    learn: {
      kicker: 'AISO Learn',
      heading: 'Formation IA en entreprise',
      cta: 'Visiter AISO Learn →',
      oneJob: 'Nous transformons les équipes curieuses de l’IA en équipes capables en IA.',
      do1: 'Programmes de formation IA en entreprise — concrets, par rôle, mesurés sur les résultats.',
      do2: 'Cursus alignés sur l’EU AI Act et documentation prête pour audit.',
      do3: 'Des fondamentaux de la culture IA aux workflows agentiques avancés.',
      dont1: 'Nous ne construisons pas vos systèmes IA. C’est Dev.',
      dont2: 'Nous ne vous rendons pas visibles dans la recherche IA. C’est Hub.',
      dont3: 'Nous ne produisons pas vos contenus sociaux. C’est Buzz.',
      fits:
        'Sociétés qui ont besoin que leur équipe utilise vraiment l’IA — et dont la formation doit tenir face à un audit AI Act.',
    },
    howToChoose: {
      kicker: 'Comment choisir',
      title: 'Si vous voulez la version longue.',
      short: '<em>Si vous voulez une réponse en 20 secondes, l’aiguillage de la page d’accueil va plus vite.</em>',
      bullet1:
        '<strong>Partez de la douleur que vous avez aujourd’hui.</strong> Une marque, un problème. N’achetez pas un package.',
      bullet2:
        '<strong>Posez-vous la question du verbe.</strong> Avez-vous besoin que l’IA vous <em>cite</em>, qu’elle <em>construise</em> pour vous ou qu’elle <em>raconte</em> quelque chose pour vous ? Le verbe désigne le spécialiste.',
      bullet3:
        '<strong>Faites entrer la suivante au bon moment.</strong> La plupart des clients commencent avec une seule marque. Les autres se greffent quand le moment est venu.',
      ctaPrimary: 'Trouver votre spécialiste AISO →',
      ctaSecondary: 'Échanger avec Greg →',
    },
  },
} as unknown) as Dictionary;
