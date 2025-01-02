import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { InteractionIcon, EmpathyIcon } from '@@pages/Lecture/icons';
import { Lecture } from '@@pages/Lecture/types';

import StatisticRow from './LectureStaisticRow';
const StyledLectureStatisticContainer = styled(Flex.Vertical)`
  width: 100%;
  margin: 16px 0;

  .header__text {
    margin-bottom: 14px;
  }
`;

const StatisticContainer = styled(Flex.Vertical)`
  width: 100%;
  gap: 14px;
`;

interface LectureStatisticContainerProps {
  lecture: Lecture;
}

function LectureStatisticContainer({ lecture }: LectureStatisticContainerProps) {
  return (
    <StyledLectureStatisticContainer>
      <Typography.Subtitle3 className='header__text' fontWeight={800}>
        이번 호수를 들은 사용자의 감정 수치 평균도입니다.
      </Typography.Subtitle3>
      <StatisticContainer>
        <StatisticRow title='상호작용 정도' icon={<InteractionIcon />}>
          <Flex.Horizontal className='content__container'></Flex.Horizontal>
          <Flex.Horizontal className='content__container'>
            <Typography.Subtitle3>{lecture.statistics.interaction}</Typography.Subtitle3>
          </Flex.Horizontal>
        </StatisticRow>
        {/* 참여도 */}
        <StatisticRow title='참여도' icon={<InteractionIcon />}>
          <Flex.Horizontal className='content__container'>
            {/* 아이 참여도 */}
            <Typography.Subtitle3>{lecture.statistics.childStatistics.participation}</Typography.Subtitle3>
            <div className='divider' />
            {/* 성인 참여도 */}
            <Typography.Subtitle3>{lecture.statistics.parentStatistics.participation}</Typography.Subtitle3>
          </Flex.Horizontal>
        </StatisticRow>
        {/* 표현도 */}
        <StatisticRow title='표현도' icon={<InteractionIcon />} subTitle='(표현력)'>
          <Flex.Horizontal className='content__container'>
            {/* 아이 표현도 */}
            <Typography.Subtitle3>{lecture.statistics.childStatistics.expression}</Typography.Subtitle3>
            <div className='divider' />
            {/* 성인 표현도 */}
            <Typography.Subtitle3>{lecture.statistics.parentStatistics.expression}</Typography.Subtitle3>
          </Flex.Horizontal>
        </StatisticRow>
        {/* 감정인식 */}
        <StatisticRow title='감정인식' icon={<InteractionIcon />} subTitle='(감정 인식 수준)'>
          <Flex.Horizontal className='content__container'>
            {/* 아이 감정인식 */}
            <Typography.Subtitle3>{lecture.statistics.childStatistics.emotionRecognition}</Typography.Subtitle3>
            <div className='divider' />
            {/* 성인 감정인식 */}
            <Typography.Subtitle3>{lecture.statistics.parentStatistics.emotionRecognition}</Typography.Subtitle3>
          </Flex.Horizontal>
        </StatisticRow>
        {/* 공감 반응 */}
        <StatisticRow title='공감 반응' icon={<EmpathyIcon />} subTitle='(공감적 반응수준 / 공감 표현)'>
          <Flex.Horizontal className='content__container'>
            {/* 아이 공감 반응 */}
            <Typography.Subtitle3>{lecture.statistics.childStatistics.empathy}</Typography.Subtitle3>
            <div className='divider' />
            {/* 성인 공감 반응 */}
            <Typography.Subtitle3>{lecture.statistics.parentStatistics.empathy}</Typography.Subtitle3>
          </Flex.Horizontal>
        </StatisticRow>
      </StatisticContainer>
    </StyledLectureStatisticContainer>
  );
}

export default LectureStatisticContainer;
