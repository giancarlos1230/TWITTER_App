import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreens';
import TweetDetailScreen from '../screens/TweetDetailScreen';

export type MainStackParamList = {
    HomeScreen: undefined;
    TweetDetailScreen: { id: number, tweet_text: string };
};


const Stack = createNativeStackNavigator<MainStackParamList>();
const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name="TweetDetailScreen"
                component={TweetDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default MainStackNavigator