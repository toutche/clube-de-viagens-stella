import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const ConfirmEmail = ({

}) => {
    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()
    const input4 = useRef()

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')

    useEffect(() => {
        setTimeout(() => input1.current.focus(), 500)
    }, [])

    return (
        <View style={styles.container}>
            <TextInput
                ref={input1}
                style={styles.input}
                value={value1}
                onChangeText={text => {
                    setValue1(text)
                    if (text) input2.current.focus()
                }}
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                ref={input2}
                value={value2}
                onChangeText={text => {
                    setValue2(text)
                    if (text) input3.current.focus()
                }}
                maxLength={1}
            />
            <TextInput
                value={value3}
                onChangeText={text => {
                    setValue3(text)
                    if (text) input4.current.focus()
                }}
                style={styles.input}
                ref={input3}
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                ref={input4}
                value={value4}
                onChangeText={text => setValue4(text)}
                maxLength={1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        borderBottomWidth: 1.5,
        borderColor: 'white',
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        paddingHorizontal: 5,
        marginHorizontal: 10
    }
})

export default ConfirmEmail