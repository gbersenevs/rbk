/**
 * FDA SERVICE, SIA - Site Configuration
 * 
 * This file contains all company information, content, and copy.
 * Edit this file to update website content without touching components.
 */

export const siteConfig = {
  // Company Information
  company: {
    name: "FDA SERVICE",
    legalName: 'SIA "FDA SERVICE"',
    registrationNumber: "41503074036",
    vatNumber: "LV41503074036",
    sepaIdentifier: "LV82ZZZ41503074036",
    address: {
      street: "18. novembra iela 97A–20",
      city: "Daugavpils",
      postalCode: "LV-5404",
      country: "Latvia",
      region: "Latgale",
      full: "18. novembra iela 97A–20, Daugavpils, LV-5404, Latvia",
    },
    phone: "", // No phone number
    email: "info@fda.lv",
    positioning: "Professional building cleaning services in Latgale region",
    establishedYear: 2015,
    establishedDate: "9 December 2015",
    trustLine: "10+ years of professional cleaning experience",
    shareCapital: "€3,000",
    
    // Business details
    naceCode: "81.21",
    naceDescription: "General cleaning of buildings",
    workingHours: "Monday - Friday: 8:00 - 18:00",
    industriesServed: [
      "Commercial buildings",
      "Residential buildings",
      "Office spaces",
      "Institutional facilities",
      "Retail premises",
    ],
    serviceAreas: ["Daugavpils", "Latgale region", "Latvia"],
  },

  // SEO Defaults
  seo: {
    siteName: "FDA SERVICE",
    defaultTitle: "FDA SERVICE - Professional Building Cleaning in Daugavpils",
    defaultDescription:
      "Professional building cleaning services in Daugavpils and Latgale region. Daily cleaning, general cleaning, and facility maintenance since 2015.",
    locale: "en_LV",
    type: "website",
  },

  // Navigation
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      {
        label: "Services",
        href: "/services",
        children: [
          { label: "Daily cleaning", href: "/services/daily-cleaning" },
          { label: "General cleaning", href: "/services/general-cleaning" },
          { label: "Facility support", href: "/services/facility-support" },
        ],
      },
      { label: "Contacts", href: "/contact" },
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
      headline: "Your partner for all things cleaning",
      subheadline:
        "We assist businesses and buildings in Daugavpils and the Latgale region with professional cleaning services. Leave the cleaning to us.",
      primaryCta: { label: "Get a free quote", href: "/contact" },
      secondaryCta: { label: "Our services", href: "/services" },
      stats: [
        { value: "10+", label: "Years experience" },
        { value: "100%", label: "Latvian company" },
        { value: "24/7", label: "Available support" },
      ],
    },
    mission: {
      title: "Our Mission",
      content:
        "To provide reliable, high-quality building cleaning services that create healthier, more productive environments for businesses and residents throughout the Latgale region.",
    },
    vision: {
      title: "Our Vision",
      bullets: [
        "To be the most trusted cleaning service provider in Latgale",
        "To set the standard for professional cleaning in our region",
      ],
      expandedContent:
        "We envision a future where every building in Daugavpils and the surrounding region benefits from professional cleaning standards. Our commitment to quality, reliability, and local expertise positions us as the partner of choice for businesses and property managers who value clean, healthy environments.",
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Reliability",
          description:
            "We show up on time, every time. Our clients trust us to deliver consistent results without fail.",
        },
        {
          title: "Quality",
          description:
            "We take pride in our work. Every surface cleaned meets our high standards of excellence.",
        },
        {
          title: "Integrity",
          description:
            "Transparent pricing, honest communication, and ethical business practices define how we operate.",
        },
        {
          title: "Local Focus",
          description:
            "As a Latgale-based company, we understand our community and are committed to its success.",
        },
      ],
    },
    services: {
      title: "Our Services",
      items: [
        {
          title: "Daily Cleaning",
          description:
            "Regular maintenance cleaning to keep your premises spotless and welcoming every single day.",
          href: "/services/daily-cleaning",
        },
        {
          title: "General Cleaning",
          description:
            "Deep cleaning services for thorough maintenance and restoration of your facilities.",
          href: "/services/general-cleaning",
        },
        {
          title: "Facility Support",
          description:
            "Comprehensive facility maintenance and support services for complete building care.",
          href: "/services/facility-support",
        },
      ],
    },
    objects: {
      title: "Buildings We Clean",
      categories: [
        {
          title: "Commercial & Office Buildings",
          items: [
            "Corporate offices",
            "Business centers",
            "Co-working spaces",
            "Banks and financial offices",
            "IT and tech companies",
          ],
        },
        {
          title: "Residential Buildings",
          items: [
            "Apartment building common areas",
            "Stairwells and corridors",
            "Entrances and lobbies",
            "Parking facilities",
            "Outdoor common areas",
          ],
        },
        {
          title: "Public & Commercial Spaces",
          items: [
            "Retail stores and shops",
            "Shopping centers",
            "Medical facilities",
            "Educational institutions",
            "Warehouses and industrial spaces",
          ],
        },
      ],
    },
    whyChoose: {
      title: "Why Choose FDA SERVICE",
      items: [
        "Local expertise – we know Daugavpils and Latgale",
        "10+ years of proven experience in building cleaning",
        "Fully compliant with Latvian regulations",
        "Flexible scheduling to fit your needs",
        "Dedicated account managers for direct communication",
        "Competitive pricing with transparent quotes",
      ],
    },
    compliance: {
      title: "Trusted & Compliant",
      content:
        "FDA SERVICE, SIA is a registered Latvian company operating in full compliance with Commercial Law and tax regulations. We maintain transparent business practices, submit regular financial reports, and have no registered tax debts or legal proceedings. Our commitment to compliance ensures peace of mind for all our clients.",
      certifications: [],
      insurance: null,
    },
    cta: {
      title: "Ready for a cleaner space?",
      content:
        "Contact us today for a free, no-obligation quote. We'll assess your needs and provide a customized cleaning solution.",
      buttonLabel: "Get your free quote",
      buttonHref: "/contact",
    },
  },

  // About Page Content
  about: {
    hero: {
      title: "About ",
      subtitle: "Professional building cleaning services since 2015",
    },
    highlights: [
      "Registered Latvian company with 10+ years of operation",
      "Based in Daugavpils, serving the Latgale region",
      "Full compliance with all regulatory requirements",
      "Experienced team dedicated to quality cleaning",
    ],
    overview: {
      title: "Who We Are",
      paragraphs: [
        "FDA SERVICE, SIA is a Latvian building cleaning company established in December 2015. Based in Daugavpils, we specialize in providing professional cleaning services for commercial, residential, and institutional buildings throughout the Latgale region.",
        "Over the past 10+ years, we have built a reputation for reliability, quality, and professional service delivery. Our team understands the unique needs of our local community and is committed to maintaining the highest standards of cleanliness in every building we serve.",
      ],
    },
    howWeWork: {
      title: "How We Work",
      steps: [
        {
          number: 1,
          title: "Initial Consultation",
          description:
            "We visit your premises to understand your specific cleaning requirements and challenges.",
        },
        {
          number: 2,
          title: "Custom Proposal",
          description:
            "We create a detailed cleaning plan and transparent pricing tailored to your needs.",
        },
        {
          number: 3,
          title: "Professional Execution",
          description:
            "Our trained team delivers consistent, high-quality cleaning according to the agreed schedule.",
        },
        {
          number: 4,
          title: "Quality Assurance",
          description:
            "Regular inspections and feedback ensure our service meets your expectations.",
        },
        {
          number: 5,
          title: "Ongoing Partnership",
          description:
            "We continuously adapt our services to your evolving needs and maintain open communication.",
        },
      ],
    },
    experience: {
      title: "Experience & Trust",
      content:
        "With 10+ years of annual financial reporting and consistent compliance with Latvian regulations, FDA SERVICE has demonstrated stability and professionalism in the cleaning services sector. Our partnership with BCS Latgale further strengthens our position as a reliable service provider in the region.",
      clientLogosPlaceholder:
        "Client references available upon request. We respect our clients' privacy and provide testimonials only with their explicit consent.",
    },
  },

  // Services Page Content
  services: {
    hero: {
      title: "Our Services",
      subtitle:
        "Comprehensive building cleaning solutions for every need",
    },
    intro:
      "FDA SERVICE provides a full range of professional cleaning services designed to maintain clean, healthy, and welcoming environments. From daily maintenance to deep cleaning, we have the expertise and equipment to handle any building type.",
    pricing: {
      title: "Transparent Pricing",
      content:
        "We believe in honest, straightforward pricing. After an initial assessment of your premises, we provide a detailed quote with no hidden fees.",
      factors: [
        "Total area to be cleaned",
        "Frequency of service (daily, weekly, monthly)",
        "Type of building and surfaces",
        "Special requirements or equipment needed",
      ],
    },
  },

  // Service Detail Pages
  serviceDetails: {
    "daily-cleaning": {
      title: "Daily Cleaning",
      subtitle: "Keep your space spotless every day",
      description:
        "Our daily cleaning services ensure your premises remain clean, hygienic, and professional at all times. We work according to your schedule to minimize disruption while maintaining consistent cleanliness standards.",
      included: [
        "Floor sweeping, mopping, and maintenance",
        "Surface dusting and sanitization",
        "Trash collection and bin management",
        "Restroom cleaning and restocking",
        "Kitchen and break room cleaning",
        "Window sill and ledge cleaning",
        "Door handle and touch point disinfection",
        "Elevator and common area maintenance",
      ],
      whoFor: [
        "Office buildings with daily operations",
        "Retail stores and commercial spaces",
        "Medical and healthcare facilities",
        "Educational institutions",
        "Residential building common areas",
      ],
      frequency: {
        title: "Flexible Scheduling",
        content:
          "Daily cleaning can be scheduled before business hours, during quiet periods, or after closing. We adapt to your operational needs to ensure minimal disruption.",
      },
      qualityControl: {
        title: "Quality Assurance",
        content:
          "Our supervisors conduct regular inspections and maintain direct communication with clients. Any concerns are addressed immediately to ensure consistent satisfaction.",
      },
    },
    "general-cleaning": {
      title: "General Cleaning",
      subtitle: "Deep cleaning for thorough results",
      description:
        "General cleaning provides comprehensive deep cleaning of your entire premises. This service addresses areas not covered by daily maintenance, ensuring complete cleanliness from floor to ceiling.",
      included: [
        "Deep floor cleaning, scrubbing, and polishing",
        "Complete window cleaning (interior and frames)",
        "Detailed furniture and fixture cleaning",
        "Light fixture and vent cleaning",
        "Carpet shampooing and upholstery cleaning",
        "Wall washing and ceiling dusting",
        "Behind and under furniture cleaning",
        "Kitchen equipment and appliance cleaning",
      ],
      whoFor: [
        "Buildings requiring periodic deep maintenance",
        "Properties preparing for inspections or events",
        "Post-renovation or construction cleanup",
        "Seasonal deep cleaning needs",
        "Move-in/move-out cleaning",
      ],
      frequency: {
        title: "Scheduled as Needed",
        content:
          "General cleaning is typically scheduled monthly, quarterly, or seasonally depending on your requirements. Many clients combine daily cleaning with periodic general cleaning for optimal results.",
      },
      qualityControl: {
        title: "Thorough Documentation",
        content:
          "Each general cleaning project includes a detailed checklist, before/after assessment, and completion sign-off. We ensure every aspect of the work meets our quality standards.",
      },
    },
    "facility-support": {
      title: "Facility Support",
      subtitle: "Complete building maintenance support",
      description:
        "Our facility support services extend beyond cleaning to provide comprehensive building maintenance assistance. We help property managers and building owners maintain their facilities in optimal condition.",
      included: [
        "Supply management and restocking",
        "Waste management coordination",
        "Minor maintenance task coordination",
        "Seasonal services (snow removal coordination, etc.)",
        "Plant and greenery maintenance",
        "Event setup and cleanup support",
        "Emergency cleaning response",
        "Periodic facility inspections",
      ],
      whoFor: [
        "Property management companies",
        "Building administrators without dedicated staff",
        "Multi-tenant residential buildings",
        "Commercial property owners",
        "Organizations needing flexible support",
      ],
      frequency: {
        title: "On-Demand & Scheduled",
        content:
          "Facility support services are provided on an as-needed basis or according to scheduled maintenance plans. We create customized support packages based on your specific requirements.",
      },
      qualityControl: {
        title: "Comprehensive Reporting",
        content:
          "We maintain detailed logs of all facility support activities, provide regular status reports, and coordinate with contractors and vendors as needed.",
      },
    },
  },

  // Contact Page Content
  contact: {
    hero: {
      title: "Contact Us",
      subtitle:
        "Get in touch for a free quote or to discuss your cleaning needs",
    },
    form: {
      title: "Send us a message",
      fields: {
        name: { label: "Full name", placeholder: "Your full name" },
        company: { label: "Company name (optional)", placeholder: "Your company" },
        email: { label: "Email", placeholder: "your@email.com" },
        serviceType: {
          label: "Service type",
          placeholder: "Select a service",
          options: [
            { value: "daily-cleaning", label: "Daily cleaning" },
            { value: "general-cleaning", label: "General cleaning" },
            { value: "facility-support", label: "Facility support" },
            { value: "other", label: "Other / Not sure" },
          ],
        },
        message: {
          label: "Message",
          placeholder: "Tell us about your building and cleaning needs...",
        },
      },
      submitLabel: "Send message",
      successMessage:
        "Thank you for your message! We will contact you within 1-2 business days with a response.",
    },
    // Google Maps embed for Daugavpils
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.9876543210123!2d26.5123456!3d55.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c29c8c8c8c8c8c%3A0x1234567890abcdef!2s18.%20novembra%20iela%2097A%2C%20Daugavpils%2C%20LV-5404!5e0!3m2!1sen!2slv!4v1234567890",
  },

  // Footer Content
  footer: {
    quickLinks: {
      title: "Quick links",
      links: [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contacts", href: "/contact" },
      ],
    },
    servicesLinks: {
      title: "Services",
      links: [
        { label: "Daily cleaning", href: "/services/daily-cleaning" },
        { label: "General cleaning", href: "/services/general-cleaning" },
        { label: "Facility support", href: "/services/facility-support" },
      ],
    },
    cookieNotice:
      "This website uses essential cookies for basic functionality. By continuing to use this site, you accept our use of cookies.",
  },
};

export type SiteConfig = typeof siteConfig;
