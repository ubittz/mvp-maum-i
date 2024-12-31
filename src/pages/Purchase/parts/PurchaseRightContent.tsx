import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import CheckBox from '@@components/CheckBox';
import Flex from '@@components/Flex';
import Radio from '@@components/Radio';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import CardContainer from '@@pages/Purchase/parts/CardContainer';
import VirtualAccountConatiner from '@@pages/Purchase/parts/VirtualAccountConatiner';
import { PaymentMethod } from '@@pages/Purchase/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledPurchaseRightContent = styled(Flex.Vertical)`
  width: 100%;
  height: 100%;
  padding: 16px 0 36px 77px;
  gap: 12px;

  .radio__container {
    gap: 24px;
  }

  .agreement__container {
    gap: 12px;

    .checkbox__container_wrap {
      color: ${COLORS.GRAY_SCALE_700};
    }
  }
  .purchase_button {
    margin-top: auto;
  }
`;

function PurchaseRightContent() {
  const navigate = useNavigate();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('card');
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [selectedCardCompany, setSelectedCardCompany] = useState<string>('');
  const [selectedInstallment, setSelectedInstallment] = useState<string>('');
  const [isCheckedAgreement, setIsCheckedAgreement] = useState<boolean[]>([false, false, false]);

  const handleSelectPaymentMethod = (paymentMethod: PaymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
    setIsCheckedAgreement([false, false, false]);
  };

  const handleSelectBank = (bank: string) => {
    setSelectedBank(bank);
    console.log('선택된 은행:', selectedBank);
  };

  const handleSelectCardCompany = (cardCompany: string) => {
    setSelectedCardCompany(cardCompany);
    console.log('선택된 카드사:', selectedCardCompany);
  };

  const handleSelectInstallment = (installment: string) => {
    setSelectedInstallment(installment);
    console.log('선택된 할부:', selectedInstallment);
  };

  const handleClickPurchase = () => {
    navigate(pathGenerator(PAGES.PURCHASE) + '/success');
  };

  const handleChangeAgreement = (index: number) => {
    console.log('Before change:', isCheckedAgreement);
    const newCheckedState = [...isCheckedAgreement];
    newCheckedState[index] = !newCheckedState[index]; // 상태 반전
    setIsCheckedAgreement(newCheckedState);
    console.log('After change:', newCheckedState); // 상태 변경 후 로그
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
      {selectedPaymentMethod === 'card' && (
        <CardContainer handleSelectCardCompany={handleSelectCardCompany} handleSelectInstallment={handleSelectInstallment} />
      )}
      <Flex.Vertical className='agreement__container'>
        <Flex.Horizontal className='checkbox__container_wrap'>
          <CheckBox key={0} isChecked={isCheckedAgreement[0]} onChange={() => handleChangeAgreement(0)} />
          <Typography.Caption1>개인정보 수집 및 이용 동의</Typography.Caption1>
        </Flex.Horizontal>
        <Flex.Horizontal className='checkbox__container_wrap'>
          <CheckBox key={1} isChecked={isCheckedAgreement[1]} onChange={() => handleChangeAgreement(1)} />
          <Typography.Caption1>이용약관 동의</Typography.Caption1>
        </Flex.Horizontal>
        <Flex.Horizontal className='checkbox__container_wrap'>
          <CheckBox key={2} isChecked={isCheckedAgreement[2]} onChange={() => handleChangeAgreement(2)} />
          <Typography.Caption1>결제 동의</Typography.Caption1>
        </Flex.Horizontal>
      </Flex.Vertical>
      <Button.Xlarge className='purchase_button' onClick={handleClickPurchase} disabled={!isCheckedAgreement.every(Boolean)}>
        결제하기
      </Button.Xlarge>
    </StyledPurchaseRightContent>
  );
}

export default PurchaseRightContent;
