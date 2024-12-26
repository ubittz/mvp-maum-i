import styled from 'styled-components';

import Button from '@@components/Button';
import { BUTTON_THEME } from '@@components/Button/constants';
import Flex from '@@components/Flex';
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
        <Button.Xlarge theme={BUTTON_THEME.SOLID}>로그인</Button.Xlarge>
      </Flex.Vertical>
      <Flex.Horizontal className='sns_container'>{/* 카카오, 네이버, 구글, 애플 */}</Flex.Horizontal>
    </StyledLoginContainer>
  );
}

export default LoginContainer;
