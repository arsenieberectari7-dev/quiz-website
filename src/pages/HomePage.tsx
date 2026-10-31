import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, Zap, TrendingUp, Star, Compass } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import QuizCard from '../components/quiz/QuizCard';
import AdPlacement from '../components/ads/AdPlacement';
import { getAllQuizzes } from '../data/quizRegistry';
import { thisOrThatCategories } from '../data/this-or-that';
import { quizCategories } from '../data/categories';
import siteConfig from '../config/siteConfig';

export default function HomePage() {
  const allQuizzes = getAllQuizzes();
  const featuredQuiz = allQuizzes[0];
  const trendingQuizzes = allQuizzes.slice(1, 5);
  const recentQuizzes = allQuizzes.slice(5);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/quizzes?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <SEOHead
        canonical="/"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Fun & Free Personality Quizzes
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 text-balance leading-tight">
              Discover Something New About{' '}
              <span className="underline decoration-yellow-300 decoration-4 underline-offset-4">Yourself!</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 text-balance">
              Take fun personality quizzes, play "This or That" games, and uncover hidden sides of your personality.
              100% free, beautifully designed, and endlessly entertaining!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/quizzes"
                className="bg-white text-purple-600 font-bold py-3.5 px-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" /> Explore Quizzes
              </Link>
              <Link
                to="/this-or-that"
                className="bg-white/20 backdrop-blur-sm text-white font-bold py-3.5 px-8 rounded-full border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2"
              >
                <Heart className="w-5 h-5" /> Play This or That
              </Link>
            </div>
          </div>

          {/* Floating emojis */}
          <div className="absolute top-20 left-10 text-3xl animate-bounce-gentle hidden lg:block">🧠</div>
          <div className="absolute top-32 right-16 text-3xl animate-bounce-gentle hidden lg:block" style={{animationDelay: '0.5s'}}>💕</div>
          <div className="absolute bottom-20 left-20 text-3xl animate-bounce-gentle hidden lg:block" style={{animationDelay: '1s'}}>✨</div>
          <div className="absolute bottom-32 right-24 text-3xl animate-bounce-gentle hidden lg:block" style={{animationDelay: '1.5s'}}>🎯</div>
        </div>
      </section>

      {/* Top Banner Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AdPlacement location="banner-top" />
      </div>

      {/* Featured Quiz */}
      {featuredQuiz && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <h2 className="section-title text-2xl">Featured Quiz</h2>
          </div>
          <QuizCard quiz={featuredQuiz} variant="featured" />
        </section>
      )}

      {/* Trending Quizzes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            <h2 className="section-title text-2xl">Trending Quizzes</h2>
          </div>
          <Link to="/quizzes" className="text-purple-600 text-sm font-medium hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingQuizzes.map((quiz) => (
            <QuizCard key={quiz.slug} quiz={quiz} />
          ))}
        </div>
      </section>

      {/* Between-cards ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AdPlacement location="between-cards" />
      </div>

      {/* This or That Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="text-5xl mb-4">🤔</div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">This or That?</h2>
              <p className="text-white/80 text-lg mb-2">
                100 fun questions across 10 categories. Beach or mountains? Coffee or tea?
                Make your choices and discover your preferences!
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {thisOrThatCategories.slice(0, 5).map((cat) => (
                  <span key={cat.id} className="bg-white/20 rounded-full px-3 py-1 text-sm">
                    {cat.emoji} {cat.name}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to="/this-or-that"
              className="bg-white text-rose-600 font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all text-lg flex-shrink-0"
            >
              Play Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center gap-2 mb-6">
          <Compass className="w-5 h-5 text-purple-500" />
          <h2 className="section-title text-2xl">Browse by Category</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quizCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/quizzes?category=${cat.slug}`}
              className="group quiz-card p-6 text-center"
            >
              <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{cat.emoji}</span>
              </div>
              <h3 className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recently Added */}
      {recentQuizzes.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-amber-500" />
            <h2 className="section-title text-2xl">More Quizzes to Try</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentQuizzes.map((quiz) => (
              <QuizCard key={quiz.slug} quiz={quiz} />
            ))}
          </div>
        </section>
      )}

      {/* Discover CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative z-10">
            <span className="text-5xl mb-4 block">🌟</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Ready to Discover Your True Self?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Every quiz reveals something new about your personality. Start with any quiz that catches your eye — there are no wrong choices, just self-discovery!
            </p>
            <Link
              to="/quizzes"
              className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold py-3.5 px-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              <Sparkles className="w-5 h-5" /> Start Exploring
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {siteConfig.newsletterEnabled && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="glass-card p-8 md:p-12 text-center">
            <span className="text-4xl mb-4 block">📬</span>
            <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Never Miss a New Quiz!</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Get notified when we add new personality quizzes and fun games. No spam, ever.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing! 🎉 (Newsletter integration coming soon)');
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3 rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe ✨
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
