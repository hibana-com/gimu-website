import Image from "next/image";
import Link from "next/link";
import { locales, type Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Support({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-3">
          <Link href={`/${locale}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/images/gimu-icon.png" alt="Gimu Logo" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-lg">Gimu</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-2">{dict.support.title}</h1>
          <p className="text-xl text-foreground-muted mb-12 leading-relaxed">
            {dict.support.description}
          </p>

          {/* Contact */}
          <section className="mb-12 p-8 rounded-3xl bg-background-alt border border-border">
            <h2 className="text-xl font-semibold mb-4">{dict.support.contactTitle}</h2>
            <p className="text-foreground-muted mb-4 leading-relaxed">
              {dict.support.contactDescription}
            </p>
            <a
              href="mailto:support@gimu.app"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gimu-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@gimu.app
            </a>
          </section>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-8">{dict.support.faqTitle}</h2>

          <div className="space-y-6">
            {/* Account */}
            <details className="group p-6 rounded-2xl bg-background-alt border border-border">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq1Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                {dict.support.faq1Answer}
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-background-alt border border-border">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq2Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                {dict.support.faq2Answer}
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-background-alt border border-border">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq3Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                {dict.support.faq3Answer}
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-background-alt border border-border">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq4Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                {dict.support.faq4Answer}
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-background-alt border border-border">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq5Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                {dict.support.faq5Answer}
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-background-alt border border-border">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq6Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                {dict.support.faq6Answer}
              </p>
            </details>
          </div>

          {/* Links */}
          <div className="mt-12 p-8 rounded-3xl bg-background-alt border border-border">
            <h2 className="text-xl font-semibold mb-4">{dict.support.linksTitle}</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/privacy`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:bg-border/30 transition-all font-medium"
              >
                {dict.footer.privacy}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:bg-border/30 transition-all font-medium"
              >
                {dict.footer.terms}
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href={`/${locale}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/images/gimu-icon.png" alt="Gimu Logo" width={32} height={32} className="rounded-lg" />
              <span className="font-bold text-lg">Gimu</span>
            </Link>
            <div className="flex gap-8 text-foreground-muted text-sm font-medium">
              <Link href={`/${locale}/privacy`} className="hover:text-gimu-primary transition-colors">
                {dict.footer.privacy}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-gimu-primary transition-colors">
                {dict.footer.terms}
              </Link>
              <span className="text-foreground">{dict.footer.support}</span>
              <a href="mailto:contact@gimu.app" className="hover:text-gimu-primary transition-colors">
                {dict.footer.contact}
              </a>
            </div>
            <div className="text-foreground-muted text-sm">
              {dict.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
