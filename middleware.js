import { NextResponse } from "next/server";

const HOST_REWRITES = {
  "chameleon.yaosamo.com": "/things/chameleon",
  "lilthings.yaosamo.com": "/things/lilthings",
};

// The portfolio moved to design.yaosamo.com; the apex now shows the apps
// page and sends every other path to the same path there.
const MOVED_HOSTS = ["yaosamo.com", "www.yaosamo.com"];
const PORTFOLIO_ORIGIN = "https://design.yaosamo.com";
// The apex's own robots, sitemap, share image and touch icon live in public/apex.
const APEX_FILES = ["/robots.txt", "/sitemap.xml", "/og.png", "/apple-touch-icon.png"];

export function middleware(request) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const pathname = request.nextUrl.pathname;

  if (MOVED_HOSTS.includes(host)) {
    if (pathname === "/" || pathname === "") {
      const url = request.nextUrl.clone();
      url.pathname = "/home.html";
      return NextResponse.rewrite(url);
    }
    if (APEX_FILES.includes(pathname)) {
      const url = request.nextUrl.clone();
      url.pathname = `/apex${pathname}`;
      return NextResponse.rewrite(url);
    }
    // The apps page's own images load here rather than through a redirect.
    if (pathname.startsWith("/images/")) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      `${PORTFOLIO_ORIGIN}${pathname}${request.nextUrl.search}`,
      307
    );
  }

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
