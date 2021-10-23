import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const GetLocation = ({
    text = '',
    onChange
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <AntDesign
                    size={22}
                    color={'red'}
                    name={'search1'}
                />
                <TextInput
                    placeholder={'Digite o seu endereço'}
                    style={styles.input}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        marginVertical: 10,
        width: '100%',
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '85%',
        flexDirection: 'row',
        height: 40,
        borderWidth: 1,
        borderRadius: 100,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        borderColor: '#d1d1d1'
    },
    input: {
        flex: 1,
        fontSize: 15,
        marginLeft: 10
    }
})

export default GetLocation