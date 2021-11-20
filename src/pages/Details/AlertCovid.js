import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PRIMARY_COLOR } from '../../utils/variables';

// import { Container } from './styles';

const AlertCovid = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Alerta relativo à COVID-19: os requisitos de viagem estão mudando rapidamente, incluindo a necessidade de testes com resultados negativo antes da partida e de quarentena logo após a chegada
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 15,
        marginBottom: 15,
        marginHorizontal: 15
    },
    text: {
        color: '#e1e1e1',
        fontSize: 13
    }
})

export default AlertCovid;