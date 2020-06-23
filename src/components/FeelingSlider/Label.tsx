import * as React from 'react';
import { mixColor, withTransition } from 'react-native-redash';
import { TouchableWithoutFeedback } from 'react-native';
import Animated, { call, useCode } from 'react-native-reanimated';
import styles from 'styles';
import { LabelContext } from './Labels';

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
  const fontWeight = cond(isActive, 'bold', '400');
  const opacity = cond(isActive, 0, 1);
  const opacityDescription = cond(isActive, 1, 0.7);
  const color = mixColor(
    cond(isActive, 0, 1),
    optionsColor[0],
    optionsColor[1],
  );
  const cursor = size * i;
  const translateY = x.interpolate({
    inputRange: [cursor - (size - 5), cursor, cursor + (size + 5)],
    outputRange: [0, align === 'top' ? -10 : 40, 0],
    extrapolate: Animated.Extrapolate.CLAMP,
  });
  const fontSize = x.interpolate({
    inputRange: [cursor - (size - 5), cursor, cursor + (size + 5)],
    outputRange: [12, align === 'top' ? 24 : 14, 12],
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  function handleOnPress(): void {
    x.setValue(cursor);
  }

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <Animated.View style={styles.container}>
        <Animated.Text
          style={{
            color,
            textAlign: 'center',
            transform: [{ translateY }],
            fontSize,
            opacity: opacityDescription,
            fontWeight,
          }}
        >
          {description}
          {active && align === 'top' ? '%' : ''}
        </Animated.Text>
        {field === 'level' ? (
          <Animated.Text
            style={{
              color,
              textAlign: 'center',
              fontSize: 9,
              opacity,
            }}
          >
            |
          </Animated.Text>
        ) : null}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Label;
