import styled from 'styled-components';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import { FullScreenProps } from '@@components/FullScreen/types';
import GNBBar from '@@components/GNB';
import { COLORS } from '@@constants/colors';

const StyledFullScreen = styled(Flex.Vertical)`
  height: 100vh;
  background-color: ${COLORS.MAIN_000};

  .body {
    flex: 1;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

function FullScreen({ gnb, footer, children, ...props }: FullScreenProps) {
  return (
    <StyledFullScreen {...props}>
      {!!gnb && <GNBBar />}
      {children}
      {!!footer && <Footer />}
    </StyledFullScreen>
  );
}

export default FullScreen;
