import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import { PlayButton } from '@@pages/Lecture/icons';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledGuideVideoContainer = styled(Flex.Vertical)`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 8px 0 95px;
  align-items: center;

  .bottom_button {
    flex: 0 0 auto;
    width: 320px;
  }
`;

const StyledGuideVideo = styled(Flex.Vertical)`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${COLORS.GRAY_SCALE_100};
  border-radius: 24px;
  margin-bottom: 12px;

  .video_container {
    position: relative;
  }

  .play_icon {
    flex: 1;
  }
`;

function GuideVideoContainer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(pathGenerator(PAGES.LECTURE) + '/map');
  };

  return (
    <StyledGuideVideoContainer>
      <StyledGuideVideo>
        <PlayButton className='play_icon' />
      </StyledGuideVideo>
      <Button.Xlarge className='bottom_button' onClick={handleClick}>
        감정 연습 놀이 보러 가기
      </Button.Xlarge>
    </StyledGuideVideoContainer>
  );
}

export default GuideVideoContainer;
