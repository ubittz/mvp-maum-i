import styled from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import PurchaseLeftContent from '@@pages/Purchase/parts/PurchaseLeftContent';
import PurchaseRightContent from '@@pages/Purchase/parts/PurchaseRightContent';

const StyledPurchaseContent = styled(Flex.Horizontal)`
  width: 100%;
  height: 100%;

  .divider {
    width: 10px;
    height: 100%;
    background: linear-gradient(${COLORS.MAIN_200} 0%, ${COLORS.MAIN_200} 100%);
  }
`;

function PurchaseContent() {
  const subscribeItemName = '감정강의 구독권';
  const totalPrice = 3900; // 부가가치세 포함
  const monthlyPrice = 3510; // 부가가치세 제외
  const vat = monthlyPrice * 0.1; // 부가가치세

  return (
    <StyledPurchaseContent>
      <PurchaseLeftContent subscribeItemName={subscribeItemName} monthlyPrice={monthlyPrice} totalPrice={totalPrice} vat={vat} />
      <div className='divider' />
      <PurchaseRightContent />
    </StyledPurchaseContent>
  );
}

export default PurchaseContent;
