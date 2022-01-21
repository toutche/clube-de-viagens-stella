import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../CustomButton';

const InsertCupom = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Insira seu cupom (opcional)</Text>
            <CustomButton
                containerStyle={styles.button}
                titleStyle={styles.textButton}
                title={'Aplicar'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 8,
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: '#ef091a',
        borderWidth: 1,
        borderRadius: 100,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        borderColor: 'rgba(0,0,0,0.01)',
    },
    text: {
        left: 10,
        fontSize: 14.5,
        color: 'white',
    },
    textButton: {
        fontSize: 14.5,
        color: '#e8bc0d',
        fontWeight: 'bold',
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ef091a',
        borderWidth: 1,
        borderRadius: 100,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        borderColor: 'rgba(0,0,0,0.01)'
    },
})

export default InsertCupom;