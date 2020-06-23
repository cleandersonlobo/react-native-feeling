import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/Home/Home';

const MainStack = createStackNavigator();

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
    </MainStack.Navigator>
  );
};

export default RouteStack;
