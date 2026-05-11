// FR dictionary - European French.
//
// Scope of passes covered so far (translator, 2026-04-23):
//   - meta, nav, languageSwitcher, footer, news (blog-chrome) - prior pass
//   - about, contact, privacy, notFound - thread #69ea9487c5006dc554555d3c
//   - home, brands - thread #69ea947ec5006dc554555d28 (this pass)
// "services" in CTO brief maps to `brands` - the four specialist brands
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
    homeAriaLabel: 'AISO Group - Accueil',
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
    siblingHub: 'AISO Hub - Recherche IA',
    siblingDev: 'AISO Dev - Systèmes IA',
    siblingBuzz: 'AISO Buzz - Réseaux sociaux propulsés par l’IA',
    siblingLearn: 'AISO Learn - Formation IA',
    groupHeading: 'AISO Group',
    linkHome: 'Accueil',
    linkBrands: 'Marques',
    linkAbout: 'À propos',
    linkNews: 'Actualités et notes',
    linkContact: 'Contact',
    contactLegalHeading: 'Contact et mentions légales',
    privacyPolicy: 'Politique de confidentialité',
    copyright:
      '© 2025-{year} AISO Group · Precious Episode LDA · Lisbonne, Portugal',
    strapline: 'Le groupe IA spécialiste, au service des entreprises réelles.',
  },

  news: {
    meta: {
      title: 'Actualités et notes',
      description:
        'Annonces et essais occasionnels sur l’IA spécialiste au service des entreprises réelles. Un à deux articles par mois. Anti-blog par principe.',
    },
    hero: {
      kicker: 'Faible fréquence · Signal élevé',
      title: 'Actualités et notes.',
      lead:
        'Annonces au niveau du groupe. Essais occasionnels sur l’IA spécialiste au service des entreprises réelles. Un à deux articles par mois. Jamais plus, rarement moins.',
    },
    intro: {
      p1: 'Ce n’est pas une ferme à contenus. Nous publions lorsque nous avons quelque chose à dire - un lancement, une arrivée dans l’équipe, un basculement du secteur, un outil d’auto-diagnostic pour choisir entre nos marques.',
      p2: 'Pour la rédaction AISO tactique, rendez-vous sur <a href="https://aiso-hub.com/insights" rel="noopener">aiso-hub.com/insights</a>. Pour les journaux de construction et les analyses techniques approfondies, consultez <a href="https://aiso-dev.com" rel="noopener">aiso-dev.com</a>. Pour les décryptages des tendances sociales et de contenu, voyez <a href="https://aiso-buzz.com" rel="noopener">aiso-buzz.com</a>. Pour les cursus de formation IA et les repères sur l’AI Act, direction <a href="https://aiso-learn.com" rel="noopener">aiso-learn.com</a>.',
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
      // Locked tagline matrix (Brands/AISO Group/Brand Bible/voice/tagline-lock.md,
      // sealed 2026-04-22). FR locale has no locked translation yet, so per
      // BA directive (2026-05-07) the EN locked strings ship verbatim until the
      // locale-lock workflow produces an approved FR version.
      title: 'AISO Group: Four specialist brands. One AI advantage.',
      description:
        'Four specialist brands, one AI advantage: AI training, implementation, search visibility, and social, under one roof.',
    },
    hero: {
      kicker: 'AISO · Lisbonne · 2026 · IA spécialiste',
      title: 'AISO Group : le groupe IA spécialiste, au service des entreprises réelles.',
      lead:
        'AISO, c’est quatre sociétés spécialistes de l’IA, sous un même toit. Recherche IA. Systèmes IA. Réseaux sociaux propulsés par l’IA. Formation IA. Choisissez celle qu’il vous faut. Élargissez quand vous êtes prêt.',
      ctaPrimary: 'Trouver votre spécialiste AISO →',
      ctaSecondary: 'Échanger avec Greg →',
    },
    aboutAiso: {
      kicker: 'À propos d’AISO',
      title: 'AISO est le groupe IA spécialiste basé au Portugal.',
      lead:
        'AISO (également connu sous le nom d’AISO Group) est un groupe IA spécialiste fondé en 2025 à Lisbonne, Portugal. AISO opère quatre sociétés spécialistes : AISO Hub pour la visibilité dans les moteurs IA, AISO Dev pour l’implémentation IA, AISO Buzz pour le contenu social propulsé par l’IA, et AISO Learn pour la formation IA et la conformité AI Act. AISO sert les PME en France, Portugal, Belgique, Suisse et Luxembourg.',
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
          'Nous construisons des systèmes IA que votre équipe sait faire tourner - pipelines de données, workflows d’agents, outils internes sur mesure. Pour les PME qui ont un processus, pas un slide deck.',
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
      signature: ' - Greg Stoos, fondateur. Lisbonne, 2025.',
      cta: 'Lire la thèse →',
    },
  },

  brands: {
    meta: {
      title: 'Nos marques - Hub, Dev, Buzz, Learn',
      description:
        'Quatre sociétés spécialistes de l’IA. Ce que chacune fait. Ce que chacune ne fait pas. Choisissez le spécialiste qui correspond à votre problème.',
    },
    hero: {
      kicker: 'Les quatre spécialistes',
      title: 'Quatre spécialistes. Un avantage concret.',
      lead:
        'Chaque marque AISO a un seul métier. Quand le métier correspond, le travail est plus rapide, plus précis et moins cher qu’avec un généraliste. Voici ce que chacune fait - et ce qu’elle ne fait pas.',
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
        'Marques dont les clients interrogent désormais l’IA avant Google. SaaS, juridique, santé, finance, immobilier - toute entreprise pour laquelle être <em>citée</em> compte plus que d’être classée.',
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
        'PME avec un processus qui ne devrait plus être manuel - un formulaire mal routé, un rapport qui prend 8 heures, un flux de leads qui perd les contacts entre deux systèmes.',
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
        'Entreprises sans équipe marketing qui ont besoin d’une présence sociale réelle - et refusent de sonner générique.',
    },
    learn: {
      kicker: 'AISO Learn',
      heading: 'Formation IA en entreprise',
      cta: 'Visiter AISO Learn →',
      oneJob: 'Nous transformons les équipes curieuses de l’IA en équipes capables en IA.',
      do1: 'Programmes de formation IA en entreprise - concrets, par rôle, mesurés sur les résultats.',
      do2: 'Cursus alignés sur l’EU AI Act et documentation prête pour audit.',
      do3: 'Des fondamentaux de la culture IA aux workflows agentiques avancés.',
      dont1: 'Nous ne construisons pas vos systèmes IA. C’est Dev.',
      dont2: 'Nous ne vous rendons pas visibles dans la recherche IA. C’est Hub.',
      dont3: 'Nous ne produisons pas vos contenus sociaux. C’est Buzz.',
      fits:
        'Sociétés qui ont besoin que leur équipe utilise vraiment l’IA - et dont la formation doit tenir face à un audit AI Act.',
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

  about: {
    meta: {
      title: 'À propos - Quatre marques IA spécialistes',
      description:
        'Un groupe, pas une agence. Quatre sociétés spécialistes IA, un même toit, une seule règle : les spécialistes battent les généralistes.',
    },
    hero: {
      kicker: 'À propos d’AISO Group',
      title: 'Nous avons bâti une architecture en marques filles parce que les généralistes échouent avec les PME.',
      lead:
        'Quatre sociétés spécialistes de l’IA, sous un même toit. Une thèse : les spécialistes l’emportent sur les généralistes quand le travail est concret et le budget fini.',
    },
    sections: {
      whySpecialistHeading: 'Pourquoi l’IA spécialiste, et pourquoi maintenant',
      whyP1: 'Les PME n’ont pas besoin d’une énième agence généraliste.',
      whyP2:
        'Elles ont besoin d’un partenaire qui maîtrise une seule chose. La recherche IA. Les systèmes IA. Les réseaux sociaux et le contenu. La formation IA. Puis - le premier chantier achevé - d’un partenaire capable de les confier proprement au spécialiste suivant, sans nouvelle phase commerciale.',
      whyP3: 'C’est le modèle du groupe. Pas un package. Un roster.',

      fourHeading: 'Les quatre sociétés',
      fourHub:
        '<strong>AISO Hub</strong> - AI Search Optimization. La pratique spécialiste. Posée, éditoriale, centrée sur la citation.',
      fourDev:
        '<strong>AISO Dev</strong> - Implémentation IA pour PME. L’atelier. Technique, concret, cadré.',
      fourBuzz:
        '<strong>AISO Buzz</strong> - Réseaux sociaux et contenus propulsés par l’IA. Le studio créatif. Brand-bible-first, orienté résultats.',
      fourLearn:
        '<strong>AISO Learn</strong> - Formation IA en entreprise. La salle de classe. Cursus alignés sur l’AI Act, des preuves plutôt que des PDF.',
      fourFooter:
        'Chacune a son site, son équipe, sa voix. Toutes les quatre partagent un design system, un pied de page et un standard.',

      notBeHeading: 'Ce que nous ne serons pas',
      notBe1:
        'Nous ne sommes pas une agence full-service. Si vous cherchez un retainer groupé couvrant toutes les disciplines marketing, nous ne sommes pas le bon choix.',
      notBe2:
        'Nous ne sommes pas un cabinet de conseil. Nous ne vendons pas de présentations. Hub fait citer. Dev construit. Buzz raconte. Learn enseigne. Les quatre livrent.',
      notBe3:
        'Nous ne sommes pas un revendeur d’IA. Nous ne vous repassons pas à un fournisseur. Le travail est le nôtre.',

      lisbonHeading: 'Construit à Lisbonne, en 2025',
      lisbonFounder:
        '<strong>Fondateur :</strong> Greg Stoos. Basé à Lisbonne. 16 779 abonnés LinkedIn. Plus de 20 ans en marketing, opérations et logiciel.',
      lisbonTeam:
        '<strong>Équipe :</strong> des spécialistes humains par marque, augmentés par l’IA de bout en bout. Toute sortie IA est validée par un humain avant livraison.',
      lisbonLegal: '<strong>Entité juridique :</strong> Precious Episode LDA, Lisbonne, Portugal.',
      lisbonFocus:
        '<strong>Focus :</strong> PME européennes. Anglais, portugais, français. Des entreprises réelles avec de vrais clients, pas des expérimentations financées par du capital-risque.',

      rulesHeading: 'Les règles du groupe',
      rule1:
        '<strong>Un problème, un spécialiste.</strong> Aucun engagement préalable sur un package. Commencez par la marque qui répond au problème devant vous.',
      rule2:
        '<strong>Validation humaine sur chaque livrable.</strong> Aucun contenu IA n’arrive chez un client sans le feu vert d’un humain.',
      rule3:
        '<strong>Missions cadrées.</strong> Délais fixes, périmètres fixes, fourchettes de prix fixes - en particulier chez Hub et Dev. Pas de retainers opaques.',
      rule4:
        '<strong>Recommandations internes, sans recommercialisation.</strong> Quand un client Hub a besoin de Dev, le passage de relais est interne. Pas de nouveau processus commercial.',

      year2026Heading: '2026, l’année où le modèle généraliste se casse',
      year2026P1:
        'Toutes les PME subissent la même pression : l’IA fait évoluer le métier plus vite qu’un généraliste ne peut suivre.',
      year2026P2:
        'Une agence généraliste choisit un outil d’IA, l’étiquette « transformation digitale » et espère que le retainer survit au trimestre.',
      year2026P3:
        'Une société spécialiste identifie le problème, livre la solution et passe à autre chose.',
      year2026P4:
        'Le coût du mauvais choix - des retainers dépensés pour un travail qui ne produit rien - est la raison pour laquelle nous avons construit un groupe.',

      proofHeading: 'Preuves',
      proofIntro: '<em>Nouveaux en tant que groupe. Plus anciens comme opérateurs.</em>',
      proofHub:
        '<strong>AISO Hub</strong> - site vitrine : <a href="https://aiso-hub.com" rel="noopener">aiso-hub.com</a>. Études de cas et analyses publiées.',
      proofDev:
        '<strong>AISO Dev</strong> livre l’outillage interne de la plateforme AISO elle-même - le moteur d’IA, l’orchestrateur, le système de messagerie inter-agents.',
      proofBuzz:
        '<strong>AISO Buzz</strong> gère ses propres réseaux sociaux avec la méthodologie qu’elle vend.',
      proofFooter:
        'Les études de cas clients nommées sont en cours de revue. Nous les publierons dès que les clients les auront approuvées.',

      ctaPrimary: 'Trouver votre spécialiste AISO →',
      ctaSecondary: 'Échanger avec Greg →',
    },
  },

  contact: {
    meta: {
      title: 'Contact - Échanger avec Greg',
      description:
        'Vous hésitez sur le bon spécialiste ? Réservez un appel de 20 minutes. Greg vous oriente vers la bonne marque AISO - ou vous le dit honnêtement.',
    },
    hero: {
      kicker: 'Orientation · pas un tunnel de vente',
      title: 'Vous hésitez sur le bon spécialiste ? Prenez rendez-vous.',
      lead:
        '20 minutes avec Greg. Nous vous orientons vers Hub, Dev ou Buzz - ou nous vous disons franchement si nous ne sommes pas le bon partenaire. Pas de présentations. Pas d’équipe commerciale. De l’orientation.',
    },
    form: {
      kicker: 'Un formulaire. Orienté par Greg.',
      title: 'Trois champs. Pas de mise en scène.',
      nameLabel: 'Votre nom',
      namePlaceholder: 'Nom complet',
      companyLabel: 'Entreprise ou projet',
      companyPlaceholder: 'Où vous travaillez (ou ce que vous construisez)',
      messageLabel: 'Que recherchez-vous ?',
      messagePlaceholder:
        'Une phrase suffit. « Nous avons besoin de recherche IA pour un produit SaaS » fonctionne. « Pas sûr, au secours » aussi.',
      emailLabel: 'E-mail',
      emailPlaceholder: 'Pour la réponse',
      submit: 'Orientez-moi',
      submitHelp:
        'Greg lit personnellement chaque message entrant. Réponse sous un jour ouvré.',
      statusRouting: 'Orientation en cours…',
      statusSuccess:
        'Merci. Greg lit personnellement chaque message entrant. Réponse sous un jour ouvré.',
      statusFallback:
        'Votre client e-mail a été ouvert - envoyez depuis là si le formulaire en ligne a échoué.',
      mailSubject: 'Message entrant AISO Group',
    },
    sidebar: {
      knowKicker: 'Si vous savez déjà',
      knowHeading: 'Allez directement vers la marque',
      hubLine: 'aiso-hub.com - Recherche IA',
      devLine: 'aiso-dev.com - Systèmes IA / logiciel',
      buzzLine: 'aiso-buzz.com - Réseaux sociaux et contenus',
      calendarKicker: 'Si vous préférez le calendrier',
      calendarBody: '20 minutes d’orientation avec Greg. Pas de pitch.',
      calendarCta: 'Écrire à Greg →',
      nextKicker: 'Ce qui se passe ensuite',
      next1:
        '<strong class="text-[#0A1628]">Nous lisons.</strong> Greg lit personnellement chaque formulaire.',
      next2:
        '<strong class="text-[#0A1628]">Nous orientons.</strong> Réponse sous un jour ouvré - mise en relation directe avec la bonne équipe, ou un « pas nous, essayez X » honnête.',
      next3:
        '<strong class="text-[#0A1628]">Ils cadrent.</strong> L’équipe spécialiste (Hub, Dev ou Buzz) cadre la mission avec vous directement.',
      notDoKicker: 'Ce que nous ne ferons pas',
      notDo1: 'Nous ne vous mettrons pas dans une séquence automatisée.',
      notDo2: 'Nous n’enverrons pas une présentation de 40 diapositives.',
      notDo3: 'Nous ne vous vendrons pas un retainer groupé dès le premier appel.',
    },
  },

  privacy: {
    meta: {
      title: 'Politique de confidentialité',
      description:
        'Traitement, par AISO Group, des informations soumises via aiso-group.com. Minimal, basé dans l’UE, explicite.',
    },
    hero: {
      kicker: 'Mentions légales',
      title: 'Politique de confidentialité',
      updatedLabel: 'Dernière mise à jour :',
    },
    whoHeading: 'Qui nous sommes',
    whoBody:
      'AISO Group est une marque exploitée par Precious Episode LDA, société immatriculée au Portugal (NIF 514701617), dont le siège social est situé Avenida David Mourão-Ferreira 14, 8A, 1750-204 Lisboa, Portugal. Le groupe est la maison mère de quatre sociétés spécialistes : AISO Hub, AISO Dev, AISO Buzz et AISO Learn.',
    collectHeading: 'Données collectées',
    collectIntro:
      'Sur <strong>aiso-group.com</strong>, AISO Group collecte uniquement les données que vous transmettez :',
    collectForm:
      '<strong>Formulaire de contact.</strong> Nom, entreprise, message et, le cas échéant, adresse e-mail. Utilisés pour répondre et orienter la demande vers la marque sœur appropriée.',
    collectEmail:
      '<strong>Courrier électronique.</strong> Tout message adressé à <span>hello@aiso-group.com</span> est conservé dans la messagerie du groupe.',
    collectLogs:
      '<strong>Journaux serveur.</strong> Journaux de périphérie Cloudflare (adresse IP, user-agent, chemin d’accès) à des fins de sécurité et de débogage. Conservation maximale de 30 jours.',
    collectNote:
      'Aucun cookie de traçage. Aucun pixel publicitaire. Aucun outil d’analyse identifiant personnellement l’utilisateur.',
    useHeading: 'Finalités du traitement',
    use1: 'Répondre à votre demande entrante.',
    use2: 'Orienter la demande, en interne, vers Hub, Dev ou Buzz.',
    use3: 'Conserver une trace minimale de la correspondance.',
    useNote: 'AISO Group ne vend ni ne loue aucune donnée à des tiers. En aucun cas.',
    accessHeading: 'Destinataires des données',
    access1: '<strong>Greg Stoos</strong> (fondateur) ainsi que l’opérateur chargé de l’orientation.',
    access2:
      'L’équipe spécialiste de la marque sœur à laquelle la demande est orientée, le cas échéant.',
    access3:
      '<strong>Sous-traitants :</strong> Cloudflare (hébergement), Resend (acheminement e-mail), Google Workspace (messagerie). Tous conformes au RGPD (GDPR).',
    rightsHeading: 'Droits des personnes concernées (RGPD / GDPR)',
    rightsBody:
      'Toute personne concernée peut demander une copie de ses données, leur rectification ou leur suppression. Écrire à <span>hello@aiso-group.com</span> en indiquant « Demande RGPD » en objet. Réponse apportée dans un délai de 30 jours.',
    retentionHeading: 'Conservation',
    retentionBody:
      'Entrées du formulaire de contact : conservées 24 mois, sauf demande de suppression antérieure ou poursuite de la correspondance.',
    changesHeading: 'Modifications',
    changesBody:
      'Cette page est mise à jour lorsque les pratiques évoluent. La date de « dernière mise à jour » ci-dessus fait foi.',
    contactHeading: 'Contact',
    contactAddress:
      '<strong>Precious Episode LDA</strong><br />Avenida David Mourão-Ferreira 14, 8A<br />1750-204 Lisboa, Portugal<br />NIF 514701617<br /><span>hello@aiso-group.com</span>',
  },

  search: {
    meta: {
      title: 'Recherche - AISO Group',
      description:
        'Recherchez parmi les pages d’AISO Group, les profils des marques spécialistes et les actualités.',
    },
    hero: {
      kicker: 'Recherche',
      title: 'Rechercher dans AISO Group',
      lead:
        'Trouvez pages, marques et articles sur aiso-group.com.',
    },
    form: {
      label: 'Terme de recherche',
      placeholder: 'Rechercher AISO Group',
      submit: 'Rechercher',
    },
    resultsCount: '{count} résultats pour « {query} »',
    resultsCountSingular: '1 résultat pour « {query} »',
    noResults: 'Aucun résultat pour « {query} »',
    emptyPrompt: 'Saisissez un terme de recherche pour commencer.',
    backHome: '← Retour à l’accueil',
  },

  notFound: {
    meta: {
      title: 'Page introuvable - retour à l’accueil',
      description:
        'Cette page n’existe pas sur aiso-group.com. Essayez l’aiguillage de la page d’accueil, ou échangez avec Greg.',
    },
    kicker: '404',
    title: 'Cette page n’existe pas.',
    lead:
      'Cela arrive. Essayez l’aiguillage de la page d’accueil - trois questions, un spécialiste, une réponse en 20 secondes.',
    ctaPrimary: 'Retour à l’accueil →',
    ctaSecondary: 'Échanger avec Greg →',
  },
} as unknown) as Dictionary;
