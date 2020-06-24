import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from 'routes';
import { colors } from 'styles';

const App: React.FC = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: colors.PRIMARY_COLOR }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
