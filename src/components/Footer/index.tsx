import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledFooter = styled(Flex.Horizontal)`
  width: 100%;
  height: 72px;
  background-color: ${COLORS.MAIN_055};
  padding: 25px 37px;
  justify-content: space-between;

  .left_container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .right_container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 40px;

    & > * {
      color: ${COLORS.MAIN_060};
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Flex.Horizontal className='left_container'>
        {/* TODO: 로고 추가 */}
        <Typography.Body1>공감아이</Typography.Body1>
      </Flex.Horizontal>
      <Flex.Horizontal className='right_container'>
        <Typography.Caption>
          사업자정보 (주)공감우리
          <br />
          대표자명 남재현
        </Typography.Caption>
        <Typography.Caption>
          사업자등록번호 753-86-01432
          <br />
          주소 서울특별시 금천구 벚꽃로 286, 507-259호(가산동, 삼성리더스타워)
        </Typography.Caption>
        <Typography.Caption>
          (주)공감우리 고객센터
          <br />
          운영시간 : 10:00 ~ 17:00
        </Typography.Caption>
        <Typography.Caption>
          이메일 : uri@thegonggam.co.kr
          <br />
          연락처 : 1800 - 5036
        </Typography.Caption>
      </Flex.Horizontal>
    </StyledFooter>
  );
}

export default Footer;
