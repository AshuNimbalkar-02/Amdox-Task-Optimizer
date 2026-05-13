export type Mood = 'Neutral' | 'Happy' | 'Stressed' | 'Burnout';

export interface Task {
  id: string;
  title: string;
  category: string;
  duration: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'todo' | 'doing' | 'done';
  complexity: 'Hard' | 'Medium' | 'Easy';
}

export interface MoodTrend {
  day: string;
  moodScore: number;
  stressScore: number;
}
