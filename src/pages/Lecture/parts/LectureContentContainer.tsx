import { useEffect, useState, useRef } from 'react';

import styled from 'styled-components';

import AnimationView from '@@components/AnimationContainer';
import ClickAnimationContainer from '@@components/AnimationContainer/ClickAnimationContainer';
import Toast from '@@components/Toast';

import { LectureContent } from '../types';
const StyledLectureIntroPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 886px;
    height: 626px;
  }
`;

interface LectureContentContainerProps {
  content: LectureContent;
  onNext: () => void;
}

function LectureContentContainer({ content, onNext }: LectureContentContainerProps) {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout>();

  const handleTouch = () => {
    setIsToastVisible(false);
    clearTimeout(timeoutIdRef.current);
    onNext();
  };

  useEffect(() => {
    // const audio = new Audio(background);
    // audio.loop = true;
    // audio.play();

    timeoutIdRef.current = setTimeout(() => {
      setIsToastVisible(true);
    }, 3000);

    window.addEventListener('touchstart', handleTouch);

    return () => {
      // audio.pause();
      // audio.currentTime = 0;
      clearTimeout(timeoutIdRef.current);
      window.removeEventListener('touchstart', handleTouch);
    };
  });

  return (
    <StyledLectureIntroPage>
      {content.isTouchable && content.touchCount && content.animation ? (
        <ClickAnimationContainer
          params={{ src: content.image, autoplay: true, animations: content.animation }}
          size={{ width: 886, height: 626 }}
          maxTouchCount={content.touchCount}
        />
      ) : content.isNormalImage ? (
        <img src={content.image} alt='lecture content' />
      ) : (
        <AnimationView params={{ src: content.image, autoplay: true }} size={{ width: 886, height: 626 }} />
      )}
      <Toast message='화면을 터치하면 다음 페이지로 넘어가요' isVisible={isToastVisible} />
    </StyledLectureIntroPage>
  );
}

export default LectureContentContainer;
