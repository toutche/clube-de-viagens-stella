import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Hide = ({
    Plan = 'Gold'
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>●</Text>
            <Text style={styles.text}>{Plan}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10,
        right: 30,
        backgroundColor: '#e8bc0d',
        paddingVertical: 1,
        paddingHorizontal: 15,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
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