import { useState } from 'react';

import styled from 'styled-components';

import { CheckBox } from '@@components/CheckBox';
import DropDown from '@@components/DropDown';
import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import Radio from '@@components/Radio';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import VirtualAccountConatiner from '@@pages/Purchase/parts/VirtualAccountConatiner';
import { PaymentMethod } from '@@pages/Purchase/types';

const StyledPurchaseRightContent = styled(Flex.Vertical)`
  width: 100%;
  height: 100%;
  padding: 16px 0 36px 77px;

  .radio__container {
    margin-top: 12px;
    gap: 24px;
  }

  .bank_info__notice {
    padding: 12px 16px;
    background-color: ${COLORS.MAIN_200};
    border-radius: 12px;
    gap: 4px;

    .label_text {
      line-height: 20px;
      color: ${COLORS.GRAY_SCALE_600};
    }
  }

  .agreement__container {
    gap: 12px;

    .checkbox__container_wrap {
      gap: 8px;
      color: ${COLORS.GRAY_SCALE_700};
    }
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
      {selectedPaymentMethod === 'virtualAccount' && <VirtualAccountConatiner handleSelectBank={handleSelectBank} />}
    </StyledPurchaseRightContent>
  );
}

export default PurchaseRightContent;
