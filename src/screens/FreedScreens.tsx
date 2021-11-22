import React from 'react';
import { Button, Text, View } from 'react-native';

const FeedScreen = ({navigation, route}) => {

    const { itemId, name } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>FeedScreen {itemId} {name}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('FeedScreen')}
          />
      </View>
    );
  }

  export default FeedScreen