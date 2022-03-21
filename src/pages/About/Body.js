import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { FONT_DEFAULT_STYLE } from '../../utils/variables';

export default ({ data, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data?.message}</Text>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('VideoScreen')}>
                <Image
                    style={styles.video}
                    source={{
                        uri: data?.data?.cover_video,
                    }}
                />
            </TouchableWithoutFeedback>

            {data?.data?.paragraphs.map((i, k) => {
                return (
                    <View key={k} style={styles.container_paragraphs}>
                        <Text style={styles.paragraphs}>{i}</Text>
                    </View>
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
        paddingBottom: 12
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
    container_paragraphs: {
        width: '100%',
    },
    paragraphs: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: '#FFF',
        fontSize: 13.5,
        marginBottom: 8
    }
})