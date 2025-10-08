import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    EMAIL_PROVIDER: process.env.EMAIL_PROVIDER || 'not set',
    TENANT_ID: process.env.TENANT_ID ? 'set' : 'not set',
    CLIENT_ID: process.env.CLIENT_ID ? 'set' : 'not set',
    CLIENT_SECRET: process.env.CLIENT_SECRET ? 'set' : 'not set',
    GRAPH_SENDER: process.env.GRAPH_SENDER || 'not set',
    FROM_EMAIL: process.env.FROM_EMAIL || 'not set',
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL || 'not set',
    JOBS_FROM_EMAIL: process.env.JOBS_FROM_EMAIL || 'not set',
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'not set',
    JOBS_EMAIL: process.env.JOBS_EMAIL || 'not set',
  });
}
