import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { PRIMARY_COLOR } from '../../utils/variables';
import { CreditCardInput } from "../../components/CreditInput";

const BodyCheckout = () => {

    const onChange = props => {
        console.log(props.values)
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.containerScroll}>
            <Text style={styles.title}>Informe seus dados do cartão:</Text>
            <CreditCardInput requiresName onChange={onChange} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
    },
    containerScroll: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        textAlign: 'center',
        color: '#333',
        marginVertical: 15,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default BodyCheckout;