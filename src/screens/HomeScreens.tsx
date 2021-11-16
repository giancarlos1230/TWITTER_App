import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default FeedScreen

const HomeScreen = ({navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('FeedScreen', {
          itemId: 86,
              name: 'anything you want here',
            })}
        />
      </View>
    );
  }

  export default HomeScreen