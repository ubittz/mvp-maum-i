import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import ContainerBox from '@@pages/Login/parts/ContainerBox';

function FindIdPw() {
  return (
    <ContainerBox title='아이디/비밀번호 찾기'>
      <Flex.Vertical className='body'>
        <Typography.Button2>아이디 찾기</Typography.Button2>
      </Flex.Vertical>
    </ContainerBox>
  );
}

export default FindIdPw;
