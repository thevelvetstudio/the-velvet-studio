export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum EnglishLevel {
  BASIC = 'Básico',
  INTERMEDIATE = 'Intermedio',
  ADVANCED = 'Avanzado',
}
