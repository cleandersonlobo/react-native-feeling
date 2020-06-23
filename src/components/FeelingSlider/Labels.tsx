import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from 'styles';
import Label from './Label';

const { add, round, divide } = Animated;

interface LContextProps {
  field: string;
  optionsColor: string[];
  align: string;
  i: number;
  option: LabelOptions;
  index: Animated.Node<number>;
  x: Animated.Value<number>;
  size: number;
}

interface LabelProps {
  x: Animated.Value<number>;
  count?: number;
  size: number;
  options: LabelOptions[];
  field: string;
  optionsColor?: string[];
  align: string;
}

export const LabelContext = React.createContext({} as LContextProps);

const Labels: React.FC<LabelProps> = ({
  x,
  size,
  options,
  field,
  optionsColor = [colors.PRIMARY_COLOR, 'gray'],
  align = 'top',
}) => {
  const index = add(round(divide(x, size)), 1);

  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {options.map((option: LabelOptions, i) => (
        <LabelContext.Provider
          key={option.feeling}
          value={{
            field,
            optionsColor,
            align,
            index,
            i,
            option,
            x,
            size,
          }}
        >
          <Label />
        </LabelContext.Provider>
      ))}
    </View>
  );
};

export default Labels;
