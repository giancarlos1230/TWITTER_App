import React, { useState, useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigators/MainStackNavigator';


type Props = NativeStackScreenProps<MainStackParamList, 'HomeScreen'>;


interface Tweet {
    id: number,
    user_id: number,
    tweet_text: string,
    tweet_date: string,
}

const HomeScreen = ({ navigation }: Props) => {
    const [tweetsData, setTweetsData] = useState<Tweet[]>([])

    const getTweets = async () => {
        const resp = await fetch('https://hidfzr.deta.dev/')
        const data = await resp.json()

        setTweetsData(data.data)
    }

    const eliminarTweet = async (id: number) => {
        const resp = await fetch(`https://hidfzr.deta.dev/tweets/${id}`, {
            method: 'DELETE'
        })
        const data = await resp.json()
        console.log(data);
        getTweets()
    }

    const crearTweet = async () => {
        const form = {
            "user_id": 1,
            "tweet_text": "F en el chat"
        }
        const resp = await fetch(`https://hidfzr.deta.dev/tweets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const data = await resp.json()
        console.log(data);
    }

    const actualizarTweet = async (id: number) => {
        const form = {
            "tweet_text": "Actualizado...."
        }
        const resp = await fetch(`https://hidfzr.deta.dev/tweets/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const data = await resp.json()
        console.log(data);
    }

    useEffect(() => {
        getTweets()
    }, [])

    return ( <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 40 }}>Home Screen</Text>
            <Button
                title="Nuevo"
                onPress={() => crearTweet()}
            />
            {
                tweetsData.map(tweet => (
                    <View key={tweet.id} style={{
                        width: '95%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: 'pink',
                        marginBottom: 4,
                        paddingVertical: 8,
                        paddingHorizontal: 5,
                        borderRadius: 5
                    }}>
                        <Text>{tweet.tweet_text}</Text>
                        <View>

                            <Button
                                title="Detalles"
                                onPress={() => navigation.navigate('TweetDetailScreen', {
                                    id: tweet.id,
                                    tweet_text: tweet.tweet_text
                                })}
                            />
                            <Button
                                title="Eliminar"
                                onPress={() => eliminarTweet(tweet.id)}
                            />
                            <Button
                                title="Actualizar"
                                onPress={() => actualizarTweet(tweet.id)}
                            />
                        </View>

                    </View>
                ))
            }
        </View>
        </ScrollView>
        );
}

export default HomeScreen