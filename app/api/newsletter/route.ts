import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const SPREADSHEET_ID  = process.env.GOOGLE_SHEET_ID!;
const SHEET_NEWSLETTER = 'Newsletter';

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
    const { email, mobile } = await req.json();

    if (!email && !mobile) {
      return NextResponse.json({ error: 'Email or mobile required' }, { status: 400 });
    }

    const sheets = await getSheets();
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NEWSLETTER}!A:C`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, email ?? '', mobile ?? '']],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter error:', err);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
