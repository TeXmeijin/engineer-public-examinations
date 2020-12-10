type Item = {
  text: string;
  isCorrect?: true;
}

export type Select = {
  type: 'select';
  question: string;
  items: Item[];
}
