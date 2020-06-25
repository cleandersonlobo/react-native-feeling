/* eslint-disable @typescript-eslint/no-var-requires */
import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';
import App from './src/App';
import { name as appName } from './app.json';

enableScreens();
require('react-native').unstable_enableLogBox();

AppRegistry.registerComponent(appName, () => App);
