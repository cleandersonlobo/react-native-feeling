import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/Home/Home';
import Feelings from 'screens/Feelings/Feelings';
import gloablStyle, { colors } from 'styles';
import { transitionSpec } from 'helpers/utils';

const MainStack = createStackNavigator();

const RouteStack: React.FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Feelings">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: '#000000',
          headerBackTitleVisible: false,
          headerTitle: '',
          headerStyle: gloablStyle.headerStyles,
          headerLeftContainerStyle: gloablStyle.headerLeftContainerStyle,
          transitionSpec,
        }}
      />
      <MainStack.Screen
        name="Feelings"
        component={Feelings}
        options={{
          headerTitle: 'How are your feeling?',
          headerTitleStyle: gloablStyle.headerTitleStyle,
          headerTransparent: false,
          headerBackTitleVisible: false,
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: colors.PRIMARY_COLOR,
            ...gloablStyle.headerStyles,
          },
          headerLeftContainerStyle: gloablStyle.headerLeftContainerStyle,
          headerTitleAllowFontScaling: true,
          transitionSpec,
        }}
      />
    </MainStack.Navigator>
  );
};

export default RouteStack;
