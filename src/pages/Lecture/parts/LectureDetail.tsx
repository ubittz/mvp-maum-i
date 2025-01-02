import { useState } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Tab from '@@components/Tab';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { Lecture } from '@@pages/Lecture/types';

import { LectureThumbnail } from '../icons';
import LectureDetailInfoContainer from './LectureDetailInfoContainer';
import LectureStatisticContainer from './LectureStatisticContainer';

const StyledLectureDetail = styled(Flex.Vertical)`
  .img {
    width: 100%;
    height: 332px;
    object-fit: cover;
    background-color: ${COLORS.GRAY_SCALE_100};
  }

  .title_container {
    padding: 20px 16px;
    gap: 8px;
    align-items: flex-start;

    .title__step {
      color: ${COLORS.GRAY_SCALE_400};
    }

    .title__summary {
      color: ${COLORS.GRAY_SCALE_800};
      font-weight: 800;
    }
  }
`;

interface LectureDetailProps {
  lecture: Lecture;
}

function LectureDetail({ lecture }: LectureDetailProps) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <StyledLectureDetail>
      {lecture.thumbnail ? <img src={lecture.thumbnail} alt={lecture.title} className='img' /> : <LectureThumbnail className='img' />}
      <Flex.Vertical className='title_container'>
        <Typography.Button2 className='title__step'>[{lecture.stepTitle}]</Typography.Button2>
        <Typography.Title5 className='title__summary'>{lecture.summary}</Typography.Title5>
      </Flex.Vertical>
      <Tab itemList={['상세정보', '통계', '리뷰']} selectedIndex={selectedTabIndex} onChange={setSelectedTabIndex}>
        <LectureDetailInfoContainer lecture={lecture} />
        <LectureStatisticContainer />
        <LectureStatisticContainer />
      </Tab>
    </StyledLectureDetail>
  );
}

export default LectureDetail;
