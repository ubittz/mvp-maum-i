import styled from 'styled-components';

import { arrowLeftIcon } from '@@assets/icons';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledMyPageContainer = styled.div<{ padding?: string }>`
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${({ padding }) => padding};
`;

const ContainerHeader = styled(Flex.Horizontal)<{ padding?: string }>`
  flex: 0 0 auto;
  width: 100%;
  height: 56px;
  color: ${COLORS.GRAY_SCALE_800};
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${COLORS.MAIN_200};

  .button_left {
    width: 24px;
    height: 24px;
    left: 33px;
    position: absolute;
  }

  .button_right {
    position: absolute;
    right: 33px;
    width: 111px;
    text-align: center;
    color: ${COLORS.CHERRY_300};
  }
`;

interface MyPageContainerProps {
  title: string;
  onBack?: () => void;
  onLogout?: () => void;
  children: React.ReactNode;
  padding?: string;
}

function MyPageContainer({ title, onBack, onLogout, children, padding = '0 32px' }: MyPageContainerProps) {
  return (
    <StyledMyPageContainer padding={padding}>
      <ContainerHeader className='container_header' padding={padding}>
        {onBack && <img src={arrowLeftIcon} alt='arrow_left' onClick={onBack} className='button_left' />}
        <Typography.Subtitle2>{title}</Typography.Subtitle2>
        {onLogout && (
          <Typography.Button1 onClick={onLogout} className='button_right'>
            로그아웃
          </Typography.Button1>
        )}
      </ContainerHeader>
      {children}
    </StyledMyPageContainer>
  );
}

export default MyPageContainer;
