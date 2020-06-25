import * as React from 'react';
import Animated from 'react-native-reanimated';

interface LabelsProps {
  runAnimation: Animated.Value<number>;
  state: Animated.Value<number>;
  size: number;
  field: string;
  optionsColor: string[];
  align: string;
}

export const LabelsContext = React.createContext({} as LabelsProps);
