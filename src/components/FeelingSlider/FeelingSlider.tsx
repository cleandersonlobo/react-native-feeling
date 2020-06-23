import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { LABELS_DATA } from 'helpers';
import { clamp, onGestureEvent, snapPoint, timing } from 'react-native-redash';
import { State } from 'react-native-gesture-handler';
import { LabelsContext } from 'contexts';
import { colors } from 'styles';
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
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <View style={styles.labelTop}>
          <LabelsContext.Provider
            value={{
              x,
              count: COUNT_LABELS,
              size: HEIGHT_CURSOR,
              options: LABELS_DATA,
              optionsColor: [colors.PRIMARY_COLOR, 'gray'],
              field: 'level',
              align: 'top',
            }}
          >
            <Labels />
          </LabelsContext.Provider>
        </View>
        <View style={styles.contentCursor}>
          <LabelsContext.Provider
            value={{
              x,
              count: COUNT_LABELS,
              size: HEIGHT_CURSOR,
              options: LABELS_DATA,
              optionsColor: ['white', '#eee'],
              field: 'feeling',
              align: 'bottom',
            }}
          >
            <Labels />
          </LabelsContext.Provider>
          <Cursor
            size={HEIGHT_CURSOR}
            options={LABELS_DATA}
            {...{ x, count: COUNT_LABELS, snapPoints, gestureHandler }}
          />
        </View>
      </View>
    </View>
  );
};

export default FeelingSlider;
