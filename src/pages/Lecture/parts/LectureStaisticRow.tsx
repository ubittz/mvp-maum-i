import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledStatisticRow = styled(Flex.Vertical)`
  align-items: center;
  border-radius: 12px;
  background-color: ${COLORS.GRAY_SCALE_000};
  height: 138px;

  .title__container {
    align-self: flex-start;
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

  .content__container {
    margin: 0 0 28px;

    .content__text__container {
      align-items: center;
      gap: 6px;

      .sub__title__text {
        padding-right: 68px;
        font-weight: 800;
      }

      .count__text {
        color: ${COLORS.MUSTARD_500};
        font-size: 48px;
      }
      .unit__text {
        color: ${COLORS.GRAY_SCALE_800};
      }
    }

    .divider {
      width: 2px;
      height: 54px;
      background-color: ${COLORS.GRAY_SCALE_100};
      margin: 0 54px;
    }
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
      <Flex.Horizontal className='content__container'>{children}</Flex.Horizontal>
    </StyledStatisticRow>
  );
};

export default StatisticRow;
