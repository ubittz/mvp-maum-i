import styled from 'styled-components';

import { arrowLeftIcon } from '@@assets/icons';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledLectureContainer = styled.div<{ padding?: string }>`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => padding};
  box-sizing: border-box;
  background-color: ${COLORS.MAIN_100};
`;

const ContainerHeader = styled(Flex.Horizontal)<{ padding?: string; isSticky?: boolean }>`
  width: 100%;
  height: 56px;
  color: ${COLORS.GRAY_SCALE_800};
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${COLORS.MAIN_200};
  background-color: ${COLORS.MAIN_100};
  padding: ${({ padding }) => padding};
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'relative')};
  top: ${({ isSticky }) => (isSticky ? '0' : 'auto')};

  .button_left {
    width: 24px;
    height: 24px;
    left: 33px;
    position: absolute;
  }
`;

interface LectureContainerProps {
  title: string;
  padding?: string;
  onBack?: () => void;
  isHeaderSticky?: boolean;
  children: React.ReactNode;
}

function LectureContainer({ title, padding = '0 238px', onBack, children, isHeaderSticky = false }: LectureContainerProps) {
  return (
    <StyledLectureContainer className='lecture_container' padding={padding}>
      <ContainerHeader className='container_header' isSticky={isHeaderSticky}>
        {onBack && <img src={arrowLeftIcon} alt='arrow_left' onClick={onBack} className='button_left' />}
        <Typography.Subtitle2>{title}</Typography.Subtitle2>
      </ContainerHeader>
      {children}
    </StyledLectureContainer>
  );
}

export default LectureContainer;
