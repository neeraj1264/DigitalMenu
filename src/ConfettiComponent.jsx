// ConfettiComponent.js
import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

const ConfettiComponent = ({ run }) => {
  const [width, height] = useWindowSize();

  return <Confetti width={width} height={height} run={run} />;
};

export default ConfettiComponent;
