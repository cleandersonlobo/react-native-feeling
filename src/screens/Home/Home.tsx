import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { FeelingSlider, FeelingStatus, Button } from 'components';
import styles from 'styles';

const Home: React.FC = () => {
  return (
    <>
      <SafeAreaView style={styles.safeHeader} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          bounces={false}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.container}
        >
          <FeelingStatus />
          <FeelingSlider />
          <Button />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
