import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import gloablStyle from 'styles';

const Loading: React.FC = () => {
  return (
    <SafeAreaView
      style={[
        gloablStyle.safeArea,
        { justifyContent: 'center', alignItems: 'center' },
      ]}
    >
      <View>
        <BallIndicator size={50} color="#ffffff" />
      </View>
    </SafeAreaView>
  );
};

export default Loading;
