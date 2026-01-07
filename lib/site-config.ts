/**
 * RBK - Site Configuration
 * 
 * Brand: Review. Build. Keep control.
 * A business-first automation and systems consultancy.
 */

export const siteConfig = {
  // Company Information
  company: {
    name: "RBK",
    legalName: 'SIA "RBK Realty"',
    registrationNumber: "40103633804",
    vatNumber: "LV40103633804",
    registrationDate: "06.02.2013",
    vatRegistrationDate: "11.03.2013",
    address: {
      street: "Hāpsalas iela 15 – 6/7",
      city: "Rīga",
      postalCode: "LV-1005",
      country: "Latvia",
      full: "Hāpsalas iela 15 – 6/7, Rīga, LV-1005, Latvia",
    },
    phone: "",
    email: "hello@rbk.lv",
    positioning: "Business-first automation and systems consultancy",
    establishedYear: 2013,
    establishedDate: "6 February 2013",
  },

  // Brand
  brand: {
    corePrinciple: "Review. Build. Keep control.",
    tagline: "Business-first automation and systems consultancy",
    shortSummary: "RBK helps businesses review their operations, build practical automation, and keep control over their systems.",
  },

  // SEO Defaults
  seo: {
    siteName: "RBK",
    defaultTitle: "RBK - Review. Build. Keep control.",
    defaultDescription:
      "RBK helps small and service-based businesses understand how their operations work, build reliable internal systems, and keep long-term control over processes, data, and decisions.",
    locale: "en_LV",
    type: "website",
  },

  // Navigation
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    languages: [
      { code: "en", label: "EN" },
      { code: "lv", label: "LV" },
      { code: "ru", label: "RU" },
    ],
  },

  // Home Page Content
  home: {
    hero: {
      headline: "Review how your business works.",
      sublines: [
        "Build systems that support it.",
        "Keep control as you grow.",
      ],
      description: "RBK helps small and service-based businesses understand how their operations actually work, build reliable internal systems, and keep long-term control over processes, data, and decisions.",
      cta: { label: "Start a conversation", href: "/contact" },
    },
    
    approach: {
      title: "How we work",
      intro: "RBK does not start with tools. RBK starts with a review of the business as it exists today. Automation and AI are applied only after workflows, responsibilities, and information flows are clearly understood.",
      goal: "The goal is not speed or novelty, but operational clarity and owner control.",
    },

    principles: {
      title: "Our approach",
      items: [
        {
          title: "Review",
          description: "We begin by reviewing how your business operates in reality — not how it is described on paper. This includes how work moves through the business, where manual effort is repeated, where information is lost, and where systems depend on individuals instead of structure.",
          detail: "The review phase is diagnostic, not disruptive. It creates a shared understanding before any solution is proposed.",
        },
        {
          title: "Build",
          description: "We build systems that support the reviewed processes. This includes clear workflows, practical automation, structured data flows, and AI-supported decision tools where they add measurable value.",
          detail: "Every system is built to match how your business works, not how software expects it to work. Solutions are intentionally simple, documented, and maintainable.",
        },
        {
          title: "Keep control",
          description: "We ensure that control remains with your business. No black-box systems. No unnecessary vendor lock-in. Clear ownership of data and logic. Transparency in how systems function.",
          detail: "The objective is independence, not dependency. You should be able to operate without constant external support.",
        },
      ],
    },

    whatWeDo: {
      title: "What we do",
      items: [
        "Review operational workflows and dependencies",
        "Identify bottlenecks and owner-dependency risks",
        "Design automation aligned with real business processes",
        "Implement AI where it improves decision quality or efficiency",
        "Document systems so they remain understandable over time",
      ],
      closing: "RBK works as a partner, not a replacement.",
    },

    whatWeDoNot: {
      title: "What we do not do",
      items: [
        "Sell tools without context",
        "Push automation where structure is missing",
        "Optimize metrics that do not matter to owners",
        "Build systems that only technicians understand",
        "Chase trends or buzzwords",
      ],
      closing: "Technology serves the business, not the other way around.",
    },

    idealClient: {
      title: "Who we work with",
      intro: "RBK works best with businesses that:",
      items: [
        "Are operationally active but structurally stretched",
        "Rely heavily on the owner for daily decisions",
        "Want fewer manual processes, not more software",
        "Value understanding and control over rapid scaling",
        "Prefer long-term clarity to short-term hacks",
      ],
    },

    cta: {
      title: "Ready to review how your business works?",
      description: "Let's start with a conversation about where you are today and where you want to be.",
      buttonLabel: "Get in touch",
      buttonHref: "/contact",
    },
  },

  // About Page Content
  about: {
    hero: {
      title: "About ",
      subtitle: "Business-first automation and systems consultancy",
    },
    overview: {
      title: "Who we are",
      paragraphs: [
        "RBK is a business-first automation and systems consultancy based in Riga, Latvia. We help small and service-based businesses understand how their operations actually work, build reliable internal systems, and keep long-term control over processes, data, and decisions.",
        "We do not start with tools. We start with a review of the business as it exists today. Automation and AI are applied only after workflows, responsibilities, and information flows are clearly understood.",
      ],
    },
    brandRule: {
      title: "Our internal rule",
      intro: "RBK always answers these questions before proposing a solution:",
      questions: [
        "What problem is being reviewed?",
        "What is being built, and why?",
        "How does the business keep control afterward?",
      ],
      closing: "If any of these are unclear, the solution is not ready.",
    },
    values: {
      title: "How we think",
      items: [
        {
          title: "Clarity over complexity",
          description: "We build systems that are understandable, not impressive. If you cannot explain how it works, it is not ready.",
        },
        {
          title: "Business first",
          description: "Technology serves the business. We start with operations, not tools. Solutions must match how work actually happens.",
        },
        {
          title: "Owner control",
          description: "The goal is independence, not dependency. You should understand and own your systems, not rent them.",
        },
        {
          title: "Long-term thinking",
          description: "Quick fixes create long-term problems. We build for sustainability, documentation, and maintainability.",
        },
      ],
    },
  },

  // Services Page Content
  services: {
    hero: {
      title: "Services",
      subtitle: "Review. Build. Keep control.",
    },
    intro: "We help businesses understand how their operations work, build systems that support real workflows, and maintain control over their processes and data.",
    
    phases: [
      {
        title: "Review",
        subtitle: "Understand how your business actually operates",
        description: "We begin by reviewing how your business works in reality. This diagnostic phase creates shared understanding before any solution is proposed.",
        includes: [
          "How work actually moves through the business",
          "Where manual effort is repeated",
          "Where information is lost or duplicated",
          "Where owners are required unnecessarily",
          "Where systems depend on individuals instead of structure",
        ],
        outcome: "A clear picture of your operations as they exist today, with identified opportunities for improvement.",
      },
      {
        title: "Build",
        subtitle: "Create systems that match how you work",
        description: "We build systems that support your reviewed processes. Every solution is designed to match how your business actually works, not how software expects it to work.",
        includes: [
          "Clear workflows and process documentation",
          "Practical automation for repetitive tasks",
          "Structured data flows between systems",
          "AI-supported decision tools where they add value",
          "Integration with existing tools and processes",
        ],
        outcome: "Intentionally simple, documented, and maintainable systems that support your operations.",
      },
      {
        title: "Keep control",
        subtitle: "Maintain independence over your systems",
        description: "We ensure that control remains with your business. The objective is independence, not dependency on external support.",
        includes: [
          "No black-box systems — everything is transparent",
          "No unnecessary vendor lock-in",
          "Clear ownership of data and logic",
          "Documentation for ongoing maintenance",
          "Training for your team where needed",
        ],
        outcome: "The ability to understand, maintain, and evolve your systems without constant external help.",
      },
    ],

    technologies: {
      title: "Tools we use",
      intro: "We work with established, practical tools. The choice of technology follows from business requirements, not the other way around.",
      categories: [
        {
          title: "Automation",
          items: ["N8N", "Make.com", "Zapier", "Custom scripts"],
        },
        {
          title: "Data & Integration",
          items: ["APIs", "Databases", "Spreadsheets", "CRM systems"],
        },
        {
          title: "AI & Analysis",
          items: ["LLM integration", "Data analysis", "Decision support tools"],
        },
        {
          title: "Documentation",
          items: ["Process mapping", "System documentation", "Training materials"],
        },
      ],
    },
  },

  // Contact Page Content
  contact: {
    hero: {
      title: "Let's talk",
      subtitle: "Start with a conversation about where you are today",
    },
    intro: "We begin every engagement with a conversation. Tell us about your business and what you are trying to solve. There is no commitment — just an honest discussion about whether we can help.",
    form: {
      title: "Send a message",
      fields: {
        name: { label: "Name", placeholder: "Your name" },
        company: { label: "Company (optional)", placeholder: "Your company" },
        email: { label: "Email", placeholder: "your@email.com" },
        serviceType: {
          label: "What are you looking for?",
          placeholder: "Select an option",
          options: [
            { value: "review", label: "Operations review" },
            { value: "automation", label: "Automation project" },
            { value: "systems", label: "Systems design" },
            { value: "consultation", label: "General consultation" },
            { value: "other", label: "Something else" },
          ],
        },
        message: {
          label: "Tell us about your situation",
          placeholder: "Describe your business, current challenges, and what you are hoping to achieve...",
        },
      },
      submitLabel: "Send message",
      successMessage: "Thank you. We will review your message and respond within 1-2 business days.",
    },
    info: {
      email: {
        label: "Email",
        value: "hello@rbk.lv",
      },
      response: {
        label: "Response time",
        value: "Within 1-2 business days",
      },
    },
  },

  // Footer Content
  footer: {
    tagline: "Review. Build. Keep control.",
    quickLinks: {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
    },
    cookieNotice: "This website uses essential cookies only.",
  },
};

export type SiteConfig = typeof siteConfig;
