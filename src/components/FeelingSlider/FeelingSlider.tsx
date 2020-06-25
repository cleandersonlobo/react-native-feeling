/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { LABELS_DATA } from 'helpers';
import {
  clamp,
  snapPoint,
  timing,
  usePanGestureHandler,
} from 'react-native-redash';
import { State } from 'react-native-gesture-handler';
import { LabelsContext } from 'contexts';
import { colors } from 'styles';
import Cursor from './Cursor';
import Labels from './Labels';
import styles, { COUNT_LABELS, HEIGHT_CURSOR } from './styles';

const { Value, cond, eq, set, useCode, add } = Animated;
interface Props {
  value: FeelingProps;
}

const FeelingSlider: React.FC<Props> = ({ value: feeling }) => {
  const cursor = useMemo(() => feeling.id * HEIGHT_CURSOR, []);
  const runAnimation = new Value(cursor);
  const snapPoints = useMemo(
    () => LABELS_DATA.map((e, i) => i * HEIGHT_CURSOR),
    [],
  );
  const {
    gestureHandler,
    velocity,
    state,
    translation,
  } = usePanGestureHandler();
  const offset = new Value(cursor);

  const value = add(offset, translation.x);

  const translateX = clamp(
    cond(
      eq(state, State.END),
      [
        set(
          offset,
          timing({
            from: value,
            to: snapPoint(value, velocity.x, snapPoints),
            duration: 300,
          }),
        ),
      ],
      value,
    ),
    0,
    (COUNT_LABELS - 1) * HEIGHT_CURSOR,
  );

  useCode(() => set(runAnimation, translateX), [runAnimation, translateX]);
  const contextValues = { runAnimation, size: HEIGHT_CURSOR, state, offset };
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <View style={styles.labelTop}>
          <LabelsContext.Provider
            value={{
              ...contextValues,
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
              ...contextValues,
              optionsColor: ['white', '#eee'],
              field: 'description',
              align: 'bottom',
            }}
          >
            <Labels />
          </LabelsContext.Provider>
          <Cursor
            size={HEIGHT_CURSOR}
            options={LABELS_DATA}
            {...{
              runAnimation,
              count: COUNT_LABELS,
              snapPoints,
              gestureHandler,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(FeelingSlider);
