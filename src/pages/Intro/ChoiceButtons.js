import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const ChoiceButtons = ({ data, index, onPress }) => {
    return (
        <View style={styles.container}>
            {data.map((item, key) => {
                const bool = index === key ? true : false

                return (
                    <TouchableOpacity onPress={() => onPress(key)} style={[styles.button, {
                        backgroundColor: bool ? 'white' : 'transparent',
                        borderWidth: !bool ? 1 : 0
                    }]} key={key}>
                        <Text style={[styles.text, {
                            color: bool ? 'red' : 'white'
                        }]}>{item.button}</Text>
                    </TouchableOpacity>
                )
            })}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        paddingHorizontal: 25,
        borderColor: 'white',
        borderRadius: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15
    }
})

export default ChoiceButtons