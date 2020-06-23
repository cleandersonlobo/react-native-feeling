import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from 'styles';
import { LabelsContext, LabelContext } from 'contexts';
import Label from './Label';

const { add, round, divide } = Animated;

const Labels: React.FC = () => {
  const {
    x,
    size,
    options,
    field,
    optionsColor = [colors.PRIMARY_COLOR, 'gray'],
    align = 'top',
  } = React.useContext(LabelsContext);
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
      {options &&
        options.map((option: LabelOptions, i: number) => (
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
