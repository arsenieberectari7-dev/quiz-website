import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Sparkles } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import QuizCard from '../components/quiz/QuizCard';
import AdPlacement from '../components/ads/AdPlacement';
import { getAllQuizzes } from '../data/quizRegistry';
import { quizCategories } from '../data/categories';

export default function AllQuizzesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const activeCategory = searchParams.get('category') || 'all';
  const allQuizzes = getAllQuizzes();

  const filteredQuizzes = useMemo(() => {
    let result = allQuizzes;

    if (activeCategory !== 'all') {
      result = result.filter((q) => q.categorySlug === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (q) =>
          q.title.toLowerCase().includes(query) ||
          q.subtitle.toLowerCase().includes(query) ||
          q.category.toLowerCase().includes(query) ||
          q.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [allQuizzes, activeCategory, searchQuery]);

  const setCategory = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    if (slug === 'all') {
      params.delete('category');
    } else {
      params.set('category', slug);
    }
    setSearchParams(params);
  };

  return (
    <>
      <SEOHead
        title="All Personality Quizzes"
        description="Browse all our fun personality quizzes. Discover your personality type, love language, aesthetic, and more with our free entertaining quizzes!"
        canonical="/quizzes"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-1.5 text-purple-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            {allQuizzes.length} Quizzes Available
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-3">
            All <span className="gradient-text">Personality Quizzes</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Find the perfect quiz for you. Each one reveals something unique about who you are!
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search quizzes..."
            className="w-full pl-12 pr-4 py-3.5 rounded-full border border-purple-200 bg-white shadow-sm
              focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-300 text-sm"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <button
            onClick={() => setCategory('all')}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
            }`}
          >
            All
          </button>
          {quizCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setCategory(cat.slug)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.slug
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        {/* Banner ad */}
        <AdPlacement location="banner-top" className="mb-8" />

        {/* Quiz Grid */}
        {filteredQuizzes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuizzes.map((quiz, index) => (
              <div key={quiz.slug}>
                <QuizCard quiz={quiz} />
                {/* Show an ad after every 6th card */}
                {(index + 1) % 6 === 0 && index < filteredQuizzes.length - 1 && (
                  <div className="col-span-full mt-6 mb-2">
                    <AdPlacement location="between-cards" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">🔍</span>
            <h3 className="text-xl font-bold text-gray-700 mb-2">No quizzes found</h3>
            <p className="text-gray-500">Try a different search term or browse all categories.</p>
          </div>
        )}
      </div>
    </>
  );
}
