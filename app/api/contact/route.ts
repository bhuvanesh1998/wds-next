import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID!;
const SHEET_CONTACT  = 'Contact Leads';

// Simple in-memory rate limit: max 5 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// Strip HTML/script tags and limit length
function clean(val: unknown, maxLen = 500): string {
  if (typeof val !== 'string') return '';
  return val.replace(/<[^>]*>/g, '').replace(/javascript:/gi, '').trim().slice(0, maxLen);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function getSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({ version: 'v4', auth });
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await req.json();

    const firstName = clean(body.firstName, 80);
    const lastName  = clean(body.lastName,  80);
    const email     = clean(body.email,     254).toLowerCase();
    const company   = clean(body.company,   150);
    const service   = clean(body.service,   100);
    const message   = clean(body.message,   1000);
    const budget    = clean(body.budget,    50);

    // Server-side validation
    if (!firstName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const sheets = await getSheets();
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_CONTACT}!A:H`,
      valueInputOption: 'RAW', // RAW prevents formula injection
      requestBody: {
        values: [[timestamp, firstName, lastName, email, company, service, budget, message]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
