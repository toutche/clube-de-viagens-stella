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
    }
})


export default Wallet