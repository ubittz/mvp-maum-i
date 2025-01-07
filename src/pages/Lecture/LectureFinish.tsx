import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { InteractionIcon, EmpathyIcon, StatisticIcon, ParticipationIcon, ExpressionIcon, EmotionRecognitionIcon } from '@@pages/Lecture/icons';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { dummyLectures } from './dummyData';
import LectureContainer from './parts/LectureContainer';
import LectureFinishGraph from './parts/LectureFinishGraph';
import LectureFinishGraphContainer from './parts/LectureFinishGraphContainer';
import LectureFinishInteractionGraph from './parts/LectureFinishInteractionGraph';

const StyledLectureFinish = styled(FullScreen)`
  width: 100%;
  height: 100%;
  padding: 32px 0;
  overflow-x: hidden;
  align-items: center;

  .body {
    align-items: center;
    width: 100%;
    overflow-y: hidden;
    margin-bottom: 90px;
    .statistics__container {
      width: 607px;
      margin-top: 28px;
      background-color: ${COLORS.MUSTARD_500};
      border-radius: 12px;
      padding: 16px;

      .header {
        align-items: center;
        gap: 8px;
        padding-bottom: 12px;
        border-bottom: 1px solid ${COLORS.MAIN_100};
        & > p {
          color: ${COLORS.GRAY_SCALE_000};
          font-weight: 800;
        }
      }
      .content {
        align-items: center;
        padding: 12px 0 0;
        & > p {
          color: ${COLORS.GRAY_SCALE_000};
          font-weight: 800;
        }
      }
    }

    .graph__container {
      margin: 14px 0;
      width: 607px;
      gap: 14px;
    }
  }

  .bottom__button {
    position: fixed;
    bottom: 0;
    left: 50%;
    width: 320px;
    transform: translateX(-50%);
    margin-bottom: 30px;
  }
`;

function LectureFinish() {
  const navigate = useNavigate();
  const { lectureId } = useParams();
  const lecture = dummyLectures.find((lecture) => lecture.id === Number(lectureId));

  const handleBack = () => {
    navigate(-1);
  };

  const handleConfirm = () => {
    navigate(pathGenerator(`${PAGES.LECTURE}/map`));
  };

  return (
    <StyledLectureFinish>
      <LectureContainer title={lecture?.title || ''} onBack={handleBack} padding='0 32px'>
        <Flex.Vertical className='body'>
          <Flex.Vertical className='statistics__container'>
            <Flex.Horizontal className='header'>
              <StatisticIcon />
              <Typography.Subtitle2>학습 분석</Typography.Subtitle2>
            </Flex.Horizontal>
            <Flex.Vertical className='content'>
              <Typography.Title4>학습이 종료되었습니다.</Typography.Title4>
              <Typography.Title4>이번 학습은 어떻게 이루어졌는지 분석한 결과입니다.</Typography.Title4>
            </Flex.Vertical>
          </Flex.Vertical>
          <Flex.Vertical className='graph__container'>
            <LectureFinishGraphContainer title='상호작용 정도' icon={<InteractionIcon />} subtitle='전체 사용자의 평균 / 이번 회차 상호작용 정도'>
              <LectureFinishInteractionGraph
                interaction={lecture?.statistics?.interaction}
                averageInteraction={lecture?.averageStatistics?.interaction}
              />
            </LectureFinishGraphContainer>
            <LectureFinishGraphContainer title='참여도' icon={<ParticipationIcon />} subtitle='전체 사용자의 평균(아이/성인) / 참여도(아이/성인)'>
              <LectureFinishGraph
                statisticsValue={{
                  childValue: lecture?.statistics?.childStatistics.participation ?? 0,
                  parentValue: lecture?.statistics?.parentStatistics.participation ?? 0,
                }}
                averageStatisticsValue={{
                  childValue: lecture?.averageStatistics?.childStatistics.participation ?? 0,
                  parentValue: lecture?.averageStatistics?.parentStatistics.participation ?? 0,
                }}
              />
            </LectureFinishGraphContainer>
            <LectureFinishGraphContainer title='표현도' icon={<ExpressionIcon />} subtitle='전체 사용자의 평균(아이/성인) / 표현도(아이/성인)'>
              <LectureFinishGraph
                statisticsValue={{
                  childValue: lecture?.statistics?.childStatistics.expression ?? 0,
                  parentValue: lecture?.statistics?.parentStatistics.expression ?? 0,
                }}
                averageStatisticsValue={{
                  childValue: lecture?.averageStatistics?.childStatistics.expression ?? 0,
                  parentValue: lecture?.averageStatistics?.parentStatistics.expression ?? 0,
                }}
              />
            </LectureFinishGraphContainer>
            <LectureFinishGraphContainer
              title='감정인식 수준'
              icon={<EmotionRecognitionIcon />}
              subtitle='전체 사용자의 평균(아이/성인) / 감정 인식(아이/성인)'
            >
              <LectureFinishGraph
                statisticsValue={{
                  childValue: lecture?.statistics?.childStatistics.emotionRecognition ?? 0,
                  parentValue: lecture?.statistics?.parentStatistics.emotionRecognition ?? 0,
                }}
                averageStatisticsValue={{
                  childValue: lecture?.averageStatistics?.childStatistics.emotionRecognition ?? 0,
                  parentValue: lecture?.averageStatistics?.parentStatistics.emotionRecognition ?? 0,
                }}
              />
            </LectureFinishGraphContainer>
            <LectureFinishGraphContainer title='공감반응' icon={<EmpathyIcon />} subtitle='전체 사용자의 평균(아이/성인) / 공감반응(아이/성인)'>
              <LectureFinishGraph
                statisticsValue={{
                  childValue: lecture?.statistics?.childStatistics.empathy ?? 0,
                  parentValue: lecture?.statistics?.parentStatistics.empathy ?? 0,
                }}
                averageStatisticsValue={{
                  childValue: lecture?.averageStatistics?.childStatistics.empathy ?? 0,
                  parentValue: lecture?.averageStatistics?.parentStatistics.empathy ?? 0,
                }}
              />
            </LectureFinishGraphContainer>
          </Flex.Vertical>
        </Flex.Vertical>
        <Button.Xlarge className='bottom__button' onClick={handleConfirm}>
          확인
        </Button.Xlarge>
      </LectureContainer>
    </StyledLectureFinish>
  );
}

export default LectureFinish;
