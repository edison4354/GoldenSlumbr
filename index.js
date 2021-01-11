/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/screens/login/LoginScreen.js'
import Sleep from './src/screens/getting_started/SleepScreen.js'
import FitbitConnect from './src/screens/getting_started/FitbitConnectScreen.js'
import Connecting from './src/screens/getting_started/ConnectingScreen.js'
import Data from './src/screens/main/DataScreen.js'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Sleep);
