import SEOHead from '../components/seo/SEOHead';
import siteConfig from '../config/siteConfig';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description={`Learn how ${siteConfig.name} collects, protects, and respects your personal information and browser data.`}
        canonical="/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="glass-card p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Effective Date: October 31, 2026 • Last Updated: October 31, 2026</p>

          <div className="prose prose-purple max-w-none text-gray-600 space-y-6 text-sm leading-relaxed">
            <p>
              Welcome to <strong>{siteConfig.name}</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), accessible at{' '}
              <a href={siteConfig.url} className="text-purple-600 underline">{siteConfig.url}</a>. 
              We are committed to safeguarding your privacy and ensuring your personal information is treated with dignity and care. 
              This Privacy Policy details how we handle information when you take quizzes, play interactive games, or browse our site.
            </p>

            <h2 className="text-xl font-bold text-gray-800 pt-4">1. Entertainment Nature of Quizzes</h2>
            <p>
              All personality tests, quizzes, and &ldquo;This or That&rdquo; questions provided on {siteConfig.name} are designed strictly for 
              fun, lifestyle entertainment, and playful self-discovery. <strong>We do not store your quiz answer choices or personality results in personal identification databases.</strong> 
              Quiz calculations take place locally inside your browser session.
            </p>

            <h2 className="text-xl font-bold text-gray-800 pt-4">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Device &amp; Browser Information:</strong> When you access our website, standard web server logs record your IP address, browser type, operating system, referring URLs, and timestamps.
              </li>
              <li>
                <strong>Cookies &amp; Local Storage:</strong> We use local browser storage to remember your cookie consent preferences and temporary session selections so the quiz flow operates seamlessly.
              </li>
              <li>
                <strong>Voluntary Contact Data:</strong> If you reach out to us via our contact form or newsletter signup, we collect your name and email address exclusively to reply to your inquiry.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 pt-4">3. Third-Party Advertising &amp; Analytics</h2>
            <p>
              To support free access to all quizzes, we display third-party advertisements via verified advertising networks (such as Adsterra, Monetag, or Google AdSense) and utilize analytical services:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                These ad networks may place or read cookies, web beacons, or digital fingerprints on your browser to deliver interest-based or contextual ads.
              </li>
              <li>
                Third-party partners collect anonymous device identifiers, country-level geographic location, and interaction telemetry according to their independent privacy policies.
              </li>
              <li>
                You may opt out of personalized advertising by visiting standard industry opt-out portals such as the <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">Digital Advertising Alliance</a> or through your browser settings.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 pt-4">4. GDPR &amp; CCPA/CPRA Rights</h2>
            <p>
              Depending on your location (such as the European Economic Area, the UK, or California), you possess specific privacy rights:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The right to know what personal data is held about you.</li>
              <li>The right to request deletion or rectification of your contact information.</li>
              <li>The right to opt-out of third-party cookie trackers via our integrated Cookie Consent banner.</li>
              <li>We never sell personally identifiable information to data brokers.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 pt-4">5. Contact Information</h2>
            <p>
              If you have any questions or privacy concerns regarding this policy, please reach out to us at{' '}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-purple-600 font-semibold">{siteConfig.contactEmail}</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
