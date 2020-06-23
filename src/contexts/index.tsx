import * as React from 'react';
import Animated from 'react-native-reanimated';

interface LContextProps {
  field: string;
  optionsColor: string[];
  align: string;
  i: number;
  option: LabelOptions;
  index: Animated.Adaptable<number>;
  x: Animated.Value<number>;
  size: number;
}

interface LabelProps {
  x: Animated.Value<number>;
  count: number;
  size: number;
  options: LabelOptions[];
  field: string;
  optionsColor: string[];
  align: string;
}

export const LabelsContext = React.createContext({} as LabelProps);

export const LabelContext = React.createContext({} as LContextProps);
