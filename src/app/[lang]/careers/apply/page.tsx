import { Suspense } from 'react';
import { getDictionary } from '../../../dictionaries';
import JobApplicationForm from './JobApplicationForm';

interface JobApplicationPageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ job?: string }>;
}

export default async function JobApplicationPage({ params, searchParams }: JobApplicationPageProps) {
  const { lang } = await params;
  const { job } = await searchParams;
  const validLang = ['en', 'sv'].includes(lang) ? lang : 'en';
  const dict = await getDictionary(validLang);

  // Get job title from translation service
  const jobTitle = job && dict.jobOpenings[job] ? dict.jobOpenings[job].title : 'General Application';

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobApplicationForm jobTitle={jobTitle} />
    </Suspense>
  );
}
