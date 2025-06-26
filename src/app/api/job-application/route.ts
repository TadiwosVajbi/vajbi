import { NextRequest, NextResponse } from 'next/server';
import { sendJobApplicationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const applicationData = {
      jobTitle: formData.get('jobTitle') as string,
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      location: formData.get('location') as string,
      coverLetter: formData.get('coverLetter') as string,
    };

    // Handle file uploads
    const cvFile = formData.get('cv') as File | null;
    const additionalFiles = formData.get('additionalFiles') as File | null;

    console.log('Job application submission:', applicationData);

    // Send email with application data
    const emailResult = await sendJobApplicationEmail({
      ...applicationData,
      cvFile: cvFile || undefined,
      additionalFiles: additionalFiles || undefined,
    });

    if (!emailResult.success) {
      throw new Error(emailResult.message);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Job application submitted successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing job application:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit job application'
      },
      { status: 500 }
    );
  }
}
