import Image from "next/image";
import Link from "next/link";
import { locales, type Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function TermsOfService({
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
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-foreground-muted mb-8">
            <strong>Effective Date:</strong> February 4, 2026
            <br />
            <strong>Last Updated:</strong> February 4, 2026
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4 leading-relaxed">
            By downloading, installing, accessing, or using the Gimu mobile application (&ldquo;App,&rdquo; &ldquo;Service,&rdquo; or &ldquo;Gimu&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you may not use the Service.
          </p>
          <p className="mb-4 leading-relaxed">
            These Terms constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Ernesto Salazar (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), the operator of Gimu. By creating an account or using the App, you confirm that you are at least 13 years of age and have the legal capacity to enter into this agreement.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">2. Description of Service</h2>
          <p className="mb-4 leading-relaxed">
            Gimu is a habit tracking application that helps users build and maintain positive habits through social accountability. The Service includes the following features:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Habit Creation and Tracking:</strong> Users can create personal habits, set goals, and track daily streaks.</li>
            <li><strong>Social Sharing:</strong> Users can share habits with friends to foster mutual accountability.</li>
            <li><strong>Chat:</strong> Users can communicate within shared habits through in-app messaging.</li>
            <li><strong>Social Feed:</strong> Users can view the activity and progress of friends they are connected with.</li>
            <li><strong>Reminders:</strong> Users can set reminders to stay on track with their habits.</li>
          </ul>
          <p className="mb-4 leading-relaxed">
            The App is currently available on iOS and may be made available on additional platforms in the future. We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">3. Account Registration</h2>
          <p className="mb-4 leading-relaxed">
            To use Gimu, you must create an account by providing a valid email address, a password, and a unique username. You agree to the following:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You will provide accurate and complete registration information.</li>
            <li>You will maintain the security of your password and are solely responsible for all activity that occurs under your account.</li>
            <li>Your username must not impersonate another person, contain offensive language, or infringe on any third party&apos;s rights.</li>
            <li>You will not create more than one account per person.</li>
            <li>You will promptly notify us if you become aware of any unauthorized use of your account.</li>
          </ul>
          <p className="mb-4 leading-relaxed">
            We reserve the right to reject or require changes to usernames that we deem inappropriate, misleading, or in violation of these Terms.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">4. User Conduct</h2>
          <p className="mb-4 leading-relaxed">
            You agree to use the Service in a manner that is lawful, respectful, and consistent with these Terms. The following conduct is prohibited:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Harassment and Abuse:</strong> Threatening, bullying, intimidating, or harassing other users through chat messages, habit sharing, or any other feature of the Service.</li>
            <li><strong>Hate Speech:</strong> Posting content that promotes discrimination, hostility, or violence against individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, or any other protected characteristic.</li>
            <li><strong>Spam and Manipulation:</strong> Sending unsolicited messages, creating fake accounts, artificially inflating streaks, or engaging in any form of deceptive activity.</li>
            <li><strong>Inappropriate Content:</strong> Sending chat messages that contain nudity, sexually explicit material, graphic violence, illegal activity, or content that is otherwise objectionable.</li>
            <li><strong>Illegal Activity:</strong> Using the Service to facilitate or promote any activity that violates applicable local, state, national, or international laws.</li>
            <li><strong>Interference:</strong> Attempting to disrupt, overload, or interfere with the Service&apos;s infrastructure, security, or functionality.</li>
            <li><strong>Data Collection:</strong> Scraping, harvesting, or collecting information about other users without their consent.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">5. User-Generated Content</h2>
          <p className="mb-4 leading-relaxed">
            &ldquo;User Content&rdquo; refers to all content that you create, upload, or share through the Service, including but not limited to habit names and descriptions, chat messages, profile information, and any other material you submit.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>Ownership:</strong> You retain full ownership of your User Content. Nothing in these Terms transfers ownership of your content to us.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>License Grant:</strong> By submitting User Content to the Service, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, distribute, display, and process your User Content solely for the purpose of operating, providing, improving, and promoting the Service. This license exists only for as long as your User Content remains on the Service and terminates when you delete your content or your account, except where your content has been shared with other users and they have not deleted it.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>Content Responsibility:</strong> You are solely responsible for your User Content. You represent and warrant that you have all rights necessary to submit your User Content and that it does not violate any third party&apos;s intellectual property rights, privacy rights, or any applicable law.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>Content Removal:</strong> We reserve the right, but are not obligated, to review, monitor, or remove User Content at our discretion, including content that we believe violates these Terms or is otherwise objectionable.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">6. Intellectual Property</h2>
          <p className="mb-4 leading-relaxed">
            The Service, including its design, features, branding, logos, graphics, user interface, and underlying code, is owned by Ernesto Salazar and is protected by intellectual property laws. The Gimu name, logo, and all related marks are our property.
          </p>
          <p className="mb-4 leading-relaxed">
            You may not copy, modify, distribute, sell, or lease any part of the Service or its content, nor may you reverse engineer or attempt to extract the source code of the App, unless applicable law permits it or you have our written consent.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">7. Privacy</h2>
          <p className="mb-4 leading-relaxed">
            Your privacy is important to us. Our collection and use of personal information in connection with the Service is described in our{" "}
            <Link href={`/${locale}/privacy`} className="text-gimu-primary hover:underline">Privacy Policy</Link>.
            By using the Service, you acknowledge that you have read and understood our Privacy Policy and agree to the collection, use, and sharing of your information as described therein.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">8. Termination</h2>
          <p className="mb-4 leading-relaxed">
            <strong>By You:</strong> You may stop using the Service at any time. You may delete your account through the App&apos;s settings or by contacting us at the email address listed below.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>By Us:</strong> We may suspend or terminate your account and access to the Service at any time, with or without cause, and with or without notice. Reasons for termination may include, but are not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Violation of these Terms.</li>
            <li>Conduct that we determine is harmful to other users, third parties, or the Service.</li>
            <li>Extended periods of inactivity.</li>
            <li>Requests by law enforcement or government agencies.</li>
          </ul>
          <p className="mb-4 leading-relaxed">
            <strong>Effect of Termination:</strong> Upon termination, your right to use the Service ceases immediately. We may, but are not obligated to, delete your User Content and account data following termination.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">9. Disclaimer of Warranties</h2>
          <p className="mb-4 leading-relaxed uppercase text-sm">
            The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without warranties of any kind, either express or implied. To the fullest extent permitted by applicable law, we disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
          </p>
          <p className="mb-4 leading-relaxed uppercase text-sm">
            We do not warrant that the Service will be uninterrupted, secure, or error-free, that defects will be corrected, or that the Service or the servers that make it available are free of viruses or other harmful components.
          </p>
          <p className="mb-4 leading-relaxed uppercase text-sm">
            We make no guarantees regarding the results that may be obtained from the use of the Service, including any habit formation or behavioral outcomes. Your use of the Service is at your own risk.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">10. Limitation of Liability</h2>
          <p className="mb-4 leading-relaxed uppercase text-sm">
            To the fullest extent permitted by applicable law, in no event shall Ernesto Salazar, or any of his affiliates, agents, or service providers, be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with your access to or use of, or inability to access or use, the Service.
          </p>
          <p className="mb-4 leading-relaxed uppercase text-sm">
            In no event shall our total liability to you for all claims arising out of or relating to the Service exceed the amount you paid us, if any, in the twelve (12) months preceding the date of the claim.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">11. Indemnification</h2>
          <p className="mb-4 leading-relaxed">
            You agree to indemnify, defend, and hold harmless Ernesto Salazar and any affiliates, agents, and service providers from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or in connection with your use of the Service, your User Content, your violation of these Terms, or your violation of any rights of any third party.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">12. Governing Law</h2>
          <p className="mb-4 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or the Service shall be resolved in the state or federal courts located in the State of Texas, and you consent to the personal jurisdiction of such courts.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">13. Changes to Terms</h2>
          <p className="mb-4 leading-relaxed">
            We may update these Terms from time to time. When we make changes, we will revise the &ldquo;Last Updated&rdquo; date at the top of this document and, where appropriate, notify you through the App or via email. Your continued use of the Service after any changes constitutes your acceptance of the revised Terms. If you do not agree to the updated Terms, you must stop using the Service and may delete your account.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">14. General Provisions</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between you and us regarding the Service and supersede all prior agreements.</li>
            <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</li>
            <li><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.</li>
            <li><strong>Assignment:</strong> You may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights and obligations under these Terms without restriction.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">15. Contact Information</h2>
          <p className="mb-4 leading-relaxed">
            If you have any questions, concerns, or feedback about these Terms or the Service, please contact us:
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
              <Link href={`/${locale}/privacy`} className="hover:text-gimu-primary transition-colors">
                {dict.footer.privacy}
              </Link>
              <span className="text-foreground">{dict.footer.terms}</span>
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
