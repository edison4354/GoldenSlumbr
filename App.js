// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login/LoginScreen.js'
import SignUp from './src/screens/login/SignUpScreen.js'
import Sleep from './src/screens/getting_started/SleepScreen.js'
import FitbitConnect from './src/screens/getting_started/ConnectionScreen.js'
import FitbitIntegration from './src/screens/getting_started/FitbitIntegration.js'
import Data from './src/screens/main/DataScreen.js'

function LoginScreen() {
  return (
    <Login/>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function SignUpScreen() {
  return (
    <SignUp/>
  );
}

function SleepScreen() {
  return (
    <Sleep/>
  );
}

function FitbitConnectScreen() {
  return (
    <FitbitConnect/>
  );
}

function FitbitIntegrationScreen() {
  return (
    <FitbitIntegration/>
  );
}

function DataScreen() {
  return (
    <Data/>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Sleep" component={SleepScreen} />
        <Stack.Screen name="FitbitConnect" component={FitbitConnectScreen} />
        <Stack.Screen name="FitbitIntegration" component={FitbitIntegrationScreen} />
        <Stack.Screen name="Data" component={DataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;