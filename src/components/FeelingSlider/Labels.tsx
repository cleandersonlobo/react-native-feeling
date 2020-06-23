import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { LabelsContext, LabelContext } from 'contexts';
import Label from './Label';

const Labels: React.FC = () => {
  const {
    runAnimation,
    size,
    options,
    field,
    optionsColor,
    align = 'top',
  } = React.useContext(LabelsContext);

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
              i,
              option,
              runAnimation,
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
