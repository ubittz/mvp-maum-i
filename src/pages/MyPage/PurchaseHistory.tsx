import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Overlay from '@@components/Overlay';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import MyPageContainer from '@@pages/MyPage/parts/MyPageContainer';
import PurchaseHistoryDetail from '@@pages/MyPage/parts/PurchaseHistoryDetail';

const StyledPurchaseHistory = styled(FullScreen)`
  overflow-y: hidden;

  & > div {
    flex: 0 0 auto;
  }

  .body {
    margin-top: 31px;
    align-items: center;

    .title__container {
      gap: 5px;
      width: 320px;
      margin-bottom: 16px;

      .price_title__container {
        gap: 8px;
        align-items: center;

        .price__unit {
          color: ${COLORS.GRAY_SCALE_500};
        }
      }
    }

    .detail__container {
      padding: 16px 0;
      gap: 12px;
      width: 320px;

      & .detail__item {
        justify-content: space-between;
        gap: 16px 0;
      }
    }

    .divider {
      width: 320px;
      height: 1px;
      background: ${COLORS.MAIN_200};
    }

    .bottom__button {
      position: fixed;
      bottom: 44px;
      width: 320px;
    }
  }
`;

function PurchaseHistory() {
  const navigate = useNavigate();

  const productName = '감정강의 구독권';
  const price = 3510;
  const tax = 390;
  const total = price + tax;

  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleShowDetail = () => {
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <StyledPurchaseHistory gnb>
      <MyPageContainer title='결제 내역' onBack={handleBack}>
        <Flex.Vertical className='body'>
          <Flex.Vertical className='title__container'>
            <Typography.Subtitle3 color={COLORS.GRAY_SCALE_600}>상품 정보 / {productName}</Typography.Subtitle3>
            <Flex.Horizontal className='price_title__container'>
              <Typography.Title2>￦ {price.toLocaleString()}</Typography.Title2>
              <Typography.Button3 className='price__unit'>
                매<br />월
              </Typography.Button3>
            </Flex.Horizontal>
          </Flex.Vertical>
          <Flex.Vertical className='detail__container'>
            <Flex.Horizontal className='detail__item'>
              <Typography.Subtitle2>마음아이 {productName}</Typography.Subtitle2>
              <Typography.Subtitle2>￦ {price.toLocaleString()}</Typography.Subtitle2>
            </Flex.Horizontal>
            <Typography.Button2 color={COLORS.GRAY_SCALE_500}>월간 청구</Typography.Button2>
          </Flex.Vertical>
          <div className='divider' />
          <Flex.Vertical className='detail__container'>
            <Flex.Horizontal className='detail__item'>
              <Typography.Subtitle2>소계</Typography.Subtitle2>
              <Typography.Subtitle2>￦ {price.toLocaleString()}</Typography.Subtitle2>
            </Flex.Horizontal>
            <Flex.Horizontal className='detail__item'>
              <Typography.Button2>부가가치세 (10%)</Typography.Button2>
              <Typography.Button2 color={COLORS.GRAY_SCALE_500}>￦ {tax.toLocaleString()}</Typography.Button2>
            </Flex.Horizontal>
          </Flex.Vertical>
          <div className='divider' />
          <Flex.Vertical className='detail__container'>
            <Flex.Horizontal className='detail__item'>
              <Typography.Subtitle2>최종 결제 금액</Typography.Subtitle2>
              <Typography.Subtitle2>￦ {total.toLocaleString()}</Typography.Subtitle2>
            </Flex.Horizontal>
          </Flex.Vertical>
          <Button.Xlarge className='bottom__button' onClick={handleShowDetail}>
            결제 상세보기
          </Button.Xlarge>
        </Flex.Vertical>
      </MyPageContainer>
      <Overlay isVisible={isDetailOpen} />
      {isDetailOpen && <PurchaseHistoryDetail handleBack={handleCloseDetail} isOpen={isDetailOpen} />}
    </StyledPurchaseHistory>
  );
}
export default PurchaseHistory;
