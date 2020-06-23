import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/Home/Home';
import Feelings from 'screens/Feelings/Feelings';
import gloablStyle from 'styles';

const MainStack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 2000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const RouteStack: React.FC = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Feelings"
        component={Feelings}
        options={{
          headerTitle: 'How are your feeling?',
          headerTitleStyle: gloablStyle.headerTitleStyle,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            paddingLeft: 15,
            elevation: 0,
          },
          headerTitleAllowFontScaling: true,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </MainStack.Navigator>
  );
};

export default RouteStack;
