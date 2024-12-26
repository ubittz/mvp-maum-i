import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import { GNBItemType } from '@@components/GNB/types';

const StyledGNBItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -webkit-tap-highlight-color: transparent;

  &:active,
  &:visited {
    background: transparent;
  }

  .gnb_item__icon {
    width: 74px;
    height: 66px;
  }
`;

function GNBItem({ item }: { item: GNBItemType }) {
  return (
    <StyledGNBItem to={item.path} className='navigation_item'>
      {({ isActive }: { isActive: boolean }) => (
        <>
          <Flex.Horizontal justifyContent='center' alignItems='center' className='gnb_item__icon'>
            {isActive ? item.activeIcon : item.inactiveIcon}
          </Flex.Horizontal>
        </>
      )}
    </StyledGNBItem>
  );
}

export default GNBItem;
