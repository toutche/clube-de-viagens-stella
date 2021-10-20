import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default ({
    containerStyle,
    titleStyle,
    iconStyle,
    title,
    boldText,
    onPress,
    type,
    name,
    size,
    color,
    left = false
}) => {
    const Icon = type || null

    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            {left && Icon && <Icon style={iconStyle} name={name} size={size || 24} color={color || "white"} />}
            <Text style={titleStyle}>{title}
                {boldText && <Text style={{ fontWeight: 'bold' }}> {boldText}</Text>}</Text>
            {!left && Icon && <Icon style={iconStyle} name={name} size={size || 24} color={color || "white"} />}
        </TouchableOpacity>
    )
}