import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Request received' }, { status: 200 });
}
