import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledStatisticRow = styled(Flex.Vertical)`
  border-radius: 12px;
  background-color: ${COLORS.GRAY_SCALE_000};
  height: 138px;

  .title__container {
    height: 32px;
    margin: 16px;
    gap: 8px;
    align-items: center;

    .title__icon {
      width: 32px;
      height: 32px;
    }

    .title__text {
      color: ${COLORS.GRAY_SCALE_800};
    }

    .sub__title__text {
      margin-top: 4px;
      color: ${COLORS.GRAY_SCALE_500};
    }
  }

  .divider {
    width: 1px;
    height: 74px;
    background-color: ${COLORS.GRAY_SCALE_100};
  }

  .content__container {
    justify-content: space-between;
    margin: 16px;
    gap: 8px;
  }
`;

interface StatisticRowProps {
  title: string;
  icon: React.ReactNode;
  subTitle?: string;
  children: React.ReactNode;
}

const StatisticRow = ({ title, icon, subTitle, children }: StatisticRowProps) => {
  return (
    <StyledStatisticRow>
      <Flex.Horizontal className='title__container'>
        {icon}
        <Typography.Subtitle2 className='title__text'>{title}</Typography.Subtitle2>
        {subTitle && <Typography.Button3 className='sub__title__text'>{subTitle}</Typography.Button3>}
      </Flex.Horizontal>
      {children}
    </StyledStatisticRow>
  );
};

export default StatisticRow;
