import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const StyledAlert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 16px 20px;
  border-radius: 20px;
  background-color: ${COLORS.GRAY_SCALE_000};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  .subtitle {
    margin-top: 12px;
    text-align: center;
    color: ${COLORS.GRAY_SCALE_700};
    white-space: pre-line;
  }
`;

const ButtonContainer = styled(Flex.Horizontal)`
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding-top: 24px;
`;

interface AlertProps {
  title: string;
  text: string;
  children?: React.ReactNode;
  imageUrl?: string;
}

function Alert({ title, text, children, imageUrl }: AlertProps) {
  return (
    <>
      <Overlay />
      <StyledAlert>
        {imageUrl && <img src={imageUrl} alt='Alert' />}
        <Typography.Title2>{title}</Typography.Title2>
        <Typography.Body3 className='subtitle'>{text}</Typography.Body3>
        {children && <ButtonContainer>{children}</ButtonContainer>}
      </StyledAlert>
    </>
  );
}

export default Alert;
