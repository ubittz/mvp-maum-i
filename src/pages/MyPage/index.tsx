import styled from 'styled-components';

import FullScreen from '@@components/FullScreen';

const StyledMyPage = styled(FullScreen)`
  .body {
    overflow-y: hidden;
  }

  & > div {
    flex: 0 0 auto;
  }
`;

function MyPage() {
  return (
    <StyledMyPage gnb>
      <div>MyPage</div>
    </StyledMyPage>
  );
}

export default MyPage;
