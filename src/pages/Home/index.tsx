import styled from 'styled-components';

import animation1 from '@@assets/images/animation1.riv';
import clickAnimation1 from '@@assets/images/clickAnimation1.riv';
import AnimationContainer from '@@components/AnimationContainer';
import ClickAnimationContainer from '@@components/AnimationContainer/ClickAnimationContainer';
import Footer from '@@components/Footer';
import FullScreen from '@@components/FullScreen';

const StyledHome = styled(FullScreen)`
  .body {
    overflow-y: hidden;
  }

  & > div {
    flex: 0 0 auto;
  }
`;

function Home() {
  return (
    <StyledHome gnb>
      <ClickAnimationContainer
        params={{ src: clickAnimation1, autoplay: true, animations: ['Timeline 1', 'Timeline 2', 'Timeline 3', 'Timeline 4'] }}
        maxTouchCount={4}
      />
      <AnimationContainer params={{ src: animation1, autoplay: true }} />
      <Footer />
    </StyledHome>
  );
}

export default Home;
