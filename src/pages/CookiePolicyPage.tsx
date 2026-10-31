import SEOHead from '../components/seo/SEOHead';
import siteConfig from '../config/siteConfig';

export default function CookiePolicyPage() {
  return (
    <>
      <SEOHead
        title="Cookie Policy"
        description={`Learn how cookies and local storage are utilized on ${siteConfig.name} for advertising and performance.`}
        canonical="/cookie-policy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="glass-card p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Cookie Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Last Updated: October 31, 2026</p>

          <div className="prose prose-purple max-w-none text-gray-600 space-y-6 text-sm leading-relaxed">
            <p>
              This Cookie Policy explains how <strong>{siteConfig.name}</strong> uses cookies and similar storage technologies 
              when you visit our online personality quiz portal.
            </p>

            <h2 className="text-xl font-bold text-gray-800">1. What Are Cookies?</h2>
            <p>
              Cookies are small alphanumeric files placed on your computer or mobile device by websites you visit. 
              They are widely used to make websites work properly, provide analytics, and deliver targeted advertising.
            </p>

            <h2 className="text-xl font-bold text-gray-800">2. Categories of Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Strictly Essential Cookies &amp; LocalStorage:</strong> Required to preserve your quiz progression as you navigate between questions and to save your cookie preference banner decisions.
              </li>
              <li>
                <strong>Performance &amp; Analytics Cookies:</strong> Anonymous tracking beacons that count visitor visits, page-load speeds, and device resolutions to help us optimize UI performance.
              </li>
              <li>
                <strong>Advertising &amp; Targeting Cookies:</strong> Placed by approved third-party ad partners (e.g. Adsterra, Monetag). These cookies permit networks to prevent showing the same banner repeatedly and to deliver ads matching generalized geographic interests.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800">3. How Can You Manage Cookies?</h2>
            <p>
              You can adjust your cookie settings at any time using our on-site cookie banner or through your browser preferences.
              Most web browsers allow you to block third-party cookies or delete existing cookies via browser privacy settings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
