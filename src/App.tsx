import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { FeelingSlider, FeelingStatus } from 'components';
import styles from './styles';

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
          <FeelingStatus />
          <FeelingSlider />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
