import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from '../../utils/variables';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({
    title,
    iconName,
    iconSize,
    marginLeft,
    style,
    color = PRIMARY_COLOR,
    onPress
}) => {

    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <MaterialCommunityIcons name={iconName} size={iconSize} color={color} />
            <Text style={[styles.text, { marginLeft, color }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 13.5,
        fontFamily: FONT_DEFAULT_STYLE,
    }
})


