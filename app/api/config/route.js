import { NextResponse } from 'next/server';

// Expose only whether the server has a Muapi key configured, never the key itself.
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(
    { muapiConfigured: Boolean(process.env.MUAPI_API_KEY?.trim()) },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
}
