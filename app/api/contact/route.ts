import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID!;
const SHEET_CONTACT  = 'Contact Leads';

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
    const { firstName, lastName, email, company, service, message, budget } = await req.json();

    if (!email || !firstName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const sheets = await getSheets();
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_CONTACT}!A:H`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, firstName, lastName, email, company ?? '', service ?? '', budget ?? '', message ?? '']],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
