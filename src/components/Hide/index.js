import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Hide = ({
    Plan = 'Gold',
    containerStyle
}) => {
    return (
        <View style={containerStyle}>

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14.5,
        color: 'white',
        marginLeft: 1,
    },
    icon: {
        fontSize: 10,
        color: 'white',
        marginRight: 1,
    }
})


export default Hide;