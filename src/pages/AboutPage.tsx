import { Heart, Sparkles, Target, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import siteConfig from '../config/siteConfig';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us"
        description={`Learn more about ${siteConfig.name}, our mission to bring joyful self-discovery quizzes, and why millions love personality tests.`}
        canonical="/about"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-1 text-purple-700 text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            Our Story &amp; Mission
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Making Self-Discovery <span className="gradient-text">Delightful &amp; Fun</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Welcome to {siteConfig.name} — your favorite corner of the web for viral personality quizzes, aesthetic vibe checks, and addictive &ldquo;This or That&rdquo; showdowns.
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-card p-8 md:p-12 mb-10 space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
          <h2 className="text-2xl font-bold text-gray-800">Why We Built {siteConfig.name}</h2>
          <p>
            Remember the thrill of flipping through vintage magazines to discover which pop star you resembled, or staying up late on BuzzFeed taking quizzes with friends? 
            We created <strong>{siteConfig.name}</strong> to revive that pure, joyful magic with modern aesthetics, lightning-fast performance, and original, thoughtful writing.
          </p>
          <p>
            In a fast-paced digital world, taking a 3-minute quiz is a moment to pause, reflect, giggle at a relatable scenario, and share something fun with people you love. 
            Whether you&apos;re finding out your love language, discovering your inner era, or debating whether you&apos;d rather live in Paris or Tokyo, we&apos;re here to brighten your day.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Original &amp; Relatable</h3>
            <p className="text-xs text-gray-500">Every single question, option, and result is crafted with care and wit — never cookie-cutter or robotic.</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Fast &amp; Mobile-First</h3>
            <p className="text-xs text-gray-500">Designed from the ground up for seamless swiping and tapping on phones, tablets, and laptops.</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">100% Free Forever</h3>
            <p className="text-xs text-gray-500">Supported cleanly by ethical digital ads so every visitor can take unlimited quizzes free of charge.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/quizzes" className="btn-primary inline-flex items-center gap-2">
            <Target className="w-5 h-5" /> Start Exploring Quizzes
          </Link>
        </div>
      </div>
    </>
  );
}
