import styled from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import { ProgressBarDot } from '@@pages/Home/icons';

const StyledProgressBar = styled.div`
  width: 100%;
  height: 105px;

  .progress_bar {
    display: flex;
    align-items: bottom;
    justify-content: bottom;
    height: 60px;
    border-radius: 12px;
    margin: 0 12px;
    background-color: ${COLORS.GRAY_SCALE_100};

    .current_progress {
      background-color: ${COLORS.GRAY_SCALE_300};
      border-radius: 12px;
      height: 100%;
    }
  }
`;

const StyledProgressBarDot = styled(ProgressBarDot)<ProgressBarProps>`
  position: relative;
  left: calc(${(props) => (props.progress / props.total) * 100}% - 58px);
  top: 0;
  transform: translateX(120%);
`;

interface ProgressBarProps {
  // 전체 강의 수
  total: number;
  // 현재 강의 수
  progress: number;
}

function ProgressBar({ total, progress }: ProgressBarProps) {
  return (
    <StyledProgressBar>
      <StyledProgressBarDot progress={progress} total={total} />
      <Flex.Vertical className='progress_bar'>
        <div className='current_progress' style={{ width: `${(progress / total) * 100}%` }}></div>
      </Flex.Vertical>
    </StyledProgressBar>
  );
}

export default ProgressBar;
