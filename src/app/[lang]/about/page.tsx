'use client';

import { useState, useEffect } from 'react';

export default function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [validLang, setValidLang] = useState('en');
  useEffect(() => {
    params.then(({ lang }) => {
      setValidLang(['en', 'sv'].includes(lang) ? lang : 'en');
    });
  }, [params]);

  const toggleCard = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#3982a3] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Vexita IT Consulting
          </h1>
          <p className="text-xl text-gray-100 mb-6 max-w-3xl mx-auto">
            Your trusted partner for innovative technology solutions
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Vexita IT Consulting began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate IT professionals has grown into a full-service consulting firm with expertise across the technology spectrum.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we&apos;ve helped businesses across various industries transform their technology infrastructure, implement innovative solutions, and stay ahead in an increasingly digital world.
              </p>
              <p className="text-gray-600">
                Today, we continue to be driven by our founding principles: delivering exceptional value, maintaining technical excellence, and building lasting client relationships based on trust and results.
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
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#3982a3]">100+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#3982a3]">9+</div>
                    <div className="text-sm text-gray-600">Years</div>
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
          <h2 className="text-3xl font-bold text-center mb-4">Our Values</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The principles that drive everything we do and define who we are as your technology partner.
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
              <h3 className="text-xl font-semibold mb-3 text-center">Integrity First</h3>
              <p className="text-gray-600 text-center mb-4">
                Honest advice. Transparent pricing. No hidden agendas. We recommend what&apos;s right for you, not what&apos;s profitable for us.
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    Trust is the foundation of every successful technology partnership. We earn it through consistent honesty, clear communication, and always putting your business interests first. When we say something will work, it will. When we identify risks, we&apos;ll tell you upfront. No surprises, no excuses—just reliable expertise you can count on.
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
              <h3 className="text-xl font-semibold mb-3 text-center">Future-Ready Innovation</h3>
              <p className="text-gray-600 text-center mb-4">
                We don&apos;t just follow trends—we anticipate them. Cutting-edge solutions that keep you ahead of tomorrow&apos;s challenges.
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    Innovation isn&apos;t about using the latest technology for its own sake. It&apos;s about identifying emerging opportunities and building solutions that give you a competitive advantage. Our team continuously researches new technologies, evaluates their business potential, and implements only those that deliver real value to your organization.
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
              <h3 className="text-xl font-semibold mb-3 text-center">Relentless Excellence</h3>
              <p className="text-gray-600 text-center mb-4">
                Good enough isn&apos;t good enough. We obsess over details and deliver solutions that exceed expectations every time.
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    Excellence is a habit, not an accident. Every line of code, every system design, every client interaction reflects our commitment to the highest standards. We implement rigorous quality assurance processes, conduct thorough testing, and continuously refine our methodologies to ensure exceptional results that stand the test of time.
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
              <h3 className="text-xl font-semibold mb-3 text-center">True Partnership</h3>
              <p className="text-gray-600 text-center mb-4">
                We&apos;re not just vendors—we&apos;re your technology allies. Your wins are our wins. Your growth is our mission.
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    Real partnerships go beyond contracts and deliverables. We invest time in understanding your business goals, industry challenges, and growth aspirations. Our success is measured by your success, which means we&apos;re motivated to find solutions that drive long-term value, not just quick fixes. We become an extension of your team, sharing knowledge and celebrating achievements together.
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
              <h3 className="text-xl font-semibold mb-3 text-center">Lightning Agility</h3>
              <p className="text-gray-600 text-center mb-4">
                Markets move fast. We move faster. Rapid deployment, quick pivots, and solutions that adapt as your business evolves.
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    In today&apos;s business environment, speed is a competitive advantage. Our agile methodologies and flexible team structure allow us to respond quickly to changing requirements, market conditions, and new opportunities. We build scalable solutions that can evolve with your business, ensuring your technology infrastructure supports growth rather than limiting it.
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
              <h3 className="text-xl font-semibold mb-3 text-center">Measurable Impact</h3>
              <p className="text-gray-600 text-center mb-4">
                Technology for technology&apos;s sake is pointless. Every solution we deliver drives real, measurable business results.
              </p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-center text-sm">
                    We believe in accountability and results. Before starting any project, we establish clear success metrics and key performance indicators. Our solutions are designed to deliver tangible benefits—whether that&apos;s increased efficiency, cost savings, revenue growth, or improved customer satisfaction. We track progress and provide regular reports to ensure you see the value of your technology investment.
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
          <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our team can help your business achieve its technology goals.
          </p>
          <a
            href={`/${validLang}/contact`}
            className="inline-block bg-white text-[#3982a3] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
