import styled from 'styled-components';

import FullScreen from '@@components/FullScreen';

const StyledLecture = styled(FullScreen)`
  .body {
    overflow-y: hidden;
  }

  & > div {
    flex: 0 0 auto;
  }
`;

function Lecture() {
  return (
    <StyledLecture gnb>
      <div>Lecture</div>
    </StyledLecture>
  );
}

export default Lecture;
