import React from 'react';
import { TouchableOpacity } from 'react-native';

export default ({
    containerStyle,
    name,
    type,
    onPress,
    size,
    color
}) => {
    const Icon = type
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Icon name={name} size={size || 24} color={color || "white"} />
        </TouchableOpacity>
    )
}