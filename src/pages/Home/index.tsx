import { useState } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import BannerContainer from '@@pages/Home/parts/BannerContainer';
import CheckPurchaseContainer from '@@pages/Home/parts/CheckPurchaseContainer';
import StudyStatusContainer from '@@pages/Home/parts/StudyStatusContainer';
import VideoPlayerModal from '@@pages/Home/parts/VideoPlayerModal';

const StyledHome = styled(FullScreen)`
  .content {
    gap: 12px;
    margin: 36px 32px;

    .right_container {
      gap: 12px;
    }
  }

  & > div {
    flex: 0 0 auto;
  }
`;

function Home() {
  const [isShowVideoModal, setIsShowVideoModal] = useState(false);

  const handleVideoModal = () => {
    setIsShowVideoModal(!isShowVideoModal);
  };

  return (
    <StyledHome gnb footer>
      <Flex.Horizontal className='content'>
        <StudyStatusContainer />
        <Flex.Vertical className='right_container'>
          <CheckPurchaseContainer onClick={handleVideoModal} />
          <BannerContainer />
        </Flex.Vertical>
      </Flex.Horizontal>
      {isShowVideoModal && <VideoPlayerModal onClose={handleVideoModal} onPlay={handleVideoModal} onSubscribeProduct={handleVideoModal} />}
    </StyledHome>
  );
}

export default Home;
