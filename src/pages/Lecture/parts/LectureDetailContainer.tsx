import styled from 'styled-components';

import { arrowLeftIcon } from '@@assets/icons';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledLectureDetailContainer = styled.div<{ padding?: string }>`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => padding};
  box-sizing: border-box;
  background-color: ${COLORS.MAIN_100};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1001;
  background-color: ${COLORS.MAIN_100};
`;

const ContainerHeader = styled(Flex.Horizontal)`
  width: 100%;
  height: 56px;
  color: ${COLORS.GRAY_SCALE_800};
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${COLORS.MAIN_200};
  padding: 0 16px;

  .button_left {
    width: 24px;
    height: 24px;
    left: 16px;
    position: absolute;
  }
`;

interface LectureDetailContainerProps {
  title: string;
  padding?: string;
  onBack?: () => void;
  children: React.ReactNode;
}

function LectureDetailContainer({ title, padding = '0', onBack, children }: LectureDetailContainerProps) {
  return (
    <StyledLectureDetailContainer className='lecture_container' padding={padding}>
      <StickyHeader>
        <ContainerHeader className='container_header'>
          {onBack && <img src={arrowLeftIcon} alt='arrow_left' onClick={onBack} className='button_left' />}
          <Typography.Subtitle2>{title}</Typography.Subtitle2>
        </ContainerHeader>
        {/* Tab 컴포넌트가 여기에 렌더링될 것입니다 */}
      </StickyHeader>
      {children}
    </StyledLectureDetailContainer>
  );
}

export default LectureDetailContainer;
