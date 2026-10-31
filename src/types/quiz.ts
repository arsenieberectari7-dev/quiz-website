export interface QuizOption {
  id: string;
  text: string;
  emoji?: string;
  scores: Record<string, number>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  emoji?: string;
  options: QuizOption[];
}

export interface QuizResult {
  id: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  shareText: string;
  color: string;
}

export interface Quiz {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  metaDescription: string;
  emoji: string;
  category: string;
  categorySlug: string;
  coverGradient: string;
  estimatedTime: string;
  totalQuestions: number;
  questions: QuizQuestion[];
  results: QuizResult[];
}

export interface QuizCategory {
  name: string;
  slug: string;
  emoji: string;
  description: string;
  color: string;
}
