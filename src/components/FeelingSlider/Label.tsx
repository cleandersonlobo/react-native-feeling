import * as React from 'react';
import { mixColor } from 'react-native-redash';
import Animated from 'react-native-reanimated';
import style from 'styles';
import { LabelsContext } from 'contexts';
import { useDispatch } from 'react-redux';
import { FeelingActions } from 'store/ducks/feeling';
import { State } from 'react-native-gesture-handler';
import styles from './styles';

const { cond, eq, call, useCode, round, divide } = Animated;

interface Props {
  i: number;
  option: FeelingProps;
}

const Label: React.FC<Props> = ({ option, i }) => {
  const {
    field,
    align,
    optionsColor,
    runAnimation,
    size,
    state: stateGesture,
  } = React.useContext(LabelsContext);
  const [percentText, setActive] = React.useState('');
  const dispatch = useDispatch();
  const index = round(divide(runAnimation, size));
  const handleChange = React.useCallback(() => {
    dispatch(FeelingActions.changeFeeling(option));
  }, [dispatch, option]);

  const isActive = eq(index, i);
  const onGesture = eq(stateGesture, State.END);

  useCode(
    () =>
      cond(
        isActive,
        call([], () => {
          if (align === 'top') setActive('%');
        }),
        call([], () => {
          if (align === 'top') setActive('');
        }),
      ),
    [onGesture],
  );

  useCode(
    () =>
      cond(
        onGesture,
        cond(
          isActive,
          call([], () => {
            if (align === 'top') handleChange();
          }),
        ),
      ),
    [onGesture, isActive],
  );

  const description = option[field];

  const color = mixColor(
    cond(isActive, 0, 1),
    optionsColor[0],
    optionsColor[1],
  );
  const cursor = size * i;
  const inputRange = [cursor - size, cursor, cursor + size];
  const fontWeight = cond(isActive, 'bold', '400');
  const opacityDescription = runAnimation.interpolate({
    inputRange,
    outputRange: [0.8, 1, 0.8],
    extrapolate: Animated.Extrapolate.CLAMP,
  });
  const opacity = runAnimation.interpolate({
    inputRange,
    outputRange: [1, 0, 1],
    extrapolate: Animated.Extrapolate.CLAMP,
  });
  const translateY = runAnimation.interpolate({
    inputRange,
    outputRange: [0, align === 'top' ? -24 : 40, 0],
    extrapolate: Animated.Extrapolate.CLAMP,
  });
  const fontSize = runAnimation.interpolate({
    inputRange,
    outputRange: [12, align === 'top' ? 30 : 16, 14],
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  return (
    <Animated.View style={style.container}>
      <Animated.Text
        style={[
          styles.text,
          {
            color,
            transform: [{ translateY }],
            fontSize,
            opacity: opacityDescription,
            fontWeight,
          },
        ]}
      >
        {description}
        {align === 'top' && percentText}
      </Animated.Text>
      {field === 'level' ? (
        <Animated.Text
          style={[
            styles.text,
            {
              color,
              fontSize: 9,
              opacity,
            },
          ]}
        >
          |
        </Animated.Text>
      ) : null}
    </Animated.View>
  );
};

export default React.memo(Label);
