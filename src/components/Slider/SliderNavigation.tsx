import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

const StyledSliderNavigation = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  gap: 8px;

  .slider_dot {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: ${COLORS.GRAY_SCALE_200};

    &.slider_dot-active {
      background: ${COLORS.GRAY_SCALE_400};
    }
  }
`;

function SliderNavigation({ currentIndex, length }: { currentIndex: number; length: number }) {
  return (
    <StyledSliderNavigation className='slider_dots__wrap'>
      {Array.from({ length }).map((_, index) => (
        <div key={index} className={`slider_dot ${currentIndex === index && 'slider_dot-active'}`} />
      ))}
    </StyledSliderNavigation>
  );
}

export default SliderNavigation;
