import styled from 'styled-components';

import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { Lecture } from '@@pages/Lecture/types';

const StyledLectureDetailInfoContainer = styled.div`
  width: 100%;
  margin: 48px 0;
  background-color: ${COLORS.GRAY_SCALE_000};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  .description__container {
    padding: 20px 16px;
  }
`;

interface LectureDetailInfoContainerProps {
  lecture: Lecture;
}

function LectureDetailInfoContainer({ lecture }: LectureDetailInfoContainerProps) {
  return (
    <StyledLectureDetailInfoContainer>
      <div className='description__container'>
        <Typography.Subtitle3 fontWeight={800}>{lecture.description ?? '상세정보가 없습니다.'}</Typography.Subtitle3>
      </div>
    </StyledLectureDetailInfoContainer>
  );
}

export default LectureDetailInfoContainer;
