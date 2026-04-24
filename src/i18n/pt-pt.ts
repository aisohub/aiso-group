// pt-PT dictionary — European Portuguese (pt-PT, not pt-BR).
//
// Scope of passes covered so far (translator, 2026-04-23):
//   - meta, nav, languageSwitcher, footer, news (blog-chrome) — prior pass
//   - home, brands — thread #69ea947ec5006dc554555d28
//   - about, contact, privacy, notFound — thread #69ea9487c5006dc554555d3c
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
      p2: 'Se procura textos tácticos sobre AISO, encontra-os em <a href="https://aiso-hub.com/insights" rel="noopener">aiso-hub.com/insights</a>. Se procura registos de construção e análises técnicas aprofundadas, estão em <a href="https://aiso-dev.com" rel="noopener">aiso-dev.com</a>. Se procura análises de tendências sociais e de conteúdo, estão em <a href="https://aiso-buzz.com" rel="noopener">aiso-buzz.com</a>. Se procura programas de formação em IA e orientações sobre o AI Act, estão em <a href="https://aiso-learn.com" rel="noopener">aiso-learn.com</a>.',
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

  about: {
    meta: {
      title: 'Sobre — Uma arquitetura de marcas filhas para a IA especialista',
      description:
        'Construímos um grupo, não uma agência. Quatro empresas especialistas em IA, um único tecto, uma única regra: os especialistas ganham aos generalistas quando se trata de empresas reais.',
    },
    hero: {
      kicker: 'Sobre a AISO Group',
      title: 'Construímos uma arquitetura de marcas filhas porque os generalistas falham com as PME.',
      lead:
        'Quatro empresas especialistas em IA, sob o mesmo tecto. Uma tese: os especialistas ganham aos generalistas quando o trabalho é concreto e o orçamento é finito.',
    },
    sections: {
      whySpecialistHeading: 'Porquê IA especialista, e porquê agora',
      whyP1: 'As pequenas e médias empresas não precisam de mais uma agência generalista.',
      whyP2:
        'Precisam de um parceiro que domine uma coisa só. Pesquisa com IA. Sistemas de IA. Redes sociais e conteúdos. Formação em IA. Depois — terminado o primeiro trabalho — de um parceiro capaz de as passar de forma limpa ao especialista seguinte, sem novo processo comercial.',
      whyP3: 'É o modelo do grupo. Não é um pacote. É um roster.',

      fourHeading: 'As quatro empresas',
      fourHub:
        '<strong>AISO Hub</strong> — AI Search Optimization. A prática especialista. Serena, editorial, centrada na citação.',
      fourDev:
        '<strong>AISO Dev</strong> — Implementação de IA para PME. A oficina. Técnica, concreta, com âmbito definido.',
      fourBuzz:
        '<strong>AISO Buzz</strong> — Redes sociais e conteúdos com IA. O estúdio criativo. Brand-bible-first, com resultados.',
      fourLearn:
        '<strong>AISO Learn</strong> — Formação empresarial em IA. A sala de aula. Currículos alinhados com o AI Act, provas em vez de PDFs.',
      fourFooter:
        'Cada uma tem o seu site, a sua equipa e a sua voz. As quatro partilham um design system, um rodapé e um padrão.',

      notBeHeading: 'O que a AISO Group não será',
      notBe1:
        'Não somos uma agência full-service. Se procura um retainer que agregue todas as disciplinas de marketing, não somos a escolha certa.',
      notBe2:
        'Não somos uma consultora. Não vendemos apresentações. A Hub cita. A Dev constrói. A Buzz comunica. A Learn ensina. As quatro entregam.',
      notBe3:
        'Não somos revendedores de IA. Não o passamos a um fornecedor. O trabalho é nosso.',

      lisbonHeading: 'Construído em Lisboa, em 2025',
      lisbonFounder:
        '<strong>Fundador:</strong> Greg Stoos. Baseado em Lisboa. 16 779 seguidores no LinkedIn. Mais de 20 anos em marketing, operações e software.',
      lisbonTeam:
        '<strong>Equipa:</strong> especialistas humanos por marca, com IA como apoio transversal. Todo o resultado de IA é validado por um humano antes de ser entregue.',
      lisbonLegal: '<strong>Entidade jurídica:</strong> Precious Episode LDA, Lisboa, Portugal.',
      lisbonFocus:
        '<strong>Foco:</strong> PME europeias. Inglês, português, francês. Empresas reais com clientes reais, não experiências financiadas por capital de risco.',

      rulesHeading: 'As regras do grupo',
      rule1:
        '<strong>Um problema, um especialista.</strong> Não é preciso comprometer-se à partida com um pacote. Comece pela marca que responde ao problema que tem à frente.',
      rule2:
        '<strong>Validação humana em cada entrega.</strong> Nenhum conteúdo de IA chega a um cliente sem ser aprovado por um humano.',
      rule3:
        '<strong>Projetos com âmbito definido.</strong> Prazos fixos, âmbitos fixos, bandas de preço fixas — em especial na Hub e na Dev. Sem retainers opacos.',
      rule4:
        '<strong>Reencaminhamento interno, sem nova venda.</strong> Quando um cliente da Hub precisa da Dev, a passagem é interna. Sem novo processo comercial.',

      year2026Heading: '2026, o ano em que o modelo generalista se parte',
      year2026P1:
        'Todas as PME sentem a mesma pressão: a IA muda o trabalho mais depressa do que um generalista consegue acompanhar.',
      year2026P2:
        'Uma agência generalista escolhe uma ferramenta de IA, chama-lhe «transformação digital» e espera que o retainer sobreviva ao trimestre.',
      year2026P3:
        'Uma empresa especialista identifica o problema, entrega a solução e segue em frente.',
      year2026P4:
        'O custo da escolha errada — retainers gastos em trabalho que não produz resultados — é a razão pela qual construímos um grupo.',

      proofHeading: 'Provas',
      proofIntro: '<em>Somos novos enquanto grupo. Mais antigos enquanto operadores.</em>',
      proofHub:
        '<strong>AISO Hub</strong> — site de referência: <a href="https://aiso-hub.com" rel="noopener">aiso-hub.com</a>. Casos de estudo e análises publicadas.',
      proofDev:
        '<strong>AISO Dev</strong> entrega a ferramentaria interna da própria plataforma AISO — o motor de IA, o orquestrador e o sistema de mensagens entre agentes.',
      proofBuzz:
        '<strong>AISO Buzz</strong> gere as suas próprias redes sociais com a mesma metodologia que vende.',
      proofFooter:
        'Os casos de estudo de clientes com nome estão em revisão. Serão publicados quando os clientes os aprovarem.',

      ctaPrimary: 'Encontre o seu especialista AISO →',
      ctaSecondary: 'Falar com o Greg →',
    },
  },

  contact: {
    meta: {
      title: 'Contacto — Falar com o Greg',
      description:
        'Não tem a certeza de qual o especialista de que precisa? Marque uma reunião de 20 minutos. O Greg encaminha para a marca AISO certa — ou diz-lhe, com honestidade, se não somos o parceiro indicado.',
    },
    hero: {
      kicker: 'Triagem · não é um funil de vendas',
      title: 'Não tem a certeza de qual o especialista? Marque uma reunião.',
      lead:
        '20 minutos com o Greg. Encaminhamos para a Hub, para a Dev ou para a Buzz — ou dizemos honestamente se não somos o parceiro certo. Sem apresentações. Sem equipa comercial. Triagem.',
    },
    form: {
      kicker: 'Um formulário. Encaminhado pelo Greg.',
      title: 'Três campos. Sem teatro de qualificação.',
      nameLabel: 'O seu nome',
      namePlaceholder: 'Nome completo',
      companyLabel: 'Empresa ou projeto',
      companyPlaceholder: 'Onde trabalha (ou o que está a construir)',
      messageLabel: 'O que procura?',
      messagePlaceholder:
        'Uma frase chega. «Precisamos de pesquisa com IA para um produto SaaS» funciona. «Não tenho a certeza, precisamos de ajuda» também.',
      emailLabel: 'E-mail',
      emailPlaceholder: 'Para a resposta',
      submit: 'Encaminhar',
      submitHelp:
        'O Greg lê pessoalmente cada mensagem recebida. Resposta num dia útil.',
      statusRouting: 'A encaminhar…',
      statusSuccess:
        'Obrigado. O Greg lê pessoalmente cada mensagem recebida. Resposta num dia útil.',
      statusFallback:
        'Abrimos o seu cliente de e-mail — envie a partir daí se o formulário tiver falhado.',
      mailSubject: 'Mensagem recebida AISO Group',
    },
    sidebar: {
      knowKicker: 'Se já sabe',
      knowHeading: 'Vá diretamente à marca',
      hubLine: 'aiso-hub.com — Pesquisa com IA',
      devLine: 'aiso-dev.com — Sistemas de IA / software',
      buzzLine: 'aiso-buzz.com — Redes sociais e conteúdos',
      calendarKicker: 'Se prefere o calendário',
      calendarBody: 'Triagem de 20 minutos com o Greg. Sem pitch.',
      calendarCta: 'Escrever ao Greg →',
      nextKicker: 'O que acontece a seguir',
      next1:
        '<strong class="text-[#0A1628]">Lemos.</strong> O Greg lê pessoalmente cada formulário.',
      next2:
        '<strong class="text-[#0A1628]">Encaminhamos.</strong> Resposta num dia útil — apresentação direta à equipa certa ou um honesto «não somos nós, experimente X».',
      next3:
        '<strong class="text-[#0A1628]">A equipa define o âmbito.</strong> A equipa especialista (Hub, Dev ou Buzz) define o âmbito do trabalho consigo diretamente.',
      notDoKicker: 'O que não fazemos',
      notDo1: 'Não o colocamos numa sequência automática.',
      notDo2: 'Não enviamos uma apresentação de 40 slides.',
      notDo3: 'Não lhe vendemos um retainer agregado à primeira reunião.',
    },
  },

  privacy: {
    meta: {
      title: 'Política de privacidade',
      description:
        'Forma como a AISO Group trata a informação submetida através de aiso-group.com. Mínima, baseada na UE, explícita.',
    },
    hero: {
      kicker: 'Informações legais',
      title: 'Política de privacidade',
      updatedLabel: 'Última atualização:',
    },
    whoHeading: 'Quem somos',
    whoBody:
      'A AISO Group é uma marca explorada pela Precious Episode LDA, sociedade registada em Portugal (NIF 514701617), com sede na Avenida David Mourão-Ferreira 14, 8A, 1750-204 Lisboa, Portugal. O grupo é a sociedade-mãe de quatro empresas especialistas: AISO Hub, AISO Dev, AISO Buzz e AISO Learn.',
    collectHeading: 'Dados recolhidos',
    collectIntro:
      'Em <strong>aiso-group.com</strong>, a AISO Group recolhe apenas os dados que o utilizador fornece:',
    collectForm:
      '<strong>Formulário de contacto.</strong> Nome, empresa, mensagem e, facultativamente, endereço de e-mail. Utilizados para responder e para encaminhar o pedido para a marca do grupo adequada.',
    collectEmail:
      '<strong>Correio eletrónico.</strong> Qualquer mensagem enviada para <a href="mailto:hello@aiso-group.com">hello@aiso-group.com</a> é conservada na caixa de correio do grupo.',
    collectLogs:
      '<strong>Registos de servidor.</strong> Registos de edge da Cloudflare (endereço IP, user-agent, caminho) para fins de segurança e depuração. Conservados no máximo 30 dias.',
    collectNote:
      'Sem cookies de rastreamento. Sem pixels publicitários. Sem ferramentas de analítica que identifiquem pessoalmente o utilizador.',
    useHeading: 'Finalidades do tratamento',
    use1: 'Responder ao pedido recebido.',
    use2: 'Encaminhar o pedido, internamente, para a Hub, para a Dev ou para a Buzz.',
    use3: 'Conservar um registo mínimo da correspondência.',
    useNote: 'A AISO Group não vende nem aluga dados pessoais a terceiros. Em circunstância alguma.',
    accessHeading: 'Quem acede aos dados',
    access1: '<strong>Greg Stoos</strong> (fundador) e o operador responsável pela triagem.',
    access2:
      'A equipa especialista da marca do grupo para a qual o pedido seja encaminhado, quando aplicável.',
    access3:
      '<strong>Subcontratantes:</strong> Cloudflare (alojamento), Resend (entrega de e-mail), Google Workspace (caixa de correio). Todos em conformidade com o RGPD.',
    rightsHeading: 'Direitos dos titulares (RGPD)',
    rightsBody:
      'O titular dos dados pode solicitar uma cópia dos seus dados, a sua retificação ou o seu apagamento. Para o efeito, deverá escrever para <a href="mailto:hello@aiso-group.com">hello@aiso-group.com</a> indicando «Pedido RGPD» no assunto. A resposta é dada no prazo de 30 dias.',
    retentionHeading: 'Conservação',
    retentionBody:
      'Submissões do formulário de contacto: conservadas durante 24 meses, salvo pedido de apagamento anterior ou manutenção da correspondência.',
    changesHeading: 'Alterações',
    changesBody:
      'Esta página é atualizada sempre que as práticas se alterarem. A data de «última atualização» acima constitui a referência.',
    contactHeading: 'Contacto',
    contactAddress:
      '<strong>Precious Episode LDA</strong><br />Avenida David Mourão-Ferreira 14, 8A<br />1750-204 Lisboa, Portugal<br />NIF 514701617<br /><a href="mailto:hello@aiso-group.com">hello@aiso-group.com</a>',
  },

  notFound: {
    meta: {
      title: 'Página não encontrada',
      description:
        'Esta página não existe em aiso-group.com. Experimente o encaminhador da página inicial ou fale com o Greg.',
    },
    kicker: '404',
    title: 'Esta página não existe.',
    lead:
      'Acontece. Experimente o encaminhador da página inicial — três perguntas, um especialista, uma resposta em 20 segundos.',
    ctaPrimary: 'Voltar ao início →',
    ctaSecondary: 'Falar com o Greg →',
  },
} as unknown) as Dictionary;
