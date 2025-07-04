import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  return NextResponse.next();
}

export const dynamicConfig = {
  matcher: ["*"],
};
