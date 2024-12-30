import { useState } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Radio from '@@components/Radio';
import Typography from '@@components/Typography';
import { PaymentMethod } from '@@pages/Purchase/types';

const StyledPurchaseRightContent = styled(Flex.Vertical)`
  width: 100%;
  height: 100%;
  padding: 16px 0 36px 77px;

  .radio__container {
    margin-top: 12px;
    gap: 24px;
  }
`;

function PurchaseRightContent() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('card');

  const handleSelectPaymentMethod = (paymentMethod: PaymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  return (
    <StyledPurchaseRightContent>
      <Typography.Button3>결제수단</Typography.Button3>
      {/* radio 카드, 가상계좌 */}
      <Flex.Horizontal className='radio__container'>
        <Radio value='card' checked={selectedPaymentMethod === 'card'} onSelect={() => handleSelectPaymentMethod('card')}>
          카드
        </Radio>
        <Radio
          value='virtualAccount'
          checked={selectedPaymentMethod === 'virtualAccount'}
          onSelect={() => handleSelectPaymentMethod('virtualAccount')}
        >
          가상계좌
        </Radio>
      </Flex.Horizontal>
    </StyledPurchaseRightContent>
  );
}

export default PurchaseRightContent;
