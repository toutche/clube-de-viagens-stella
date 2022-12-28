import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { logScreen } from '../../services/firebase';
import { ScreenView } from '../../services/firebase/constant';
import BodyPaymentHistory from './BodyPaymentHistory';
import HeaderPaymentHistory from './HeaderPaymentHistory';

const PaymentHistory = ({ navigation }) => {
    useEffect(() => {
        logScreen(ScreenView.PaymentHistory);
    }, []);

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