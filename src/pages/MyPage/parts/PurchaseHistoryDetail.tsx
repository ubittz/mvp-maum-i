import { keyframes, styled } from 'styled-components';

import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import LabelTextField from '@@components/InputFormGroup/parts/LabelTextField';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import MyPageContainer from './MyPageContainer';

const slideIn = keyframes`
  from {
    transform: translateX(100%); // 오른쪽에서 시작
    opacity: 0;
  }
  to {
    transform: translateX(0); // 원래 위치로 이동
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0); // 현재 위치에서 시작
    opacity: 1;
  }
  to {
    transform: translateX(100%); // 오른쪽으로 이동
    opacity: 0;
  }
`;

const StyledPurchaseHistoryDetail = styled.div<{ isOpen: boolean }>`
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
  position: absolute;
  width: 50%;
  top: 82px;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.MAIN_100};
  z-index: 1000;
  overflow-x: hidden;

  .body {
    align-items: center;
    gap: 20px;

    .content {
      gap: 11px;

      .title {
        color: ${COLORS.GRAY_SCALE_600};
      }

      .input {
        width: 320px;
      }
    }
  }
`;

interface PurchaseHistoryDetailProps {
  handleBack: () => void;
  isOpen?: boolean;
}

function PurchaseHistoryDetail({ handleBack, isOpen = false }: PurchaseHistoryDetailProps) {
  const productName = '감정강의 구독권';
  // 기간: 월회비
  const period = '월회비';
  // 결제 방법: 카드
  const purchaseMethod = '카드';
  // 할부 기간: 일시불
  const installment = '일시불';
  // 최종 결제 금액: 3900
  const finalPrice = 3900;
  // 결제상태: 월회비
  const paymentStatus = '월회비';
  // 결제일시: 2024-01-01 12:00:00
  const paymentDate = '2024-01-01 12:00:00';

  return (
    <StyledPurchaseHistoryDetail isOpen={isOpen}>
      <MyPageContainer title='결제 상세' padding='0px' onBack={handleBack}>
        <Flex.Vertical className='body'>
          <Flex.Vertical className='content'>
            <Typography.Button3 className='title'>상품 정보</Typography.Button3>
            <InputFormGroup theme='soft' title='상품명' inputProps={{ value: productName }} />
            <LabelTextField title='기간' value={period} />
            <LabelTextField title='최종결제금액' value={`￦ ${finalPrice.toLocaleString()}`} />
          </Flex.Vertical>
          <Flex.Vertical className='content'>
            <Typography.Button3 className='title'>결제 정보</Typography.Button3>
            <LabelTextField title='결제 방법' value={purchaseMethod} />
            <LabelTextField title='할부 기간' value={installment} />
            <LabelTextField title='결제 상태' value={paymentStatus} />
            <LabelTextField title='결제일시' value={paymentDate.split(' ')[0].replace(/-/g, '. ')} />
            <LabelTextField title='최종결제금액' value={`￦ ${finalPrice.toLocaleString()}`} />
          </Flex.Vertical>
        </Flex.Vertical>
      </MyPageContainer>
    </StyledPurchaseHistoryDetail>
  );
}

export default PurchaseHistoryDetail;
