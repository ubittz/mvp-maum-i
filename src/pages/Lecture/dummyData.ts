import intro1 from '@@assets/animations/01-01_표지.riv';
import content2 from '@@assets/animations/1-1 1주 스토리보드-01.png';
import content3 from '@@assets/animations/1-1 1주 스토리보드-02.png';
import content4 from '@@assets/animations/1-1 1주 스토리보드-03.png';
import content5 from '@@assets/animations/1-1 1주 스토리보드-04.png';
import content6 from '@@assets/animations/1-1 1주 스토리보드-05.png';
import content7 from '@@assets/animations/1-1 1주 스토리보드-06.png';
import intro2 from '@@assets/animations/1-1_1주_스토리보드1.riv';
// import content1 from '@@assets/animations/1-1_1주_스토리보드2.riv';
import content8 from '@@assets/animations/1-1_1주_감정단어1.riv';
import content9 from '@@assets/animations/1-1_1주_감정단어2.riv';

import { Lecture, Step, Review } from './types';

const dummyReviews: Review[] = [
  {
    id: 1,
    content: '리뷰 1',
    score: 4,
    createdAt: '2024-01-01',
  },
  {
    id: 2,
    content: '리뷰 2',
    score: 3,
    createdAt: '2024-01-01',
  },
  {
    id: 3,
    content: '리뷰 3',
    score: 5,
    createdAt: '2024-01-01',
  },
  {
    id: 4,
    content: '리뷰 4',
    score: 2,
    createdAt: '2024-01-01',
  },
];

export const dummyLectures: Lecture[] = [
  {
    id: 1,
    stepTitle: 'Step 1',
    title: '1. 다양한 감정',
    summary: '첫 번째, 감정의 이야기 "다양한 감정"',
    description: 'Description for Lecture 1-1',
    intro: [
      {
        image: intro1,
      },
      {
        image: intro2,
      },
    ],
    content: [
      // {
      //   image: content1,
      //   isTouchable: true,
      //   touchCount: 6,
      // },
      {
        image: content2,
        isNormalImage: true,
        isTouchable: false,
      },
      {
        image: content3,
        isNormalImage: true,
        isTouchable: false,
      },
      {
        image: content4,
        isNormalImage: true,
        isTouchable: false,
      },
      {
        image: content5,
        isNormalImage: true,
        isTouchable: false,
      },
      {
        image: content6,
        isNormalImage: true,
        isTouchable: false,
      },
      {
        image: content7,
        isNormalImage: true,
        isTouchable: false,
      },
      {
        image: content8,
        isTouchable: false,
      },
      {
        image: content9,
        isTouchable: true,
        touchCount: 4,
      },
    ],
    statistics: {
      interaction: 5,
      childStatistics: {
        participation: 80,
        expression: 70,
        emotionRecognition: 60,
        empathy: 90,
      },
      parentStatistics: {
        participation: 75,
        expression: 65,
        emotionRecognition: 55,
        empathy: 85,
      },
    },
    reviews: dummyReviews,
  },
  {
    id: 2,
    stepTitle: 'Step 1',
    title: '2. 심리적 경계',
    summary: '두 번째, 감정의 이야기 "심리적 경계"',
    description: 'Description for Lecture 1-2',
    statistics: {
      interaction: 4,
      childStatistics: {
        participation: 75,
        expression: 65,
        emotionRecognition: 55,
        empathy: 80,
      },
      parentStatistics: {
        participation: 70,
        expression: 60,
        emotionRecognition: 50,
        empathy: 75,
      },
    },
    reviews: [],
  },
  {
    id: 3,
    stepTitle: 'Step 1',
    title: '3. 감정 인식',
    summary: '세 번째, 감정의 이야기 "감정 인식"',
    description: 'Description for Lecture 1-3',
    statistics: {
      interaction: 3,
      childStatistics: {
        participation: 70,
        expression: 60,
        emotionRecognition: 50,
        empathy: 75,
      },
      parentStatistics: {
        participation: 65,
        expression: 55,
        emotionRecognition: 45,
        empathy: 70,
      },
    },
    reviews: [],
  },
  {
    id: 4,
    stepTitle: 'Step 1',
    title: '4. 감정 표현',
    summary: '네 번째, 감정의 이야기 "감정 표현"',
    description: 'Description for Lecture 1-4',
    statistics: {
      interaction: 2,
      childStatistics: {
        participation: 65,
        expression: 55,
        emotionRecognition: 45,
        empathy: 70,
      },
      parentStatistics: {
        participation: 60,
        expression: 50,
        emotionRecognition: 40,
        empathy: 65,
      },
    },
    reviews: [],
  },
  {
    id: 5,
    stepTitle: 'Step 1',
    title: '5. 감정 이해',
    summary: '다섯 번째, 감정의 이야기 "감정 이해"',
    description: 'Description for Lecture 1-5',
    statistics: {
      interaction: 1,
      childStatistics: {
        participation: 60,
        expression: 50,
        emotionRecognition: 40,
        empathy: 65,
      },
      parentStatistics: {
        participation: 55,
        expression: 45,
        emotionRecognition: 35,
        empathy: 60,
      },
    },
    reviews: [],
  },
  {
    id: 6,
    stepTitle: 'Step 1',
    title: '6. 감정 관리',
    summary: '여섯 번째, 감정의 이야기 "감정 관리"',
    description: 'Description for Lecture 1-6',
    statistics: {
      interaction: 0,
      childStatistics: {
        participation: 55,
        expression: 45,
        emotionRecognition: 35,
        empathy: 60,
      },
      parentStatistics: {
        participation: 50,
        expression: 40,
        emotionRecognition: 30,
        empathy: 55,
      },
    },
    reviews: [],
  },
];

const dummySteps: Step[] = [
  {
    id: 1,
    title: 'Step 1',
    lectures: dummyLectures,
  },
  {
    id: 2,
    title: 'Step 2',
    lectures: [],
  },
  {
    id: 3,
    title: 'Step 3',
    lectures: [],
  },
];

export { dummySteps };
