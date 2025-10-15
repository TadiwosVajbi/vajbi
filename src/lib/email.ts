import nodemailer from 'nodemailer';
import type { SentMessageInfo } from 'nodemailer';
import { getEmailConfig } from './aws-config';

// Simple provider switch: smtp | graph (default smtp)
let emailConfig: any = null;

// Microsoft Graph helpers (used when EMAIL_PROVIDER=graph)
async function getGraphToken(): Promise<string> {
  if (!emailConfig) {
    emailConfig = await getEmailConfig();
  }
  
  const tenantId = emailConfig.TENANT_ID;
  const clientId = emailConfig.CLIENT_ID;
  const clientSecret = emailConfig.CLIENT_SECRET;
  if (!tenantId || !clientId || !clientSecret) {
    throw new Error('Graph credentials missing: TENANT_ID, CLIENT_ID, CLIENT_SECRET');
  }
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  });
  const resp = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!resp.ok) {
    throw new Error(`Graph token failed: ${resp.status} ${await resp.text()}`);
  }
  const json = await resp.json();
  return json.access_token as string;
}

async function graphSendMail(fromUpn: string, to: string[], subject: string, html: string, replyTo?: string, attachments?: any[]): Promise<void> {
  const token = await getGraphToken();
  
  const message: any = {
    subject,
    body: { contentType: 'HTML', content: html },
    toRecipients: to.map((t) => ({ emailAddress: { address: t } })),
    replyTo: replyTo ? [{ emailAddress: { address: replyTo } }] : [],
  };

  // Add attachments if provided
  if (attachments && attachments.length > 0) {
    message.attachments = attachments.map(att => ({
      "@odata.type": "#microsoft.graph.fileAttachment",
      name: att.filename,
      contentBytes: att.content.toString('base64'),
      contentType: att.contentType || 'application/octet-stream'
    }));
  }

  const payload = {
    message,
    saveToSentItems: true,
  };
  
  const resp = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(fromUpn)}/sendMail`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!resp.ok) {
    throw new Error(`Graph sendMail failed: ${resp.status} ${await resp.text()}`);
  }
}

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  if (!emailConfig) {
    throw new Error('Email config not loaded');
  }
  
  return nodemailer.createTransport({
    host: emailConfig.EMAIL_HOST || 'smtp.office365.com',
    port: parseInt(emailConfig.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: emailConfig.EMAIL_USER,
      pass: emailConfig.EMAIL_PASS,
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
  try {
    // Load email configuration
    if (!emailConfig) {
      emailConfig = await getEmailConfig();
    }
    
    const provider = emailConfig.EMAIL_PROVIDER || 'graph';
    const fromEmail = emailConfig.CONTACT_FROM_EMAIL || emailConfig.FROM_EMAIL || emailConfig.GRAPH_SENDER || '';
    const toAddress = emailConfig.CONTACT_EMAIL || 'tghiwot@vexita.se';
    const replyTo = emailConfig.CONTACT_EMAIL || fromEmail;

    console.log('Email provider:', provider);
    console.log('From email:', fromEmail);
    console.log('To address:', toAddress);
    console.log('Reply to:', replyTo);

    const subject = `New Contact Form Submission from ${data.firstName} ${data.lastName}`;
    const html = `
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
      `;

    if (provider === 'graph') {
      const fromUpn = emailConfig.CONTACT_FROM_EMAIL || emailConfig.FROM_EMAIL || emailConfig.GRAPH_SENDER || '';
      await graphSendMail(fromUpn, [toAddress], subject, html, data.email);
    } else {
      if (!emailConfig.EMAIL_USER || !emailConfig.EMAIL_PASS) {
        console.log('SMTP not configured. Contact form data:', data);
        return { success: true, message: 'Email configuration not set up - logged to console' };
      }
      const transporter = createTransporter();
      const mailOptions = {
        from: `"Vexita Contact Form" <${fromEmail}>`,
        to: toAddress,
        subject,
        html,
        replyTo: data.email,
      };
      await transporter.sendMail(mailOptions);
    }

    // Send auto-reply confirmation to the contact
    const autoReplySubject = `Thank you for contacting Vexita`;
    const autoReplyHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3982a3;">Thank you for reaching out!</h2>

          <p>Dear ${data.firstName} ${data.lastName},</p>

          <p>We have received your message and appreciate you taking the time to contact us.</p>

          <p>Our team will review your inquiry and respond within 24-48 hours during business days.</p>

          <p>Best regards,<br>
          <strong>Vexita Team</strong></p>

          <hr style="margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px;">This is an automated confirmation email. Please do not reply to this email.</p>
        </div>
      `;

    if (provider === 'graph') {
      const fromUpn = emailConfig.CONTACT_FROM_EMAIL || emailConfig.FROM_EMAIL || emailConfig.GRAPH_SENDER || '';
      await graphSendMail(fromUpn, [data.email], autoReplySubject, autoReplyHtml, replyTo);
    } else {
      const transporter = createTransporter();
      const autoReplyOptions = {
        from: `"Vexita" <${fromEmail}>`,
        to: data.email,
        subject: autoReplySubject,
        replyTo,
        html: autoReplyHtml,
      } as any;
      await transporter.sendMail(autoReplyOptions as unknown as SentMessageInfo);
    }

    return { success: true, message: 'Contact email sent successfully with auto-reply' };
  } catch (error) {
    console.error('Error sending contact email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send contact email';
    return { success: false, message: errorMessage };
  }
}

