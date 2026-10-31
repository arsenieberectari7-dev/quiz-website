import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import AdPlacement from '../components/ads/AdPlacement';
import { quizCategories } from '../data/categories';
import { getQuizzesByCategory } from '../data/quizRegistry';

export default function CategoriesPage() {
  return (
    <>
      <SEOHead
        title="Quiz Categories"
        description="Browse personality quizzes by category: Personality Archetypes, Love & Relationships, Aesthetic Lifestyles, and Pop Culture Entertainment."
        canonical="/categories"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-1 text-purple-700 text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            Curated Collections
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Explore by <span className="gradient-text">Category</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Choose a theme that speaks to you right now — self-discovery, relationships, dream aesthetics, or pop culture.
          </p>
        </div>

        <AdPlacement location="banner-top" className="mb-10" />

        <div className="space-y-12">
          {quizCategories.map((category) => {
            const quizzes = getQuizzesByCategory(category.slug);
            return (
              <section key={category.slug} className="glass-card p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-purple-100 gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl shadow-md`}>
                      {category.emoji}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{category.name}</h2>
                      <p className="text-sm text-gray-500">{category.description}</p>
                    </div>
                  </div>
                  <Link
                    to={`/quizzes?category=${category.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-700 hover:gap-2 transition-all"
                  >
                    View All {quizzes.length} Quizzes <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {quizzes.map((quiz) => (
                    <Link
                      key={quiz.slug}
                      to={`/quiz/${quiz.slug}`}
                      className="group p-4 rounded-xl border border-purple-100 hover:border-purple-300 bg-white hover:bg-purple-50/40 transition-all flex items-center gap-4"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${quiz.coverGradient} flex items-center justify-center text-xl flex-shrink-0`}>
                        {quiz.emoji}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-sm text-gray-800 group-hover:text-purple-600 transition-colors truncate">
                          {quiz.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">{quiz.estimatedTime} • {quiz.totalQuestions} questions</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-purple-500 transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-12">
          <AdPlacement location="banner-bottom" />
        </div>
      </div>
    </>
  );
}
