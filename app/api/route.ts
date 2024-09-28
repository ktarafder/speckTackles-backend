import { NextResponse } from 'next/server';

export async function GET() {
  console.log('Request received');
  return NextResponse.json({ message: 'Request received' }, { status: 200 });
}
