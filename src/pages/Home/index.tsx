import styled from 'styled-components';
import ClickAnimationView from '@@components/AnimationView/ClickAnimationView';
import clickAnimation1 from '@@assets/images/clickAnimation1.riv';
import animation1 from '@@assets/images/animation1.riv';
import AnimationView from '@@components/AnimationView';

const StyledHome = styled.div``;

function Home() {
  return (
    <StyledHome>
      <ClickAnimationView
        params={{ src: clickAnimation1, autoplay: true, animations: ['Timeline 1', 'Timeline 2', 'Timeline 3', 'Timeline 4'] }}
        maxTouchCount={4}
      />
      <AnimationView params={{ src: animation1, autoplay: true }} />
    </StyledHome>
  );
}

export default Home;
