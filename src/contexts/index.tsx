import * as React from 'react';
import Animated from 'react-native-reanimated';

interface LContextProps {
  field: string;
  optionsColor: string[];
  align: string;
  i: number;
  option: LabelOptions;
  runAnimation: Animated.Value<number>;
  size: number;
}

interface LabelProps {
  runAnimation: Animated.Value<number>;
  count: number;
  size: number;
  options: LabelOptions[];
  field: string;
  optionsColor: string[];
  align: string;
  handleChange(
    cursor: Animated.Adaptable<0> | number,
    option: LabelOptions,
  ): void;
}

export const LabelsContext = React.createContext({} as LabelProps);

export const LabelContext = React.createContext({} as LContextProps);
