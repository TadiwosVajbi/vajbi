import { Suspense } from 'react';
import JobApplicationForm from './JobApplicationForm';

export default async function JobApplicationPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = ['en', 'sv'].includes(lang) ? lang : 'en';

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobApplicationForm lang={validLang} />
    </Suspense>
  );
}
