import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Quiz } from '../../types/quiz';

interface QuizCardProps {
  quiz: Quiz;
  variant?: 'default' | 'featured' | 'compact';
}

export default function QuizCard({ quiz, variant = 'default' }: QuizCardProps) {
  if (variant === 'featured') {
    return (
      <Link to={`/quiz/${quiz.slug}`} className="group block">
        <div className="quiz-card relative overflow-hidden">
          <div className={`bg-gradient-to-br ${quiz.coverGradient} p-8 md:p-12 min-h-[280px] flex flex-col justify-end relative`}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all" />
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
              ⭐ Featured
            </div>
            <div className="relative z-10">
              <span className="text-5xl mb-3 block">{quiz.emoji}</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{quiz.title}</h3>
              <p className="text-white/80 text-sm mb-3">{quiz.subtitle}</p>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-white/70 text-xs">
                  <Clock className="w-3 h-3" /> {quiz.estimatedTime}
                </span>
                <span className="text-white/70 text-xs">•</span>
                <span className="text-white/70 text-xs">{quiz.totalQuestions} questions</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/quiz/${quiz.slug}`} className="group block">
        <div className="quiz-card flex items-center gap-4 p-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${quiz.coverGradient} flex items-center justify-center flex-shrink-0`}>
            <span className="text-2xl">{quiz.emoji}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors truncate">
              {quiz.title}
            </h3>
            <p className="text-xs text-gray-500 flex items-center gap-2">
              <Clock className="w-3 h-3" /> {quiz.estimatedTime} • {quiz.totalQuestions} Q
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors flex-shrink-0" />
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/quiz/${quiz.slug}`} className="group block">
      <div className="quiz-card">
        <div className={`bg-gradient-to-br ${quiz.coverGradient} p-6 min-h-[160px] flex flex-col justify-end relative`}>
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all" />
          <span className="text-4xl mb-2 relative z-10">{quiz.emoji}</span>
          <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-0.5 text-white text-[10px] font-medium">
            {quiz.category}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors mb-1 line-clamp-2">
            {quiz.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">{quiz.subtitle}</p>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-gray-400 text-xs">
              <Clock className="w-3 h-3" /> {quiz.estimatedTime}
            </span>
            <span className="text-purple-500 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Take Quiz <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
