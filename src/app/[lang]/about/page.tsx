import Image from "next/image";
import { getDictionary } from "../../dictionaries";

export default async function AboutPage({
  params,
}: {
  params: { lang: string };
}) {
  // Extract and validate the language parameter
  const lang = params.lang;

  // Validate the language to ensure it's one we support
  const validLang = ['en', 'sv'].includes(lang) ? lang : 'en';

  // Get the dictionary based on the validated language
  const dict = await getDictionary(validLang);

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-[#3982a3] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Vajbi IT Consulting
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
                Founded in 2015, Vajbi IT Consulting began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate IT professionals has grown into a full-service consulting firm with expertise across the technology spectrum.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've helped hundreds of businesses across various industries transform their technology infrastructure, implement innovative solutions, and stay ahead in an increasingly digital world.
              </p>
              <p className="text-gray-600">
                Today, we continue to be driven by our founding principles: delivering exceptional value, maintaining technical excellence, and building lasting client relationships based on trust and results.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <div className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Integrity</h3>
              <p className="text-gray-600 text-center">
                We believe in honest, transparent relationships with our clients. We'll always provide straightforward advice and recommend only what's truly in your best interest.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Innovation</h3>
              <p className="text-gray-600 text-center">
                Technology never stands still, and neither do we. We're constantly exploring new solutions and approaches to help our clients stay ahead of the curve.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Partnership</h3>
              <p className="text-gray-600 text-center">
                We see ourselves as an extension of your team. Your success is our success, and we're committed to building long-term relationships based on mutual growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-[#3982a3] mb-3">CEO & Founder</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                With over 20 years of experience in IT leadership, John founded Vajbi with a vision to make enterprise-grade technology accessible to businesses of all sizes.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-[#3982a3] mb-3">CTO</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Jane leads our technical strategy and innovation initiatives. Her background in software architecture and cloud computing helps drive our cutting-edge solutions.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Michael Johnson</h3>
              <p className="text-[#3982a3] mb-3">Director of Consulting</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Michael oversees our consulting practice, ensuring that every client engagement delivers exceptional value and meets the highest standards of quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3982a3] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our team can help your business achieve its technology goals.
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
