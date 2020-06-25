import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from 'routes';
import store from 'store';
import { Provider } from 'react-redux';
import { colors } from 'styles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ backgroundColor: colors.PRIMARY_COLOR }}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
