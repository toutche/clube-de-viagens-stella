import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderWithIcon from '../../components/HeaderWithIcon';
import api from '../../services/api';
import { PRIMARY_COLOR } from '../../utils/variables';
import Body from './Body';


export default ({ navigation }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        api.get('/familiar/listar').then((res) => {
            setData(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <View style={styles.container}>
            <HeaderWithIcon {...{ navigation, url: data?.icon }} />
            <Body {...{ data }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
