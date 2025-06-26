import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export interface ContactEmailData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface JobApplicationEmailData {
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  coverLetter: string;
  cvFile?: File;
  additionalFiles?: File;
}

export async function sendContactEmail(data: ContactEmailData) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('Email not configured. Contact form data:', data);
    return { success: true, message: 'Email configuration not set up - logged to console' };
  }

  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || 'TadiwosGebreHiwot@VajbiAB202.onmicrosoft.com',
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
      replyTo: data.email,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Contact email sent successfully' };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, message: 'Failed to send contact email' };
  }
}

export async function sendJobApplicationEmail(data: JobApplicationEmailData) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('Email not configured. Job application data:', data);
    return { success: true, message: 'Email configuration not set up - logged to console' };
  }

  try {
    const transporter = createTransporter();

    const attachments = [];
    
    // Add CV attachment if provided
    if (data.cvFile) {
      const cvBuffer = Buffer.from(await data.cvFile.arrayBuffer());
      attachments.push({
        filename: data.cvFile.name,
        content: cvBuffer,
      });
    }

    // Add additional files attachment if provided
    if (data.additionalFiles) {
      const additionalBuffer = Buffer.from(await data.additionalFiles.arrayBuffer());
      attachments.push({
        filename: data.additionalFiles.name,
        content: additionalBuffer,
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.JOBS_EMAIL || 'TadiwosGebreHiwot@VajbiAB202.onmicrosoft.com',
      subject: `New Job Application: ${data.jobTitle} - ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${data.jobTitle}</p>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        
        <h3>Cover Letter:</h3>
        <p>${data.coverLetter.replace(/\n/g, '<br>')}</p>
        
        <h3>Attachments:</h3>
        <ul>
          ${data.cvFile ? `<li>CV: ${data.cvFile.name}</li>` : '<li>No CV uploaded</li>'}
          ${data.additionalFiles ? `<li>Additional files: ${data.additionalFiles.name}</li>` : '<li>No additional files</li>'}
        </ul>
        
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
      replyTo: data.email,
      attachments,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Job application email sent successfully' };
  } catch (error) {
    console.error('Error sending job application email:', error);
    return { success: false, message: 'Failed to send job application email' };
  }
}
