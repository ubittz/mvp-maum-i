import styled from 'styled-components';

import { CheckBox } from '@@components/CheckBox';
import DropDown from '@@components/DropDown';
import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { VIRTUAL_ACCOUNT_BANK_LIST } from '@@pages/Purchase/constants';

const StyledVirtualAccountConatiner = styled(Flex.Vertical)`
  width: 100%;
  height: 100%;
  margin-top: 12px;
  gap: 12px;

  .bank_info__user_info {
    background-color: ${COLORS.MAIN_200};
    padding: 12px 16px;
    border-radius: 12px;
    height: 48px;
    align-items: center;

    .label_text {
      color: ${COLORS.GRAY_SCALE_600};
      width: 92px;
    }
  }
`;

interface VirtualAccountConatinerProps {
  handleSelectBank: (value: string) => void;
}

function VirtualAccountConatiner({ handleSelectBank }: VirtualAccountConatinerProps) {
  return (
    <StyledVirtualAccountConatiner>
      <DropDown
        placeholder='은행을 선택해주세요'
        options={VIRTUAL_ACCOUNT_BANK_LIST.map((bank) => ({
          label: bank.label,
          value: bank.value,
        }))}
        onSelect={handleSelectBank}
      />
      <Flex.Horizontal className='bank_info__user_info'>
        <Typography.Body3 className='label_text'>입금자명</Typography.Body3>
        <InputFormGroup theme='soft' inputProps={{ placeholder: '입금자명을 입력해주세요' }} />
      </Flex.Horizontal>

      <Flex.Vertical className='bank_info__notice'>
        <Typography.Caption1 className='label_text'>
          계좌유효기간:
          <br />
          YYYY년 MM월 DD일 hh시 mm분 ss초
        </Typography.Caption1>
        <Typography.Caption1 className='label_text'>
          가상 계좌 입금 주의사항 :
          <br />
          가상 계좌는 주문 시 고객님께 발급되는 일회성 계좌번호이므로 입금자명을 동일하게 처리해 주셔야 합니다.
        </Typography.Caption1>
      </Flex.Vertical>
      <Flex.Vertical className='agreement__container'>
        <Flex.Horizontal className='checkbox__container_wrap'>
          <CheckBox isChecked={false} />
          <Typography.Caption1>개인정보 수집 및 이용 동의</Typography.Caption1>
        </Flex.Horizontal>
        <Flex.Horizontal className='checkbox__container_wrap'>
          <CheckBox isChecked={false} />
          <Typography.Caption1>이용약관 동의</Typography.Caption1>
        </Flex.Horizontal>
        <Flex.Horizontal className='checkbox__container_wrap'>
          <CheckBox isChecked={false} />
          <Typography.Caption1>결제 동의</Typography.Caption1>
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledVirtualAccountConatiner>
  );
}

export default VirtualAccountConatiner;
