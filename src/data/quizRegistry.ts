import { Quiz } from '../types/quiz';

import { quizData as truePersonalityType } from './quizzes/true-personality-type';
import { quizData as mainCharacter } from './quizzes/main-character';
import { quizData as hiddenPersonality } from './quizzes/hidden-personality';
import { quizData as loveLanguage } from './quizzes/love-language';
import { quizData as aestheticPersonality } from './quizzes/aesthetic-personality';
import { quizData as dreamLife } from './quizzes/dream-life';
import { quizData as lifestyleMatch } from './quizzes/lifestyle-match';
import { quizData as howPeopleSeeYou } from './quizzes/how-people-see-you';
import { quizData as innerEnergyType } from './quizzes/inner-energy-type';
import { quizData as eraMatch } from './quizzes/era-match';

export const quizzes: Quiz[] = [
  truePersonalityType,
  mainCharacter,
  hiddenPersonality,
  loveLanguage,
  aestheticPersonality,
  dreamLife,
  lifestyleMatch,
  howPeopleSeeYou,
  innerEnergyType,
  eraMatch,
];

export function getAllQuizzes(): Quiz[] {
  return quizzes;
}

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug);
}

export function getQuizzesByCategory(categorySlug: string): Quiz[] {
  return quizzes.filter((q) => q.categorySlug === categorySlug);
}

export function getFeaturedQuiz(): Quiz {
  return quizzes[0];
}

export function getTrendingQuizzes(limit = 4): Quiz[] {
  return quizzes.slice(1, 1 + limit);
}
