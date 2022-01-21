import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ValuePackage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Valor do pacote</Text>
            <Text style={styles.subTitle}>R$ 15.999,00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 100,
        backgroundColor: '#ff1324',
        borderWidth: 2,
        elevation: 5,
        borderColor: 'rgba(0,0,0,0.01)'
    },
    title: {
        color: 'white',
        fontSize: 12,
        marginBottom: -2
    },
    subTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default ValuePackage