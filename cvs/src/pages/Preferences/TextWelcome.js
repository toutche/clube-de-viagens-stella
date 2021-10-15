import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextWelcome = ({ title, subTitle, textStyle }) => {
    return (
        <View style={styles.container}>
            <Text style={textStyle}>{title || ''}</Text>
            <Text style={textStyle}>{subTitle || ''}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        paddingBottom: 10,
        alignItems: 'center'
    }
})


export default TextWelcome