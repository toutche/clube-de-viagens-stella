import React from 'react'
import { View } from 'react-native'

export default function Dot({ index, currentIndex }) {

    const bool = index === currentIndex ? true : false

    return (
        <View style={{
            backgroundColor: bool ? 'transparent' : '#e9939a',
            width: bool ? 10 : 6,
            height: bool ? 10 : 6,
            borderWidth: bool ? 2.5 : 0,
            borderColor: '#fbfbfb',
            borderRadius: 5,
            margin: 4,
        }} />
    )
}