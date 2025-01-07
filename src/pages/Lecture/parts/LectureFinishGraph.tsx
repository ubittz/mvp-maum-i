import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { StatisticValueGray, StatisticValueYellow } from '../icons';

interface StatisticsValue {
  childValue: number;
  parentValue: number;
}

const GraphContainer = styled.div`
  display: flex;
  width: 100%;
  height: 244px;
  border-radius: 12px;
  align-items: center;
`;

const Graph = styled(Flex.Vertical)`
  flex: 1;
  display: relative;
  height: 190px;
  border-radius: 8px;
`;

const Container = styled(Flex.Vertical)`
  position: relative;
  margin-top: 20px;
  width: 304px;
  justify-content: flex-end;
  width: 100%;

  .graph_value__container {
    align-items: flex-end;
    justify-content: space-between;
    border-left: 1px solid ${COLORS.GRAY_SCALE_100};
    border-bottom: 1px solid ${COLORS.GRAY_SCALE_100};
    padding: 0 35px;
    height: 177px;
  }
`;

const GraphValue = styled(Flex.Vertical)<{ maxValue: number; value: number; isAverage?: boolean }>`
  height: ${({ value, maxValue }) => (value / maxValue) * 180}px;
  align-items: center;
  gap: 12px;
  min-height: 100px;
  .icon {
    position: relative;
    width: 70px;
    height: 48px;
    align-items: center;

    .icon__label {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -65%);
      color: ${COLORS.GRAY_SCALE_800};
    }
  }
  .value {
    width: 32px;
    background-color: ${({ isAverage }) => (isAverage ? COLORS.GRAY_SCALE_100 : COLORS.MUSTARD_500)};
    height: ${({ value }) => value + 100}px;
    border-radius: 12px;
  }
`;

const GraphLabelContainer = styled(Flex.Horizontal)`
  padding: 9px 8px 26px;
  justify-content: space-between;
  margin-top: auto;
  & > p {
    color: ${COLORS.GRAY_SCALE_600};
  }
`;

interface LectureFinishGraphProps {
  statisticsValue?: StatisticsValue;
  averageStatisticsValue?: StatisticsValue;
}

function LectureFinishGraph({ statisticsValue, averageStatisticsValue }: LectureFinishGraphProps) {
  const maxValue = Math.max(
    statisticsValue?.childValue ?? 0,
    statisticsValue?.parentValue ?? 0,
    averageStatisticsValue?.childValue ?? 0,
    averageStatisticsValue?.parentValue ?? 0
  );

  return (
    <GraphContainer>
      <Graph>
        <Container>
          <Flex.Horizontal className='graph_value__container'>
            <GraphValue maxValue={maxValue} value={averageStatisticsValue?.childValue ?? 0} isAverage={true}>
              <Flex.Horizontal className='icon'>
                <StatisticValueGray />
                <Typography.Subtitle2 className='icon__label'>{averageStatisticsValue?.childValue ?? 0}회</Typography.Subtitle2>
              </Flex.Horizontal>
              <div className='value' />
            </GraphValue>
            <GraphValue maxValue={maxValue} value={averageStatisticsValue?.parentValue ?? 0} isAverage={true}>
              <Flex.Horizontal className='icon'>
                <StatisticValueGray />
                <Typography.Subtitle2 className='icon__label'>{averageStatisticsValue?.parentValue ?? 0}회</Typography.Subtitle2>
              </Flex.Horizontal>
              <div className='value' />
            </GraphValue>
            <GraphValue maxValue={maxValue} value={statisticsValue?.childValue ?? 0}>
              <Flex.Horizontal className='icon'>
                <StatisticValueYellow />
                <Typography.Subtitle2 className='icon__label'>{statisticsValue?.childValue ?? 0}회</Typography.Subtitle2>
              </Flex.Horizontal>
              <div className='value' />
            </GraphValue>
            <GraphValue maxValue={maxValue} value={statisticsValue?.parentValue ?? 0}>
              <Flex.Horizontal className='icon'>
                <StatisticValueYellow />
                <Typography.Subtitle2 className='icon__label'>{statisticsValue?.parentValue ?? 0}회</Typography.Subtitle2>
              </Flex.Horizontal>
              <div className='value' />
            </GraphValue>
          </Flex.Horizontal>
          <GraphLabelContainer>
            <Typography.Subtitle3>전체 사용자 평균(아이)</Typography.Subtitle3>
            <Typography.Subtitle3>전체 사용자 평균(성인)</Typography.Subtitle3>
            <Typography.Subtitle3>이번 회차 참여도(아이)</Typography.Subtitle3>
            <Typography.Subtitle3>이번 회차 참여도(성인)</Typography.Subtitle3>
          </GraphLabelContainer>
        </Container>
      </Graph>
    </GraphContainer>
  );
}

export default LectureFinishGraph;
