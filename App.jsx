import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigators/MainStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
    <MainStackNavigator/>
  </NavigationContainer>
  );
}