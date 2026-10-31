import { Link } from 'react-router-dom';
import { Share2, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import { Quiz, QuizResult as QuizResultType } from '../../types/quiz';
import AdPlacement from '../ads/AdPlacement';

interface QuizResultProps {
  quiz: Quiz;
  result: QuizResultType;
  relatedQuizzes: Quiz[];
}

export default function QuizResult({ quiz, result, relatedQuizzes }: QuizResultProps) {
  const shareResult = async () => {
    const text = result.shareText;
    const url = `${window.location.origin}/quiz/${quiz.slug}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: `${quiz.title} - ${result.title}`, text, url });
      } catch {
        copyToClipboard(`${text}\n${url}`);
      }
    } else {
      copyToClipboard(`${text}\n${url}`);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Result copied to clipboard! Share it with your friends! 📋');
  };

  return (
    <div className="max-w-2xl mx-auto animate-scale-in">
      {/* Result Card */}
      <div className="glass-card overflow-hidden">
        <div
          className={`p-8 md:p-12 text-center text-white ${
            result.color.includes('from-') ? `bg-gradient-to-br ${result.color}` : 'bg-gradient-to-br from-purple-600 to-pink-600'
          }`}
          style={
            result.color.startsWith('#')
              ? { background: `linear-gradient(135deg, ${result.color}, #7c3aed)` }
              : undefined
          }
        >
          <div className="text-6xl mb-4">{result.emoji}</div>
          <p className="text-sm uppercase tracking-widest mb-2 opacity-80">Your Result</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{result.title}</h2>
          <p className="text-white/80 text-sm">from {quiz.title}</p>
        </div>

        <div className="p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed text-center mb-6">{result.description}</p>

          {/* Traits */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {result.traits.map((trait) => (
              <span
                key={trait}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {trait}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={shareResult} className="btn-primary flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" /> Share Result
            </button>
            <Link
              to={`/quiz/${quiz.slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Retake Quiz
            </Link>
          </div>
        </div>
      </div>

      {/* Ad below results */}
      <div className="mt-8">
        <AdPlacement location="below-results" />
      </div>

      {/* Related Quizzes */}
      {relatedQuizzes.length > 0 && (
        <div className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-extrabold text-gray-800 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500" /> Try Another Quiz
            </h3>
            <p className="text-gray-500 text-sm mt-1">Keep discovering more about yourself!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedQuizzes.map((rq) => (
              <Link key={rq.slug} to={`/quiz/${rq.slug}`} className="group block" onClick={() => window.scrollTo(0, 0)}>
                <div className="quiz-card flex items-center gap-4 p-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rq.coverGradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-xl">{rq.emoji}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-gray-800 group-hover:text-purple-600 transition-colors truncate">
                      {rq.title}
                    </h4>
                    <p className="text-xs text-gray-500">{rq.category}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-500 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-center text-xs text-gray-400 mt-8 max-w-md mx-auto">
        This quiz is for entertainment and self-discovery purposes only. Results are not professional
        psychological assessments. Have fun! ✨
      </p>
    </div>
  );
}
