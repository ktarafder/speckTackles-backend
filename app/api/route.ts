import { NextResponse } from "next/server";

export function middleware(req: Request) {
  if (req.method === "POST") {
    return NextResponse.next();
  }

  return new NextResponse();
}
