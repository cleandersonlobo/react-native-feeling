import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { LABELS_DATA } from 'helpers';
import { clamp, onGestureEvent, snapPoint, timing } from 'react-native-redash';
import { State } from 'react-native-gesture-handler';
import Cursor from './Cursor';
import Labels from './Labels';
import styles, { COUNT_LABELS, HEIGHT_CURSOR } from './styles';

const { Value, cond, eq, set, useCode, add } = Animated;

const FeelingSlider: React.FC = () => {
  const x = new Value(0);
  const snapPoints = LABELS_DATA.map((e, i) => i * HEIGHT_CURSOR);
  const translationX = new Value(0);
  const velocityX = new Value(0);
  const state = new Value(0);
  const gestureHandler = onGestureEvent({ state, translationX, velocityX });
  const offset = new Value(State.UNDETERMINED);
  const value = add(offset, translationX);
  const translateX = clamp(
    cond(
      eq(state, State.END),
      set(
        offset,
        timing({
          from: value,
          to: snapPoint(value, velocityX, snapPoints),
          duration: 300,
        }),
      ),
      value,
    ),
    0,
    (COUNT_LABELS - 1) * HEIGHT_CURSOR,
  );

  useCode(() => set(x, translateX), [x, translateX]);

  return (
    <View style={styles.container}>
      <View style={styles.labelTop}>
        <Labels
          size={HEIGHT_CURSOR}
          options={LABELS_DATA}
          field="level"
          align="top"
          {...{ x, count: COUNT_LABELS }}
        />
      </View>
      <View style={styles.contentCursor}>
        <Labels
          size={HEIGHT_CURSOR}
          options={LABELS_DATA}
          field="feeling"
          align="bottom"
          optionsColor={['white', '#eee']}
          {...{ x, count: COUNT_LABELS }}
        />
        <Cursor
          size={HEIGHT_CURSOR}
          options={LABELS_DATA}
          {...{ x, count: COUNT_LABELS, snapPoints, gestureHandler }}
        />
      </View>
    </View>
  );
};

export default FeelingSlider;