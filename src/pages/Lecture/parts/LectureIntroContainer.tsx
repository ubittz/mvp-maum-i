import { useEffect, useState } from 'react';

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
  const [isAudioEnded, setIsAudioEnded] = useState(false);

  const handleTouch = () => {
    if (!isAudioEnded) return;

    setIsToastVisible(false);
    setIsStartButtonVisible(false);
    onNext();
  };

  const handleAudioEnd = () => {
    setIsAudioEnded(true);
    setIsStartButtonVisible(true);
    setIsToastVisible(true);
  };

  useEffect(() => {
    const audio = new Audio(introContent.audio);
    audio.loop = false;
    audio.play();
    audio.onended = handleAudioEnd;
    setIsAudioEnded(false);

    return () => {
      audio.pause();
      setIsStartButtonVisible(isLastPage);
    };
  }, [introContent.audio, isLastPage]);

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
