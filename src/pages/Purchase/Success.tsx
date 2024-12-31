import styled from 'styled-components';

import { arrowRightIcon } from '@@assets/icons';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Typography from '@@components/Typography';

import { DoneIcon } from './icons';
import PurchaseContainer from './parts/PurchaseContainer';

const StyledPurchaseSuccess = styled(Flex.Vertical)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .done__icon {
    margin-top: 64px;
  }

  .done__text {
    margin: 24px 0 38px;
    height: 42px;
  }

  .button__container {
    width: 320px;
    height: 100%;
    gap: 12px;
  }
`;

function Success() {
  return (
    <FullScreen gnb>
      <PurchaseContainer title='구매완료'>
        <StyledPurchaseSuccess>
          <DoneIcon className='done__icon' />
          <Typography.Title3 className='done__text'>결제가 완료되었습니다.</Typography.Title3>
          <Flex.Vertical className='button__container'>
            <Button.Xlarge icon={arrowRightIcon}>감정 강의 보러가기</Button.Xlarge>
            <Button.Xlarge theme='soft'>결제 내역</Button.Xlarge>
          </Flex.Vertical>
        </StyledPurchaseSuccess>
      </PurchaseContainer>
    </FullScreen>
  );
}

export default Success;
