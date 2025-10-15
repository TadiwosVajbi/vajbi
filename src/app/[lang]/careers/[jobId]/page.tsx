import { getDictionary } from "../../../dictionaries";
import Link from "next/link";

interface JobDetailPageProps {
  params: Promise<{ lang: string; jobId: string }>;
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { lang, jobId } = await params;
  const validLang = ['en', 'sv'].includes(lang) ? lang : 'en';
  const dict = await getDictionary(validLang);

  // Check if job exists in translations
  if (!dict.jobOpenings[jobId]) {
    return (
      <main>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h1>
            <p className="text-gray-600 mb-8">The job you're looking for doesn't exist.</p>
            <Link 
              href={`/${validLang}/careers`}
              className="inline-block bg-[#3982a3] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2c6a87] transition-colors"
            >
              {dict.backToCareers}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const job = dict.jobOpenings[jobId];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#3982a3] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href={`/${validLang}/careers`}
              className="inline-flex items-center text-gray-200 hover:text-white mb-6 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {dict.backToCareers}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {job.title}
            </h1>
            <p className="text-xl text-gray-100">
              {job.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* About the Role */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{dict.aboutTheRole}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {job.aboutRole}
              </p>
            </div>

            {/* Requirements */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{dict.requirements}</h2>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#3982a3] rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Candidates Should */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{dict.candidatesShould}</h2>
              <ul className="space-y-3">
                {job.candidatesShould.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#3982a3] rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Language Requirements */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{dict.languageRequirements}</h2>
              <ul className="space-y-3">
                {job.languageRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#3982a3] rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Button */}
            <div className="text-center">
              <Link
                href={`/${validLang}/careers/apply?job=${jobId}`}
                className="inline-block bg-[#3982a3] text-white px-8 py-4 rounded-md font-medium hover:bg-[#2c6a87] transition-colors text-lg"
              >
                {dict.applyNow}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{dict.whyWorkWithUs}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-[#3982a3] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.innovationFocus}</h3>
              <p className="text-gray-600">{dict.innovationFocusDescription}</p>
            </div>

            <div className="text-center">
              <div className="bg-[#3982a3] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.greatTeam}</h3>
              <p className="text-gray-600">{dict.greatTeamDescription}</p>
            </div>

            <div className="text-center">
              <div className="bg-[#3982a3] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.growthOpportunities}</h3>
              <p className="text-gray-600">{dict.growthOpportunitiesDescription}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
