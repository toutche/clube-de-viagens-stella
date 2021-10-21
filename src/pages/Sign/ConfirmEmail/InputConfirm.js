import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const ConfirmEmail = () => {
    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()
    const input4 = useRef()

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                ref={input1}
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                ref={input2}
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                ref={input3}
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                ref={input4}
                maxLength={1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        borderBottomWidth: 1.5,
        borderColor: 'white',
        marginHorizontal: 5
    }
})

export default ConfirmEmail