import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';

const ssmClient = new SSMClient({ region: process.env.AWS_REGION || 'us-east-1' });

export async function getParameter(name: string): Promise<string | undefined> {
  try {
    const command = new GetParameterCommand({
      Name: name,
      WithDecryption: true,
    });
    const response = await ssmClient.send(command);
    return response.Parameter?.Value;
  } catch (error) {
    console.error(`Failed to get parameter ${name}:`, error);
    return undefined;
  }
}

export async function getEmailConfig() {
  // Try environment variables first, then fall back to SSM
  return {
    EMAIL_PROVIDER: process.env.EMAIL_PROVIDER || await getParameter('/vexita/EMAIL_PROVIDER') || 'graph',
    TENANT_ID: process.env.TENANT_ID || await getParameter('/vexita/TENANT_ID'),
    CLIENT_ID: process.env.CLIENT_ID || await getParameter('/vexita/CLIENT_ID'),
    CLIENT_SECRET: process.env.CLIENT_SECRET || await getParameter('/vexita/CLIENT_SECRET'),
    GRAPH_SENDER: process.env.GRAPH_SENDER || await getParameter('/vexita/GRAPH_SENDER'),
    FROM_EMAIL: process.env.FROM_EMAIL || await getParameter('/vexita/FROM_EMAIL'),
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL || await getParameter('/vexita/CONTACT_FROM_EMAIL'),
    JOBS_FROM_EMAIL: process.env.JOBS_FROM_EMAIL || await getParameter('/vexita/JOBS_FROM_EMAIL'),
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || await getParameter('/vexita/CONTACT_EMAIL'),
    JOBS_EMAIL: process.env.JOBS_EMAIL || await getParameter('/vexita/JOBS_EMAIL'),
    // SMTP variables
    EMAIL_HOST: process.env.EMAIL_HOST || await getParameter('/vexita/EMAIL_HOST'),
    EMAIL_PORT: process.env.EMAIL_PORT || await getParameter('/vexita/EMAIL_PORT'),
    EMAIL_USER: process.env.EMAIL_USER || await getParameter('/vexita/EMAIL_USER'),
    EMAIL_PASS: process.env.EMAIL_PASS || await getParameter('/vexita/EMAIL_PASS'),
  };
}
