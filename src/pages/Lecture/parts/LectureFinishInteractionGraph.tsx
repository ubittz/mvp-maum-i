import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { StatisticValueGray, StatisticValueYellow } from '../icons';
import { Statistics } from '../types';

const GraphContainer = styled.div`
  display: flex;
  width: 100%;
  height: 244px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
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
  justify-content: flex-end;
  width: 304px;
  align-self: center;

  .graph_value__container {
    align-items: flex-end;
    justify-content: space-between;
    height: 177px;
    border-left: 1px solid ${COLORS.GRAY_SCALE_100};
    border-bottom: 1px solid ${COLORS.GRAY_SCALE_100};
    padding: 0 35px;
  }
`;

const GraphValue = styled(Flex.Vertical)<{ value: number; maxValue: number; isAverage?: boolean }>`
  height: ${({ value, maxValue }) => (value / maxValue) * 180}px;
  align-items: center;
  gap: 12px;
  max-height: 234px;
  min-height: 60px;
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

interface LectureFinishInteractionGraphProps {
  interaction?: Statistics['interaction'];
  averageInteraction?: Statistics['interaction'];
}

function LectureFinishInteractionGraph({ interaction, averageInteraction }: LectureFinishInteractionGraphProps) {
  const maxValue = Math.max(interaction ?? 0, averageInteraction ?? 0);

  return (
    <GraphContainer>
      <Graph>
        <Container>
          <Flex.Horizontal className='graph_value__container'>
            {interaction && averageInteraction && (
              <>
                <GraphValue maxValue={maxValue} value={averageInteraction} isAverage={true}>
                  <Flex.Horizontal className='icon'>
                    <StatisticValueGray />
                    <Typography.Subtitle2 className='icon__label'>{averageInteraction}회</Typography.Subtitle2>
                  </Flex.Horizontal>
                  <div className='value' />
                </GraphValue>
                <GraphValue maxValue={maxValue} value={interaction}>
                  <Flex.Horizontal className='icon'>
                    <StatisticValueYellow />
                    <Typography.Subtitle2 className='icon__label'>{interaction}회</Typography.Subtitle2>
                  </Flex.Horizontal>
                  <div className='value' />
                </GraphValue>
              </>
            )}
          </Flex.Horizontal>
          <GraphLabelContainer>
            <Typography.Subtitle3>전체 사용자 평균</Typography.Subtitle3>
            <Typography.Subtitle3>이번 회차 상호작용 정도</Typography.Subtitle3>
          </GraphLabelContainer>
        </Container>
      </Graph>
    </GraphContainer>
  );
}

export default LectureFinishInteractionGraph;
