import { QuizCategory } from '../types/quiz';

export const quizCategories: QuizCategory[] = [
  {
    name: 'Personality',
    slug: 'personality',
    emoji: '🧠',
    description: 'Discover who you really are with our personality quizzes',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    name: 'Love & Relationships',
    slug: 'love-relationships',
    emoji: '💕',
    description: 'Learn about your love style and relationship patterns',
    color: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Lifestyle',
    slug: 'lifestyle',
    emoji: '✨',
    description: 'Find out which lifestyle matches your true self',
    color: 'from-teal-400 to-emerald-500',
  },
  {
    name: 'Entertainment',
    slug: 'entertainment',
    emoji: '🎬',
    description: 'Fun quizzes about pop culture, eras, and characters',
    color: 'from-amber-400 to-orange-500',
  },
];
