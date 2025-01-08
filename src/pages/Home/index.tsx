import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import BannerContainer from '@@pages/Home/parts/BannerContainer';
import CheckPurchaseContainer from '@@pages/Home/parts/CheckPurchaseContainer';
import StudyStatusContainer from '@@pages/Home/parts/StudyStatusContainer';
import VideoPlayerModal from '@@pages/Home/parts/VideoPlayerModal';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

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
  const navigate = useNavigate();
  const [isShowVideoModal, setIsShowVideoModal] = useState(false);

  const handleVideoModal = () => {
    setIsShowVideoModal(!isShowVideoModal);
  };

  const handlePlayVideo = () => {
    console.log('play video');
  };

  const handleGoSubscribeProduct = () => {
    navigate(pathGenerator(`${PAGES.LECTURE}/map`));
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
      {isShowVideoModal && <VideoPlayerModal onClose={handleVideoModal} onPlay={handlePlayVideo} onSubscribeProduct={handleGoSubscribeProduct} />}
    </StyledHome>
  );
}

export default Home;
