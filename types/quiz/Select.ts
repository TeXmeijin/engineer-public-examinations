export type SelectItem = {
  id: number
  text: string;
  isCorrect?: true;
}

export type Select = {
  type: 'select';
  slug: string,
  question: string;
  items: SelectItem[];
}
