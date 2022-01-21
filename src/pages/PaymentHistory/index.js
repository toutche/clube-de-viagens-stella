import React from 'react';
import { StyleSheet, View } from 'react-native';
import BodyPaymentHistory from './BodyPaymentHistory';
import HeaderPaymentHistory from './HeaderPaymentHistory';

const PaymentHistory = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderPaymentHistory
                navigation={navigation}
            />
            <BodyPaymentHistory
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default PaymentHistory