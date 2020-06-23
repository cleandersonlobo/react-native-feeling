import React from 'react';
import { View } from 'react-native';
import { colors } from 'styles';
import { TextStatus, Emoji, SubTitle } from './styles';

const FeelingStatus: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Emoji>😠</Emoji>
      <TextStatus>I'm feeling</TextStatus>
      <TextStatus color={colors.PRIMARY_COLOR}>Slightly Okay</TextStatus>
      <SubTitle>Choose the intensity of your feeling</SubTitle>
    </View>
  );
};

export default FeelingStatus;
