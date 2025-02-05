import animationContent1 from '@@assets/animations/animationContent1.riv';
import content1 from '@@assets/animations/content1.png';
import content2 from '@@assets/animations/content2.png';
import content3 from '@@assets/animations/content3.png';
import content4 from '@@assets/animations/content4.png';
import content5 from '@@assets/animations/content5.png';
import content6 from '@@assets/animations/content6.png';
import intro1 from '@@assets/animations/intro1.riv';
import intro2 from '@@assets/animations/intro2.riv';
import lastContent1 from '@@assets/animations/newContent1.riv';
import lastContent2 from '@@assets/animations/newContent2.riv';
import lastContent3 from '@@assets/animations/newContent3.riv';
import lastContent4 from '@@assets/animations/newContent4.riv';
import animationContentAudio1 from '@@assets/audios/animationContent1_audio.mp4';
import contentAudio1 from '@@assets/audios/content1_audio.mp4';
import contentAudio2 from '@@assets/audios/content2_audio.mp4';
import contentAudio3 from '@@assets/audios/content3_audio.mp4';
import contentAudio4 from '@@assets/audios/content4_audio.mp4';
import contentAudio5 from '@@assets/audios/content5_audio.mp4';
import contentAudio6 from '@@assets/audios/content6_audio.mp4';
import introAudio1 from '@@assets/audios/intro1_audio.mp4';
import introAudio2 from '@@assets/audios/intro2_audio.mp4';
import lastContentAudio1 from '@@assets/audios/lastContent1_audio.mp4';
import lastContentAudio2 from '@@assets/audios/lastContent2_audio.mp4';
import lastContentAudio3 from '@@assets/audios/lastContent3_audio.mp4';
import lastContentAudio4 from '@@assets/audios/lastContent4_audio.mp4';
import lastContentMessageAudio from '@@assets/audios/lastContent_messageAudio.mp4';
import { checkIcon, magnifyIcon, questionMarkIcon } from '@@assets/icons';
import thumbnail1 from '@@assets/images/1-1.png';
import thumbnail10 from '@@assets/images/1-10.png';
import thumbnail11 from '@@assets/images/1-11.png';
import thumbnail12 from '@@assets/images/1-12.png';
import thumbnail2 from '@@assets/images/1-2.png';
import thumbnail3 from '@@assets/images/1-3.png';
import thumbnail4 from '@@assets/images/1-4.png';
import thumbnail5 from '@@assets/images/1-5.png';
import thumbnail6 from '@@assets/images/1-6.png';
import thumbnail7 from '@@assets/images/1-7.png';
import thumbnail8 from '@@assets/images/1-8.png';
import thumbnail9 from '@@assets/images/1-9.png';

import { Lecture, Step, Review } from './types';

const dummyReviews: Review[] = [
  {
    id: 'a12323',
    content:
      '우리 아이가 예전엔 화가 나거나 속상할 때 어떻게 표현해야 할지 몰랐는데, 이 프로그램을 통해 자신의 감정을 말로 잘 표현하기 시작했어요. 정말 고마운 서비스예요!',
    score: 4,
    createdAt: '2024-05-28',
  },
  {
    id: 'b123dd',
    content: '다양한 감정에 대해 배우면서 아이가 친구나 가족의 감정을 더 잘 이해하고 공감하는 모습을 보여요. 이런 변화가 너무 기쁩니다.',
    score: 3,
    createdAt: '2024-05-20',
  },
  {
    id: 'e123ww',
    content: '이 서비스를 시작한 후 아이가 짜증이 나거나 화가 났을 때도 스스로 감정을 조절하려고 노력하는 모습이 보여요. 너무 놀라웠습니다.',
    score: 5,
    createdAt: '2024-05-16',
  },
  {
    id: 'f123et',
    content: '애니메이션과 놀이를 통해 감정을 배우니까 아이가 지루해하지 않고 재미있게 배워요. 교육 서비스라기보다 놀이 같아서 더욱 좋아요.',
    score: 5,
    createdAt: '2024-05-16',
  },
  {
    id: 'd123hbg',
    content:
      '아이와 함께 참여하면서 저도 감정에 대해 새롭게 배우는 기회가 됐어요. 아이와 대화할 때 훨씬 이해하기 쉬운 언어로 말할 수 있게 된 것 같아요.',
    score: 4.6,
    createdAt: '2024-05-16',
  },
  {
    id: 'a123hs',
    content: `선생님께서 아이가 친구들과 잘 지내고 감정을 잘 표현한다고 칭찬하시더라고요. 
이 서비스 덕분인 것 같아 뿌듯합니다.`,
    score: 5,
    createdAt: '2024-01-08',
  },
  {
    id: 'c123gw',
    content: '자신의 감정을 이해하고 표현하는 법을 배우면서 아이가 자신감을 갖기 시작했어요. 이제는 발표도 잘하고, 친구들과도 더 즐겁게 어울립니다.',
    score: 5,
    createdAt: '2024-01-01',
  },
];

