import { keyframes, styled } from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import { Lecture } from '@@pages/Lecture/types';

import LectureContainer from './LectureContainer';
import LectureDetail from './LectureDetail';

const slideIn = keyframes`
  from {
    transform: translateY(100%); // 밑에서 위로
    opacity: 0; // 투명도 0
  }
  to {
    transform: translateY(0); // 원래 위치로
    opacity: 1; // 완전 불투명
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const StyledLectureDetailPopup = styled.div<{ isOpen: boolean }>`
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
  position: absolute;
  width: 50%;
  top: 82px;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.MAIN_100};
  z-index: 1000;
  overflow-x: hidden;

  .bottom__button_container {
    position: relative;
    margin-top: auto;
    width: 100%;
    padding: 10px 16px 34px;
    box-shadow: -1px 0 6px rgba(0, 0, 0, 0.3);

    .button {
      display: flex;
      width: 100%;
    }
  }
`;

interface LectureDetailPopupProps {
  lecture: Lecture;
  handleBack: () => void;
  isOpen: boolean;
}

function LectureDetailPopup({ lecture, handleBack, isOpen }: LectureDetailPopupProps) {
  const handleStartLecture = () => {
    console.log('시작하기');
  };

  return (
    <StyledLectureDetailPopup isOpen={isOpen}>
      <LectureContainer title={lecture.title} padding='0px' onBack={handleBack}>
        <LectureDetail lecture={lecture} />
        <Flex.Vertical className='bottom__button_container'>
          <Button.Xlarge className='button' onClick={handleStartLecture}>
            시작하기
          </Button.Xlarge>
        </Flex.Vertical>
      </LectureContainer>
    </StyledLectureDetailPopup>
  );
}

export default LectureDetailPopup;
