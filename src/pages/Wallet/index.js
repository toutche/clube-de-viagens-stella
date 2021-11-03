import React from 'react';
import { View, StyleSheet } from 'react-native';
import BodyWallet from './BodyWallet';
import HeaderWallet from './HeaderWallet';

const Wallet = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderWallet
                navigation={navigation}
            />
            <BodyWallet />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        left: 5,
        top: 25,
        padding: 10,
        position: 'absolute'
    }
})


export default Wallet