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
  cursor: pointer;

  & img {
    width: 886px;
    height: 626px;
    cursor: pointer;
  }

  .bottom_button {
    position: fixed;
    bottom: 42px;
    left: 50%;
    z-index: 1000;
    width: 320px;
    transform: translateX(-50%);
    transition: opacity 0.5s ease-in-out;
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
  const [isLastMessageVisible, setIsLastMessageVisible] = useState(false);
  const [isAudioEnded, setIsAudioEnded] = useState(false);
  const hasShownMessage = useRef(false);

  const handleInteraction = () => {
    if (!isAudioEnded) return;

    onNext();
    setIsToastVisible(false);
    setIsBottomButtonVisible(false);
    setIsLastMessageVisible(false);
  };

  const handleAudioEnd = () => {
    setIsAudioEnded(true);
    setIsToastVisible(true);
    setIsBottomButtonVisible(true);
  };

  useEffect(() => {
    const audio = new Audio(content.audio);
    hasShownMessage.current = false;

    audio.loop = false;
    audio.play();
    audio.onended = handleAudioEnd;
    setIsAudioEnded(false);
    setIsLastMessageVisible(false);
    setIsBottomButtonVisible(false);
    setIsToastVisible(false);

    const handleTimeUpdate = () => {
      const timeRemaining = audio.duration - audio.currentTime;
      if (timeRemaining <= 5 && content.lastMessage && !hasShownMessage.current) {
        hasShownMessage.current = true;
        setIsLastMessageVisible(true);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.pause();
    };
  }, [content]);

  return (
    <>
      <StyledLectureContentContainer isBottomButtonVisible={isBottomButtonVisible} onClick={handleInteraction}>
        {content.isTouchable && content.touchCount && content.animation ? (
          <ClickAnimationContainer
            params={{ src: content.image, autoplay: true, animations: content.animation }}
            size={{ width: 886, height: 626 }}
            maxTouchCount={content.touchCount}
          />
        ) : content.isNormalImage ? (
          <img src={content.image} alt='lecture content' onClick={handleInteraction} />
        ) : (
          <AnimationView params={{ src: content.image, autoplay: true }} size={{ width: 886, height: 626 }} />
        )}
        {!content.lastMessage && <Toast message='화면을 터치하면 다음 페이지로 넘어가요' isVisible={isToastVisible} onClick={handleInteraction} />}
        {content.lastMessage && (
          <Button.Xlarge className='bottom_button' onClick={onNext}>
            {isLastPage ? '완료' : '다음'}
          </Button.Xlarge>
        )}
      </StyledLectureContentContainer>
      {content.lastMessage && (
        <MessageAlert
          title={content.lastMessage.title}
          content={content.lastMessage.content}
          icon={content.lastMessage.icon}
          isVisible={isLastMessageVisible}
        />
      )}
    </>
  );
}

export default LectureContentContainer;
