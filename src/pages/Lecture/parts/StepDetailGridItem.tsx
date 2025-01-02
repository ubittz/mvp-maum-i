import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { Lecture } from '@@pages/Lecture/types';

import { LectureThumbnail } from '../icons';

const StyledStepDetailGridItem = styled(Flex.Vertical)`
  align-items: center;
  cursor: pointer;

  .button {
    width: 100%;
    border-radius: 0 0 13px 13px;
  }
`;

interface StepDetailGridItemProps {
  lecture: Lecture;
  onClick: () => void;
}

function StepDetailGridItem({ lecture, onClick }: StepDetailGridItemProps) {
  return (
    <StyledStepDetailGridItem onClick={onClick}>
      {lecture.thumbnail ? <img src={lecture.thumbnail} alt={lecture.title} /> : <LectureThumbnail />}
      <Button.Xlarge className='button'>{lecture.title}</Button.Xlarge>
    </StyledStepDetailGridItem>
  );
}

export default StepDetailGridItem;
