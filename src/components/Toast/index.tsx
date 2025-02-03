import styled from 'styled-components';

import Typography from '@@components/Typography';

import { ToastProps } from './types';

const ToastContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 42px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.5); // 반투명 배경
  backdrop-filter: blur(10px);
  color: white;
  padding: 16px 50px;
  border-radius: 12px;
  z-index: 1000;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  cursor: pointer;
`;

function Toast({ message, isVisible, onClick }: ToastProps) {
  return (
    <ToastContainer isVisible={isVisible} onClick={onClick}>
      <Typography.Subtitle3>{message}</Typography.Subtitle3>
    </ToastContainer>
  );
}

export default Toast;
