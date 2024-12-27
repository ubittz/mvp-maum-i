import styled from 'styled-components';

import appleIcon from '@@assets/icons/apple.svg';
import googleIcon from '@@assets/icons/google.svg';
import kakaoIcon from '@@assets/icons/kakao.svg';
import naverIcon from '@@assets/icons/naver.svg';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import ContainerBox from '@@pages/Login/parts/ContainerBox';

const StyledLoginContainerBox = styled.div`
  width: 100%;
  padding: 62px 40px 0;

  .input_form_group {
    margin-bottom: 44px;
    &__wrap {
      gap: 11px;
      margin-bottom: 12px;

      &_title {
        color: ${COLORS.GRAY_SCALE_600};
      }

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }

  .login_sub_text__container {
    margin-top: 20px;
    height: 22px;
    justify-content: center;
    align-items: center;
    position: relative;

    .login_sub_text {
      cursor: pointer;
      flex: 1;
      color: ${COLORS.GRAY_SCALE_900};
      text-align: center;
    }
    .login_sub_divider {
      color: ${COLORS.GRAY_SCALE_400};
      margin: 0 10px;
    }
  }

  .sns_container {
    margin-top: 62px;
    margin-bottom: 20px;
    gap: 18px;
    justify-content: center;

    img {
      height: 56px;
      width: 56px;
      cursor: pointer;
    }
  }
`;

interface LoginContainerBoxProps {
  onLogin: () => void;
  onFindIdPw: () => void;
  onRegister: () => void;
}

function LoginContainerBox({ onLogin, onFindIdPw, onRegister }: LoginContainerBoxProps) {
  return (
    <ContainerBox
      title='로그인'
      children={
        <StyledLoginContainerBox>
          <Flex.Vertical className='input_form_group'>
            <Flex.Vertical className='input_form_group__wrap'>
              <Typography.Button3 className='input_form_group__wrap_title'>아이디</Typography.Button3>
              <InputFormGroup inputProps={{ placeholder: '아이디를 입력해주세요.' }} />
            </Flex.Vertical>
            <Flex.Vertical className='input_form_group__wrap'>
              <Typography.Button3 className='input_form_group__wrap_title'>비밀번호</Typography.Button3>
              <InputFormGroup inputProps={{ placeholder: '비밀번호를 입력해주세요.' }} />
            </Flex.Vertical>
          </Flex.Vertical>
          <Button.Xlarge className='tw-w-full' theme='solid' onClick={onLogin}>
            로그인
          </Button.Xlarge>
          <Flex.Horizontal className='login_sub_text__container'>
            <Typography.Button2 className='login_sub_text' onClick={onFindIdPw}>
              ID/PW 찾기
            </Typography.Button2>
            <Typography.Button2 className='login_sub_divider'>|</Typography.Button2>
            <Typography.Button2 className='login_sub_text' onClick={onRegister}>
              회원가입
            </Typography.Button2>
          </Flex.Horizontal>
          <Flex.Horizontal className='sns_container'>
            <img src={kakaoIcon} alt='kakao' onClick={() => {}} />
            <img src={naverIcon} alt='naver' onClick={() => {}} />
            <img src={googleIcon} alt='google' onClick={() => {}} />
            <img src={appleIcon} alt='apple' onClick={() => {}} />
          </Flex.Horizontal>
        </StyledLoginContainerBox>
      }
    />
  );
}

export default LoginContainerBox;