const dummyIntros = [
  {
    image: intro1,
    audio: introAudio1,
  },
  {
    image: intro2,
    audio: introAudio2,
  },
];

const dummyContents = [
  {
    image: content1,
    isNormalImage: true,
    isTouchable: false,
    audio: contentAudio1,
  },
  {
    image: content2,
    isNormalImage: true,
    isTouchable: false,
    audio: contentAudio2,
  },
  {
    image: content3,
    isNormalImage: true,
    isTouchable: false,
    audio: contentAudio3,
  },
  {
    image: content4,
    isNormalImage: true,
    isTouchable: false,
    audio: contentAudio4,
  },
  {
    image: content5,
    isNormalImage: true,
    isTouchable: false,
    audio: contentAudio5,
  },
  {
    image: content6,
    isNormalImage: true,
    isTouchable: false,
    audio: contentAudio6,
    lastMessage: {
      title: '한 줄 문구',
      content: '우리도 마음속 다양한 감정을 만나러 출발해 볼까요?',
      icon: checkIcon,
    },
  },

  {
    image: animationContent1,
    audio: animationContentAudio1,
    isTouchable: false,
    lastMessage: {
      title: '알아보기',
      icon: magnifyIcon,
      content: `우리는 어떨 때 ‘아, 궁금해’라는 마음이 들까요?
        먼저 공감이는 무엇이 궁금한지 알아보기로 해요.`,
    },
  },

  {
    image: lastContent1,
    isTouchable: true,
    audio: lastContentAudio1,
  },
  {
    image: lastContent2,
    isTouchable: true,
    audio: lastContentAudio2,
  },
  {
    image: lastContent3,
    isTouchable: true,
    audio: lastContentAudio3,
  },
  {
    image: lastContent4,
    isTouchable: true,
    audio: lastContentAudio4,
  },
  {
    image: lastContent4,
    isTouchable: false,
    audio: lastContentMessageAudio,
    lastMessage: {
      title: '생각해보기',
      content: '나는 요즘에 무엇이 궁금해요? ',
      icon: questionMarkIcon,
    },
  },
];

