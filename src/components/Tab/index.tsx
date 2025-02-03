import styled from 'styled-components';

import Flex from '@@components/Flex';
import TabHeader from '@@components/Tab/TabHeader';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabProps {
  itemList: TabItem[];
  selectedIndex: number;
  onChange?: (index: number) => void;
}

const StyledTabContainer = styled(Flex.Vertical)`
  width: 100%;
  overflow: hidden;

  .content__container {
    margin: 0 16px;
  }
`;

function Tab({ itemList, selectedIndex, onChange }: TabProps) {
  return (
    <StyledTabContainer>
      <TabHeader itemList={itemList.map((item) => item.label)} selectedIndex={selectedIndex} onChange={onChange} />
      <div className='content__container'>{itemList[selectedIndex].content}</div>
    </StyledTabContainer>
  );
}

export default Tab;
