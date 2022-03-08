import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { FONT_DEFAULT_STYLE } from '../../utils/variables';

export default ({ data, navigation }) => {
    const video = useRef(null);
    const [status, setStatus] = useState({});

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data?.message}</Text>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('WebView', { link: data?.data?.video })}>
                <Image
                    style={styles.video}
                    source={{
                        uri: data?.data?.cover_video,
                    }}
                />
            </TouchableWithoutFeedback>

            {data?.data?.paragraphs.map((i, k) => {
                return (
                    <Text key={k} style={styles.paragraphs}>{i}</Text>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingBottom: 35
    },
    video: {
        width: '100%',
        height: 200,
        marginVertical: 12,
    },
    title: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: '#FFF',
        paddingTop: 12,
        fontSize: 18
    },
    paragraphs: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: '#FFF',
        fontSize: 13.5,
        textAlign: 'auto',
        marginBottom: 8
    }
})