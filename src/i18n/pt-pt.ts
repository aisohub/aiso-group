// pt-PT dictionary — European Portuguese (pt-PT, not pt-BR).
//
// Scope of passes covered so far (translator, 2026-04-23):
//   - meta, nav, languageSwitcher, footer, news (blog-chrome) — prior pass
//   - home, brands — thread #69ea947ec5006dc554555d28 (this pass)
// Other top-level keys (about, contact, privacy, notFound) remain
// re-exported from EN verbatim — handled by sibling translators on
// other commits. Do NOT overwrite their work.
// "services" in CTO brief maps to `brands` — the four specialist brands
// ARE the services in this architecture (one page, one dictionary key).
//
// Register: implicit 3rd-person formal ("a sua equipa", "o seu especialista").
// Never use "você". Never use pt-BR forms (equipa not time, ficheiro not arquivo,
// gerir not gerenciar, etc.). See voice guide:
// Brands/AISO Group/Brand Bible/voice/voice-fr-pt.md
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

  home: {
    meta: {
      title: 'AISO Group — O grupo de IA especialista, ao serviço das empresas reais',
      description:
        'Quatro empresas especialistas em IA, sob o mesmo tecto. Pesquisa com IA (Hub), sistemas de IA (Dev), redes sociais potenciadas por IA (Buzz), formação em IA (Learn). Escolha a que se adequa — alargue quando estiver preparado.',
    },
    hero: {
      kicker: 'Lisboa · 2026 · IA especialista',
      title: 'O grupo de IA especialista, ao serviço das empresas reais.',
      lead:
        'Quatro empresas especialistas em IA, sob o mesmo tecto. Pesquisa com IA. Sistemas de IA. Redes sociais potenciadas por IA. Formação em IA. Escolha a que se adequa. Alargue quando estiver preparado.',
      ctaPrimary: 'Encontre o seu especialista AISO →',
      ctaSecondary: 'Falar com o Greg →',
    },
    router: {
      kicker: 'O encaminhador',
      title: 'De que marca AISO preciso?',
      lead: 'Três perguntas. Um especialista. Uma resposta em 20 segundos.',
      hub: {
        question: 'Preciso de ser encontrado pela IA?',
        answer: 'AISO Hub',
        audience:
          'Fazemos com que a sua marca seja a resposta que o ChatGPT, a Perplexity e o Google AI Overviews citam. Para empresas preparadas para ocupar a camada da pesquisa com IA.',
        cta: 'Visitar AISO Hub →',
      },
      dev: {
        question: 'Preciso de IA para fazer funcionar algo no meu negócio?',
        answer: 'AISO Dev',
        audience:
          'Construímos sistemas de IA que a sua equipa consegue operar — pipelines de dados, fluxos de agentes, ferramentas internas à medida. Para PME com um processo, não uma apresentação.',
        cta: 'Visitar AISO Dev →',
      },
      buzz: {
        question: 'Preciso de conteúdos e de social que soem à minha marca?',
        answer: 'AISO Buzz',
        audience:
          'Produzimos redes sociais e conteúdos sustentados por um livro de marca, validados antes de publicar. Para empresas sem equipa de marketing que se recusam a soar a IA.',
        cta: 'Visitar AISO Buzz →',
      },
      learn: {
        question: 'Preciso que a minha equipa use mesmo IA?',
        answer: 'AISO Learn',
        audience:
          'Formamos a sua equipa, do estado «curiosa sobre IA» ao estado «capaz em IA», com programas alinhados com o EU AI Act. Para empresas que precisam de provas, não de um PDF.',
        cta: 'Visitar AISO Learn →',
      },
      fallback: {
        question: 'Não tem a certeza de qual se adequa?',
        subtitle: 'Marque uma reunião de 20 minutos. Nós encaminhamos.',
        cta: 'Falar com o Greg →',
      },
    },
    verbTest: {
      kicker: 'O teste do verbo',
      title: 'Uma linha para cada um. Tornada visível.',
      hubKicker: 'Hub faz citar',
      hubLine: 'Fazemos com que a IA cite a sua marca.',
      devKicker: 'Dev constrói',
      devLine: 'Entregamos sistemas de IA que funcionam.',
      buzzKicker: 'Buzz diz',
      buzzLine: 'Escrevemos conteúdos que soam a si.',
      learnKicker: 'Learn ensina',
      learnLine: 'Transformamos equipas curiosas sobre IA em equipas capazes em IA.',
    },
    founder: {
      kicker: 'Nota do fundador',
      title: 'Porquê um grupo, não um generalista',
      p1: 'As agências generalistas de IA falham com as PME. O trabalho dispersa-se. A equipa optimiza as horas, não os resultados.',
      p2: 'Construímos um grupo em alternativa. Quatro empresas especialistas, cada uma com um só ofício.',
      p3: 'A vantagem: não compra um pacote. Compra o especialista de que precisa agora. Os outros entram quando fizer sentido.',
      p4: 'Sediados em Lisboa. Foco europeu. Construído em 2025.',
      signature: '— Greg Stoos, fundador. Lisboa, 2025.',
      cta: 'Ler a tese →',
    },
  },

  brands: {
    meta: {
      title: 'As nossas marcas — AISO Hub, AISO Dev, AISO Buzz, AISO Learn',
      description:
        'Quatro empresas especialistas em IA. O que cada uma faz. O que cada uma não faz. Escolha o especialista que corresponde ao problema.',
    },
    hero: {
      kicker: 'Os quatro especialistas',
      title: 'Quatro especialistas. Uma vantagem concreta.',
      lead:
        'Cada marca AISO tem um só ofício. Quando o ofício encaixa, o trabalho é mais rápido, mais preciso e mais barato do que com um generalista. Eis o que cada uma faz — e o que cada uma não faz.',
    },
    oneJob: 'O ofício:',
    whatWeDo: 'O que fazemos:',
    whatWeDoNot: 'O que não fazemos:',
    whoItFits: 'A quem se adequa:',
    hub: {
      kicker: 'AISO Hub',
      heading: 'Optimização para a pesquisa com IA',
      cta: 'Visitar AISO Hub →',
      oneJob: 'Fazemos com que a sua marca seja a resposta que a IA cita.',
      do1: 'Auditorias AISO para ChatGPT, Perplexity, Gemini e Google AI Overviews.',
      do2: 'Dados estruturados, arquitectura de conteúdo e páginas prontas a ser citadas.',
      do3: 'Acompanhamento mensal da visibilidade em IA em todos os motores.',
      dont1: 'Não escrevemos publicações de redes sociais. Isso é a Buzz.',
      dont2: 'Não desenvolvemos software à medida. Isso é a Dev.',
      fits:
        'Marcas cujos clientes agora perguntam à IA antes do Google. SaaS, jurídico, saúde, finanças, imobiliário — qualquer negócio em que ser <em>citado</em> importa mais do que posicionar-se.',
    },
    dev: {
      kicker: 'AISO Dev',
      heading: 'Sistemas de IA para PME',
      cta: 'Visitar AISO Dev →',
      oneJob: 'Construímos IA que funciona no seu negócio.',
      do1: 'Ferramentas internas, fluxos de agentes e pipelines de dados.',
      do2: 'Websites e sistemas de captação de leads enriquecidos com IA.',
      do3: 'Projectos delimitados, com prazo fixo e banda de preços fixa.',
      dont1: 'Não fazemos optimização para pesquisa com IA. Isso é a Hub.',
      dont2: 'Não gerimos os seus canais sociais. Isso é a Buzz.',
      fits:
        'PME com um processo que já não deveria ser manual — um formulário que encaminha mal, um relatório que leva 8 horas, um fluxo de leads que perde pessoas entre sistemas.',
    },
    buzz: {
      kicker: 'AISO Buzz',
      heading: 'Redes sociais e conteúdos com IA',
      cta: 'Visitar AISO Buzz →',
      oneJob: 'Produzimos conteúdos que soam a si, não a IA.',
      do1: 'Gestão de redes sociais sustentada pelo livro de marca no LinkedIn, Instagram, TikTok e YouTube.',
      do2: 'Criação de conteúdos com uma etapa de validação humana antes de cada publicação.',
      do3: 'Relatório mensal de resultados: alcance, leads e alinhamento com a marca.',
      dont1: 'Não fazemos trabalho de pesquisa com IA. Isso é a Hub.',
      dont2: 'Não construímos software. Isso é a Dev.',
      fits:
        'Empresas sem equipa de marketing que precisam de uma presença social real — e recusam-se a soar genéricas.',
    },
    learn: {
      kicker: 'AISO Learn',
      heading: 'Formação em IA para empresas',
      cta: 'Visitar AISO Learn →',
      oneJob: 'Transformamos equipas curiosas sobre IA em equipas capazes em IA.',
      do1: 'Programas de formação em IA para empresas — concretos, por função, medidos por resultados.',
      do2: 'Programas alinhados com o EU AI Act e documentação pronta para auditoria.',
      do3: 'Dos fundamentos da literacia em IA aos fluxos agenticos avançados.',
      dont1: 'Não construímos os seus sistemas de IA. Isso é a Dev.',
      dont2: 'Não o tornamos visível na pesquisa com IA. Isso é a Hub.',
      dont3: 'Não produzimos os seus conteúdos sociais. Isso é a Buzz.',
      fits:
        'Empresas que precisam que a sua equipa use mesmo IA — e cuja formação tem de resistir a uma auditoria ao AI Act.',
    },
    howToChoose: {
      kicker: 'Como escolher',
      title: 'Se quiser a versão longa.',
      short: '<em>Se quiser uma resposta em 20 segundos, o encaminhador da página inicial é mais rápido.</em>',
      bullet1:
        '<strong>Comece pela dor que sente hoje.</strong> Uma marca, um problema. Não compre um pacote.',
      bullet2:
        '<strong>Faça a pergunta do verbo.</strong> Precisa que a IA o <em>cite</em>, que <em>construa</em> para si ou que <em>diga</em> algo por si? O verbo indica o especialista.',
      bullet3:
        '<strong>Traga o seguinte quando fizer sentido.</strong> A maioria dos clientes começa com uma marca. As outras juntam-se quando o timing é o certo.',
      ctaPrimary: 'Encontre o seu especialista AISO →',
      ctaSecondary: 'Falar com o Greg →',
    },
  },
} as unknown) as Dictionary;
