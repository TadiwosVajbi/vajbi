export default async function CareersPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = ['en', 'sv'].includes(lang) ? lang : 'en';

  // Sample job openings - in a real app, this would come from a database or CMS
  const jobOpenings = [
    {
      id: 1,
      title: "Front End Developer (Contentful)",
      department: "Software Development and Engineering",
      location: "Bitola, Skopje",
      type: "Hybrid",
      description: "We are looking for a talented Front End Developer with experience in modern web technologies and content management systems.",
      requirements: [
        "3+ years of experience with React/Next.js",
        "Experience with Contentful or similar headless CMS",
        "Strong knowledge of TypeScript and modern JavaScript",
        "Experience with responsive design and CSS frameworks",
        "Knowledge of Git and modern development workflows"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Software Development and Engineering", 
      location: "Malmö, Stockholm",
      type: "Remote/Hybrid",
      description: "Join our team as a Full Stack Developer to work on innovative web applications and enterprise solutions.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in Node.js, React, and database technologies",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong problem-solving and communication skills",
        "Experience with agile development methodologies"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure and Operations",
      location: "Stockholm, Göteborg", 
      type: "Hybrid",
      description: "We're seeking a DevOps Engineer to help streamline our development processes and maintain our cloud infrastructure.",
      requirements: [
        "Experience with containerization (Docker, Kubernetes)",
        "Knowledge of CI/CD pipelines and automation tools",
        "Familiarity with cloud platforms and infrastructure as code",
        "Strong scripting skills (Python, Bash, or similar)",
        "Experience with monitoring and logging solutions"
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#3982a3] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-100 mb-6 max-w-3xl mx-auto">
            Build your career with us and help shape the future of technology consulting
          </p>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          
          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <a
                    href={`/${validLang}/careers/apply?job=${job.id}`}
                    className="inline-block bg-[#3982a3] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2c6a87] transition-colors text-center lg:text-left"
                  >
                    Apply Now
                  </a>
                </div>
                
                <p className="text-gray-700 mb-4">{job.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#3982a3] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
              <p className="text-gray-600">Work with cutting-edge technologies and innovative solutions that make a real impact.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#3982a3] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Great Team</h3>
              <p className="text-gray-600">Join a collaborative team of talented professionals who support each other&apos;s growth.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#3982a3] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">Continuous learning and development opportunities to advance your career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3982a3] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don&apos;t see the right position?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We&apos;re always looking for talented individuals. Send us your CV and we&apos;ll keep you in mind for future opportunities.
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
