import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import profileThumbnail from '@@assets/images/profile_thumbnail.png';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Typography from '@@components/Typography';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { DUMMY_USER } from './dummyData';
import MyPageContainer from './parts/MyPageContainer';

const StyledMyPage = styled(FullScreen)`
  overflow-y: hidden;

  .body {
    margin-top: 70px;
    align-items: center;

    .img {
      width: 152px;
      height: 152px;
      border-radius: 50%;
    }
    .name {
      margin-top: 28px;
    }

    .button__container {
      margin-top: 52px;
      width: 320px;
      gap: 12px;
    }
  }

  & > div {
    flex: 0 0 auto;
  }
`;

function MyPage() {
  const navigate = useNavigate();
  const user = DUMMY_USER;

  const handleLogout = () => {
    navigate(pathGenerator(PAGES.AUTH));
  };

  const handleProfileEdit = () => {
    navigate(pathGenerator(PAGES.MY_PAGE) + '/edit');
  };

  const handlePurchaseHistory = () => {
    navigate(pathGenerator(PAGES.MY_PAGE) + '/payment');
  };

  return (
    <StyledMyPage gnb>
      <MyPageContainer title='마이페이지' onLogout={handleLogout}>
        <Flex.Vertical className='body'>
          <img src={user.profileThumbnail || profileThumbnail} alt='profile_thumbnail' className='img' />
          <Typography.Title3 className='name'>{user.name}</Typography.Title3>

          <Flex.Vertical className='button__container'>
            <Button.Xlarge onClick={handleProfileEdit}>내 정보 수정</Button.Xlarge>
            <Button.Xlarge theme='soft' onClick={handlePurchaseHistory}>
              결제 내역
            </Button.Xlarge>
          </Flex.Vertical>
        </Flex.Vertical>
      </MyPageContainer>
    </StyledMyPage>
  );
}

export default MyPage;
