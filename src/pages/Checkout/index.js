import React from 'react';
import { View } from 'react-native';
import BodyCheckout from './BodyCheckout';
import HeaderCheckout from './HeaderCheckout';

// import { Container } from './styles';

const Checkout = () => {
    return (
        <View>
            <HeaderCheckout />
            <BodyCheckout />
        </View>
    )
}

export default Checkout