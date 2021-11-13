import React from 'react';
import { View } from 'react-native';
import BodyCheckout from './BodyCheckout';
import HeaderCheckout from './HeaderCheckout';

const Checkout = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderCheckout navigation={navigation} />
            <BodyCheckout />
        </View>
    )
}

export default Checkout