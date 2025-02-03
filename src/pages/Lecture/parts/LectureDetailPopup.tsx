import { useNavigate } from 'react-router-dom';
import { keyframes, styled } from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import { Lecture } from '@@pages/Lecture/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import LectureDetail from './LectureDetail';
import LectureDetailContainer from './LectureDetailContainer';

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
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
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

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
  const navigate = useNavigate();

  const handleStartLecture = () => {
    navigate(pathGenerator(PAGES.LECTURE) + `/${lecture.id}/intro`);
  };

  return (
    <StyledLectureDetailPopup isOpen={isOpen}>
      <LectureDetailContainer title={lecture.title} padding='0px' onBack={handleBack}>
        <LectureDetail lecture={lecture} />
        <Flex.Vertical className='bottom__button_container'>
          <Button.Xlarge className='button' onClick={handleStartLecture}>
            시작하기
          </Button.Xlarge>
        </Flex.Vertical>
      </LectureDetailContainer>
    </StyledLectureDetailPopup>
  );
}

export default LectureDetailPopup;
