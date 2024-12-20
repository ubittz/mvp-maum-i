import styled from 'styled-components';
import ClickAnimationView from '@@components/AnimationView/ClickAnimationView';
import animation1 from '@@assets/images/animation1.riv';
const StyledHome = styled.div``;

function Home() {
  return (
    <StyledHome>
      <ClickAnimationView
        params={{ src: animation1, autoplay: true, animations: ['Timeline 1', 'Timeline 2', 'Timeline 3', 'Timeline 4'] }}
        maxTouchCount={4}
      />
    </StyledHome>
  );
}

export default Home;
