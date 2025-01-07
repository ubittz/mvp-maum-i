import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledLectureFinishGraphContainer = styled(Flex.Vertical)`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.GRAY_SCALE_000};
  border-radius: 12px;
  padding: 16px 16px 22px;

  .header {
    align-items: center;
    gap: 4px;

    .sub__title__text {
      margin-top: 4px;
      color: ${COLORS.GRAY_SCALE_500};
    }
  }
`;

interface LectureFinishGraphProps {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
}

function LectureFinishGraphContainer({ title, icon, subtitle, children }: LectureFinishGraphProps) {
  return (
    <StyledLectureFinishGraphContainer>
      <Flex.Horizontal className='header'>
        {icon}
        <Typography.Subtitle2 className='tw-ml-1'>{title}</Typography.Subtitle2>
        {subtitle && <Typography.Button3 className='sub__title__text'>{subtitle}</Typography.Button3>}
      </Flex.Horizontal>
      {children}
    </StyledLectureFinishGraphContainer>
  );
}

export default LectureFinishGraphContainer;
