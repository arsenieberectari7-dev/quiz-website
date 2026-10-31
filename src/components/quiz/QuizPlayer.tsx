import { useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Quiz, QuizQuestion as QuizQuestionType } from '../../types/quiz';
import ProgressBar from '../ui/ProgressBar';
import AdPlacement from '../ads/AdPlacement';

interface QuizPlayerProps {
  quiz: Quiz;
  onComplete: (scores: Record<string, number>) => void;
}

export default function QuizPlayer({ quiz, onComplete }: QuizPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];
  const progress = ((currentIndex + 1) / quiz.questions.length) * 100;

  const selectAnswer = useCallback(
    (questionId: string, optionId: string, optionScores: Record<string, number>) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      // Update answers
      setAnswers((prev) => ({ ...prev, [questionId]: optionId }));

      // Calculate new scores
      const newScores = { ...scores };
      // If previously answered, subtract old scores
      const prevOptionId = answers[questionId];
      if (prevOptionId) {
        const prevOption = currentQuestion.options.find((o) => o.id === prevOptionId);
        if (prevOption) {
          Object.entries(prevOption.scores).forEach(([key, val]) => {
            newScores[key] = (newScores[key] || 0) - val;
          });
        }
      }
      // Add new scores
      Object.entries(optionScores).forEach(([key, val]) => {
        newScores[key] = (newScores[key] || 0) + val;
      });
      setScores(newScores);

      // Auto advance
      setTimeout(() => {
        if (currentIndex < quiz.questions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          onComplete(newScores);
        }
        setIsTransitioning(false);
      }, 400);
    },
    [currentIndex, quiz.questions.length, scores, answers, currentQuestion, isTransitioning, onComplete]
  );

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500">
            Question {currentIndex + 1} of {quiz.questions.length}
          </span>
          <span className="text-sm font-bold text-purple-600">{Math.round(progress)}%</span>
        </div>
        <ProgressBar progress={progress} />
      </div>

      {/* Question */}
      <div key={currentQuestion.id} className="animate-fade-in">
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={answers[currentQuestion.id]}
          onSelect={(optionId, optionScores) =>
            selectAnswer(currentQuestion.id, optionId, optionScores)
          }
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={goBack}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex gap-1">
          {quiz.questions.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex
                  ? 'bg-purple-500 w-4'
                  : i < currentIndex || answers[quiz.questions[i].id]
                  ? 'bg-purple-300'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <div className="w-16" />
      </div>

      {/* Mid-quiz ad (shown after question 5) */}
      {currentIndex === 5 && (
        <div className="mt-8">
          <AdPlacement location="in-content" />
        </div>
      )}
    </div>
  );
}

function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
}: {
  question: QuizQuestionType;
  selectedAnswer?: string;
  onSelect: (optionId: string, scores: Record<string, number>) => void;
}) {
  return (
    <div className="glass-card p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center text-balance">
        {question.emoji && <span className="mr-2">{question.emoji}</span>}
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id, option.scores)}
            className={`option-card w-full text-left flex items-center gap-3 ${
              selectedAnswer === option.id ? 'selected' : ''
            }`}
          >
            {option.emoji && <span className="text-xl flex-shrink-0">{option.emoji}</span>}
            <span className="font-medium text-gray-700">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
