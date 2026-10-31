import { useState, useMemo } from 'react';
import { Share2, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import ProgressBar from '../components/ui/ProgressBar';
import AdPlacement from '../components/ads/AdPlacement';
import { thisOrThatQuestions, thisOrThatCategories } from '../data/this-or-that';
import { ThisOrThatAnswer } from '../types/thisOrThat';
import { getAllQuizzes } from '../data/quizRegistry';

export default function ThisOrThatPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<ThisOrThatAnswer[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const questions = useMemo(() => {
    if (!selectedCategory || selectedCategory === '__all__') return thisOrThatQuestions;
    return thisOrThatQuestions.filter((q) => q.category === selectedCategory);
  }, [selectedCategory]);

  const currentQuestion = questions[currentIndex] || questions[0];
  const progress = questions.length > 0 ? ((currentIndex + (isComplete ? 1 : 0)) / questions.length) * 100 : 0;

  const selectOption = (choice: 'A' | 'B') => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const newAnswers = [...answers, { questionId: currentQuestion.id, selected: choice }];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setIsComplete(true);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const restart = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setIsComplete(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectCategory = (catId: string | null) => {
    setSelectedCategory(catId);
    setCurrentIndex(0);
    setAnswers([]);
    setIsComplete(false);
  };

  const shareResults = async () => {
    const aCount = answers.filter((a) => a.selected === 'A').length;
    const bCount = answers.filter((a) => a.selected === 'B').length;
    const text = `I just played This or That! I picked Option A ${aCount} times and Option B ${bCount} times. Try it yourself!`;
    const url = `${window.location.origin}/this-or-that`;

    if (navigator.share) {
      try {
        await navigator.share({ title: 'This or That - My Results', text, url });
      } catch {
        navigator.clipboard.writeText(`${text}\n${url}`);
        alert('Results copied to clipboard! 📋');
      }
    } else {
      navigator.clipboard.writeText(`${text}\n${url}`);
      alert('Results copied to clipboard! 📋');
    }
  };

  // If no category selected, show category picker
  if (!selectedCategory && !isComplete) {
    return (
      <>
        <SEOHead
          title="This or That - Fun Decision Game"
          description="Play our This or That game with 100 fun questions across 10 categories. Make your choices and discover your preferences! Free and fun."
          canonical="/this-or-that"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-6xl block mb-4">🤔</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-3">
              <span className="gradient-text">This or That?</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              100 fun questions across 10 categories. Pick your favorite and see where you land!
            </p>
          </div>

          {/* Play All */}
          <div className="text-center mb-8">
            <button
              onClick={() => selectCategory('__all__')}
              className="btn-primary text-lg py-4 px-10 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" /> Play All 100 Questions
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm mb-6">— or pick a category —</div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {thisOrThatCategories.map((cat) => {
              const count = thisOrThatQuestions.filter((q) => q.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(cat.id)}
                  className="quiz-card p-5 text-center group"
                >
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <span className="text-xl">{cat.emoji}</span>
                  </div>
                  <h3 className="font-bold text-sm text-gray-800 group-hover:text-purple-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{count} questions</p>
                </button>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  // Results Screen
  if (isComplete) {
    const aCount = answers.filter((a) => a.selected === 'A').length;
    const bCount = answers.filter((a) => a.selected === 'B').length;
    const suggestedQuizzes = getAllQuizzes().slice(0, 3);

    return (
      <>
        <SEOHead
          title="Your This or That Results"
          description="Check out your This or That game results!"
          canonical="/this-or-that"
          noindex
        />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 md:py-12 animate-scale-in">
          <div className="glass-card overflow-hidden">
            <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 p-8 md:p-12 text-center text-white">
              <span className="text-6xl block mb-4">🎉</span>
              <h2 className="text-3xl font-extrabold mb-2">You Did It!</h2>
              <p className="text-white/80">You answered all {answers.length} questions</p>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-extrabold text-purple-600">{aCount}</div>
                  <div className="text-sm text-gray-500">Option A picks</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-xl">
                  <div className="text-3xl font-extrabold text-pink-600">{bCount}</div>
                  <div className="text-sm text-gray-500">Option B picks</div>
                </div>
              </div>

              {/* Show some picks */}
              <h3 className="font-bold text-gray-800 mb-3">Your Choices:</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto mb-6">
                {answers.slice(0, 20).map((answer) => {
                  const q = questions.find((eq) => eq.id === answer.questionId) ||
                    thisOrThatQuestions.find((tq) => tq.id === answer.questionId);
                  if (!q) return null;
                  const chosen = answer.selected === 'A' ? q.optionA : q.optionB;
                  return (
                    <div key={answer.questionId} className="flex items-center gap-2 text-sm">
                      <span>{chosen.emoji}</span>
                      <span className="text-gray-700">{chosen.text}</span>
                    </div>
                  );
                })}
                {answers.length > 20 && (
                  <p className="text-xs text-gray-400">...and {answers.length - 20} more!</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={shareResults} className="btn-primary flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" /> Share Results
                </button>
                <button onClick={restart} className="btn-secondary flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4" /> Play Again
                </button>
              </div>
            </div>
          </div>

          {/* Ad */}
          <div className="mt-8">
            <AdPlacement location="below-results" />
          </div>

          {/* Try a quiz */}
          {suggestedQuizzes.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-extrabold text-gray-800 text-center mb-4">
                ✨ Try a Personality Quiz Next!
              </h3>
              <div className="space-y-3">
                {suggestedQuizzes.map((q) => (
                  <Link key={q.slug} to={`/quiz/${q.slug}`} className="group block">
                    <div className="quiz-card flex items-center gap-4 p-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${q.coverGradient} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-xl">{q.emoji}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-gray-800 group-hover:text-purple-600 truncate">{q.title}</h4>
                        <p className="text-xs text-gray-500">{q.estimatedTime} • {q.totalQuestions} questions</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-500 flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  // Game Screen
  const q = currentQuestion;

  return (
    <>
      <SEOHead
        title="This or That - Fun Decision Game"
        description="Play our This or That game with 100 fun questions. Make your choices and discover your preferences!"
        canonical="/this-or-that"
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">
              {currentIndex + 1} of {questions.length}
            </span>
            <button
              onClick={restart}
              className="text-sm text-gray-400 hover:text-purple-600 transition-colors"
            >
              Restart
            </button>
          </div>
          <ProgressBar progress={(currentIndex / questions.length) * 100} />
        </div>

        {/* Question */}
        <div key={q.id} className="animate-fade-in">
          <h2 className="text-center text-xl font-bold text-gray-700 mb-8">Would you rather...</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Option A */}
            <button
              onClick={() => selectOption('A')}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 p-8 text-white text-center
                hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl min-h-[160px] flex flex-col items-center justify-center"
            >
              <span className="text-5xl mb-3 block group-hover:scale-110 transition-transform">{q.optionA.emoji}</span>
              <span className="text-lg font-bold">{q.optionA.text}</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all" />
            </button>

            {/* VS divider */}
            <div className="flex items-center justify-center sm:hidden">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400">
                VS
              </div>
            </div>

            {/* Option B */}
            <button
              onClick={() => selectOption('B')}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 p-8 text-white text-center
                hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl min-h-[160px] flex flex-col items-center justify-center"
            >
              <span className="text-5xl mb-3 block group-hover:scale-110 transition-transform">{q.optionB.emoji}</span>
              <span className="text-lg font-bold">{q.optionB.text}</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all" />
            </button>
          </div>
        </div>

        {/* Mid-game ad */}
        {currentIndex > 0 && currentIndex % 15 === 0 && (
          <div className="mt-8">
            <AdPlacement location="in-content" />
          </div>
        )}
      </div>
    </>
  );
}
