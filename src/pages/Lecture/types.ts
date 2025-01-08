interface StatisticsItem {
  participation: number; //참여도
  expression: number; //표현도
  emotionRecognition: number; //감정인식
  empathy: number; //공감반응
}

export interface Statistics {
  interaction: number; //상호작용 정도
  childStatistics: StatisticsItem; // 아이 통계
  parentStatistics: StatisticsItem; // 부모 통계
}

export interface Review {
  id: string;
  score: number;
  content: string;
  createdAt: string;
}

export interface LectureIntro {
  image?: string;
  audio?: string;
}

interface LectureMessage {
  title: string;
  content: string;
  icon: string;
}

export interface LectureContent {
  image?: string;
  text?: string;
  isNormalImage?: boolean;
  isTouchable?: boolean;
  touchCount?: number;
  animation?: string[];
  lastMessage?: LectureMessage;
}

export interface Lecture {
  id: number;
  stepTitle: Step['title'];
  title: string;
  intro?: LectureIntro[];
  content?: LectureContent[];
  summary?: string;
  thumbnail?: string;
  description?: string;
  statistics: Statistics;
  averageStatistics: Statistics;
  reviews: Review[];
}

export interface Step {
  id: number;
  title: string;
  lectures: Lecture[];
}
