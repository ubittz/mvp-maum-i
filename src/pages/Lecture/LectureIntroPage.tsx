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
  padding: 32px 0;
`;

function LectureIntroPage() {
  const { lectureId } = useParams();
  const navigate = useNavigate();
  const lecture = dummyLectures.find((lecture) => lecture.id === Number(lectureId));
  const intro = lecture?.intro;

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage === intro!.length - 1) {
      navigate(`${pathGenerator(PAGES.LECTURE)}/${lectureId}/content`);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage === 0) {
      navigate(pathGenerator(PAGES.LECTURE));
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <StyledLecturePage>
      <LectureContainer title={lecture?.title || ''} onBack={handleBack} padding='0 32px'>
        <LectureIntroContainer introContent={lecture?.intro?.[currentPage] ?? {}} isLast={intro?.length === currentPage + 1} onNext={handleNext} />
      </LectureContainer>
    </StyledLecturePage>
  );
}

export default LectureIntroPage;
