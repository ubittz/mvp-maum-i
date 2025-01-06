import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import FullScreen from '@@components/FullScreen';

import { dummyLectures } from './dummyData';
import LectureContainer from './parts/LectureContainer';
import LectureContentContainer from './parts/LectureContentContainer';

const StyledLecturePage = styled(FullScreen)`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 32px 0;
`;

function LecturePage() {
  const { lectureId } = useParams();
  const navigate = useNavigate();
  const lecture = dummyLectures.find((lecture) => lecture.id === Number(lectureId));

  const [currentPage, setCurrentPage] = useState(0);
  const [touchCount, setTouchCount] = useState(0);

  const handleNext = () => {
    if (touchCount > (lecture?.content?.[currentPage]?.animation?.length || 0)) {
      handleNextPage();
    } else {
      setTouchCount(touchCount + 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage === (lecture?.content?.length || 0) - 1) {
      console.log('last page');
    } else {
      setCurrentPage(currentPage + 1);
      setTouchCount(0);
    }
  };

  const handleBack = () => {
    if (currentPage === 0) {
      navigate(-1);
    } else {
      setCurrentPage(currentPage - 1);
      setTouchCount(0);
    }
  };

  return (
    <StyledLecturePage>
      <LectureContainer title={lecture?.title || ''} onBack={handleBack} padding='0 32px'>
        {lecture?.content?.[currentPage] && <LectureContentContainer content={lecture?.content?.[currentPage]} onNext={handleNext} />}
      </LectureContainer>
    </StyledLecturePage>
  );
}

export default LecturePage;
