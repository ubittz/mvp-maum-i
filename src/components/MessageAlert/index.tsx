import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledMessageAlert = styled.div<{ isVisible: boolean }>`
  z-index: 1000;
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 607px;
  border-radius: 12px;
  border: 3px solid ${COLORS.MUSTARD_500};
  background-color: ${COLORS.GRAY_SCALE_000};
  gap: 8px;
  padding: 20px 16px;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  .header__container {
    align-items: center;
    gap: 8px;

    .icon {
      width: 32px;
      height: 32px;
    }
  }
  .content__container {
    justify-content: center;
    align-items: center;

    .text {
      text-align: center;
      line-height: 36px;
      font-weight: 800;
      white-space: pre-line;
    }
  }
`;

interface MessageAlertProps {
  title: string;
  icon: string;
  content: string;
  isVisible: boolean;
}

function MessageAlert({ title, icon, content, isVisible }: MessageAlertProps) {
  return (
    <StyledMessageAlert isVisible={isVisible}>
      <Flex.Horizontal className='header__container'>
        <img src={icon} alt='icon' />
        <Typography.Subtitle2 fontWeight={800}>{title}</Typography.Subtitle2>
      </Flex.Horizontal>
      <Flex.Vertical className='content__container'>
        <Typography.Title3 className='text'>{content.replace(/<br\s*\/?>/g, '\n')}</Typography.Title3>
      </Flex.Vertical>
    </StyledMessageAlert>
  );
}

export default MessageAlert;
