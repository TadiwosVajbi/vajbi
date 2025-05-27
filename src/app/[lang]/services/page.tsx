import { getDictionary } from "../../dictionaries";

export default async function ServicesPage({ params }: { params: { lang: string } }) {
  const { lang } = params;

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
            {dict.services}
          </h1>
          <p className="text-xl text-gray-100 mb-6 max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Digital Transformation</h3>
                <p className="text-gray-600 mb-4">
                  We help businesses modernize their operations through strategic digital transformation initiatives. Our approach focuses on aligning technology with your business goals to create sustainable growth.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Business process automation</li>
                  <li>Legacy system modernization</li>
                  <li>Digital workplace solutions</li>
                  <li>Data-driven decision making</li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Cloud Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Our cloud experts design, implement, and manage secure cloud environments that scale with your business. We work with leading cloud providers to deliver reliable and cost-effective solutions.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Cloud migration strategies</li>
                  <li>Multi-cloud architecture</li>
                  <li>Cloud security and compliance</li>
                  <li>Managed cloud services</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Software Development</h3>
                <p className="text-gray-600 mb-4">
                  We build custom software solutions that address your unique business challenges. Our development team follows industry best practices to deliver high-quality, maintainable code.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Custom application development</li>
                  <li>Web and mobile applications</li>
                  <li>API development and integration</li>
                  <li>DevOps and CI/CD implementation</li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 bg-[#edf5f8] rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3982a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">IT Security</h3>
                <p className="text-gray-600 mb-4">
                  Protect your business with our comprehensive cybersecurity solutions. We help identify vulnerabilities, implement security controls, and develop incident response plans.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Security assessments and audits</li>
                  <li>Endpoint protection</li>
                  <li>Network security</li>
                  <li>Security awareness training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how our IT consulting services can help your business grow.
          </p>
          <a
            href={`/${validLang}/contact`}
            className="inline-block bg-[#3982a3] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2c6a87] transition-colors"
          >
            {dict.contactUs}
          </a>
        </div>
      </section>
    </main>
  );
}
