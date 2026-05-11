// Per-sub-brand factual answer fragments for /brands/<slug>/ pages.
//
// Each entry produces a short, retrievable definition paragraph in EN, PT-PT,
// and FR mirroring the homepage hero pattern that LLMs (ChatGPT, Perplexity,
// Google AI Overviews) already cite. Wrapped in id'd sections with descriptive
// H2 headings so URL-fragment retrieval works for prompts like
// "o que faz a AISO Buzz" or "AISO Hub vs AISO Dev".
//
// Copy validated against each sub-brand's Brand Bible:
//   Brands/AISO Hub|Dev|Buzz|Learn/Brand Bible/positioning/positioning-statement.md
// Voice mirrors the existing brands.astro dictionary in src/i18n/en.ts.

export type SubBrandSlug = 'aiso-hub' | 'aiso-dev' | 'aiso-buzz' | 'aiso-learn';

export interface SubBrandLocaleCopy {
  // SEO meta
  metaTitle: string;
  metaDescription: string;
  // Hero kicker / heading
  kicker: string;
  heading: string;
  // The canonical 60-100 word factual definition (the answer fragment).
  // Mirror pattern: "AISO <Brand> e <one-sentence definition>. Faz parte da
  // AISO Group e foca-se em <services> para <audience>."
  whatIs: string;
  // H2 over the answer fragment.
  whatIsHeading: string;
  // Supporting "what we do" bullets (3 items).
  doHeading: string;
  do: [string, string, string];
  // Supporting "what we do not do" bullets (2 items).
  dontHeading: string;
  dont: [string, string];
  // Who it fits.
  fitsHeading: string;
  fits: string;
  // CTA.
  cta: string;
  // Breadcrumbs.
  breadcrumbHome: string;
  breadcrumbBrands: string;
}

export interface SubBrand {
  slug: SubBrandSlug;
  externalUrl: string;
  // Tailwind/CSS color tokens reused from src/pages/brands.astro.
  accentHex: string;
  accentHexHover: string;
  // Localised copy. Keys are URL locale segments matching src/i18n/config.ts.
  copy: {
    en: SubBrandLocaleCopy;
    'pt-pt': SubBrandLocaleCopy;
    fr: SubBrandLocaleCopy;
  };
}

