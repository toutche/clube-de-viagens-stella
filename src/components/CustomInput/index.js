import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({
    value,
    containerStyle,
    onChangeText,
    inputStyle,
    type,
    name,
    size,
    color,
    placeholder
}) => {
    const Icon = type || null

    return (
        <View style={[styles.container, containerStyle]}>
            <Icon name={name} size={size || 24} color={color || "white"} />
            <TextInput
                style={[styles.input, inputStyle]}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={'#d1d1d1'}
                onChangeText={text => onChangeText(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        color: 'white',
        fontSize: 14.5
    }
})

export default CustomInput