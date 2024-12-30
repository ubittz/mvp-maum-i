import FullScreen from '@@components/FullScreen';

import PurchaseContainer from './parts/PurchaseContainer';
function Purchase() {
  return (
    <FullScreen gnb>
      <PurchaseContainer title='구독권 결제' />
    </FullScreen>
  );
}

export default Purchase;
