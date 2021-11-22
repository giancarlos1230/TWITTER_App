import React, { useState, useEffect } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
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
      <Text style={{ fontSize: 40 }}>Home Screen</Text>
      {
        tweetsData.map(tweet => (
          <Text key={tweet.id}>{tweet.tweet_text}</Text>
        ))
      }
    </View>
  );
}

export default HomeScreen