import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import backgroundImage from '@@assets/images/background.png';
import LoginContainerBox from '@@pages/Login/parts/LoginContainerBox';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledLogin = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${backgroundImage});
    background-size: cover;
    filter: grayscale(100%);
    z-index: -1;
  }
`;

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(pathGenerator(PAGES.HOME));
  };
  const handleRegister = () => {
    navigate(pathGenerator(PAGES.AUTH) + '/register');
  };
  const handleFindIdPw = () => {
    navigate(pathGenerator(PAGES.AUTH) + '/find');
  };

  return (
    <StyledLogin>
      <LoginContainerBox onLogin={handleLogin} onFindIdPw={handleFindIdPw} onRegister={handleRegister} />
    </StyledLogin>
  );
}

export default Login;
