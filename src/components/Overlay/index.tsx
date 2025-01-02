import styled from 'styled-components';

const StyledOverlay = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  top: 82px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // 반투명 배경
  z-index: 10; // 다른 요소 위에 표시
`;

interface OverlayProps {
  isVisible: boolean;
}

function Overlay({ isVisible }: OverlayProps) {
  return <StyledOverlay isVisible={isVisible} />;
}

export default Overlay;
