import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { FeelingSlider, FeelingStatus, Button } from 'components';
import styles from 'styles';
import { useNavigation, StackActions } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  function navigateTo(): void {
    navigation.dispatch(StackActions.push('Feelings'));
  }
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
          <Button onPress={navigateTo} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
