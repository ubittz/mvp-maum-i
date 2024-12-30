import styled from 'styled-components';

import { xIcon } from '@@assets/icons';
import videoPlayerBackground from '@@assets/images/background.png';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

import { PlayButton } from '../icons';

const StyledVideoPlayerModal = styled(Flex.Vertical)`
  align-items: center;
  justify-content: center;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);

  .video_player {
    width: 84%;
    height: 84%;
    border-radius: 24px;
    background-color: ${COLORS.GRAY_SCALE_000};
    position: relative;
    margin: auto;
    margin-top: 32px;
    background-image: url(${videoPlayerBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    backdrop-filter: blur(10px);

    .button_x {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
    }

    .button_play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      cursor: pointer;
    }
  }

  .button {
    position: absolute;
    bottom: 20px;
    width: 483px;
  }
`;

interface VideoPlayerModalProps {
  onClose: () => void;
  onPlay: () => void;
  onSubscribeProduct: () => void;
}

function VideoPlayerModal({ onClose, onPlay, onSubscribeProduct }: VideoPlayerModalProps) {
  return (
    <StyledVideoPlayerModal>
      <div className='video_player'>
        <img className='button_x' src={xIcon} alt='닫기' onClick={onClose} />
        <PlayButton className='button_play' onClick={onPlay} />
      </div>
      <Button.Xlarge className='button' onClick={onSubscribeProduct}>
        구독상품 보러가기
      </Button.Xlarge>
    </StyledVideoPlayerModal>
  );
}

export default VideoPlayerModal;
