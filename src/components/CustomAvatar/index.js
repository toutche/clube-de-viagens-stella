import React from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

const CustomAvatar = ({
    item,
    containerStyle,
    imageStyle,
    handlerPress
}) => {
    return (
        <TouchableWithoutFeedback onPress={handlerPress}>
            <View style={[styles.container, containerStyle]}>
                <Image style={[styles.image, imageStyle]} source={{ uri: item }} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        borderRadius: 100,
        padding: 8,
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