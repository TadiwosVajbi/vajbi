'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function JobApplicationPage({ params }: { params: Promise<{ lang: string }> }) {
  const [lang, setLang] = useState('en');
  const [jobTitle, setJobTitle] = useState('');
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      const validLang = ['en', 'sv'].includes(resolvedParams.lang) ? resolvedParams.lang : 'en';
      setLang(validLang);
    };
    resolveParams();
    
    // Get job ID from URL params and set job title
    const jobId = searchParams.get('job');
    const jobTitles: { [key: string]: string } = {
      '1': 'Front End Developer (Contentful)',
      '2': 'Full Stack Developer', 
      '3': 'DevOps Engineer'
    };
    setJobTitle(jobTitles[jobId || ''] || 'General Application');
  }, [params, searchParams]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    cv: null as File | null,
    additionalFiles: null as File | null,
    coverLetter: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      [fieldName]: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Form submission started...'); // Debug log

    // Create FormData for file upload
    const submitData = new FormData();
    submitData.append('jobTitle', jobTitle);
    submitData.append('firstName', formData.firstName);
    submitData.append('lastName', formData.lastName);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('location', formData.location);
    submitData.append('coverLetter', formData.coverLetter);

    if (formData.cv) {
      submitData.append('cv', formData.cv);
    }
    if (formData.additionalFiles) {
      submitData.append('additionalFiles', formData.additionalFiles);
    }

    console.log('Submitting to API...'); // Debug log

    try {
      const response = await fetch('/api/job-application', {
        method: 'POST',
        body: submitData,
      });

      console.log('API Response:', response.status); // Debug log

      if (response.ok) {
        const result = await response.json();
        console.log('Success result:', result); // Debug log
        alert('Application submitted successfully! We will contact you soon.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          location: '',
          cv: null,
          additionalFiles: null,
          coverLetter: ''
        });
      } else {
        const errorResult = await response.json();
        console.error('API Error:', errorResult); // Debug log
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-[#3982a3] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {jobTitle}
          </h1>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Personal Information */}
              <div className="border-t pt-6">
                <h2 className="text-2xl font-bold mb-6">Personal information</h2>
                
                {/* LinkedIn Apply Button */}
                <div className="mb-6">
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Apply with LinkedIn
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Jane"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3982a3] focus:border-[#3982a3]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3982a3] focus:border-[#3982a3]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3982a3] focus:border-[#3982a3]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <div className="flex">
                      <select className="px-3 py-3 border border-gray-300 rounded-l-md bg-gray-50">
                        <option value="+46">🇸🇪</option>
                        <option value="+389">🇲🇰</option>
                        <option value="+1">🇺🇸</option>
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+389 72 345 678"
                        className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-md focus:ring-[#3982a3] focus:border-[#3982a3]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CV Upload */}
              <div className="border-t pt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload CV
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, 'cv')}
                    className="hidden"
                  />
                  <label htmlFor="cv" className="cursor-pointer">
                    <div className="text-gray-400 mb-2">
                      <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      Drop your file or <span className="text-[#3982a3] underline">upload</span>
                    </p>
                  </label>
                  {formData.cv && (
                    <p className="mt-2 text-sm text-gray-600">Selected: {formData.cv.name}</p>
                  )}
                </div>
              </div>

              {/* Additional Files */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional files
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    id="additionalFiles"
                    name="additionalFiles"
                    multiple
                    onChange={(e) => handleFileChange(e, 'additionalFiles')}
                    className="hidden"
                  />
                  <label htmlFor="additionalFiles" className="cursor-pointer">
                    <div className="text-gray-400 mb-2">
                      <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      Drop your file or <span className="text-[#3982a3] underline">upload</span>
                    </p>
                  </label>
                  {formData.additionalFiles && (
                    <p className="mt-2 text-sm text-gray-600">Selected: {formData.additionalFiles.name}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#3982a3] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2c6a87] transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit application'}
                </button>
              </div>

              {/* Privacy Notice */}
              <div className="text-center text-sm text-gray-600 pt-4">
                <p>
                  By submitting this application, I agree that I have read the{' '}
                  <a href={`/${lang}/privacy`} className="text-[#3982a3] underline">
                    Privacy Policy
                  </a>{' '}
                  and confirm that Nion store my personal details to be able to process my job application.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
