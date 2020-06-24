import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import gloablStyle, { colors } from 'styles';

interface Props {
  backgroundColor?: string;
  color?: string;
}

const Loading: React.FC<Props> = ({
  backgroundColor = colors.PRIMARY_COLOR,
  color = '#ffffff',
}) => {
  return (
    <SafeAreaView
      style={[
        gloablStyle.container,
        { justifyContent: 'center', alignItems: 'center' },
        { backgroundColor },
      ]}
    >
      <View>
        <BallIndicator size={50} color={color} />
      </View>
    </SafeAreaView>
  );
};

export default Loading;
