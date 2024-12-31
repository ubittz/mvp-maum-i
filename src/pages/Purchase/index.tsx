import FullScreen from '@@components/FullScreen';
import PurchaseContainer from '@@pages/Purchase/parts/PurchaseContainer';
import PurchaseContent from '@@pages/Purchase/parts/PurchaseContent';

function Purchase() {
  return (
    <FullScreen gnb>
      <PurchaseContainer title='구독권 결제'>
        <PurchaseContent />
      </PurchaseContainer>
    </FullScreen>
  );
}

export default Purchase;
