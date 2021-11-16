import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const HomeScreen = ({navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('FeedScreen')}
      />
    </View>
  );
}


const FeedScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FeedScreen</Text>
     
    </View>
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer initialRouteName="FeedScreen">
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={{ title: 'Home' }} 
      />
      <Stack.Screen name="FeedScreen" component={FeedScreen}
      />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
