// EN dictionary - single source of truth for all human-facing strings on
// aiso-group.com. Keys are organised per page (e.g. `home.hero.title`).
// Translator stubs in `fr.ts` and `pt-pt.ts` copy this structure verbatim;
// translators replace the string values.
//
// Blog post BODIES stay EN-only across locales (see CTO spec). Only the
// chrome (nav, filter labels, "Read →", breadcrumbs) is translated.

export const en = {
  meta: {
    siteName: 'AISO Group',
    titleSuffix: 'AISO Group',
  },

  nav: {
    home: 'Home',
    brands: 'Brands',
    about: 'About',
    news: 'News',
    contact: 'Contact',
    cta: 'Find your specialist →',
    openMenu: 'Toggle menu',
    skipToContent: 'Skip to main content',
    homeAriaLabel: 'AISO Group - Home',
    primaryAriaLabel: 'Primary',
  },

  languageSwitcher: {
    label: 'Language',
    english: 'English',
    portuguese: 'Português',
    french: 'Français',
  },

  footer: {
    partOf: 'Part of AISO Group',
    tagline:
      'Four specialist AI companies under one roof. AI search. AI systems. AI-powered social. AI training.',
    location: 'Lisbon, Portugal',
    siblingBrandsHeading: 'Sibling brands',
    siblingHub: 'AISO Hub - AI Search',
    siblingDev: 'AISO Dev - AI Systems',
    siblingBuzz: 'AISO Buzz - AI-Powered Social',
    siblingLearn: 'AISO Learn - AI Training',
    groupHeading: 'AISO Group',
    linkHome: 'Home',
    linkBrands: 'Brands',
    linkAbout: 'About',
    linkNews: 'News & notes',
    linkContact: 'Contact',
    contactLegalHeading: 'Contact & legal',
    privacyPolicy: 'Privacy policy',
    copyright:
      '© 2025-{year} AISO Group · Precious Episode LDA · Lisbon, Portugal',
    strapline: 'The specialist AI group for real businesses.',
  },

  home: {
    meta: {
      title: 'AISO | AISO Group - Specialist AI group based in Portugal',
      description:
        'AISO is the specialist AI group based in Lisbon, Portugal. Four AI companies under one roof: AI search (Hub), AI systems (Dev), AI-powered social (Buzz), AI training (Learn).',
    },
    hero: {
      kicker: 'AISO · Lisbon · 2026 · Specialist AI',
      title: 'AISO Group: the specialist AI group for real businesses.',
      lead:
        'AISO is four specialist AI companies under one roof. AI search. AI systems. AI-powered social. AI training. Pick the one that fits. Expand when you are ready.',
      ctaPrimary: 'Find your AISO specialist →',
      ctaSecondary: 'Talk to Greg →',
    },
    aboutAiso: {
      kicker: 'About AISO',
      title: 'AISO is the specialist AI group based in Portugal.',
      lead:
        'AISO (also known as AISO Group) is a specialist AI group founded in 2025 in Lisbon, Portugal. AISO operates four specialist AI companies: AISO Hub for AI search visibility, AISO Dev for AI implementation, AISO Buzz for AI-powered social content, and AISO Learn for corporate AI training and EU AI Act compliance. AISO serves PME and SMBs across Portugal, France, Belgium, Switzerland, and Luxembourg.',
    },
    router: {
      kicker: 'The router',
      title: 'Which AISO brand do I need?',
      lead: 'Three questions. One specialist. A 20-second answer.',
      hub: {
        question: 'Do I need to be found by AI?',
        answer: 'AISO Hub',
        audience:
          'We make your brand the answer ChatGPT, Perplexity, and Google AI Overviews cite. For businesses ready to own the AI search layer.',
        cta: 'Visit AISO Hub →',
      },
      dev: {
        question: 'Do I need AI to run something in my business?',
        answer: 'AISO Dev',
        audience:
          'We build AI systems your team can operate - data pipelines, agent workflows, custom internal tools. For SMBs with a process, not a slide deck.',
        cta: 'Visit AISO Dev →',
      },
      buzz: {
        question: 'Do I need content and social that sounds like my brand?',
        answer: 'AISO Buzz',
        audience:
          'We produce social and content backed by a brand bible, validated before it ships. For businesses without a marketing team who refuse to sound like AI.',
        cta: 'Visit AISO Buzz →',
      },
      learn: {
        question: 'Do I need my team to actually use AI?',
        answer: 'AISO Learn',
        audience:
          'We train your team from AI-curious to AI-capable - with EU AI Act-aligned curricula. For companies who need proof, not a PDF.',
        cta: 'Visit AISO Learn →',
      },
      fallback: {
        question: 'Not sure which one fits?',
        subtitle: 'Book a 20-minute call. We will route you.',
        cta: 'Talk to Greg →',
      },
    },
    verbTest: {
      kicker: 'The verb test',
      title: 'One line each. Made visible.',
      hubKicker: 'Hub cites',
      hubLine: 'We make AI quote your brand.',
      devKicker: 'Dev builds',
      devLine: 'We ship AI systems that run.',
      buzzKicker: 'Buzz says',
      buzzLine: 'We write content that sounds like you.',
      learnKicker: 'Learn teaches',
      learnLine: 'We turn AI-curious teams into AI-capable ones.',
    },
    founder: {
      kicker: 'Founder note',
      title: 'Why a group, not a generalist',
      p1: 'Generalist AI agencies fail small and mid-sized businesses. The work spreads thin. The team optimizes for hours, not outcomes.',
      p2: 'We built a group instead. Four specialist companies, each with one job.',
      p3: 'The advantage: you do not buy a bundle. You buy the specialist you need now. You bring in the others when the timing is right.',
      p4: 'Lisbon-based. EU-focused. Built in 2025.',
      signature: ' - Greg Stoos, Founder. Lisbon, 2025.',
      cta: 'Read the thesis →',
    },
  },

  about: {
    meta: {
      title: 'About - A branded house for specialist AI',
      description:
        'We built a group, not an agency. Four specialist AI companies, one roof, one rule: specialists beat generalists for real businesses.',
    },
    hero: {
      kicker: 'About AISO Group',
      title: 'We built a branded house because generalists fail SMBs.',
      lead:
        'Four specialist AI companies under one roof. One thesis: specialists beat generalists when the work is real and the budget is finite.',
    },
    sections: {
      whySpecialistHeading: 'Why specialist AI, and why now',
      whyP1: 'Small and mid-sized businesses do not need another generalist agency.',
      whyP2:
        'They need a partner who knows one thing well. AI search. AI systems. Social and content. AI training. Then - when the first job is done - a partner who can hand them cleanly to the next specialist, without a re-sell.',
      whyP3: 'That is the group model. Not a bundle. A roster.',

      fourHeading: 'The four companies',
      fourHub:
        '<strong>AISO Hub</strong> - AI Search Optimization. The specialist practice. Calm, editorial, citation-first.',
      fourDev:
        '<strong>AISO Dev</strong> - AI Implementation for SMBs. The workshop. Technical, practical, scoped.',
      fourBuzz:
        '<strong>AISO Buzz</strong> - AI-Powered Social & Content. The creative studio. Brand-bible-first, results-backed.',
      fourLearn:
        '<strong>AISO Learn</strong> - Corporate AI Training. The classroom. EU AI Act-aligned curricula, proof over PDFs.',
      fourFooter:
        'Each has its own site, its own team, its own voice. All four share a design system, a footer, and a standard.',

      notBeHeading: 'What we will not be',
      notBe1:
        'We are not a full-service agency. If you need a bundled retainer across every marketing discipline, we are the wrong call.',
      notBe2:
        'We are not a consultancy. We do not sell slide decks. Hub cites. Dev builds. Buzz says. Learn teaches. All four ship.',
      notBe3:
        'We are not an AI reseller. We do not pass you to a vendor. The work is our work.',

      lisbonHeading: 'Built in Lisbon, 2025',
      lisbonFounder:
        '<strong>Founder:</strong> Greg Stoos. Lisbon-based. 16,779 LinkedIn followers. 20+ years across marketing, operations, and software.',
      lisbonTeam:
        '<strong>Team:</strong> Human specialists per brand, AI-augmented throughout. Every AI output is reviewed by a human before it ships.',
      lisbonLegal: '<strong>Legal entity:</strong> Precious Episode LDA, Lisbon, Portugal.',
      lisbonFocus:
        '<strong>Focus:</strong> EU-based SMBs. English, Portuguese, French. Real businesses with real customers, not venture-backed experiments.',

      rulesHeading: 'The group rules',
      rule1:
        '<strong>One problem, one specialist.</strong> You do not need to pre-commit to a bundle. Start with the brand that fits the problem in front of you.',
      rule2:
        '<strong>Human validation on every output.</strong> No AI content goes to a client without a human signing off.',
      rule3:
        '<strong>Scoped engagements.</strong> Fixed timelines, fixed scopes, fixed price bands - especially at Hub and Dev. No mystery retainers.',
      rule4:
        '<strong>Cross-referrals without re-selling.</strong> When a Hub client needs Dev, the handoff is internal. No new sales process.',

      year2026Heading: '2026 is the year the generalist model breaks',
      year2026P1:
        'Every SMB has the same pressure: AI changes the work faster than a generalist can keep up.',
      year2026P2:
        'A generalist shop picks one AI tool, badges it as "digital transformation," and hopes the retainer survives the quarter.',
      year2026P3:
        'A specialist shop picks the problem, ships the fix, and moves on.',
      year2026P4:
        'The cost of the wrong call - retainers spent on work that does not land - is the reason we built a group.',

      proofHeading: 'Proof',
      proofIntro: '<em>We are new as a group. Older as operators.</em>',
      proofHub:
        '<strong>AISO Hub</strong> flagship site: <a href="https://aiso-hub.com" rel="noopener">aiso-hub.com</a>. Live case studies and insights.',
      proofDev:
        '<strong>AISO Dev</strong> ships internal tooling for the AISO platform itself - the AI engine, the orchestrator, the agent-messaging system.',
      proofBuzz:
        '<strong>AISO Buzz</strong> runs its own social under the same methodology it sells.',
      proofFooter:
        'Named client case studies are in review. We will publish them when the clients approve them.',

      ctaPrimary: 'Find your AISO specialist →',
      ctaSecondary: 'Talk to Greg →',
    },
  },

  brands: {
    meta: {
      title: 'Our brands - Hub, Dev, Buzz, Learn',
      description:
        'Four specialist AI companies. What each one does. What each one does not do. Pick the specialist that matches the problem.',
    },
    hero: {
      kicker: 'The four specialists',
      title: 'Four specialists. One practical advantage.',
      lead:
        'Each AISO brand has one job. When the job fits, the work is faster, sharper, and cheaper than a generalist. Here is what each one does - and what each one does not.',
    },
    oneJob: 'The one job:',
    whatWeDo: 'What we do:',
    whatWeDoNot: 'What we do not do:',
    whoItFits: 'Who it fits:',
    hub: {
      kicker: 'AISO Hub',
      heading: 'AI Search Optimization',
      cta: 'Visit AISO Hub →',
      oneJob: 'We make your brand the answer AI cites.',
      do1: 'AISO audits for ChatGPT, Perplexity, Gemini, Google AI Overviews.',
      do2: 'Structured data, content architecture, and citation-ready pages.',
      do3: 'Monthly monitoring of AI visibility across engines.',
      dont1: 'We do not write social posts. That is Buzz.',
      dont2: 'We do not build custom software. That is Dev.',
      fits:
        'Brands whose customers now ask AI before Google. SaaS, legal, health, finance, real estate - any business where being <em>cited</em> matters more than ranking.',
    },
    dev: {
      kicker: 'AISO Dev',
      heading: 'AI Systems for SMBs',
      cta: 'Visit AISO Dev →',
      oneJob: 'We build AI that runs in your business.',
      do1: 'Internal tools, agent workflows, data pipelines.',
      do2: 'AI-augmented websites and lead systems.',
      do3: 'Scoped projects with a fixed timeline and a fixed price band.',
      dont1: 'We do not do AI search optimization. That is Hub.',
      dont2: 'We do not manage your social channels. That is Buzz.',
      fits:
        'SMBs with a process that should not be manual anymore - a form that routes badly, a report that takes 8 hours, a lead flow that loses people between systems.',
    },
    buzz: {
      kicker: 'AISO Buzz',
      heading: 'AI-Powered Social & Content',
      cta: 'Visit AISO Buzz →',
      oneJob: 'We produce content that sounds like you, not like AI.',
      do1: 'Brand-bible-first social management across LinkedIn, Instagram, TikTok, YouTube.',
      do2: 'Content creation with a human validation step before every post.',
      do3: 'Monthly results reporting tied to reach, leads, and on-brand alignment.',
      dont1: 'We do not do AI search work. That is Hub.',
      dont2: 'We do not build software. That is Dev.',
      fits:
        'Businesses without a marketing team who need a real social presence - and refuse to sound generic.',
    },
    learn: {
      kicker: 'AISO Learn',
      heading: 'Corporate AI Training',
      cta: 'Visit AISO Learn →',
      oneJob: 'We turn AI-curious teams into AI-capable ones.',
      do1: 'Corporate AI training programmes - practical, role-based, outcome-measured.',
      do2: 'EU AI Act-aligned curricula and audit-ready documentation.',
      do3: 'From AI literacy fundamentals to advanced agentic workflows.',
      dont1: 'We do not build your AI systems. That is Dev.',
      dont2: 'We do not make you visible in AI search. That is Hub.',
      dont3: 'We do not produce your social content. That is Buzz.',
      fits:
        'Companies who need their team to actually use AI - and who need the training to stand up to an AI Act audit.',
    },
    howToChoose: {
      kicker: 'How to choose',
      title: 'If you want the long version.',
      short: '<em>If you want a 20-second answer, the homepage router is faster.</em>',
      bullet1:
        '<strong>Start with the pain you feel today.</strong> One brand, one problem. Do not buy a bundle.',
      bullet2:
        '<strong>Ask the verb question.</strong> Do you need AI to <em>cite</em> you, <em>build</em> for you, or <em>say</em> something for you? The verb tells you the specialist.',
      bullet3:
        '<strong>Bring in the next one when it matters.</strong> Most clients start with one brand. The others join when the timing is right.',
      ctaPrimary: 'Find your AISO specialist →',
      ctaSecondary: 'Talk to Greg →',
    },
  },

  contact: {
    meta: {
      title: 'Contact - Talk to Greg',
      description:
        'Not sure which specialist you need? Book a 20-minute call. Greg routes you to the right AISO brand - or tells you if we are the wrong call.',
    },
    hero: {
      kicker: 'Triage · not a sales funnel',
      title: 'Not sure which specialist? Book a call.',
      lead:
        '20 minutes with Greg. We route you to Hub, Dev, or Buzz - or we tell you honestly if we are the wrong fit. No decks. No sales team. Triage.',
    },
    form: {
      kicker: 'One form. Routed by Greg.',
      title: 'Three fields. No qualifying theater.',
      nameLabel: 'Your name',
      namePlaceholder: 'Full name',
      companyLabel: 'Company or project',
      companyPlaceholder: 'Where you work (or what you are building)',
      messageLabel: 'What are you looking for?',
      messagePlaceholder:
        'One sentence is enough. "We need AI search for a SaaS product" works. So does "Not sure, send help."',
      emailLabel: 'Email',
      emailPlaceholder: 'For the reply',
      submit: 'Route me',
      submitHelp:
        'Greg reads every inbound personally. Expect a reply within one business day.',
      statusRouting: 'Routing…',
      statusSuccess:
        'Thanks. Greg reads every inbound personally. Expect a reply within one business day.',
      statusFallback:
        'Opened your mail client - send from there if the inline form errored.',
      mailSubject: 'AISO Group inbound',
    },
    sidebar: {
      knowKicker: 'If you already know',
      knowHeading: 'Go directly to the brand',
      hubLine: 'aiso-hub.com - AI search work',
      devLine: 'aiso-dev.com - AI systems / software',
      buzzLine: 'aiso-buzz.com - Social & content',
      calendarKicker: 'If you want the calendar',
      calendarBody: '20-minute triage with Greg. No pitch.',
      calendarCta: 'Email Greg →',
      nextKicker: 'What happens next',
      next1:
        '<strong class="text-[#0A1628]">We read.</strong> Greg reads every form personally.',
      next2:
        '<strong class="text-[#0A1628]">We route.</strong> Reply within one business day - direct intro to the right team, or an honest "not us, try X."',
      next3:
        '<strong class="text-[#0A1628]">They scope.</strong> The specialist team (Hub, Dev, or Buzz) scopes the work with you directly.',
      notDoKicker: 'What we will not do',
      notDo1: 'We will not put you on a drip sequence.',
      notDo2: 'We will not send a 40-slide pitch deck.',
      notDo3: 'We will not sell you a bundled retainer on the first call.',
    },
  },

  privacy: {
    meta: {
      title: 'Privacy policy and data handling',
      description:
        'How AISO Group handles information submitted through aiso-group.com. Minimal data collection, EU-based processing, and explicit consent.',
    },
    hero: {
      kicker: 'Legal',
      title: 'Privacy policy',
      updatedLabel: 'Last updated:',
    },
    whoHeading: 'Who we are',
    whoBody:
      'AISO Group is a brand operated by Precious Episode LDA, a company registered in Portugal (NIF 514701617), with its registered office at Avenida David Mourão-Ferreira 14, 8A, 1750-204 Lisboa, Portugal. The group is the parent of four specialist companies: AISO Hub, AISO Dev, AISO Buzz, and AISO Learn.',
    collectHeading: 'What we collect',
    collectIntro:
      'On <strong>aiso-group.com</strong> we collect only what you hand us:',
    collectForm:
      '<strong>Contact form.</strong> Name, company, message, and (optionally) email. Used to reply to you and route you to the right sibling brand.',
    collectEmail:
      '<strong>Email.</strong> If you write to <span>hello@aiso-group.com</span>, we keep the thread in our mailbox.',
    collectLogs:
      '<strong>Server logs.</strong> Cloudflare edge logs (IP, user agent, path) for security and debugging. Retained up to 30 days.',
    collectNote:
      'No tracking cookies. No ad pixels. No analytics that identify you personally.',
    useHeading: 'What we do with it',
    use1: 'Reply to your inbound.',
    use2: 'Route you to Hub, Dev, or Buzz internally.',
    use3: 'Keep a minimal record of our correspondence.',
    useNote: 'We do not sell or rent your data to anyone. Ever.',
    accessHeading: 'Who sees your data',
    access1: '<strong>Greg Stoos</strong> (founder) and the triage operator.',
    access2:
      'The specialist team at the sibling brand we route you to, if we route you.',
    access3:
      '<strong>Processors:</strong> Cloudflare (hosting), Resend (email delivery), Google Workspace (mailbox). All GDPR-compliant.',
    rightsHeading: 'Your rights (GDPR)',
    rightsBody:
      'You can ask for a copy of your data, ask us to correct it, or ask us to delete it. Email <span>hello@aiso-group.com</span> with "GDPR request" in the subject. We reply within 30 days.',
    retentionHeading: 'Retention',
    retentionBody:
      'Contact-form entries: kept for 24 months unless you ask us to delete them sooner, or unless our correspondence continues.',
    changesHeading: 'Changes',
    changesBody:
      'We update this page when the practice changes. The "last updated" date above is the source of truth.',
    contactHeading: 'Contact',
    contactAddress:
      '<strong>Precious Episode LDA</strong><br />Avenida David Mourão-Ferreira 14, 8A<br />1750-204 Lisboa, Portugal<br />NIF 514701617<br /><span>hello@aiso-group.com</span>',
  },

  notFound: {
    meta: {
      title: 'Page not found - try the home router',
      description:
        'This page does not exist on aiso-group.com. Try the home router, or talk to Greg.',
    },
    kicker: '404',
    title: 'This page does not exist.',
    lead:
      'Happens. Try the home router - three questions, one specialist, a 20-second answer.',
    ctaPrimary: 'Back to home →',
    ctaSecondary: 'Talk to Greg →',
  },

  news: {
    meta: {
      title: 'News & notes from the AISO Group',
      description:
        'Group-level strategy, announcements, and occasional essays on specialist AI for real businesses. One to two posts a month. Anti-blog by design.',
    },
    hero: {
      kicker: 'Low frequency · High signal',
      title: 'News & notes.',
      lead:
        'Group-level announcements. Occasional essays on specialist AI for real businesses. One to two posts a month. Never more, rarely less.',
    },
    intro: {
      p1: 'This is not a content farm. We post when we have something to say - a launch, a hire, a shift in the category, a self-diagnostic tool for choosing between our brands.',
      p2: 'If you want tactical AISO writing, it lives at <a href="https://aiso-hub.com/insights" rel="noopener">aiso-hub.com/insights</a>. If you want build logs and engineering deep-dives, those live at <a href="https://aiso-dev.com" rel="noopener">aiso-dev.com</a>. If you want social and content trend teardowns, those live at <a href="https://aiso-buzz.com" rel="noopener">aiso-buzz.com</a>. If you want AI-training curricula and EU AI Act guidance, those live at <a href="https://aiso-learn.com" rel="noopener">aiso-learn.com</a>.',
      p3: 'This page is for the portfolio view only.',
    },
    // Post-card chrome - translated; post bodies stay EN.
    card: {
      readTimeSuffix: 'min read',
      readCta: 'Read →',
    },
    // Category filter labels - same keys as content/news frontmatter `category`.
    categories: {
      announcement: 'Announcement',
      'specialist-series': 'Specialist series',
      'meta-essay': 'Meta-essay',
    },
    // EN-only banner shown on news article pages in FR/PT (article body is EN).
    articleEnNotice: 'Article available in English only.',
    breadcrumbNews: 'News',
    breadcrumbHome: 'Home',
    routerFallback: {
      title: 'Four specialists. One practical advantage.',
      lead: 'Not sure which fits?',
      cta: 'Find your AISO specialist →',
    },
    postBack: '← Back to News & notes',
    postCta: 'Find your AISO specialist →',
  },
} as const;

export type Dictionary = typeof en;
