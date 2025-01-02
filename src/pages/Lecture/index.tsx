import styled from 'styled-components';

import FullScreen from '@@components/FullScreen';
import GuideVideoContainer from '@@pages/Lecture/parts/GuideVideoContainer';
import LectureContainer from '@@pages/Lecture/parts/LectureContainer';

const StyledLecture = styled(FullScreen)`
  overflow-y: hidden;
  overflow-x: hidden;

  & > div {
    flex: 0 0 auto;
  }
`;

function Lecture() {
  return (
    <StyledLecture gnb>
      <LectureContainer title='사용 가이드 영상'>
        <GuideVideoContainer />
      </LectureContainer>
    </StyledLecture>
  );
}

export default Lecture;
