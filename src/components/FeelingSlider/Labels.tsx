import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { LABELS_DATA } from 'helpers';
import Label from './Label';

const Labels: React.FC = () => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {LABELS_DATA.map((option: FeelingProps, i: number) => (
        <Label key={option.description} option={option} i={i} />
      ))}
    </View>
  );
};

export default Labels;
