import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import profileThumbnail from '@@assets/images/profile_thumbnail.png';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import InputFormGroup from '@@components/InputFormGroup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import MyPageContainer from '@@pages/MyPage/parts/MyPageContainer';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { DUMMY_USER } from './dummyData';
import { EditIcon } from './icons';

const StyledProfileEdit = styled(FullScreen)`
  overflow-y: hidden;

  & > div {
    flex: 0 0 auto;
  }

  .container {
    width: 100%;
    height: 100%;

    .divider {
      width: 10px;
      height: 100%;
      background: linear-gradient(${COLORS.MAIN_200} 0%, ${COLORS.MAIN_200} 100%);
    }
  }
`;

const StyledLeftContainer = styled(Flex.Vertical)`
  overflow-y: hidden;
  align-items: center;
  width: 50%;
  height: 100%;
  box-shadow: inset -8px -10px 5px -5px ${COLORS.MAIN_200};

  .img__container {
    margin-top: 70px;
    width: 152px;
    height: 152px;
    position: relative;

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
    .edit__icon {
      position: absolute;
      bottom: 0;
      right: 0;
      cursor: pointer;
      z-index: 1;
    }
  }
  .name {
    margin-top: 28px;
  }

  .button__container {
    margin-top: 52px;
    width: 320px;
    gap: 12px;
  }
`;

const StyledRightContainer = styled(Flex.Vertical)`
  position: absolute;
  overflow-y: scroll;
  scrollbar-width: none;
  overflow-x: hidden;
  align-items: center;
  top: 138px;
  right: 0;
  bottom: 0;
  width: 50%;
  margin-top: 31px;

  .input__container {
    align-items: flex-start;
    min-width: 320px;
    gap: 12px;
    margin-bottom: 132px;

    .input__wrapper {
      width: 100%;
      gap: 11px;

      .input__label_text {
        width: 100%;
        color: ${COLORS.GRAY_SCALE_600};
      }
    }
  }

  .bottom__button__container {
    position: fixed;
    margin: 0 16px;
    padding: 10px 16px 34px;
    width: 50%;
    bottom: 0;
    background: ${COLORS.MAIN_100};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

    .bottom__button {
      width: 100%;
    }
  }
`;

function ProfileEdit() {
  const navigate = useNavigate();
  const user = DUMMY_USER;

  const handleBack = () => {
    navigate(-1);
  };

  const handleSelectImage = () => {
    console.log('select image');
  };

  const handleProfileEdit = () => {
    navigate(pathGenerator(PAGES.MY_PAGE));
  };

  return (
    <StyledProfileEdit gnb>
      <MyPageContainer title='내 정보 수정' onBack={handleBack}>
        <div className='container'>
          <StyledLeftContainer>
            <div className='img__container'>
              <img src={user.profileThumbnail || profileThumbnail} alt='profile_thumbnail' className='img' />
              <EditIcon className='edit__icon' onClick={handleSelectImage} />
            </div>
            <Typography.Title3 className='name'>{user.name}</Typography.Title3>
          </StyledLeftContainer>

          <div className='divider' />

          <StyledRightContainer>
            <Flex.Vertical className='input__container'>
              <Flex.Vertical className='input__wrapper'>
                <Typography.Button3 className='input__label_text'>내 소개</Typography.Button3>
                <InputFormGroup inputProps={{ placeholder: '한 줄 소개글을 입력해주세요.', defaultValue: user.introduction }} showDeleteIcon />
              </Flex.Vertical>
              <Flex.Vertical className='input__wrapper'>
                <Typography.Button3 className='input__label_text'>이름</Typography.Button3>
                <InputFormGroup inputProps={{ placeholder: '이름을 입력해주세요.', defaultValue: user.name }} showDeleteIcon />
              </Flex.Vertical>
              <Flex.Vertical className='input__wrapper'>
                <Typography.Button3 className='input__label_text'>아이디</Typography.Button3>
                <InputFormGroup theme='disabled' inputProps={{ placeholder: '아이디를 입력해주세요.', defaultValue: user.email }} />
              </Flex.Vertical>
              <Flex.Vertical className='input__wrapper'>
                <Typography.Button3 className='input__label_text'>비밀번호</Typography.Button3>
                <InputFormGroup inputProps={{ placeholder: '비밀번호를 입력해주세요.', type: 'password' }} showDeleteIcon />
                <InputFormGroup inputProps={{ placeholder: '비밀번호를 한 번 더 입력해주세요.', type: 'password' }} />
              </Flex.Vertical>
              <Flex.Vertical className='input__wrapper'>
                <Typography.Button3 className='input__label_text'>연락처</Typography.Button3>
                <InputFormGroup inputProps={{ placeholder: '연락처를 입력해주세요.', defaultValue: user.mobile, type: 'tel' }} showDeleteIcon />
              </Flex.Vertical>
              <Flex.Vertical className='input__wrapper'>
                <Typography.Button3 className='input__label_text'>이메일</Typography.Button3>
                <InputFormGroup inputProps={{ placeholder: '이메일을 입력해주세요.', defaultValue: user.email, type: 'email' }} showDeleteIcon />
              </Flex.Vertical>
            </Flex.Vertical>
            <div className='bottom__button__container'>
              <Button.Xlarge className='bottom__button' onClick={handleProfileEdit}>
                프로필 변경
              </Button.Xlarge>
            </div>
          </StyledRightContainer>
        </div>
      </MyPageContainer>
    </StyledProfileEdit>
  );
}

export default ProfileEdit;
