import React, { useEffect } from 'react';

import { useRive, UseRiveParameters } from 'rive-react';

interface AnimationViewProps {
  params: UseRiveParameters;
  size?: {
    width: number;
    height: number;
  };
}

const AnimationView: React.FC<AnimationViewProps> = ({ params, size }) => {
  const { RiveComponent, rive } = useRive(params);

  useEffect(() => {
    if (rive && params?.animations) {
      rive.reset();
      rive.play(params.animations[0]);
    }
  }, [rive]);

  return (
    <div>
      <div style={{ width: size.width, height: size.height }}>
        <RiveComponent />
      </div>
    </div>
  );
};

export default AnimationView;
