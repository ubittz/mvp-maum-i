import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import TabHeader from '@@components/Tab/TabHeader';

const StyledTabContainer = styled.div<{ $itemCount: number; $selectedIndex: number }>`
  width: 100%;
  overflow: hidden;
  position: relative;

  & > .tab__container {
    width: calc(100% * ${({ $itemCount }) => $itemCount});
    margin-left: calc(100% * ${({ $selectedIndex }) => -$selectedIndex});
    transition: margin-left 0.2s;
  }
`;

function Tab({
  itemList,
  selectedIndex,
  onChange,
  children,
}: PropsWithChildren<{ itemList: string[]; selectedIndex: number; isLoading?: boolean; onChange?: (index: number) => void }>) {
  return (
    <Flex.Vertical>
      <TabHeader itemList={itemList} selectedIndex={selectedIndex} onChange={onChange} />
      <StyledTabContainer $itemCount={itemList.length} $selectedIndex={selectedIndex}>
        <Flex.Horizontal className='tab__container'>{children}</Flex.Horizontal>
      </StyledTabContainer>
    </Flex.Vertical>
  );
}

export default Tab;
