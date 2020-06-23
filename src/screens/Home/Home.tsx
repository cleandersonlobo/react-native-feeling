import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { FeelingSlider, FeelingStatus, Button } from 'components';
import styles from 'styles';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  function navigateTo(): void {
    navigation.navigate('Feelings');
  }
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
          <Button onPress={navigateTo} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
