interface StatisticsItem {
  participation: number; //참여도
  expression: number; //표현도
  emotionRecognition: number; //감정인식
  empathy: number; //공감반응
}

interface Statistics {
  interaction: number; //상호작용 정도
  childStatistics: StatisticsItem; // 아이 통계
  parentStatistics: StatisticsItem; // 부모 통계
}

interface Review {
  id: number;
  score: number;
  content: string;
  createdAt: string;
}

export interface Lecture {
  id: number;
  stepTitle: Step['title'];
  title: string;
  summary?: string;
  thumbnail?: string;
  description?: string;
  statistics: Statistics;
  reviews: Review[];
}

export interface Step {
  id: number;
  title: string;
  lectures: Lecture[];
}
