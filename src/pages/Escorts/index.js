import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderWithIcon from '../../components/HeaderWithIcon';
import api from '../../services/api';
import { PRIMARY_COLOR } from '../../utils/variables';
import Body from './Body';
import { useFocusEffect } from '@react-navigation/native';


export default ({ navigation }) => {
    const [data, setData] = useState([])

    const getEscorts = () => {
        api.get('/familiar/listar').then((res) => {
            setData(res.data)
            console.log('update')
        })
    }

    useFocusEffect(
        useCallback(() => {
            getEscorts();
        }, [])
    )

    return (
        <View style={styles.container}>
            <HeaderWithIcon {...{ navigation, url: data?.icon }} />
            <Body {...{ data, navigation, getEscorts }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
