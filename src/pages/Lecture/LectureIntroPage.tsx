import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import FullScreen from '@@components/FullScreen';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { dummyLectures } from './dummyData';
import LectureContainer from './parts/LectureContainer';
import LectureIntroContainer from './parts/LectureIntroContainer';

const StyledLecturePage = styled(FullScreen)`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 24px 0;

  & > div {
    flex: 0 0 auto;
  }
`;

function LectureIntroPage() {
  const { lectureId } = useParams();
  const navigate = useNavigate();
  const lecture = dummyLectures.find((lecture) => lecture.id === Number(lectureId));
  const intro = lecture?.intro;

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < (intro?.length || 0) - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      navigate(`${pathGenerator(PAGES.LECTURE)}/${lectureId}/content`);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else {
      navigate(pathGenerator(PAGES.LECTURE));
    }
  };

  return (
    <StyledLecturePage>
      <LectureContainer title={lecture?.title || ''} onBack={handleBack} padding='0 32px'>
        <LectureIntroContainer
          introContent={lecture?.intro?.[currentPage] ?? {}}
          isLastPage={intro?.length === currentPage + 1}
          onNext={handleNext}
        />
      </LectureContainer>
    </StyledLecturePage>
  );
}

export default LectureIntroPage;
