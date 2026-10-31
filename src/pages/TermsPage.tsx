import SEOHead from '../components/seo/SEOHead';
import siteConfig from '../config/siteConfig';

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms of Service"
        description={`Read the Terms of Service governing the use of ${siteConfig.name} personality tests and interactive content.`}
        canonical="/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="glass-card p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-400 mb-8">Last Updated: October 31, 2026</p>

          <div className="prose prose-purple max-w-none text-gray-600 space-y-6 text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-gray-800">1. Acceptance of Terms</h2>
            <p>
              By accessing and using {siteConfig.name}, you agree to be bound by these Terms and Conditions and our Privacy Policy.
              If you do not agree with any of these terms, please discontinue use of the site.
            </p>

            <h2 className="text-xl font-bold text-gray-800">2. Entertainment Use Only</h2>
            <p>
              All materials, assessments, personality categorizations, and quiz summaries presented on this platform are created strictly
              for recreational, humorous, and entertaining self-reflection. Under no circumstances should any score or text description
              be interpreted as medical, psychological, psychiatric, relationship therapy, or occupational diagnosis.
            </p>

            <h2 className="text-xl font-bold text-gray-800">3. Intellectual Property Rights</h2>
            <p>
              The original quiz formulations, text scripts, graphic arrangements, layout designs, and logos displayed on {siteConfig.name}
              belong exclusively to us or are used under open license. You are encouraged to share your quiz results with attribution,
              but automated scraping, unauthorized reproduction, or commercial re-hosting of whole quiz question sets is prohibited.
            </p>

            <h2 className="text-xl font-bold text-gray-800">4. User Conduct</h2>
            <p>
              You agree not to disrupt website operations, attempt to inject malicious code, bypass rate limits, or tamper with ad placement
              scripts.
            </p>

            <h2 className="text-xl font-bold text-gray-800">5. Limitation of Liability</h2>
            <p>
              In no event shall {siteConfig.name} or its creators be held liable for any decisions, emotional reactions, or actions taken
              based on test results or &ldquo;This or That&rdquo; choices made on the website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
