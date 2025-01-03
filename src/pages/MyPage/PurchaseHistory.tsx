import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import FullScreen from '@@components/FullScreen';
import MyPageContainer from '@@pages/MyPage/parts/MyPageContainer';

const StyledPurchaseHistory = styled(FullScreen)`
  overflow-y: hidden;

  & > div {
    flex: 0 0 auto;
  }
`;

function PurchaseHistory() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledPurchaseHistory gnb>
      <MyPageContainer title='결제 내역' onBack={handleBack}>
        <div>PurchaseHistory</div>
      </MyPageContainer>
    </StyledPurchaseHistory>
  );
}
export default PurchaseHistory;
