import React, { useState, useEffect } from 'react';

import { useRive, UseRiveParameters, Rive } from 'rive-react';

interface ClickAnimationContainerProps {
  params: UseRiveParameters;
  maxTouchCount: number;
  size?: {
    width: number;
    height: number;
  };
}

const ClickAnimationContainer: React.FC<ClickAnimationContainerProps> = ({ params, maxTouchCount, size = { width: 600, height: 500 } }) => {
  const [isRunning, setIsRunning] = useState(false); // 애니메이션 상태 관리
  const [touchCount, setTouchCount] = useState(0);

  const { RiveComponent, rive } = useRive(params);

  const handleFinish = (rive: Rive) => {
    rive.reset();
    setTouchCount(0);
  };

  // 애니메이션의 타임라인 전환 (순차적)
  useEffect(() => {
    if (rive && params?.animations) {
      if (isRunning && touchCount < maxTouchCount) {
        rive.reset();
        rive.play(params.animations[touchCount]);
      } else {
        handleFinish(rive);
      }
    }
  }, [touchCount, isRunning, rive]);

  const handleClick = () => {
    setIsRunning(true);
    if (touchCount < maxTouchCount) {
      setTouchCount((prev) => prev + 1);
    } else {
      setTouchCount(0);
      setIsRunning(false);
    }
  };

  return (
    <div>
      <div style={{ width: size.width, height: size.height }}>
        <RiveComponent onClick={() => handleClick()} />
      </div>
    </div>
  );
};

export default ClickAnimationContainer;
