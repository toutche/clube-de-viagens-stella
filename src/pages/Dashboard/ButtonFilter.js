import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from '../../utils/variables';
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

export default ({
    title,
    iconName,
    iconSize,
    iconType = 'Material',
    marginLeft,
    style,
    color = PRIMARY_COLOR,
    onPress
}) => {
    const Icon = iconType === 'Material'
        ? MaterialCommunityIcons
        : iconType === 'SimpleLine'
        && SimpleLineIcons

    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Icon name={iconName} size={iconSize} color={color} />
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


