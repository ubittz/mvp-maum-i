import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledPurchaseLeftContent = styled(Flex.Vertical)`
  width: 100%;
  height: 100%;
  padding: 16px 77px 36px 0;

  .main_price__container {
    height: 48px;
    align-items: center;
    gap: 8px;
    margin: 5px 0 16px 0;

    .main_price__price {
      color: ${COLORS.GRAY_SCALE_800};
    }
    .main_price__month {
      color: ${COLORS.GRAY_SCALE_500};
    }
  }

  .detail_price__container {
    padding: 16px 0;
    row-gap: 16px;
    border-bottom: 1px solid ${COLORS.MAIN_200};

    .detail_price__info_wrapper {
      justify-content: space-between;
      align-items: center;

      .info__text {
        line-height: 24px;
      }
      .info__text_detail {
        line-height: 18px;
        color: ${COLORS.GRAY_SCALE_500};
      }
    }
  }

  .final_price__container {
    margin: 16px 0;
    justify-content: space-between;
    align-items: center;
  }
`;

interface PurchaseLeftContentProps {
  subscribeItemName: string;
  monthlyPrice: number;
  totalPrice: number;
  vat: number;
}

function PurchaseLeftContent({ subscribeItemName, monthlyPrice, totalPrice, vat }: PurchaseLeftContentProps) {
  return (
    <StyledPurchaseLeftContent>
      <Typography.Subtitle3>{`상품 정보 / ${subscribeItemName}`}</Typography.Subtitle3>
      <Flex.Horizontal className='main_price__container'>
        <Typography.Title2>￦ {monthlyPrice.toLocaleString()}</Typography.Title2>
        <Typography.Button3 className='main_price__month'>
          매
          <br />월
        </Typography.Button3>
      </Flex.Horizontal>
      <Flex.Vertical className='detail_price__container'>
        <Flex.Horizontal className='detail_price__info_wrapper'>
          <Typography.Subtitle2 className='info__text'>공감우리 {subscribeItemName}</Typography.Subtitle2>
          <Typography.Subtitle2 className='info__text'>￦ {totalPrice.toLocaleString()}</Typography.Subtitle2>
        </Flex.Horizontal>
        <Flex.Horizontal className='detail_price__info_wrapper'>
          <Typography.Subtitle2 className='info__text_detail'>월간 청구</Typography.Subtitle2>
        </Flex.Horizontal>
      </Flex.Vertical>
      <Flex.Vertical className='detail_price__container'>
        <Flex.Horizontal className='detail_price__info_wrapper'>
          <Typography.Subtitle2 className='info__text'>소계</Typography.Subtitle2>
          <Typography.Subtitle2 className='info__text'>￦ {monthlyPrice.toLocaleString()}</Typography.Subtitle2>
        </Flex.Horizontal>
        <Flex.Horizontal className='detail_price__info_wrapper'>
          <Typography.Subtitle2 className='info__text'>부가가치세(10%)</Typography.Subtitle2>
          <Typography.Subtitle2 className='info__text_detail'>￦ {vat.toLocaleString()}</Typography.Subtitle2>
        </Flex.Horizontal>
      </Flex.Vertical>
      <Flex.Horizontal className='final_price__container'>
        <Typography.Subtitle2>최종 결제 금액</Typography.Subtitle2>
        <Typography.Subtitle2>￦ {totalPrice.toLocaleString()}</Typography.Subtitle2>
      </Flex.Horizontal>
    </StyledPurchaseLeftContent>
  );
}

export default PurchaseLeftContent;
