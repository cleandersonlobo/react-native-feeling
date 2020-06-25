/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Button, FeelingStatusLoading } from 'components';
import styles, { PlaceholderSlider } from 'styles';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useSelector, shallowEqual } from 'react-redux';

const FeelingStatus = React.lazy(() =>
  import('components/FeelingStatus/FeelingStatus'),
);
const FeelingSlider = React.lazy(() =>
  import('components/FeelingSlider/FeelingSlider'),
);

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { feeling } = useSelector(
    (state: StoreState) => state.feeling,
    shallowEqual,
  );
  const value = useMemo(() => feeling, []);

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
          <React.Suspense fallback={<FeelingStatusLoading />}>
            <FeelingStatus />
          </React.Suspense>
          <React.Suspense fallback={<PlaceholderSlider />}>
            <FeelingSlider value={value} />
            <Button onPress={navigateTo} />
          </React.Suspense>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
