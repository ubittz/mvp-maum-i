import styled from 'styled-components';

import { leftChevronIcon } from '@@assets/icons';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledContainerBox = styled(Flex.Vertical)`
  align-items: center;
  justify-content: center;
  margin: 0 440px;
  height: 560px;
  min-width: 400px;
  border-radius: 28px;
  background-color: ${COLORS.GRAY_SCALE_000};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 40px 40px 0;

    .left_icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      cursor: pointer;
    }

    .title_text {
      margin-bottom: 5px;
      text-align: center;
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
`;

interface ContainerBoxProps {
  onBack?: () => void;
  title: string;
  children: React.ReactNode;
}

function ContainerBox({ onBack, title, children }: ContainerBoxProps) {
  return (
    <StyledContainerBox>
      <Flex.Horizontal className='header'>
        {onBack && <img src={leftChevronIcon} alt='back' className='left_icon' onClick={onBack} />}
        <Typography.Title2 className='title_text' style={{ marginLeft: onBack ? '-24px' : '0' }}>
          {title}
        </Typography.Title2>
      </Flex.Horizontal>
      {children}
    </StyledContainerBox>
  );
}

export default ContainerBox;
