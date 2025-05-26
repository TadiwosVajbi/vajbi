import { getDictionary } from "../../dictionaries";

export default async function CaseStudiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = ['en', 'sv'].includes(lang) ? lang : 'en';

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-[#3982a3] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-100 mb-6 max-w-3xl mx-auto">
            See how we&apos;ve helped businesses transform their technology landscape
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-[#3982a3] mb-1">Financial Services</div>
                <h3 className="text-xl font-bold mb-2">Digital Transformation for Regional Bank</h3>
                <p className="text-gray-600 mb-4">
                  We helped a regional bank modernize their legacy systems and implement a cloud-based infrastructure, resulting in 40% faster transaction processing and improved customer experience.
                </p>
                <a href="#" className="text-[#3982a3] font-medium hover:text-[#2c6a87]">
                  Read Case Study →
                </a>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-[#3982a3] mb-1">E-Commerce</div>
                <h3 className="text-xl font-bold mb-2">Scalable Cloud Solution for Online Retailer</h3>
                <p className="text-gray-600 mb-4">
                  Designed and implemented a scalable cloud architecture for a growing e-commerce company, enabling them to handle 300% more traffic during peak seasons without performance issues.
                </p>
                <a href="#" className="text-[#3982a3] font-medium hover:text-[#2c6a87]">
                  Read Case Study →
                </a>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-[#3982a3] mb-1">Healthcare</div>
                <h3 className="text-xl font-bold mb-2">Secure Patient Portal for Medical Group</h3>
                <p className="text-gray-600 mb-4">
                  Developed a HIPAA-compliant patient portal for a large medical group, enhancing patient engagement while ensuring the highest level of data security and privacy.
                </p>
                <a href="#" className="text-[#3982a3] font-medium hover:text-[#2c6a87]">
                  Read Case Study →
                </a>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-[#3982a3] mb-1">Manufacturing</div>
                <h3 className="text-xl font-bold mb-2">IoT Implementation for Smart Factory</h3>
                <p className="text-gray-600 mb-4">
                  Implemented an IoT solution for a manufacturing company, connecting production equipment to a central monitoring system that reduced downtime by 25% and improved quality control.
                </p>
                <a href="#" className="text-[#3982a3] font-medium hover:text-[#2c6a87]">
                  Read Case Study →
                </a>
              </div>
            </div>

            {/* Case Study 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-[#3982a3] mb-1">Professional Services</div>
                <h3 className="text-xl font-bold mb-2">Custom CRM for Legal Firm</h3>
                <p className="text-gray-600 mb-4">
                  Developed a custom CRM solution for a law firm, streamlining client management and case tracking, resulting in 30% improved efficiency in administrative tasks.
                </p>
                <a href="#" className="text-[#3982a3] font-medium hover:text-[#2c6a87]">
                  Read Case Study →
                </a>
              </div>
            </div>

            {/* Case Study 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-[#3982a3] mb-1">Education</div>
                <h3 className="text-xl font-bold mb-2">Cloud Migration for University</h3>
                <p className="text-gray-600 mb-4">
                  Led a comprehensive cloud migration for a university, moving their on-premises systems to a secure cloud environment, reducing IT costs by 35% and improving system reliability.
                </p>
                <a href="#" className="text-[#3982a3] font-medium hover:text-[#2c6a87]">
                  Read Case Study →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to become our next success story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how we can help your business achieve its technology goals.
          </p>
          <a
            href={`/${validLang}/contact`}
            className="inline-block bg-[#3982a3] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2c6a87] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
