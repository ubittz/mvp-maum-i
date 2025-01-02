import { useState } from 'react';

import { keyframes, styled } from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import { Lecture, Step } from '@@pages/Lecture/types';

import LectureContainer from './LectureContainer';
import LectureDetailPopup from './LectureDetailPopup';
import StepDetailGridItem from './StepDetailGridItem';

const slideIn = keyframes`
  from {
    transform: translateX(100%); 
    opacity: 0;
  }
  to {
    transform: translateX(0); 
    opacity: 1; 
  }
`;

const StyledStepDetailGridContainer = styled.div`
  animation: ${slideIn} 0.3s ease-in-out;
  position: absolute;
  width: 50%;
  top: 82px;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.MAIN_100};
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;
`;

const StyledStepDetailGrid = styled(Flex.Vertical)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 72px;
  gap: 14px;
  padding: 0 17px 16px;
  overflow-y: auto;
  .row {
    gap: 14px;
  }
`;

interface StepDetailGridProps {
  step: Step;
  handleBack: () => void;
}

function StepDetailGrid({ step, handleBack }: StepDetailGridProps) {
  const [isLectureSelected, setIsLectureSelected] = useState<Lecture | undefined>(undefined);

  const handleLecturePopupOpen = (lecture: Lecture) => {
    // StyledStepDetailGridContainer y 스크롤 맨 위로 올라가야함
    setIsLectureSelected(lecture);
  };

  const handleLecturePopupClose = () => {
    setIsLectureSelected(undefined);
  };

  return (
    <>
      <StyledStepDetailGridContainer>
        <LectureContainer title={step.title} padding='0px' onBack={handleBack}>
          <StyledStepDetailGrid>
            {step.lectures.map((lecture, index) =>
              index % 2 === 0 ? (
                <Flex.Horizontal className='row' key={lecture.id}>
                  <StepDetailGridItem lecture={lecture} onClick={() => handleLecturePopupOpen(lecture)} />
                  {step.lectures[index + 1] && (
                    <StepDetailGridItem lecture={step.lectures[index + 1]} onClick={() => handleLecturePopupOpen(step.lectures[index + 1])} />
                  )}
                </Flex.Horizontal>
              ) : null
            )}
          </StyledStepDetailGrid>
        </LectureContainer>
      </StyledStepDetailGridContainer>
      {isLectureSelected && <LectureDetailPopup lecture={isLectureSelected} handleBack={handleLecturePopupClose} isOpen={!!isLectureSelected} />}
    </>
  );
}

export default StepDetailGrid;
