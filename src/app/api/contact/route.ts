import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const contactData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    console.log('Contact form submission:', contactData);

    // Send email with contact data
    const emailResult = await sendContactEmail(contactData);

    if (!emailResult.success) {
      throw new Error(emailResult.message);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit contact form'
      },
      { status: 500 }
    );
  }
}
