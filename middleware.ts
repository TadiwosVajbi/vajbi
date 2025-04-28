import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// List of supported locales
const locales = ['en', 'sv'];
const defaultLocale = 'en';

// Get the preferred locale from the request
function getLocale(request: NextRequest) {
  // Negotiator expects a plain object, so we need to simulate one
  const headers = Object.fromEntries(request.headers);
  const negotiatorHeaders = {
    'accept-language': headers['accept-language'] || defaultLocale,
  };
  
  const negotiator = new Negotiator({ headers: negotiatorHeaders });
  const locales = ['en', 'sv'];
  
  // Use negotiator and intl-localematcher to get the best locale
  return match(negotiator.languages(), locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname is missing a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return;
  
  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
