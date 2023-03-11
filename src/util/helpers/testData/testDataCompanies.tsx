import { CATEGORY, CreateCompanyInput } from "../../../API";

export const companies: CreateCompanyInput[] = [
  {
    description: {
      fi: "ohjelmistokehityspalveluja",
      en: "software development services",
    },
    categories: [CATEGORY.TECHNOLOGY, CATEGORY.BUSINESS],
    links: {
      mainURL: "https://www.devcompany.com",
      secondaryURL: "https://www.devcompany.com/about-us",
    },
    email: "info@devcompany.com",
    logo: "https://www.devcompany.com/logo.jpg",
    phone: "+1-555-555-5555",
    name: "DevCompany",
  },
  {
    description: {
      fi: "terveyspalveluja",
      en: "healthcare services",
    },
    categories: [CATEGORY.HEALTH],
    links: {
      mainURL: "https://www.healthcare.com",
      secondaryURL: "https://www.healthcare.com/about-us",
    },
    email: "info@healthcare.com",
    logo: "https://www.healthcare.com/logo.jpg",
    phone: "+1-555-555-5555",
    name: "HealthCare",
  },
  {
    description: {
      fi: "kauneudenhoitotuotteita",
      en: "beauty products",
    },
    categories: [CATEGORY.HEALTH],
    links: {
      mainURL: "https://www.beautyco.com",
      secondaryURL: "https://www.beautyco.com/about-us",
    },
    email: "info@beautyco.com",
    logo: "https://www.beautyco.com/logo.jpg",
    phone: "+1-555-555-5555",
    name: "BeautyCo",
  },
  {
    description: {
      fi: "käännöspalveluja",
      en: "language translation services",
    },
    categories: [CATEGORY.EDUCATION],
    links: {
      mainURL: "https://www.translationservice.com",
      secondaryURL: "https://www.translationservice.com/about-us",
    },
    email: "info@translationservice.com",
    logo: "https://www.translationservice.com/logo.jpg",
    phone: "+1-555-555-5555",
    name: "TranslationService",
  },
  {
    description: {
      fi: "verkkokursseja",
      en: "online learning courses",
    },
    categories: [
      CATEGORY.EDUCATION,
      CATEGORY.TECHNOLOGY,
      CATEGORY.BUSINESS,
      CATEGORY.OTHER,
    ],
    links: {
      mainURL: "https://www.learnonline.com",
      secondaryURL: "https://www.learnonline.com/about-us",
    },
    email: "info@learnonline.com",
    logo: "https://www.learnonline.com/logo.jpg",
    phone: "+1-555-555-5555",
    name: "LearnOnline",
  },
];
