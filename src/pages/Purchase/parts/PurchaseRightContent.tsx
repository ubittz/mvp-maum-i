import { useState } from 'react';

import styled from 'styled-components';

import DropDown from '@@components/DropDown';
import Flex from '@@components/Flex';
import Radio from '@@components/Radio';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { PaymentMethod } from '@@pages/Purchase/types';

const StyledPurchaseRightContent = styled(Flex.Vertical)`
  width: 100%;
  height: 100%;
  padding: 16px 0 36px 77px;

  .radio__container {
    margin-top: 12px;
    gap: 24px;
  }

  .bank_info__container {
    margin-top: 12px;
    gap: 12px;
  }

  .bank_info__user_info {
    background-color: ${COLORS.MAIN_200};
    color: ${COLORS.GRAY_SCALE_600};
    padding: 12px 16px;
    border-radius: 12px;
    height: 48px;
    align-items: center;
  }
`;

function PurchaseRightContent() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('card');
  const [selectedBank, setSelectedBank] = useState<string>('');

  const handleSelectPaymentMethod = (paymentMethod: PaymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  const handleSelectBank = (bank: string) => {
    setSelectedBank(bank);
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
      {selectedPaymentMethod === 'virtualAccount' && (
        <Flex.Vertical className='bank_info__container'>
          <DropDown
            placeholder='은행을 선택해주세요'
            options={['기업은행', '국민은행', '신한은행', '우리은행', '하나은행', '카카오뱅크', '토스뱅크']}
            onSelect={handleSelectBank}
          />
          <Flex.Horizontal className='bank_info__user_info'>
            <Typography.Body3 className='tw-w-24'>입금자명</Typography.Body3>
            <Typography.Body3>최민정</Typography.Body3>
          </Flex.Horizontal>
        </Flex.Vertical>
      )}
    </StyledPurchaseRightContent>
  );
}

export default PurchaseRightContent;
