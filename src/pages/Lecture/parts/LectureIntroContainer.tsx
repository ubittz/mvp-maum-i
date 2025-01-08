import { useEffect, useState, useRef } from 'react';

import styled from 'styled-components';

import AnimationView from '@@components/AnimationContainer';
import Button from '@@components/Button';
import Toast from '@@components/Toast';

import { LectureIntro } from '../types';

const StyledLectureIntroPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & img {
    width: 886px;
    height: 626px;
  }
`;

const StartButton = styled(Button.Xlarge)<{ isVisible: boolean }>`
  position: fixed;
  bottom: 42px;
  left: 50%;
  z-index: 1000;
  width: 320px;
  transform: translateX(-50%);
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

interface LectureIntroPageProps {
  introContent: LectureIntro;
  isLastPage: boolean;
  onNext: () => void;
}

function LectureIntroContainer({ introContent, isLastPage, onNext }: LectureIntroPageProps) {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isStartButtonVisible, setIsStartButtonVisible] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout>();

  const handleTouch = () => {
    setIsToastVisible(false);
    setIsStartButtonVisible(false);
    clearTimeout(timeoutIdRef.current);
    onNext();
  };

  const setAudio = () => {
    const audio = new Audio(introContent.audio);
    audio.loop = true;
    audio.play();
    audio.onended = handleAudioEnd;
    return audio;
  };

  const handleAudioEnd = () => {
    setIsStartButtonVisible(true);
  };

  const removeAudio = (audio: HTMLAudioElement) => {
    audio.pause();
    audio.currentTime = 0;
  };

  useEffect(() => {
    const audio = setAudio();

    timeoutIdRef.current = setTimeout(() => {
      setIsToastVisible(true);
    }, 3000);

    return () => {
      removeAudio(audio);
      setIsStartButtonVisible(isLastPage);
      clearTimeout(timeoutIdRef.current);
    };
  });

  return (
    <StyledLectureIntroPage onClick={handleTouch}>
      <AnimationView params={{ src: introContent.image, autoplay: true }} size={{ width: 886, height: 626 }} />
      {!isLastPage && <Toast message='화면을 터치하면 다음 페이지로 넘어가요' isVisible={isToastVisible} />}
      {isLastPage && (
        <StartButton isVisible={isStartButtonVisible} onClick={onNext}>
          시작하기
        </StartButton>
      )}
    </StyledLectureIntroPage>
  );
}

export default LectureIntroContainer;
