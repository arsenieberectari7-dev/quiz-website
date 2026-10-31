export interface ThisOrThatOption {
  text: string;
  emoji: string;
}

export interface ThisOrThatQuestion {
  id: string;
  category: string;
  optionA: ThisOrThatOption;
  optionB: ThisOrThatOption;
}

export interface ThisOrThatCategory {
  id: string;
  name: string;
  emoji: string;
  color: string;
}

export interface ThisOrThatAnswer {
  questionId: string;
  selected: 'A' | 'B';
}
