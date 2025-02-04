import styled from 'styled-components';

import { logoIcon } from '@@assets/icons';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledFooter = styled(Flex.Horizontal)`
  flex: 1;
  margin-top: auto;
  width: 100%;
  height: 72px;
  background-color: ${COLORS.MAIN_200};
  padding: 25px 37px;
  justify-content: space-between;

  .left_container {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & img {
      width: 65px;
      height: 25px;
      margin-bottom: 2px;
    }
  }

  .right_container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 40px;

    & > * {
      color: ${COLORS.MAIN_500};
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Flex.Horizontal className='left_container'>
        <img src={logoIcon} alt='logo' />
      </Flex.Horizontal>
      <Flex.Horizontal className='right_container'>
        <Typography.Caption2>
          사업자정보 (주)컬러풀인터렉션
          <br />
          대표자명 최석범
        </Typography.Caption2>
        <Typography.Caption2>
          사업자등록번호 389-81-03613
          <br />
          주소 서울특별시 서초구 서초대로73길 40
        </Typography.Caption2>
        <Typography.Caption2>
          (주)마음아이 고객센터
          <br />
          운영시간 : 10:00 ~ 17:00
        </Typography.Caption2>
        <Typography.Caption2>
          이메일 : uri@thegonggam.co.kr
          <br />
          연락처 : 1800 - 5036
        </Typography.Caption2>
      </Flex.Horizontal>
    </StyledFooter>
  );
}

export default Footer;
