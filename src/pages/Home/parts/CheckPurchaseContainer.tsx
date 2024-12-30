import styled from 'styled-components';

import videoBackground from '@@assets/images/background.png';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { PlayButton } from '@@pages/Home/icons';

const StyledCheckPurchaseContainer = styled(Flex.Vertical)`
  height: 100%;
  border-radius: 24px;
  width: 483px;
  align-items: center;
  cursor: pointer;

  .video_container {
    width: 100%;
    height: 249px;
    border-radius: 24px 24px 0 0;
    background-image: url(${videoBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .play_button {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .bottom_button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 0 0 24px 24px;
    padding: 14px 0;
    background-color: ${COLORS.GRAY_SCALE_800};
    color: ${COLORS.GRAY_SCALE_000};
  }
`;

interface CheckPurchaseContainerProps {
  onClick: () => void;
}

function CheckPurchaseContainer({ onClick }: CheckPurchaseContainerProps) {
  return (
    <StyledCheckPurchaseContainer onClick={onClick}>
      <div className='video_container'>
        <div className='video_container__inner' />
        <PlayButton className='play_button' />
      </div>
      <Typography.Button1 className='bottom_button'>구독상품 보러가기</Typography.Button1>
    </StyledCheckPurchaseContainer>
  );
}

export default CheckPurchaseContainer;
