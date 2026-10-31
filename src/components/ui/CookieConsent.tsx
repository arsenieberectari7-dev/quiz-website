import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-purple-100 p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 mb-1">We use cookies 🍪</h3>
            <p className="text-sm text-gray-500">
              We use cookies to improve your experience, analyze traffic, and serve relevant ads.
              Read our{' '}
              <a href="/cookie-policy" className="text-purple-600 hover:underline">Cookie Policy</a>
              {' '}and{' '}
              <a href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</a>.
            </p>
          </div>
          <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 ml-14">
          <button onClick={acceptAll} className="btn-primary text-sm py-2 px-6">
            Accept All
          </button>
          <button onClick={acceptEssential} className="btn-secondary text-sm py-2 px-6">
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
