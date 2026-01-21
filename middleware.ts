import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n.config';

function getLocale(request: NextRequest): string {
  // Check for locale in cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale as typeof locales[number])) {
    return cookieLocale;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage
      .split(',')
      .map((lang) => {
        const [locale] = lang.trim().split(';');
        return locale.split('-')[0]; // Get language code without region
      });

    for (const preferred of preferredLocales) {
      if (locales.includes(preferred as typeof locales[number])) {
        return preferred;
      }
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip internal paths and API routes
    '/((?!api|_next/static|_next/image|images|favicon.ico|icon.png|.*\\..*).*)',
  ],
};
