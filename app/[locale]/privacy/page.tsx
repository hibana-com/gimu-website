import Image from "next/image";
import Link from "next/link";
import { locales, type Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PrivacyPolicy({
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
          <h1 className="text-3xl font-bold mb-2">Privacy Policy for Gimu</h1>
          <p className="text-foreground-muted mb-8">
            <strong>Effective Date:</strong> February 4, 2026
            <br />
            <strong>Last Updated:</strong> February 4, 2026
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">Introduction</h2>
          <p className="mb-4 leading-relaxed">
            This Privacy Policy describes how Gimu (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares your personal information when you use the Gimu mobile application (&ldquo;App&rdquo;). Gimu is a habit tracking application with social accountability features, operated by Ernesto Salazar.
          </p>
          <p className="mb-4 leading-relaxed">
            We are committed to protecting your privacy and being transparent about the data we collect. Please read this policy carefully. By using Gimu, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">1. Information We Collect</h2>

          <h3 className="text-lg font-medium mt-6 mb-3">1.1 Information You Provide Directly</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Account Information:</strong> When you create an account, we collect your email address through Firebase Authentication. You also provide a display name and username for your public profile.</li>
            <li><strong>Habit Data:</strong> We collect the habit information you create, including habit names, schedules, completion history, and streak data.</li>
            <li><strong>Chat Messages:</strong> If you participate in shared habits, we collect the messages you send within the in-app chat feature.</li>
            <li><strong>Friend Relationships:</strong> We store information about your friend connections within the App, including friend requests and accepted friendships.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-3">1.2 Information Collected Automatically</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Push Notification Tokens:</strong> We collect Firebase Cloud Messaging (FCM) tokens, which are device identifiers used solely to deliver push notifications such as habit reminders and friend activity updates.</li>
            <li><strong>Analytics Data:</strong> We use Firebase Analytics to collect anonymized usage data, including screen views, feature usage patterns, and general interaction metrics. This data is aggregated and does not personally identify you.</li>
            <li><strong>Crash and Performance Data:</strong> We use Firebase Crashlytics to collect crash logs, device information (such as device model and operating system version), and diagnostic data. This information helps us identify and fix bugs to improve App stability.</li>
            <li><strong>Device Information:</strong> We collect basic device information including operating system version and device model, used exclusively for crash reporting and ensuring App compatibility.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Provide and Maintain the App:</strong> To operate the core features of Gimu, including habit tracking, progress monitoring, and social accountability features.</li>
            <li><strong>Account Management:</strong> To create and manage your user account, authenticate your identity, and enable you to log in securely.</li>
            <li><strong>Social Features:</strong> To facilitate friend connections, shared habits, and chat messaging between users who have mutually agreed to connect.</li>
            <li><strong>Notifications:</strong> To send you habit reminders, friend requests, and other relevant notifications that you have opted into.</li>
            <li><strong>Improvements and Analytics:</strong> To understand how users interact with the App, identify popular features, and make informed decisions about future improvements.</li>
            <li><strong>Bug Fixes and Stability:</strong> To diagnose crashes, fix bugs, and ensure the App runs reliably across different devices and operating system versions.</li>
            <li><strong>Security:</strong> To detect and prevent fraud, abuse, or other harmful activity.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">3. Data Sharing and Disclosure</h2>

          <h3 className="text-lg font-medium mt-6 mb-3">3.1 Third-Party Service Providers</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Firebase (operated by Google):</strong> We use Firebase as our backend infrastructure provider. Firebase processes data on our behalf for authentication, database storage, push notifications, analytics, and crash reporting. Google acts as a data processor under our instructions.</li>
            <li><strong>Apple:</strong> The App is distributed through the Apple App Store for iOS devices. Apple may collect certain data in connection with App distribution.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-3">3.2 What We Do Not Do</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>We do not sell your personal data.</strong> We have never sold personal data and have no plans to do so.</li>
            <li><strong>We do not share your data with advertisers.</strong> Gimu does not display third-party advertisements.</li>
            <li><strong>We do not share your personal information with third parties for their own marketing purposes.</strong></li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-3">3.3 Legal Requirements</h3>
          <p className="mb-4 leading-relaxed">
            We may disclose your information if required to do so by law or in response to valid legal requests by public authorities, such as a court order or government investigation.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">4. Data Retention</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Account Data:</strong> We retain your account information, habit data, and chat messages for as long as your account is active.</li>
            <li><strong>After Account Deletion:</strong> When you request account deletion, we will delete or anonymize your personal data within 30 days. Some data may be retained in encrypted backups for up to 90 days before being permanently removed.</li>
            <li><strong>Analytics Data:</strong> Anonymized analytics data may be retained indefinitely as it cannot be used to identify individual users.</li>
            <li><strong>Crash Reports:</strong> Crash reporting data is retained for up to 90 days to allow for bug investigation and resolution.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">5. Your Rights and Choices</h2>

          <h3 className="text-lg font-medium mt-6 mb-3">5.1 Access Your Data</h3>
          <p className="mb-4 leading-relaxed">
            You have the right to request a copy of the personal data we hold about you. You can view most of your data directly within the App, including your profile information, habits, and completion history.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">5.2 Delete Your Data</h3>
          <p className="mb-4 leading-relaxed">
            You can request deletion of your account and all associated data by contacting us at the email address listed below. Upon receiving your request, we will delete your data in accordance with the retention schedule described in Section 4.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">5.3 Export Your Data</h3>
          <p className="mb-4 leading-relaxed">
            You have the right to request a portable copy of your data in a commonly used, machine-readable format. Contact us to make this request.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">5.4 Update Your Information</h3>
          <p className="mb-4 leading-relaxed">
            You can update your display name, username, and other profile information directly within the App at any time.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">5.5 Notification Preferences</h3>
          <p className="mb-4 leading-relaxed">
            You can manage push notification permissions through your device settings at any time. Disabling notifications will not affect the core functionality of the App.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">6. Children&apos;s Privacy</h2>
          <p className="mb-4 leading-relaxed">
            Gimu is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal data from a child under 13 without parental consent, we will take steps to delete that information promptly. If you believe that a child under 13 has provided us with personal information, please contact us immediately at the email address listed below.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">7. Security</h2>
          <p className="mb-4 leading-relaxed">
            We take reasonable and appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Encryption in Transit:</strong> All data transmitted between the App and our servers is encrypted using TLS (Transport Layer Security).</li>
            <li><strong>Encryption at Rest:</strong> Data stored in Firebase is encrypted at rest using Google&apos;s default encryption.</li>
            <li><strong>Authentication:</strong> We use Firebase Authentication to securely manage user credentials. Passwords are never stored in plain text.</li>
            <li><strong>Access Controls:</strong> Access to user data on our backend systems is restricted and monitored.</li>
          </ul>
          <p className="mb-4 leading-relaxed">
            While we strive to protect your personal information, no method of transmission over the Internet or method of electronic storage is completely secure. We cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">8. International Data Transfers</h2>
          <p className="mb-4 leading-relaxed">
            Your information may be transferred to and processed in countries other than your country of residence, including the United States, where Firebase servers are located. These countries may have data protection laws that differ from those in your jurisdiction. By using the App, you consent to the transfer of your information to these countries. Where required, we rely on appropriate safeguards such as Standard Contractual Clauses to ensure your data is protected.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">9. GDPR Compliance (European Economic Area Users)</h2>
          <p className="mb-4 leading-relaxed">
            If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, you have additional rights under the General Data Protection Regulation (GDPR):
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">9.1 Legal Basis for Processing</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Contract Performance:</strong> Processing necessary to provide you with the App&apos;s services, including account creation, habit tracking, and social features (Article 6(1)(b) GDPR).</li>
            <li><strong>Legitimate Interests:</strong> Processing for analytics and crash reporting to improve the App, provided these interests are not overridden by your rights (Article 6(1)(f) GDPR).</li>
            <li><strong>Consent:</strong> Where required, we obtain your consent before processing, such as for push notifications (Article 6(1)(a) GDPR).</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-3">9.2 Your GDPR Rights</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Restrict Processing:</strong> Request that we limit the processing of your personal data under certain circumstances.</li>
            <li><strong>Object to Processing:</strong> Object to the processing of your personal data based on legitimate interests.</li>
            <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time where processing is based on consent, without affecting the lawfulness of processing carried out before withdrawal.</li>
            <li><strong>Lodge a Complaint:</strong> File a complaint with your local data protection supervisory authority if you believe your rights have been violated.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">10. California Privacy Rights (CCPA)</h2>
          <p className="mb-4 leading-relaxed">
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Right to Know:</strong> You have the right to request information about the categories and specific pieces of personal information we have collected about you.</li>
            <li><strong>Right to Delete:</strong> You have the right to request the deletion of your personal information, subject to certain exceptions.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
            <li><strong>No Sale of Personal Information:</strong> We do not sell personal information as defined under the CCPA.</li>
          </ul>
          <p className="mb-4 leading-relaxed">
            To exercise your CCPA rights, please contact us at the email address listed below. We will respond to verifiable requests within 45 days.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">11. Changes to This Privacy Policy</h2>
          <p className="mb-4 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by posting the updated policy within the App and updating the &ldquo;Last Updated&rdquo; date at the top of this page. Your continued use of the App after any changes constitutes your acceptance of the updated policy.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">12. Contact Us</h2>
          <p className="mb-4 leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>Ernesto Salazar</strong><br />
            Email: <a href="mailto:contact@gimu.app" className="text-gimu-primary hover:underline">contact@gimu.app</a>
          </p>
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
              <span className="text-foreground">{dict.footer.privacy}</span>
              <Link href={`/${locale}/terms`} className="hover:text-gimu-primary transition-colors">
                {dict.footer.terms}
              </Link>
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
