import React from 'react';
import { StyleSheet, View } from 'react-native';
import BodyCheckout from './BodyCheckout';
import HeaderCheckout from './HeaderCheckout';

const Checkout = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderCheckout
                navigation={navigation}
            />
            <BodyCheckout />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Checkout