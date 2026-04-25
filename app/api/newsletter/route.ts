import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const SPREADSHEET_ID  = process.env.GOOGLE_SHEET_ID!;
const SHEET_NEWSLETTER = 'Newsletter';

const EMAIL_RE  = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MOBILE_RE = /^\+?[\d\s\-]{7,15}$/;

// Rate limit: 3 signups per IP per 10 min
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) { rateLimitMap.set(ip, { count: 1, resetAt: now + 600_000 }); return true; }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

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
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await req.json();
    const email    = typeof body.email    === 'string' ? body.email.trim().slice(0, 254) : '';
    const mobile   = typeof body.mobile   === 'string' ? body.mobile.trim().slice(0, 20) : '';
    const whatsapp = typeof body.whatsapp === 'string' ? body.whatsapp.trim().slice(0, 20) : '';
    const telegram = typeof body.telegram === 'string' ? body.telegram.trim().slice(0, 80) : '';

    if (!email && !mobile && !whatsapp && !telegram) {
      return NextResponse.json({ error: 'At least one contact method required' }, { status: 400 });
    }
    if (email && !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    if (mobile && !MOBILE_RE.test(mobile)) {
      return NextResponse.json({ error: 'Invalid mobile number' }, { status: 400 });
    }
    if (whatsapp && !MOBILE_RE.test(whatsapp)) {
      return NextResponse.json({ error: 'Invalid WhatsApp number' }, { status: 400 });
    }

    const sheets = await getSheets();
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NEWSLETTER}!A:F`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[timestamp, email, mobile, whatsapp, telegram]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter error:', err);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
