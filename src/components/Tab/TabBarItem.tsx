import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledTabBarItemContainer = styled(Flex.Vertical)`
  position: relative;
  width: 100%;
  align-items: top;
`;

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

interface TabBarItemProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function TabBarItem({ label, selected, onClick }: TabBarItemProps) {
  return (
    <StyledTabBarItemContainer>
      <StyledTabBarItem className={`tab_header__item ${selected && 'selected'}`} alignItems='center' onClick={onClick}>
        {selected ? (
          <Typography.Button2 className='selected'>{label}</Typography.Button2>
        ) : (
          <Typography.Button2 className='normal'>{label}</Typography.Button2>
        )}
      </StyledTabBarItem>
    </StyledTabBarItemContainer>
  );
}

export default TabBarItem;