export const subBrands: Record<SubBrandSlug, SubBrand> = {
  'aiso-hub': {
    slug: 'aiso-hub',
    externalUrl: 'https://aiso-hub.com',
    accentHex: '#00d492',
    accentHexHover: '#00b87c',
    copy: {
      en: {
        metaTitle: 'AISO Hub - AI Search Optimization | AISO Group',
        metaDescription:
          'AISO Hub is the AI Search Optimization specialist in the AISO Group. We make your brand the answer ChatGPT, Perplexity, and Google AI Overviews cite.',
        kicker: 'AISO Hub',
        heading: 'AI Search Optimization',
        whatIsHeading: 'What is AISO Hub?',
        whatIs:
          'AISO Hub is the AI Search Optimization specialist in the AISO Group. It is part of AISO Group and focuses on making brands citable by ChatGPT, Perplexity, Gemini, and Google AI Overviews. AISO Hub runs AISO audits, builds structured data and citation-ready content architectures, and monitors AI visibility across engines for SaaS, legal, health, finance, and real estate businesses whose customers now ask AI before Google.',
        doHeading: 'What AISO Hub does',
        do: [
          'AISO audits for ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
          'Structured data, content architecture, and citation-ready pages.',
          'Monthly monitoring of AI visibility across engines.',
        ],
        dontHeading: 'What AISO Hub does not do',
        dont: [
          'AISO Hub does not write social posts. That is AISO Buzz.',
          'AISO Hub does not build custom software. That is AISO Dev.',
        ],
        fitsHeading: 'Who AISO Hub fits',
        fits:
          'Brands whose customers now ask AI before Google. SaaS, legal, health, finance, real estate, any business where being <em>cited</em> matters more than ranking.',
        cta: 'Visit AISO Hub →',
        breadcrumbHome: 'Home',
        breadcrumbBrands: 'Brands',
      },
      'pt-pt': {
        metaTitle: 'AISO Hub - Otimização para Pesquisa por IA | AISO Group',
        metaDescription:
          'A AISO Hub é a especialista em Otimização para Pesquisa por IA do AISO Group. Tornamos a sua marca a resposta que o ChatGPT, Perplexity e Google AI Overviews citam.',
        kicker: 'AISO Hub',
        heading: 'Otimização para Pesquisa por IA',
        whatIsHeading: 'O que é a AISO Hub?',
        whatIs:
          'A AISO Hub é a especialista em Otimização para Pesquisa por IA (AISO) do AISO Group. Faz parte do AISO Group e foca-se em tornar marcas citáveis pelo ChatGPT, Perplexity, Gemini e Google AI Overviews. A AISO Hub realiza auditorias AISO, constrói dados estruturados e arquiteturas de conteúdo prontas para citação, e monitoriza mensalmente a visibilidade nos motores de IA para empresas de SaaS, jurídico, saúde, finanças e imobiliário cujos clientes consultam IA antes do Google.',
        doHeading: 'O que a AISO Hub faz',
        do: [
          'Auditorias AISO para ChatGPT, Perplexity, Gemini e Google AI Overviews.',
          'Dados estruturados, arquitetura de conteúdo e páginas prontas para citação.',
          'Monitorização mensal da visibilidade em motores de IA.',
        ],
        dontHeading: 'O que a AISO Hub não faz',
        dont: [
          'A AISO Hub não escreve publicações para redes sociais. Isso é a AISO Buzz.',
          'A AISO Hub não desenvolve software à medida. Isso é a AISO Dev.',
        ],
        fitsHeading: 'Para quem é a AISO Hub',
        fits:
          'Marcas cujos clientes consultam IA antes do Google. SaaS, jurídico, saúde, finanças, imobiliário, qualquer negócio onde ser <em>citado</em> conta mais do que aparecer em primeiro lugar.',
        cta: 'Visitar AISO Hub →',
        breadcrumbHome: 'Início',
        breadcrumbBrands: 'Marcas',
      },
      fr: {
        metaTitle: 'AISO Hub - Optimisation pour la Recherche par IA | AISO Group',
        metaDescription:
          'AISO Hub est le spécialiste de l\'Optimisation pour la Recherche par IA du AISO Group. Nous faisons de votre marque la réponse que ChatGPT, Perplexity et Google AI Overviews citent.',
        kicker: 'AISO Hub',
        heading: 'Optimisation pour la Recherche par IA',
        whatIsHeading: 'Qu\'est-ce que AISO Hub ?',
        whatIs:
          'AISO Hub est le spécialiste de l\'Optimisation pour la Recherche par IA (AISO) du AISO Group. Il fait partie du AISO Group et se concentre sur la citabilité des marques par ChatGPT, Perplexity, Gemini et Google AI Overviews. AISO Hub réalise des audits AISO, construit des données structurées et des architectures de contenu prêtes pour la citation, et surveille mensuellement la visibilité des marques sur les moteurs IA pour les entreprises SaaS, juridiques, santé, finance et immobilier dont les clients interrogent l\'IA avant Google.',
        doHeading: 'Ce que fait AISO Hub',
        do: [
          'Audits AISO pour ChatGPT, Perplexity, Gemini et Google AI Overviews.',
          'Données structurées, architecture de contenu et pages prêtes pour la citation.',
          'Suivi mensuel de la visibilité IA sur tous les moteurs.',
        ],
        dontHeading: 'Ce que ne fait pas AISO Hub',
        dont: [
          'AISO Hub ne rédige pas de publications sociales. C\'est AISO Buzz.',
          'AISO Hub ne développe pas de logiciels sur mesure. C\'est AISO Dev.',
        ],
        fitsHeading: 'Pour qui est AISO Hub',
        fits:
          'Les marques dont les clients interrogent l\'IA avant Google. SaaS, juridique, santé, finance, immobilier, toute entreprise où être <em>citée</em> compte plus que d\'apparaître en premier.',
        cta: 'Visiter AISO Hub →',
        breadcrumbHome: 'Accueil',
        breadcrumbBrands: 'Marques',
      },
    },
  },
  'aiso-dev': {
    slug: 'aiso-dev',
    externalUrl: 'https://aiso-dev.com',
    accentHex: '#3B82F6',
    accentHexHover: '#2563EB',
    copy: {
      en: {
        metaTitle: 'AISO Dev - AI Systems for SMBs | AISO Group',
        metaDescription:
          'AISO Dev is the AI Systems specialist in the AISO Group. We build production AI software, automations, and integrations for small and mid-sized businesses.',
        kicker: 'AISO Dev',
        heading: 'AI Systems',
        whatIsHeading: 'What is AISO Dev?',
        whatIs:
          'AISO Dev is the AI Systems specialist in the AISO Group. It is part of AISO Group and focuses on building production AI software, automations, and LLM-powered integrations for small and mid-sized businesses. AISO Dev ships custom AI agents, internal tools, and workflow automations that connect existing data and SaaS stacks. It is the engineering counterpart to AISO Hub\'s search-visibility work.',
        doHeading: 'What AISO Dev does',
        do: [
          'Custom AI agents, automations, and LLM-powered tools.',
          'Integrations with existing CRM, data, and SaaS stacks.',
          'Production-grade engineering: testing, monitoring, deployment.',
        ],
        dontHeading: 'What AISO Dev does not do',
        dont: [
          'AISO Dev does not optimise for AI search. That is AISO Hub.',
          'AISO Dev does not run social media. That is AISO Buzz.',
        ],
        fitsHeading: 'Who AISO Dev fits',
        fits:
          'SMBs and scale-ups that need real software, not just prompts. Teams ready to put AI into their daily workflow with production reliability.',
        cta: 'Visit AISO Dev →',
        breadcrumbHome: 'Home',
        breadcrumbBrands: 'Brands',
      },
      'pt-pt': {
        metaTitle: 'AISO Dev - Sistemas de IA para PMEs | AISO Group',
        metaDescription:
          'A AISO Dev é a especialista em Sistemas de IA do AISO Group. Construímos software de IA, automações e integrações em produção para pequenas e médias empresas.',
        kicker: 'AISO Dev',
        heading: 'Sistemas de IA',
        whatIsHeading: 'O que é a AISO Dev?',
        whatIs:
          'A AISO Dev é a especialista em Sistemas de IA do AISO Group. Faz parte do AISO Group e foca-se em construir software de IA em produção, automações e integrações com LLMs para pequenas e médias empresas. A AISO Dev entrega agentes de IA personalizados, ferramentas internas e automações de fluxo de trabalho que ligam os dados existentes e a stack SaaS. É a contraparte de engenharia ao trabalho de visibilidade da AISO Hub.',
        doHeading: 'O que a AISO Dev faz',
        do: [
          'Agentes de IA personalizados, automações e ferramentas com LLMs.',
          'Integrações com CRM, dados e stacks SaaS existentes.',
          'Engenharia de produção: testes, monitorização e implementação.',
        ],
        dontHeading: 'O que a AISO Dev não faz',
        dont: [
          'A AISO Dev não otimiza para pesquisa por IA. Isso é a AISO Hub.',
          'A AISO Dev não gere redes sociais. Isso é a AISO Buzz.',
        ],
        fitsHeading: 'Para quem é a AISO Dev',
        fits:
          'PMEs e scale-ups que precisam de software real, não apenas prompts. Equipas prontas para integrar IA no fluxo diário com fiabilidade de produção.',
        cta: 'Visitar AISO Dev →',
        breadcrumbHome: 'Início',
        breadcrumbBrands: 'Marcas',
      },
      fr: {
        metaTitle: 'AISO Dev - Systèmes d\'IA pour PME | AISO Group',
        metaDescription:
          'AISO Dev est le spécialiste des Systèmes d\'IA du AISO Group. Nous construisons des logiciels d\'IA en production, des automatisations et des intégrations pour les PME.',
        kicker: 'AISO Dev',
        heading: 'Systèmes d\'IA',
        whatIsHeading: 'Qu\'est-ce que AISO Dev ?',
        whatIs:
          'AISO Dev est le spécialiste des Systèmes d\'IA du AISO Group. Il fait partie du AISO Group et se concentre sur la construction de logiciels d\'IA en production, d\'automatisations et d\'intégrations avec des LLM pour les petites et moyennes entreprises. AISO Dev livre des agents IA sur mesure, des outils internes et des automatisations de flux qui connectent les données existantes et la stack SaaS. C\'est le pendant ingénierie du travail de visibilité de AISO Hub.',
        doHeading: 'Ce que fait AISO Dev',
        do: [
          'Agents IA sur mesure, automatisations et outils basés sur les LLM.',
          'Intégrations avec les CRM, données et stacks SaaS existants.',
          'Ingénierie de production : tests, monitoring, déploiement.',
        ],
        dontHeading: 'Ce que ne fait pas AISO Dev',
        dont: [
          'AISO Dev n\'optimise pas pour la recherche IA. C\'est AISO Hub.',
          'AISO Dev ne gère pas les réseaux sociaux. C\'est AISO Buzz.',
        ],
        fitsHeading: 'Pour qui est AISO Dev',
        fits:
          'Les PME et scale-ups qui ont besoin de vrais logiciels, pas seulement de prompts. Des équipes prêtes à intégrer l\'IA dans leur quotidien avec une fiabilité de production.',
        cta: 'Visiter AISO Dev →',
        breadcrumbHome: 'Accueil',
        breadcrumbBrands: 'Marques',
      },
    },
  },
  'aiso-buzz': {
    slug: 'aiso-buzz',
    externalUrl: 'https://aiso-buzz.com',
    accentHex: '#F97316',
    accentHexHover: '#EA580C',
    copy: {
      en: {
        metaTitle: 'AISO Buzz - AI-Powered Social | AISO Group',
        metaDescription:
          'AISO Buzz is the AI-Powered Social specialist in the AISO Group. We run social content production at scale using AI, with human editors keeping the brand on key.',
        kicker: 'AISO Buzz',
        heading: 'AI-Powered Social',
        whatIsHeading: 'What is AISO Buzz?',
        whatIs:
          'AISO Buzz is the AI-Powered Social specialist in the AISO Group. It is part of AISO Group and focuses on producing social content at scale using AI, with human editors keeping the brand on key. AISO Buzz runs editorial calendars across LinkedIn, Instagram, TikTok, and X, ships short-form video and image assets, and reports on what actually moved the needle for B2B and consumer brands.',
        doHeading: 'What AISO Buzz does',
        do: [
          'Editorial calendars and content production across LinkedIn, Instagram, TikTok, and X.',
          'Short-form video, carousel, and image assets at speed.',
          'Reporting on what moved engagement, reach, and pipeline.',
        ],
        dontHeading: 'What AISO Buzz does not do',
        dont: [
          'AISO Buzz does not run AI search optimization. That is AISO Hub.',
          'AISO Buzz does not build custom software. That is AISO Dev.',
        ],
        fitsHeading: 'Who AISO Buzz fits',
        fits:
          'Brands that need to show up consistently on social without burning out a small marketing team. B2B and consumer brands that want speed without losing voice.',
        cta: 'Visit AISO Buzz →',
        breadcrumbHome: 'Home',
        breadcrumbBrands: 'Brands',
      },
      'pt-pt': {
        metaTitle: 'AISO Buzz - Social Powered by AI | AISO Group',
        metaDescription:
          'A AISO Buzz é a especialista em redes sociais com IA do AISO Group. Produzimos conteúdo social à escala com IA, mantido on-brand por editores humanos.',
        kicker: 'AISO Buzz',
        heading: 'Social Powered by AI',
        whatIsHeading: 'O que é a AISO Buzz?',
        whatIs:
          'A AISO Buzz é a especialista em redes sociais com IA do AISO Group. Faz parte do AISO Group e foca-se em produzir conteúdo social à escala com IA, mantido on-brand por editores humanos. A AISO Buzz gere calendários editoriais no LinkedIn, Instagram, TikTok e X, entrega vídeo curto, carrosséis e imagens, e reporta o que efetivamente moveu engagement e pipeline para marcas B2B e de consumo.',
        doHeading: 'O que a AISO Buzz faz',
        do: [
          'Calendários editoriais e produção de conteúdo no LinkedIn, Instagram, TikTok e X.',
          'Vídeo curto, carrosséis e imagens entregues com rapidez.',
          'Reporting do que moveu engagement, alcance e pipeline.',
        ],
        dontHeading: 'O que a AISO Buzz não faz',
        dont: [
          'A AISO Buzz não faz otimização para pesquisa por IA. Isso é a AISO Hub.',
          'A AISO Buzz não desenvolve software à medida. Isso é a AISO Dev.',
        ],
        fitsHeading: 'Para quem é a AISO Buzz',
        fits:
          'Marcas que precisam de presença consistente nas redes sociais sem queimar uma equipa pequena de marketing. Marcas B2B e de consumo que querem velocidade sem perder voz.',
        cta: 'Visitar AISO Buzz →',
        breadcrumbHome: 'Início',
        breadcrumbBrands: 'Marcas',
      },
      fr: {
        metaTitle: 'AISO Buzz - Social Boosté par l\'IA | AISO Group',
        metaDescription:
          'AISO Buzz est le spécialiste social boosté par l\'IA du AISO Group. Production de contenu social à l\'échelle avec l\'IA, et des éditeurs humains qui gardent la marque alignée.',
        kicker: 'AISO Buzz',
        heading: 'Social Boosté par l\'IA',
        whatIsHeading: 'Qu\'est-ce que AISO Buzz ?',
        whatIs:
          'AISO Buzz est le spécialiste social boosté par l\'IA du AISO Group. Il fait partie du AISO Group et se concentre sur la production de contenu social à l\'échelle avec l\'IA, des éditeurs humains gardant la marque alignée. AISO Buzz gère des calendriers éditoriaux sur LinkedIn, Instagram, TikTok et X, livre vidéos courtes, carrousels et visuels, et reporte ce qui a réellement bougé l\'engagement et le pipeline pour les marques B2B et grand public.',
        doHeading: 'Ce que fait AISO Buzz',
        do: [
          'Calendriers éditoriaux et production de contenu sur LinkedIn, Instagram, TikTok et X.',
          'Vidéo courte, carrousels et visuels livrés rapidement.',
          'Reporting de ce qui a bougé l\'engagement, la portée et le pipeline.',
        ],
        dontHeading: 'Ce que ne fait pas AISO Buzz',
        dont: [
          'AISO Buzz ne fait pas d\'optimisation pour la recherche IA. C\'est AISO Hub.',
          'AISO Buzz ne développe pas de logiciels sur mesure. C\'est AISO Dev.',
        ],
        fitsHeading: 'Pour qui est AISO Buzz',
        fits:
          'Les marques qui doivent être présentes régulièrement sur les réseaux sans épuiser une petite équipe marketing. Marques B2B et grand public qui veulent la vitesse sans perdre la voix.',
        cta: 'Visiter AISO Buzz →',
        breadcrumbHome: 'Accueil',
        breadcrumbBrands: 'Marques',
      },
    },
  },
  'aiso-learn': {
    slug: 'aiso-learn',
    externalUrl: 'https://aiso-learn.com',
    accentHex: '#8B5CF6',
    accentHexHover: '#7C3AED',
    copy: {
      en: {
        metaTitle: 'AISO Learn - Corporate AI Training | AISO Group',
        metaDescription:
          'AISO Learn is the AI Training specialist in the AISO Group. Practical, role-based AI training for teams that want to actually use AI at work.',
        kicker: 'AISO Learn',
        heading: 'Corporate AI Training',
        whatIsHeading: 'What is AISO Learn?',
        whatIs:
          'AISO Learn is the AI Training specialist in the AISO Group. It is part of AISO Group and focuses on practical, role-based AI training that helps teams actually use AI at work. AISO Learn runs onboarding programs, hands-on workshops, and ongoing coaching for marketing, sales, operations, legal, and HR teams that want measurable productivity gains, not theory.',
        doHeading: 'What AISO Learn does',
        do: [
          'Onboarding programs and role-based AI workshops.',
          'Hands-on coaching for marketing, sales, ops, legal, and HR teams.',
          'Practical playbooks and certification paths tied to real workflows.',
        ],
        dontHeading: 'What AISO Learn does not do',
        dont: [
          'AISO Learn does not optimise for AI search. That is AISO Hub.',
          'AISO Learn does not build custom software. That is AISO Dev.',
        ],
        fitsHeading: 'Who AISO Learn fits',
        fits:
          'Companies whose teams need to use AI confidently and safely. HR and L&D leads who want measurable productivity gains, not yet another vendor demo.',
        cta: 'Visit AISO Learn →',
        breadcrumbHome: 'Home',
        breadcrumbBrands: 'Brands',
      },
      'pt-pt': {
        metaTitle: 'AISO Learn - Formação Corporativa em IA | AISO Group',
        metaDescription:
          'A AISO Learn é a especialista em Formação em IA do AISO Group. Formação prática e por função para equipas que querem usar IA no trabalho.',
        kicker: 'AISO Learn',
        heading: 'Formação Corporativa em IA',
        whatIsHeading: 'O que é a AISO Learn?',
        whatIs:
          'A AISO Learn é a especialista em Formação em IA do AISO Group. Faz parte do AISO Group e foca-se em formação prática e por função que ajuda equipas a usar IA de facto no trabalho. A AISO Learn executa programas de onboarding, workshops práticos e coaching contínuo para equipas de marketing, vendas, operações, jurídico e RH que procuram ganhos mensuráveis de produtividade, não teoria.',
        doHeading: 'O que a AISO Learn faz',
        do: [
          'Programas de onboarding e workshops de IA por função.',
          'Coaching prático para equipas de marketing, vendas, operações, jurídico e RH.',
          'Playbooks práticos e percursos de certificação ligados a fluxos reais.',
        ],
        dontHeading: 'O que a AISO Learn não faz',
        dont: [
          'A AISO Learn não faz otimização para pesquisa por IA. Isso é a AISO Hub.',
          'A AISO Learn não desenvolve software à medida. Isso é a AISO Dev.',
        ],
        fitsHeading: 'Para quem é a AISO Learn',
        fits:
          'Empresas cujas equipas precisam de usar IA com confiança e segurança. Responsáveis de RH e L&D que querem ganhos mensuráveis de produtividade, não mais uma demo de fornecedor.',
        cta: 'Visitar AISO Learn →',
        breadcrumbHome: 'Início',
        breadcrumbBrands: 'Marcas',
      },
      fr: {
        metaTitle: 'AISO Learn - Formation IA en Entreprise | AISO Group',
        metaDescription:
          'AISO Learn est le spécialiste de la Formation IA du AISO Group. Formation pratique par métier pour les équipes qui veulent vraiment utiliser l\'IA au travail.',
        kicker: 'AISO Learn',
        heading: 'Formation IA en Entreprise',
        whatIsHeading: 'Qu\'est-ce que AISO Learn ?',
        whatIs:
          'AISO Learn est le spécialiste de la Formation IA du AISO Group. Il fait partie du AISO Group et se concentre sur une formation pratique par métier qui aide les équipes à vraiment utiliser l\'IA au travail. AISO Learn anime des programmes d\'onboarding, des ateliers pratiques et du coaching continu pour les équipes marketing, ventes, opérations, juridique et RH qui cherchent des gains de productivité mesurables, pas de la théorie.',
        doHeading: 'Ce que fait AISO Learn',
        do: [
          'Programmes d\'onboarding et ateliers IA par métier.',
          'Coaching pratique pour les équipes marketing, ventes, ops, juridique et RH.',
          'Playbooks concrets et parcours de certification liés à des flux réels.',
        ],
        dontHeading: 'Ce que ne fait pas AISO Learn',
        dont: [
          'AISO Learn ne fait pas d\'optimisation pour la recherche IA. C\'est AISO Hub.',
          'AISO Learn ne développe pas de logiciels sur mesure. C\'est AISO Dev.',
        ],
        fitsHeading: 'Pour qui est AISO Learn',
        fits:
          'Les entreprises dont les équipes doivent utiliser l\'IA avec confiance et sécurité. Responsables RH et L&D qui veulent des gains de productivité mesurables, pas une énième démo fournisseur.',
        cta: 'Visiter AISO Learn →',
        breadcrumbHome: 'Accueil',
        breadcrumbBrands: 'Marques',
      },
    },
  },
};

export const subBrandSlugs: SubBrandSlug[] = [
  'aiso-hub',
  'aiso-dev',
  'aiso-buzz',
  'aiso-learn',
];
