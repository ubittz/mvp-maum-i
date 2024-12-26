import styled from 'styled-components';

import LoginContainer from '@@pages/Login/parts/LoginContainer';
const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Login() {
  return (
    <StyledLogin>
      <LoginContainer />
    </StyledLogin>
  );
}

export default Login;
