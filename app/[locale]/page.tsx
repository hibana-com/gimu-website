import Image from "next/image";
import { getDictionary } from "@/lib/dictionaries";
import { type Locale, locales, localeNames } from "@/i18n.config";
import Link from "next/link";
import { DownloadButtons, NavDownloadButton, HeroDownloadButton } from "@/components/download-buttons";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background-alt/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/gimu-icon.png"
              alt="Gimu Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold tracking-tight">Gimu</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-foreground-muted hover:text-gimu-primary transition-colors font-medium"
            >
              {dict.nav.howItWorks}
            </a>
            <a
              href="#features"
              className="text-foreground-muted hover:text-gimu-primary transition-colors font-medium"
            >
              {dict.nav.features}
            </a>
            {/* Language Switcher */}
            <div className="relative group">
              <button className="text-foreground-muted hover:text-gimu-primary transition-colors font-medium flex items-center gap-1">
                {localeNames[locale]}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 bg-background-alt border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[140px]">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={`/${l}`}
                    className={`block px-4 py-2 text-sm hover:bg-border/30 first:rounded-t-xl last:rounded-b-xl ${
                      l === locale ? "text-gimu-primary font-medium" : "text-foreground-muted"
                    }`}
                  >
                    {localeNames[l]}
                  </Link>
                ))}
              </div>
            </div>
            <NavDownloadButton label={dict.nav.downloadFree} comingSoon={dict.download.comingSoon} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gimu-tertiary/10 text-gimu-tertiary text-sm font-bold uppercase tracking-wider">
              <span>🔥</span>
              {dict.hero.badge}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              {dict.hero.title}{" "}
              <span className="text-gimu-primary">{dict.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-foreground-muted max-w-xl leading-relaxed">
              {dict.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <HeroDownloadButton label={dict.hero.cta} comingSoon={dict.download.comingSoon} />
              <a
                href="#how-it-works"
                className="bg-background-alt border border-border px-10 py-4 rounded-2xl font-bold text-lg hover:bg-border/30 transition-all flex items-center gap-2"
              >
                {dict.hero.secondary}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gimu-primary/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gimu-tertiary/20 blur-[100px] rounded-full"></div>
            <div className="relative mx-auto w-[280px] md:w-[320px] animate-float">
              <Image
                src="/images/screenshots/01_better_together_framed.png"
                alt="Gimu App Screenshot"
                width={320}
                height={693}
                className="rounded-[3rem] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {dict.howItWorks.title}{" "}
              <span className="text-gimu-primary">{dict.howItWorks.titleHighlight}</span>{" "}
              {dict.howItWorks.titleEnd}
            </h2>
            <p className="text-xl text-foreground-muted">{dict.howItWorks.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-3xl bg-background border border-border hover:shadow-xl transition-all group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gimu-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <div className="w-16 h-16 bg-gimu-primary/10 rounded-2xl flex items-center justify-center text-gimu-primary mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.howItWorks.step1Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.howItWorks.step1Description}</p>
            </div>

            <div className="relative p-8 rounded-3xl bg-background border border-border hover:shadow-xl transition-all group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gimu-secondary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <div className="w-16 h-16 bg-gimu-secondary/10 rounded-2xl flex items-center justify-center text-gimu-secondary mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.howItWorks.step2Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.howItWorks.step2Description}</p>
            </div>

            <div className="relative p-8 rounded-3xl bg-background border border-border hover:shadow-xl transition-all group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gimu-tertiary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <div className="w-16 h-16 bg-gimu-tertiary/10 rounded-2xl flex items-center justify-center text-gimu-tertiary mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.howItWorks.step3Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.howItWorks.step3Description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {dict.features.title} <span className="text-gimu-primary">{dict.features.titleHighlight}</span>
            </h2>
            <p className="text-xl text-foreground-muted">{dict.features.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-background-alt border border-border hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gimu-cheer/10 rounded-2xl flex items-center justify-center text-gimu-cheer mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.features.feature1Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.features.feature1Description}</p>
            </div>

            <div className="p-8 rounded-3xl bg-background-alt border border-border hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gimu-streak/10 rounded-2xl flex items-center justify-center text-gimu-streak mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.features.feature2Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.features.feature2Description}</p>
            </div>

            <div className="p-8 rounded-3xl bg-background-alt border border-border hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gimu-secondary/10 rounded-2xl flex items-center justify-center text-gimu-secondary mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.features.feature3Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.features.feature3Description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Gallery */}
      <section className="py-24 bg-background-alt overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {dict.screenshots.title} <span className="text-gimu-primary">{dict.screenshots.titleHighlight}</span>{" "}
              {dict.screenshots.titleEnd}
            </h2>
            <p className="text-xl text-foreground-muted">{dict.screenshots.description}</p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {[
              { src: "/images/screenshots/01_better_together_framed.png", alt: dict.screenshots_alt.betterTogether },
              { src: "/images/screenshots/02_squad_goals_framed.png", alt: dict.screenshots_alt.squadGoals },
              { src: "/images/screenshots/03_real_talk_framed.png", alt: dict.screenshots_alt.realTalk },
              { src: "/images/screenshots/04_mutual_goals_framed.png", alt: dict.screenshots_alt.mutualGoals },
              { src: "/images/screenshots/05_shared_victory_framed.png", alt: dict.screenshots_alt.sharedVictory },
              { src: "/images/screenshots/07_start_fresh_framed.png", alt: dict.screenshots_alt.startFresh },
            ].map((screenshot, index) => (
              <div key={index} className="flex-shrink-0 snap-center">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={240}
                  height={520}
                  className="rounded-[2rem] shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Privacy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gimu-primary/5 to-gimu-secondary/5 rounded-3xl p-12 border border-border">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-extrabold tracking-tight">{dict.trust.title}</h2>
              <p className="text-xl text-foreground-muted">{dict.trust.description}</p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gimu-primary/10 rounded-2xl flex items-center justify-center text-gimu-primary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">{dict.trust.private}</h3>
                  <p className="text-foreground-muted text-sm">{dict.trust.privateDescription}</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gimu-secondary/10 rounded-2xl flex items-center justify-center text-gimu-secondary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">{dict.trust.friends}</h3>
                  <p className="text-foreground-muted text-sm">{dict.trust.friendsDescription}</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gimu-tertiary/10 rounded-2xl flex items-center justify-center text-gimu-tertiary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">{dict.trust.support}</h3>
                  <p className="text-foreground-muted text-sm">{dict.trust.supportDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <Image src="/images/gimu-icon.png" alt="Gimu Icon" width={96} height={96} className="mx-auto" />
          <h2 className="text-4xl font-extrabold tracking-tight">{dict.story.title}</h2>
          <p className="text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto">
            {dict.story.descriptionPart1}{" "}
            <span className="text-gimu-primary font-semibold">{dict.story.descriptionHighlight}</span>
            {dict.story.descriptionPart2}
          </p>
          <p className="text-foreground-muted italic">{dict.story.attribution}</p>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gimu-primary to-gimu-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{dict.download.title}</h2>
              <p className="text-xl text-white/90">{dict.download.description}</p>
              <DownloadButtons
                appStoreLabel={dict.download.appStoreLabel}
                appStore={dict.download.appStore}
                playStoreLabel={dict.download.playStoreLabel}
                playStore={dict.download.playStore}
                comingSoon={dict.download.comingSoon}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Image src="/images/gimu-icon.png" alt="Gimu Logo" width={32} height={32} className="rounded-lg" />
              <span className="font-bold text-lg">Gimu</span>
            </div>
            <div className="flex gap-8 text-foreground-muted text-sm font-medium">
              <Link href={`/${locale}/privacy`} className="hover:text-gimu-primary transition-colors">
                {dict.footer.privacy}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-gimu-primary transition-colors">
                {dict.footer.terms}
              </Link>
              <a href="mailto:contact@gimu.app" className="hover:text-gimu-primary transition-colors">
                {dict.footer.contact}
              </a>
            </div>
            <div className="text-foreground-muted text-sm">
              {dict.footer.copyright.replace("{year}", currentYear.toString())}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
