import styled from 'styled-components';

import Flex from '@@components/Flex';
import { FullScreenProps } from '@@components/FullScreen/types';
import GNBBar from '@@components/GNB';

const StyledFullScreen = styled(Flex.Vertical)`
  height: 100vh;

  .body {
    flex: 1;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

function FullScreen({ gnb, children, ...props }: FullScreenProps) {
  return (
    <StyledFullScreen {...props}>
      {!!gnb && <GNBBar />}
      {children}
    </StyledFullScreen>
  );
}

export default FullScreen;
