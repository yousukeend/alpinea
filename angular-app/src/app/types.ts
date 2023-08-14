export interface AnsOption {
  label: string;
  isCorrect: boolean;
}

export interface Quiz {
  quizText: string;
  quizImg: string;
  ansOptions: AnsOption[];
  ansWord: string;
  ansExp: string;
  ansImg: string;
}
