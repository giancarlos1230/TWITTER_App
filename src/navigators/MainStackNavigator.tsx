import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreens';
import FeedScreen from '../screens/HomeScreens';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Stack.Screen name="FeedScreen"
                component={FeedScreen}
            />
        </Stack.Navigator>

    )
}

export default MainStackNavigator