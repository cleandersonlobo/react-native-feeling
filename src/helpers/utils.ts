import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';

const config: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 2000,
    damping: 300,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export const transitionSpec = {
  open: config,
  close: config,
};
