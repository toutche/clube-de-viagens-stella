import React from 'react';
import { Text } from 'react-native';

const TextWithBold = ({ boldText, text, textStyle }) => {
    return (
        <Text style={textStyle}>
            {text} <Text style={{ fontWeight: 'bold' }}>{boldText}</Text>
        </Text>
    )
}

export default TextWithBold