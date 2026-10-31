import { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import siteConfig from '../config/siteConfig';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description={`Get in touch with the team at ${siteConfig.name} for feedback, quiz suggestions, partnership opportunities, or support.`}
        canonical="/contact"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-1 text-purple-700 text-sm font-semibold mb-3">
            <MessageCircle className="w-4 h-4" />
            We&apos;d Love to Hear From You
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-gray-500 text-base">
            Have a brilliant quiz idea? Want to collaborate or report a glitch? Drop us a note below!
          </p>
        </div>

        <div className="glass-card p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-10 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                Thank you for reaching out! Our team reads every submission and will get back to you at{' '}
                <span className="font-semibold text-purple-700">{formData.email}</span> as soon as possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="btn-secondary text-sm py-2 px-6"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="New Quiz Suggestion / Partnership Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-primary w-full py-3.5 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </div>

              <div className="pt-4 border-t border-purple-100 flex items-center justify-center gap-2 text-xs text-gray-400">
                <Mail className="w-4 h-4 text-purple-500" />
                <span>Or email directly to: {siteConfig.contactEmail}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
