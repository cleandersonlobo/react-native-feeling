import * as React from 'react';
import { mixColor, withTransition } from 'react-native-redash';
import { TouchableWithoutFeedback } from 'react-native';
import Animated, { call, useCode } from 'react-native-reanimated';
import style from 'styles';
import { LabelContext } from 'contexts';
import styles from './styles';

const { cond, eq } = Animated;

const Label: React.FC = () => {
  const [active, setActive] = React.useState(false);
  const {
    field,
    index,
    i,
    align,
    optionsColor,
    option,
    x,
    size,
  } = React.useContext(LabelContext);

  const isActive = eq(index, i + 1);
  const progress = withTransition(isActive);
  useCode(
    () =>
      cond(
        progress,
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
  const inputRange = [cursor - (size - 5), cursor, cursor + (size + 5)];
  const fontWeight = cond(isActive, 'bold', '400');
  const opacityDescription = x.interpolate({
    inputRange,
    outputRange: [0.7, 1, 0.7],
    extrapolate: Animated.Extrapolate.CLAMP,
  });
  const opacity = x.interpolate({
    inputRange,
    outputRange: [1, 0, 1],
    extrapolate: Animated.Extrapolate.CLAMP,
  });
  const translateY = x.interpolate({
    inputRange,
    outputRange: [0, align === 'top' ? -24 : 40, 0],
    extrapolate: Animated.Extrapolate.CLAMP,
  });
  const fontSize = x.interpolate({
    inputRange,
    outputRange: [12, align === 'top' ? 30 : 14, 14],
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  function handleOnPress(): void {
    //    x.setValue(cursor);

    x.setValue(cursor);
  }

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