export async function sendJobApplicationEmail(data: JobApplicationEmailData) {
  try {
    // Load email configuration
    if (!emailConfig) {
      emailConfig = await getEmailConfig();
    }
    
    const provider = emailConfig.EMAIL_PROVIDER || 'graph';
    const fromEmail = emailConfig.JOBS_FROM_EMAIL || emailConfig.FROM_EMAIL || emailConfig.GRAPH_SENDER || '';
    const toAddress = emailConfig.JOBS_EMAIL || 'tghiwot@vexita.se';

    console.log('Email provider:', provider);
    console.log('From email:', fromEmail);
    console.log('To address:', toAddress);

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

    const subject = `New Job Application: ${data.jobTitle} - ${data.firstName} ${data.lastName}`;
    const html = `
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
      `;

    if (provider === 'graph') {
      const fromUpn = emailConfig.JOBS_FROM_EMAIL || emailConfig.FROM_EMAIL || emailConfig.GRAPH_SENDER || '';
      await graphSendMail(fromUpn, [toAddress], subject, html, data.email, attachments);
    } else {
      if (!emailConfig.EMAIL_USER || !emailConfig.EMAIL_PASS) {
        console.log('SMTP not configured. Job application data:', data);
        return { success: true, message: 'Email configuration not set up - logged to console' };
      }
      const transporter = createTransporter();
      const mailOptions = {
        from: `"Vexita Job Applications" <${fromEmail}>`,
        to: toAddress,
        subject,
        html,
        replyTo: data.email,
        attachments,
      };
      await transporter.sendMail(mailOptions);
    }

    // Send auto-reply confirmation to the applicant
    const autoReplySubject = `Application Received: ${data.jobTitle} Position`;
    const autoReplyHtml = `
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

          <p>Best regards,<br>
          <strong>Vexita Team</strong></p>

          <hr style="margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px;">This is an automated confirmation email. Please do not reply to this email.</p>
        </div>
      `;

    if (provider === 'graph') {
      const fromUpn = emailConfig.JOBS_FROM_EMAIL || emailConfig.FROM_EMAIL || emailConfig.GRAPH_SENDER || '';
      await graphSendMail(fromUpn, [data.email], autoReplySubject, autoReplyHtml, emailConfig.JOBS_EMAIL || fromEmail);
    } else {
      const transporter = createTransporter();
      const autoReplyOptions = {
        from: `"Vexita" <${fromEmail}>`,
        to: data.email,
        subject: autoReplySubject,
        replyTo: emailConfig.JOBS_EMAIL || fromEmail,
        html: autoReplyHtml,
      };
      await transporter.sendMail(autoReplyOptions);
    }

    return { success: true, message: 'Job application email sent successfully with auto-reply' };
  } catch (error) {
    console.error('Error sending job application email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send job application email';
    return { success: false, message: errorMessage };
  }
}
