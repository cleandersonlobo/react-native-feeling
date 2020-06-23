import * as React from 'react';
import { mixColor } from 'react-native-redash';
import { TouchableWithoutFeedback } from 'react-native';
import Animated from 'react-native-reanimated';
import style from 'styles';
import { LabelContext, LabelsContext } from 'contexts';
import styles from './styles';

const { cond, eq, call, useCode, round, divide } = Animated;

const Label: React.FC = () => {
  const [active, setActive] = React.useState(false);
  const {
    field,
    i,
    align,
    optionsColor,
    option,
    runAnimation,
    size,
  } = React.useContext(LabelContext);
  const index = round(divide(runAnimation, size));
  const { handleChange } = React.useContext(LabelsContext);

  const isActive = eq(index, i);

  useCode(
    () =>
      cond(
        isActive,
        call([], () => setActive(true)),
        call([], () => setActive(false)),
      ),
    [index],
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

  const handleOnPress = React.useCallback(() => {
    handleChange(cursor, option);
  }, [cursor, option, handleChange]);

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
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
          {active && align === 'top' ? '%' : ''}
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
    </TouchableWithoutFeedback>
  );
};

export default Label;
