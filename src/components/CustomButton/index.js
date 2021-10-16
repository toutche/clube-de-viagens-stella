import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default ({ containerStyle, titleStyle, title, onPress, type, name, size, color }) => {
    const Icon = type || null

    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Text style={titleStyle}>{title}</Text>
            {Icon && <Icon name={name} size={size || 24} color={color || "white"} />}
        </TouchableOpacity>
    )
}