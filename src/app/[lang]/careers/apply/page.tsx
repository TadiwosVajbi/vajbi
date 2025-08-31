import { Suspense } from 'react';
import JobApplicationForm from './JobApplicationForm';

export default function JobApplicationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobApplicationForm />
    </Suspense>
  );
}
