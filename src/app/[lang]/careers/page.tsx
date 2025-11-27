import { getDictionary } from "../../dictionaries";

export default async function CareersPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = ['en', 'sv'].includes(lang) ? lang : 'en';
  const dict = await getDictionary(validLang);

  // Job openings automatically generated from translation service
  const jobOpenings = Object.keys(dict.jobOpenings).map(key => ({
    id: key,
    key: key
  }));

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#3982a3] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {dict.joinOurTeam}
          </h1>
          <div className="text-xl text-gray-100 mb-6 max-w-5xl mx-auto space-y-3 px-4">
            {dict.joinOurTeamDescription.split('. ').map((sentence, index, array) => {
              // Don't add period if it's the last sentence (it already has one) or if it's empty
              const text = index < array.length - 1 ? sentence + '.' : sentence;
              return text.trim() ? (
                <p key={index} className={index === 0 ? "font-medium" : ""}>
                  {text.trim()}
                </p>
              ) : null;
            })}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{dict.currentOpenings}</h2>
          
          <div className="max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <a
                key={job.id}
                href={`/${validLang}/careers/${job.id}`}
                className="block border-b border-gray-300 py-6 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-[#3982a3] transition-colors">
                      {dict.jobOpenings[job.key].title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {dict.jobOpenings[job.key].shortDescription}
                    </p>
                  </div>
                  <div className="ml-4 text-gray-400 group-hover:text-[#3982a3] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{dict.whyWorkWithUs}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="py-16 bg-[#3982a3] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{dict.dontSeeRightPosition}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {dict.dontSeeRightPositionDescription}
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
