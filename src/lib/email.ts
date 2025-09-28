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
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS ||
      process.env.EMAIL_USER === 'your-email@gmail.com' ||
      process.env.EMAIL_PASS === 'your-app-password') {
    console.log('Email not configured or using placeholder values. Contact form data:', data);
    return { success: true, message: 'Email configuration not set up - logged to console' };
  }

  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"Vexita Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || 'tghiwot@vexita.se',
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3982a3;">New Contact Form Submission</h2>

          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #3982a3;">📧 REPLY TO CONTACT:</h3>
            <p style="font-size: 16px; font-weight: bold; color: #d63384;">
              <a href="mailto:${data.email}" style="color: #d63384;">${data.email}</a>
            </p>
            <p style="font-size: 14px; color: #6c757d;">
              Click the email above or use Reply button to respond directly to the contact
            </p>
          </div>

          <h3>Contact Details:</h3>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>

          <h3>Message:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
            <p>${data.message.replace(/\n/g, '<br>')}</p>
          </div>

          <hr style="margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px;"><em>Submitted at: ${new Date().toISOString().replace('T', ' ').substring(0, 19)} UTC</em></p>
        </div>
      `,
      replyTo: data.email,
    };

    // Send the main contact email to the company
    await transporter.sendMail(mailOptions);

    // Send auto-reply confirmation to the contact
    const autoReplyOptions = {
      from: `"Vexita" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: `Thank you for contacting Vexita`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3982a3;">Thank you for reaching out!</h2>

          <p>Dear ${data.firstName} ${data.lastName},</p>

          <p>We have received your message and appreciate you taking the time to contact us.</p>

          <p>Our team will review your inquiry and respond within 24-48 hours during business days.</p>

          <p>If you have an urgent matter, please feel free to contact us directly at <a href="mailto:${process.env.CONTACT_EMAIL || 'info@vexita.se'}">${process.env.CONTACT_EMAIL || 'info@vexita.se'}</a>.</p>

          <p>Best regards,<br>
          <strong>Vexita Team</strong></p>

          <hr style="margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px;">This is an automated confirmation email. Please do not reply to this email.</p>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return { success: true, message: 'Contact email sent successfully with auto-reply' };
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
      from: `"Vexita Job Applications" <${process.env.EMAIL_USER}>`,
      to: process.env.JOBS_EMAIL || 'tghiwot@vexita.se',
      subject: `New Job Application: ${data.jobTitle} - ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3982a3;">New Job Application</h2>

          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #3982a3;">📧 REPLY TO APPLICANT:</h3>
            <p style="font-size: 16px; font-weight: bold; color: #d63384;">
              <a href="mailto:${data.email}" style="color: #d63384;">${data.email}</a>
            </p>
            <p style="font-size: 14px; color: #6c757d;">
              Click the email above or use Reply button to respond directly to the applicant
            </p>
          </div>

          <h3>Application Details:</h3>
          <p><strong>Position:</strong> ${data.jobTitle}</p>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Location:</strong> ${data.location}</p>

          <h3>Cover Letter:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
            <p>${data.coverLetter.replace(/\n/g, '<br>')}</p>
          </div>

          <h3>Attachments:</h3>
          <ul>
            ${data.cvFile ? `<li>CV: ${data.cvFile.name}</li>` : '<li>No CV uploaded</li>'}
            ${data.additionalFiles ? `<li>Additional files: ${data.additionalFiles.name}</li>` : '<li>No additional files</li>'}
          </ul>

          <hr style="margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px;"><em>Submitted at: ${new Date().toISOString().replace('T', ' ').substring(0, 19)} UTC</em></p>
        </div>
      `,
      replyTo: data.email,
      attachments,
    };

    // Send the main application email to the company
    await transporter.sendMail(mailOptions);

    // Send auto-reply confirmation to the applicant
    const autoReplyOptions = {
      from: `"Vexita" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: `Application Received: ${data.jobTitle} Position`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3982a3;">Thank you for your application!</h2>

          <p>Dear ${data.firstName} ${data.lastName},</p>

          <p>We have successfully received your application for the <strong>${data.jobTitle}</strong> position.</p>

          <h3>Application Summary:</h3>
          <ul>
            <li><strong>Position:</strong> ${data.jobTitle}</li>
            <li><strong>Submitted:</strong> ${new Date().toISOString().replace('T', ' ').substring(0, 19)} UTC</li>
            <li><strong>CV:</strong> ${data.cvFile ? data.cvFile.name : 'Not provided'}</li>
            <li><strong>Additional Files:</strong> ${data.additionalFiles ? data.additionalFiles.name : 'Not provided'}</li>
          </ul>

          <p>Our team will review your application and get back to you within 5-7 business days. If your qualifications match our requirements, we will contact you to schedule an interview.</p>

          <p>If you have any questions about your application or the position, please don't hesitate to contact us at <a href="mailto:${process.env.JOBS_EMAIL || 'job@vexita.se'}">${process.env.JOBS_EMAIL || 'job@vexita.se'}</a>.</p>

          <p>Best regards,<br>
          <strong>Vexita Team</strong></p>

          <hr style="margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px;">This is an automated confirmation email. Please do not reply to this email.</p>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return { success: true, message: 'Job application email sent successfully with auto-reply' };
  } catch (error) {
    console.error('Error sending job application email:', error);
    return { success: false, message: 'Failed to send job application email' };
  }
}
