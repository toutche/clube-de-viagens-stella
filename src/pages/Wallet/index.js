import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/auth';
import api from '../../services/api';
import { logScreen } from '../../services/firebase';
import { ScreenView } from '../../services/firebase/constant';
import BodyWallet from './BodyWallet';
import HeaderWallet from './HeaderWallet';

const Wallet = ({ navigation }) => {

    const { user: { wallet: { credit } } } = useAuth();

    const [data, setData] = useState([])

    useEffect(() => {
        logScreen(ScreenView.Wallet);
        api.get('/transaction/history/list').then((res) => {
            setData(res.data)
        }).catch((e) => console.log(e))
    }, [])

    return (
        <View style={styles.container}>
            <HeaderWallet {...{ data, navigation, credit }} />
            <BodyWallet {...{ data, navigation }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default Wallet