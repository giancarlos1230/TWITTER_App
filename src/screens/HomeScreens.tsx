import React, { useState, useEffect } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigators/MainStackNavigator';

type Props = NativeStackScreenProps<MainStackParamList, 'HomeScreen'>;


const HomeScreen = ({ navigation }: Props) => {
  const [tweetsData, setTweetsData] = useState([])

  const getTweets = async () => {
    const resp = await fetch('https://hidfzr.deta.dev/')
    const data = await resp.json()

    setTweetsData(data.data)
  }

  useEffect(() => {
    getTweets()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>HomeScreen</Text>
      {
        tweetsData.map(tweet => (
          <View key={tweet.id}>
          <Text> {tweet.tweet_text}</Text>
      <Button
        title="Detalles"
        onPress={() => navigation.navigate('TweetDetailScreen',{
            id: tweet.id,
            tweet_text: tweet.tweet_text,
        })}/>
    </View>
  ))
}

</View>
);

}

export default HomeScreen