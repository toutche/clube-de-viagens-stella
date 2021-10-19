import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const CustomAvatar = ({
    item,
    containerStyle,
    imageStyle
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Image style={[styles.image, imageStyle]} source={{ uri: item }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        borderRadius: 100,
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#d90716',
        alignSelf: 'center'
    },
    image: {
        flex: 1,
        borderRadius: 100
    }
})

export default CustomAvatar