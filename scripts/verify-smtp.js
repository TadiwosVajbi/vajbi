/*
  Quick SMTP verification script.
  Usage:
    - Ensure environment variables are set (e.g., via .env.local in Next.js dev or shell export)
    - Run: node scripts/verify-smtp.js
*/

const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Load .env.local if it exists
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const [key, ...valueParts] = trimmed.split('=');
    if (key && valueParts.length) {
      const value = valueParts.join('=').trim();
      process.env[key.trim()] = value;
    }
  });
  console.log('Loaded .env.local');
}

async function main() {
  const host = process.env.EMAIL_HOST || 'smtp.office365.com';
  const port = Number(process.env.EMAIL_PORT || 587);
  const secure = false; // STARTTLS for 587
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.error('Missing EMAIL_USER or EMAIL_PASS. Set your environment variables.');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });

  try {
    const ok = await transporter.verify();
    console.log('SMTP verify:', ok);
  } catch (err) {
    console.error('SMTP verify failed:', err.message);
    process.exit(2);
  }
}

main();


