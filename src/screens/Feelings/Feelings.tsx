/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  RefreshControl,
} from 'react-native';
import globalStyles from 'styles';
import { Loading } from 'components';
import FlashMessage from 'react-native-flash-message';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { EmotionTypes } from 'store/ducks/emotion';
import { Circle, CIRCLE_WIDTH } from './styles';
import EmptyList from './EmptyList';

const Item = React.lazy(() => import('./Item'));
const Feelings: React.FC = () => {
  const { loading, emotions } = useSelector(
    (state: StoreState) => state.emotion,
    shallowEqual,
  );
  const dispatch = useDispatch();
  function handleOnRefresh(): void {
    dispatch({ type: EmotionTypes.LOAD_REQUEST });
  }

  return (
    <SafeAreaView style={[globalStyles.safeArea, { paddingTop: 10 }]}>
      <StatusBar barStyle="light-content" />
      <React.Suspense fallback={<Loading />}>
        <FlatList
          data={emotions}
          refreshControl={
            <RefreshControl
              progressBackgroundColor="#ffffff"
              tintColor="#ffffff"
              refreshing={loading}
              onRefresh={handleOnRefresh}
            />
          }
          ListEmptyComponent={<EmptyList onPress={handleOnRefresh} />}
          keyExtractor={(item: EmotionProps) => item.name}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 10,
          }}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <React.Suspense fallback={<Circle size={CIRCLE_WIDTH} />}>
              <Item item={item} />
            </React.Suspense>
          )}
        />
      </React.Suspense>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

export default Feelings;
