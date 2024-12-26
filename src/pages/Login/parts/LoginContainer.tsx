import styled from 'styled-components';

import Button from '@@components/Button';
import { BUTTON_THEME } from '@@components/Button/constants';
import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledLoginContainer = styled(Flex.Vertical)`
  align-items: center;
  margin: 0 440px;
  height: 560px;
  min-width: 400px;
  border-radius: 28px;
  background-color: ${COLORS.GRAY_SCALE_000};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  .login_title {
    padding-top: 40px;
    margin-bottom: 5px;
  }

  .body {
    width: 100%;
    padding: 62px 40px 0;

    .input_form_group {
      margin-bottom: 44px;
      &__wrap {
        gap: 11px;
        margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }

  .sns_container {
    margin-top: 20px;
  }
`;

function LoginContainer() {
  return (
    <StyledLoginContainer>
      <Typography.Title2 className='login_title'>로그인</Typography.Title2>
      <Flex.Vertical className='body'>
        <Flex.Vertical className='input_form_group'>
          <Flex.Vertical className='input_form_group__wrap'>
            <Typography.Button3>아이디</Typography.Button3>
            <InputFormGroup inputProps={{ placeholder: '아이디를 입력해주세요.' }} />
          </Flex.Vertical>
          <Flex.Vertical className='input_form_group__wrap'>
            <Typography.Button3>비밀번호</Typography.Button3>
            <InputFormGroup inputProps={{ placeholder: '비밀번호를 입력해주세요.' }} />
          </Flex.Vertical>
        </Flex.Vertical>
        <Button.Xlarge theme={BUTTON_THEME.SOLID}>로그인</Button.Xlarge>
      </Flex.Vertical>
      <Flex.Horizontal className='sns_container'>{/* 카카오, 네이버, 구글, 애플 */}</Flex.Horizontal>
    </StyledLoginContainer>
  );
}

export default LoginContainer;
