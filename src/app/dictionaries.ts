import 'server-only';

export interface Dictionary {
  // Common/Navigation
  welcome: string;
  description: string;
  getStarted: string;
  learnMore: string;
  services: string;
  whyChooseUs: string;
  contactUs: string;
  about: string;
  home: string;
  careers: string;
  contact: string;

  // Contact Page
  contactHero: string;
  contactHeroDescription: string;
  contactInformation: string;
  officeAddress: string;
  postAddress: string;
  phone: string;
  email: string;
  businessHours: string;
  businessHoursText: string;
  findUs: string;

  // Contact Form
  firstName: string;
  lastName: string;
  emailLabel: string;
  howCanWeHelp: string;
  sendMessage: string;
  sending: string;

  // Services Page
  servicesHero: string;
  servicesHeroDescription: string;
  digitalTransformation: string;
  digitalTransformationDescription: string;
  digitalTransformationFeatures: string[];
  cloudSolutions: string;
  cloudSolutionsDescription: string;
  cloudSolutionsFeatures: string[];
  softwareDevelopment: string;
  softwareDevelopmentDescription: string;
  softwareDevelopmentFeatures: string[];
  itSecurity: string;
  itSecurityDescription: string;
  itSecurityFeatures: string[];
  readyToGetStarted: string;
  readyToGetStartedDescription: string;
  expertTeam: string;
  expertTeamDescription: string;
  provenResults: string;
  provenResultsDescription: string;
  dedicatedSupport: string;
  dedicatedSupportDescription: string;

  // Careers Page
  joinOurTeam: string;
  joinOurTeamDescription: string;
  currentOpenings: string;
  applyNow: string;
  requirements: string;
  whyWorkWithUs: string;
  innovationFocus: string;
  innovationFocusDescription: string;
  greatTeam: string;
  greatTeamDescription: string;
  growthOpportunities: string;
  growthOpportunitiesDescription: string;
  dontSeeRightPosition: string;
  dontSeeRightPositionDescription: string;
  backToCareers: string;
  aboutTheRole: string;
  candidatesShould: string;
  languageRequirements: string;
  goodToHave: string;

  // About Page
  aboutHero: string;
  aboutHeroDescription: string;
  ourStory: string;
  ourStoryParagraph1: string;
  ourStoryParagraph2: string;
  ourStoryParagraph3: string;
  founded: string;
  projects: string;
  years: string;
  ourValues: string;
  ourValuesDescription: string;
  integrityFirst: string;
  integrityFirstDescription: string;
  integrityFirstExpanded: string;
  futureReadyInnovation: string;
  futureReadyInnovationDescription: string;
  futureReadyInnovationExpanded: string;
  relentlessExcellence: string;
  relentlessExcellenceDescription: string;
  relentlessExcellenceExpanded: string;
  truePartnership: string;
  truePartnershipDescription: string;
  truePartnershipExpanded: string;
  lightningAgility: string;
  lightningAgilityDescription: string;
  lightningAgilityExpanded: string;
  measurableImpact: string;
  measurableImpactDescription: string;
  measurableImpactExpanded: string;
  readyToWorkWithUs: string;
  readyToWorkWithUsDescription: string;

  // Footer
  company: string;
  aboutUs: string;
  ourServices: string;
  allRightsReserved: string;

  // Job Openings
  jobOpenings: {
    [key: string]: {
      title: string;
      shortDescription: string;
      aboutRole: string;
      requirements: string[];
      goodToHave?: string[];
      candidatesShould: string[];
      languageRequirements: string[];
    };
  };
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  sv: () => import('./dictionaries/sv.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const lang = locale in dictionaries ? locale : 'en';
  return dictionaries[lang]();
};
