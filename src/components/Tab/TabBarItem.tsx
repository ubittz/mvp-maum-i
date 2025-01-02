import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledTabBarItem = styled(Flex.Horizontal)`
  flex: 1;
  height: 100%;
  padding: 18px 10px 16px;
  justify-content: center;

  & > p {
    color: ${COLORS.GRAY_SCALE_400};
  }

  &.selected {
    & > p {
      color: ${COLORS.MUSTARD_700};
    }
    border-bottom: 2px solid ${COLORS.MUSTARD_700};
  }
`;

function TabBarItem({ selected, onClick, children }: PropsWithChildren<{ selected: boolean; onClick: () => void }>) {
  return (
    <StyledTabBarItem className={`tab_header__item ${selected && 'selected'}`} alignItems='center' onClick={onClick}>
      {selected ? (
        <Typography.Button2 className='selected'>{children}</Typography.Button2>
      ) : (
        <Typography.Button2 className='normal'>{children}</Typography.Button2>
      )}
    </StyledTabBarItem>
  );
}

export default TabBarItem;
