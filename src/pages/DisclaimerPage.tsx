import { AlertTriangle, Sparkles } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import siteConfig from '../config/siteConfig';

export default function DisclaimerPage() {
  return (
    <>
      <SEOHead
        title="Disclaimer - Entertainment Purpose Only"
        description={`Important entertainment disclaimer regarding personality tests, archetypes, and quizzes hosted on ${siteConfig.name}.`}
        canonical="/disclaimer"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="glass-card p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Disclaimer</h1>
              <p className="text-sm text-gray-400">Entertainment &amp; Recreational Advisory</p>
            </div>
          </div>

          <div className="prose prose-purple max-w-none text-gray-600 space-y-6 text-sm leading-relaxed mt-6">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl text-amber-900">
              <p className="font-semibold text-base mb-1">Notice to All Visitors</p>
              <p>
                The quizzes, personality archetypes, &ldquo;This or That&rdquo; dilemmas, and score feedback provided on 
                <strong> {siteConfig.name}</strong> are created solely for recreational, creative, and entertainment purposes.
              </p>
            </div>

            <h2 className="text-xl font-bold text-gray-800">1. Not Medical or Psychological Advice</h2>
            <p>
              Content found on {siteConfig.name} is not intended to be a substitute for professional medical advice, clinical psychological assessment, psychiatric evaluation, diagnosis, or therapeutic treatment. Always seek the advice of a certified healthcare professional with any questions you may have regarding psychological conditions or personal wellbeing.
            </p>

            <h2 className="text-xl font-bold text-gray-800">2. Accuracy &amp; Reliability</h2>
            <p>
              While we invest enthusiasm and creativity into writing fun, relatable questions and whimsical personality outcomes, we make no claims or warranties regarding the scientific validity or psychological accuracy of any result. Personality archetypes (such as &ldquo;The Visionary&rdquo;, &ldquo;Dark Academia&rdquo;, or &ldquo;Solar Energy&rdquo;) are playful creative labels meant to spark conversation and enjoyment.
            </p>

            <h2 className="text-xl font-bold text-gray-800">3. Third-Party Advertisements</h2>
            <p>
              This website displays advertisements delivered by third-party advertising partners. The inclusion of commercial banners or promotional links does not imply endorsement, guarantee, or warranty by {siteConfig.name} of any third-party products, services, or claims.
            </p>

            <div className="flex items-center gap-2 pt-4 text-purple-700 font-semibold">
              <Sparkles className="w-5 h-5" />
              <span>Enjoy the tests, share them with friends, and have fun exploring!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
