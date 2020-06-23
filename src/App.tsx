import React from 'react';
import { SafeAreaView, ScrollView, View, StatusBar } from 'react-native';
import { FeelingSlider } from 'components';
import styles, { Text } from './styles';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeHeader} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          bounces={false}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.container}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>I'm Felling</Text>
            <Text>Slightly Okay</Text>
            <Text>Choose the intensity of your feeling</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FeelingSlider />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
