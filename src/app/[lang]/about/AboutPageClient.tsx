'use client';

import { useState } from 'react';

interface Dictionary {
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
}

interface AboutPageClientProps {
  dict: Dictionary;
  validLang: string;
}

export default function AboutPageClient({ dict, validLang }: AboutPageClientProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#3982a3] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {dict.aboutHero}
          </h1>
          <p className="text-xl text-gray-100 mb-6 max-w-3xl mx-auto">
            {dict.aboutHeroDescription}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{dict.ourStory}</h2>
              <p className="text-gray-600 mb-4">
                {dict.ourStoryParagraph1}
              </p>
              <p className="text-gray-600 mb-4">
                {dict.ourStoryParagraph2}
              </p>
              <p className="text-gray-600">
                {dict.ourStoryParagraph3}
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-[#edf5f8] to-white h-80 rounded-lg flex items-center justify-center p-8">
              <div className="text-center">
                {/* Main Visual - Growth & Success */}
                <div className="mb-6">
                  <svg className="w-32 h-32 mx-auto text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#3982a3]">2015</div>
                    <div className="text-sm text-gray-600">{dict.founded}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#3982a3]">100+</div>
                    <div className="text-sm text-gray-600">{dict.projects}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#3982a3]">9+</div>
                    <div className="text-sm text-gray-600">{dict.years}</div>
                  </div>
                </div>

                {/* Technology Icons */}
                <div className="flex justify-center space-x-4 mt-6">
                  <div className="w-10 h-10 bg-[#3982a3] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-[#5a9bc4] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-[#7bb3d1] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{dict.ourValues}</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {dict.ourValuesDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 - Integrity */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => toggleCard(0)}
            >
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{dict.integrityFirst}</h3>
              <p className="text-gray-600 text-center mb-4">
                {dict.integrityFirstDescription}
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    {dict.integrityFirstExpanded}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <svg
                  className={`w-5 h-5 text-[#3982a3] transition-transform duration-300 ${
                    expandedCard === 0 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Value 2 - Innovation */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => toggleCard(1)}
            >
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{dict.futureReadyInnovation}</h3>
              <p className="text-gray-600 text-center mb-4">
                {dict.futureReadyInnovationDescription}
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    {dict.futureReadyInnovationExpanded}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <svg
                  className={`w-5 h-5 text-[#3982a3] transition-transform duration-300 ${
                    expandedCard === 1 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Value 3 - Excellence */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => toggleCard(2)}
            >
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{dict.relentlessExcellence}</h3>
              <p className="text-gray-600 text-center mb-4">
                {dict.relentlessExcellenceDescription}
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    {dict.relentlessExcellenceExpanded}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <svg
                  className={`w-5 h-5 text-[#3982a3] transition-transform duration-300 ${
                    expandedCard === 2 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Value 4 - Partnership */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => toggleCard(3)}
            >
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{dict.truePartnership}</h3>
              <p className="text-gray-600 text-center mb-4">
                {dict.truePartnershipDescription}
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    {dict.truePartnershipExpanded}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <svg
                  className={`w-5 h-5 text-[#3982a3] transition-transform duration-300 ${
                    expandedCard === 3 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Value 5 - Agility */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => toggleCard(4)}
            >
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{dict.lightningAgility}</h3>
              <p className="text-gray-600 text-center mb-4">
                {dict.lightningAgilityDescription}
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    {dict.lightningAgilityExpanded}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <svg
                  className={`w-5 h-5 text-[#3982a3] transition-transform duration-300 ${
                    expandedCard === 4 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Value 6 - Impact */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => toggleCard(5)}
            >
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{dict.measurableImpact}</h3>
              <p className="text-gray-600 text-center mb-4">
                {dict.measurableImpactDescription}
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    {dict.measurableImpactExpanded}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <svg
                  className={`w-5 h-5 text-[#3982a3] transition-transform duration-300 ${
                    expandedCard === 5 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3982a3] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{dict.readyToWorkWithUs}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {dict.readyToWorkWithUsDescription}
          </p>
          <a
            href={`/${validLang}/contact`}
            className="inline-block bg-white text-[#3982a3] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            {dict.contactUs}
          </a>
        </div>
      </section>
    </main>
  );
}
