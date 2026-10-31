import { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Play } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import QuizPlayer from '../components/quiz/QuizPlayer';
import QuizResultComponent from '../components/quiz/QuizResult';
import { getQuizBySlug, getAllQuizzes } from '../data/quizRegistry';
import siteConfig from '../config/siteConfig';

export default function QuizPage() {
  const { slug } = useParams<{ slug: string }>();
  const [state, setState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [resultData, setResultData] = useState<ReturnType<typeof getResult> | null>(null);

  const quiz = getQuizBySlug(slug || '');

  if (!quiz) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <span className="text-6xl block mb-4">😕</span>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">Quiz Not Found</h1>
        <p className="text-gray-500 mb-6">The quiz you're looking for doesn't exist or has been removed.</p>
        <Link to="/quizzes" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Browse Quizzes
        </Link>
      </div>
    );
  }

  function getResult(scores: Record<string, number>) {
    let maxScore = -Infinity;
    let winningId = quiz!.results[0].id;

    Object.entries(scores).forEach(([resultId, score]) => {
      if (score > maxScore) {
        maxScore = score;
        winningId = resultId;
      }
    });

    return quiz!.results.find((r) => r.id === winningId) || quiz!.results[0];
  }

  const handleComplete = useCallback(
    (scores: Record<string, number>) => {
      const result = getResult(scores);
      setResultData(result);
      setState('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [quiz]
  );

  const handleRestart = () => {
    setState('intro');
    setResultData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const relatedQuizzes = getAllQuizzes()
    .filter((q) => q.slug !== quiz.slug)
    .sort((a, b) => {
      if (a.categorySlug === quiz.categorySlug && b.categorySlug !== quiz.categorySlug) return -1;
      if (b.categorySlug === quiz.categorySlug && a.categorySlug !== quiz.categorySlug) return 1;
      return 0;
    })
    .slice(0, 4);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: quiz.title,
    description: quiz.metaDescription,
    about: { '@type': 'Thing', name: quiz.category },
    educationalAlignment: { '@type': 'AlignmentObject', alignmentType: 'entertainment' },
    url: `${siteConfig.url}/quiz/${quiz.slug}`,
  };

  return (
    <>
      <SEOHead
        title={quiz.title}
        description={quiz.metaDescription}
        canonical={`/quiz/${quiz.slug}`}
        ogType="article"
        structuredData={structuredData}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/quizzes" className="hover:text-purple-600 transition-colors">Quizzes</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium truncate">{quiz.title}</span>
        </nav>

        {/* Intro Screen */}
        {state === 'intro' && (
          <div className="animate-fade-in">
            <div className="glass-card overflow-hidden">
              <div className={`bg-gradient-to-br ${quiz.coverGradient} p-8 md:p-12 text-center text-white`}>
                <span className="text-6xl mb-4 block">{quiz.emoji}</span>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{quiz.title}</h1>
                <p className="text-white/80 text-lg mb-2">{quiz.subtitle}</p>
                <div className="flex items-center justify-center gap-4 mt-4 text-white/70 text-sm">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {quiz.estimatedTime}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {quiz.totalQuestions} questions</span>
                </div>
              </div>
              <div className="p-6 md:p-8 text-center">
                <p className="text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto">{quiz.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {quiz.results.map((r) => (
                    <span key={r.id} className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                      {r.emoji} {r.title}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setState('playing')}
                  className="btn-primary text-lg py-4 px-10 flex items-center gap-2 mx-auto"
                >
                  <Play className="w-5 h-5" /> Start Quiz
                </button>
                <p className="text-xs text-gray-400 mt-4">
                  For entertainment purposes only. Not a clinical assessment.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Player */}
        {state === 'playing' && (
          <QuizPlayer key={quiz.slug} quiz={quiz} onComplete={handleComplete} />
        )}

        {/* Result */}
        {state === 'result' && resultData && (
          <QuizResultComponent
            quiz={quiz}
            result={resultData}
            relatedQuizzes={relatedQuizzes}
          />
        )}
      </div>
    </>
  );
}
