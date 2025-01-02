import styled from 'styled-components';

import Flex from '@@components/Flex';
import { ActiveHomeIcon, InactiveHomeIcon, ActiveLectureIcon, InactiveLectureIcon, ActiveMyIcon, InactiveMyIcon } from '@@components/GNB/icons';
import NavigationItem from '@@components/GNB/parts/GNBItem';
import { GNBItemType } from '@@components/GNB/types';
import { COLORS } from '@@constants/colors';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledGNBBar = styled(Flex.Horizontal)`
  display: flex;
  height: 82px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.MAIN_200};

  .navigation_item {
    flex: 1;
  }
`;

const GNB_LIST: GNBItemType[] = [
  {
    title: '홈',
    path: pathGenerator(PAGES.HOME),
    activeIcon: <ActiveHomeIcon />,
    inactiveIcon: <InactiveHomeIcon />,
  },
  {
    title: '내 강의실',
    path: pathGenerator(PAGES.LECTURE),
    activeIcon: <ActiveLectureIcon />,
    inactiveIcon: <InactiveLectureIcon />,
  },
  {
    title: '마이페이지',
    path: pathGenerator(PAGES.MY_PAGE),
    activeIcon: <ActiveMyIcon />,
    inactiveIcon: <InactiveMyIcon />,
  },
];

function GNBBar() {
  return (
    <StyledGNBBar>
      {GNB_LIST.map((item) => (
        <NavigationItem key={item.title} item={item} />
      ))}
    </StyledGNBBar>
  );
}

export default GNBBar;