export const dummyLectures: Lecture[] = [
  {
    id: 1,
    stepTitle: 'Step 1',
    title: '1. 다양한 감정',
    thumbnail: thumbnail1,
    summary: `첫 번째, 감정의 이야기 '다양한 감정'`,
    description: 'Description for Lecture 1-1',
    intro: dummyIntros,
    content: dummyContents,
    statistics: {
      interaction: 28,
      childStatistics: {
        participation: 22,
        expression: 36,
        emotionRecognition: 28,
        empathy: 28,
      },
      parentStatistics: {
        participation: 18,
        expression: 32,
        emotionRecognition: 22,
        empathy: 27,
      },
    },
    averageStatistics: {
      interaction: 26,
      childStatistics: {
        participation: 18,
        expression: 32,
        emotionRecognition: 13,
        empathy: 25,
      },
      parentStatistics: {
        participation: 22,
        expression: 36,
        emotionRecognition: 28,
        empathy: 28,
      },
    },
    reviews: dummyReviews,
  },
  {
    id: 2,
    stepTitle: 'Step 1',
    title: '2. 심리적 경계',
    thumbnail: thumbnail2,
    summary: `두 번째, 감정의 이야기 '심리적 경계'`,
    description: 'Description for Lecture 1-2',
    intro: dummyIntros,
    content: dummyContents,
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
    averageStatistics: {
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
    reviews: [],
  },
  {
    id: 3,
    stepTitle: 'Step 1',
    title: '3. 감정 인식',
    thumbnail: thumbnail3,
    summary: `세 번째, 감정의 이야기 '감정 인식'`,
    description: 'Description for Lecture 1-3',
    intro: dummyIntros,
    content: dummyContents,
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
    averageStatistics: {
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
    id: 4,
    stepTitle: 'Step 1',
    title: '4. 감정 표현',
    thumbnail: thumbnail4,
    summary: `네 번째, 감정의 이야기 '감정 표현'`,
    description: 'Description for Lecture 1-4',
    intro: dummyIntros,
    content: dummyContents,
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
    averageStatistics: {
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
    id: 5,
    stepTitle: 'Step 1',
    title: '5. 감정 이해',
    thumbnail: thumbnail5,
    summary: `다섯 번째, 감정의 이야기 '감정 이해'`,
    description: 'Description for Lecture 1-5',
    intro: dummyIntros,
    content: dummyContents,
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
    averageStatistics: {
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
    id: 6,
    stepTitle: 'Step 1',
    title: '6. 감정 관리',
    thumbnail: thumbnail6,
    summary: `여섯 번째, 감정의 이야기 '감정 관리'`,
    description: 'Description for Lecture 1-6',
    intro: dummyIntros,
    content: dummyContents,
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
    averageStatistics: {
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
    id: 7,
    stepTitle: 'Step 1',
    title: '7. 감정 관리',
    thumbnail: thumbnail7,
    summary: `여섯 번째, 감정의 이야기 '감정 관리'`,
    description: 'Description for Lecture 1-6',
    intro: dummyIntros,
    content: dummyContents,
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
    averageStatistics: {
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
    id: 8,
    stepTitle: 'Step 1',
    title: '8. 감정 관리',
    thumbnail: thumbnail8,
    summary: `여섯 번째, 감정의 이야기 '감정 관리'`,
    description: 'Description for Lecture 1-6',
    intro: dummyIntros,
    content: dummyContents,
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
    averageStatistics: {
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
    id: 9,
    stepTitle: 'Step 1',
    title: '9. 감정 관리',
    thumbnail: thumbnail9,
    summary: `여섯 번째, 감정의 이야기 '감정 관리'`,
    description: 'Description for Lecture 1-6',
    intro: dummyIntros,
    content: dummyContents,
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
    averageStatistics: {
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
    id: 10,
    stepTitle: 'Step 1',
    title: '10. 감정 관리',
    thumbnail: thumbnail10,
    summary: `여섯 번째, 감정의 이야기 '감정 관리'`,
    description: 'Description for Lecture 1-6',
    intro: dummyIntros,
    content: dummyContents,
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
    averageStatistics: {
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
    id: 11,
    stepTitle: 'Step 1',
    title: '11. 감정 관리',
    thumbnail: thumbnail11,
    summary: `여섯 번째, 감정의 이야기 '감정 관리'`,
    description: 'Description for Lecture 1-6',
    intro: dummyIntros,
    content: dummyContents,
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
    averageStatistics: {
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
    id: 12,
    stepTitle: 'Step 1',
    title: '12. 감정 관리',
    thumbnail: thumbnail12,
    summary: `여섯 번째, 감정의 이야기 '감정 관리'`,
    description: 'Description for Lecture 1-6',
    intro: dummyIntros,
    content: dummyContents,
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
    averageStatistics: {
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
    lectures: dummyLectures,
  },
  {
    id: 3,
    title: 'Step 3',
    lectures: dummyLectures,
  },
];

export { dummySteps };
