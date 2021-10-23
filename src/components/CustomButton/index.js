import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

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
    loadingApi = false,
    left = false
}) => {
    const Icon = type || null

    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            {left && Icon && <Icon style={iconStyle} name={name} size={size || 24} color={color || "white"} />}
            <Text style={titleStyle}>{loadingApi ? <ActivityIndicator size={'small'} color={'red'} /> : title}
                {boldText && <Text style={{ fontWeight: 'bold' }}> {boldText}</Text>}</Text>
            {!left && Icon && <Icon style={iconStyle} name={name} size={size || 24} color={color || "white"} />}
        </TouchableOpacity>
    )
}