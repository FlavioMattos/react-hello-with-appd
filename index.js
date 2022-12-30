/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// === Add the following to import the React Native Agent
import { Instrumentation, LoggingLevel } from '@appdynamics/react-native-agent';

// Initialize the instrumentation
Instrumentation.start({
  appKey: 'AD-AAB-ACA-CCJ',
  loggingLevel: LoggingLevel.VERBOSE,
});

AppRegistry.registerComponent(appName, () => App);
