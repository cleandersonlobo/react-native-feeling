/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import MenuIcon from 'assets/icons/menu.svg';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { colors, dimensions } from 'styles';
import * as shape from 'd3-shape';
import { Svg, Path } from 'react-native-svg';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { fullWidth } = dimensions;

const line: any = shape
  .line()
  .x((d: any) => d.x)
  .y((d: any) => d.y)
  .curve(shape.curveBasis);

const platformZeroPoint: number | undefined = Platform.select({
  ios: 0,
  android: 1,
});

interface CursorProps {
  runAnimation: Animated.Value<number>;
  size: number;
  count: number;
  options: FeelingProps[];
  snapPoints: number[];
  gestureHandler: any;
}

const Cursor: React.FC<CursorProps> = ({
  runAnimation,
  count,
  size,
  options,
  gestureHandler,
}) => {
  const data = [
    { x: 0, y: platformZeroPoint },
    { x: 10, y: platformZeroPoint },
    { x: fullWidth / (count * 2), y: 30 },
    { x: fullWidth / count - 10, y: platformZeroPoint },
    { x: fullWidth / count, y: platformZeroPoint },
  ];
  const renderAnimatedBackground = (): JSX.Element => {
    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: fullWidth / options.length,
            transform: [
              {
                translateX: runAnimation,
              },
            ],
          },
        ]}
      >
        <AnimatedSvg
          width={fullWidth / options.length}
          height={size}
          style={{
            top: -(size - 1),
            transform: [
              {
                rotate: '180deg',
              },
            ],
          }}
        >
          <Path
            d={line(data)}
            strokeWidth={StyleSheet.hairlineWidth}
            fill={colors.PRIMARY_COLOR}
          />
        </AnimatedSvg>
      </Animated.View>
    );
  };

  return (
    <>
      {renderAnimatedBackground()}
      <PanGestureHandler maxPointers={1} minDist={0} {...gestureHandler}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            width: size,
            height: size - 30,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ translateX: runAnimation }],
          }}
        >
          <View
            style={{
              backgroundColor: colors.WHITE,
              width: size / 1.5,
              height: size / 1.5,
              borderRadius: size / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MenuIcon height={24} width={24} />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

export default React.memo(Cursor);
