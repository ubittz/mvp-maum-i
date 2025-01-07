import { useEffect, useState, useRef } from 'react';

import styled from 'styled-components';

import AnimationView from '@@components/AnimationContainer';
import ClickAnimationContainer from '@@components/AnimationContainer/ClickAnimationContainer';
import Button from '@@components/Button';
import MessageAlert from '@@components/MessageAlert';
import Toast from '@@components/Toast';

import { LectureContent } from '../types';

const StyledLectureContentContainer = styled.div<{ isBottomButtonVisible: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 886px;
    height: 626px;
  }

  .bottom_button {
    position: absolute;
    bottom: 44px;
    left: 50%;
    transform: translateX(-50%);
    width: 320px;
    opacity: ${({ isBottomButtonVisible }) => (isBottomButtonVisible ? 1 : 0)};
  }
`;

interface LectureContentContainerProps {
  content: LectureContent;
  isLastPage: boolean;
  onNext: () => void;
}

function LectureContentContainer({ content, isLastPage, onNext }: LectureContentContainerProps) {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isBottomButtonVisible, setIsBottomButtonVisible] = useState(false);

  const timeoutIdRef = useRef<NodeJS.Timeout>();

  const handleInteraction = () => {
    setIsToastVisible(false);
    clearTimeout(timeoutIdRef.current);
    onNext();
  };

  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.play();

    timeoutIdRef.current = setTimeout(() => {
      setIsToastVisible(true);
    }, 3000);

    timeoutIdRef.current = setTimeout(() => {
      setIsBottomButtonVisible(true);
    }, audio.duration + 3000);

    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('click', handleInteraction);

    return () => {
      // audio.pause();
      // audio.currentTime = 0;
      clearTimeout(timeoutIdRef.current);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };
  });

  return (
    <>
      <StyledLectureContentContainer isBottomButtonVisible={isBottomButtonVisible}>
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
        {!content.lastMessage && <Toast message='화면을 터치하면 다음 페이지로 넘어가요' isVisible={isToastVisible} />}
        {content.lastMessage && (
          <Button.Xlarge className='bottom_button' onClick={onNext}>
            {isLastPage ? '완료' : '다음'}
          </Button.Xlarge>
        )}
      </StyledLectureContentContainer>
      {content.lastMessage && (
        <MessageAlert title={content.lastMessage.title} content={content.lastMessage.content} icon={content.lastMessage.icon} isVisible={true} />
      )}
    </>
  );
}

export default LectureContentContainer;
