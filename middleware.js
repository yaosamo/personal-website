import { NextResponse } from "next/server";

const HOST_REWRITES = {
  "chameleon.yaosamo.com": "/things/chameleon",
  "lilthings.yaosamo.com": "/things/lilthings",
};

export function middleware(request) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const pathname = request.nextUrl.pathname;
  const targetBase = HOST_REWRITES[host];

  if (!targetBase) {
    return NextResponse.next();
  }

  if (pathname.startsWith(targetBase)) {
    return NextResponse.next();
  }

  if (pathname === "/" || pathname === "") {
    const url = request.nextUrl.clone();
    url.pathname = targetBase;
    return NextResponse.rewrite(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = `${targetBase}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.svg|api).*)",
  ],
};
