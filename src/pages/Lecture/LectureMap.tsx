import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import lectureMap from '@@assets/images/lecture_map.png';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Overlay from '@@components/Overlay';
import { COLORS } from '@@constants/colors';
import { dummySteps } from '@@pages/Lecture/dummyData';
import LectureContainer from '@@pages/Lecture/parts/LectureContainer';
import StepDetailGrid from '@@pages/Lecture/parts/StepDetailGrid';
import { Step } from '@@pages/Lecture/types';

const StyledLectureMap = styled(FullScreen)`
  overflow-y: hidden;
  overflow-x: hidden;
`;

const StyledLectureMapImage = styled(Flex.Horizontal)`
  flex: 1;
  width: 100%;
  height: 100%;
  background-image: url(${lectureMap});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;

  .step_first__button {
    margin-top: 118px;
    margin-left: calc(3vw);
    width: 100px;
    height: 100px;
    fill: ${COLORS.GRAY_SCALE_800};
  }

  .step_second__button {
    margin-top: 306px;
    margin-left: calc(33vw);
    width: 100px;
    height: 100px;
    fill: ${COLORS.GRAY_SCALE_800};
  }

  .step_third__button {
    margin-top: 63px;
    margin-left: calc(33vw + 10px);
    width: 100px;
    height: 100px;
    fill: ${COLORS.GRAY_SCALE_800};
  }
`;

function LectureMap() {
  const navigate = useNavigate();
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleStepClick = (stepIndex: number) => {
    setSelectedStep(dummySteps[stepIndex - 1]);
  };

  const handleStepDetailBack = () => {
    setSelectedStep(null);
  };

  return (
    <StyledLectureMap gnb>
      <LectureContainer title='' onBack={handleBack} padding='0 33px'>
        <StyledLectureMapImage className='lecture_map_image'>
          <Button.Large className='step_first__button' onClick={() => handleStepClick(1)}>
            Step 1
          </Button.Large>
          <Button.Large className='step_second__button' onClick={() => handleStepClick(2)}>
            Step 2
          </Button.Large>
          <Button.Large className='step_third__button' onClick={() => handleStepClick(3)}>
            Step 3
          </Button.Large>
        </StyledLectureMapImage>
        <Overlay isVisible={selectedStep !== null} onClick={handleStepDetailBack} />
        {selectedStep && <StepDetailGrid step={selectedStep} handleBack={handleStepDetailBack} />}
      </LectureContainer>
    </StyledLectureMap>
  );
}

export default LectureMap;
