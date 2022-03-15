import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import api from '../../services/api';
import { PRIMARY_COLOR } from '../../utils/variables';
import Body from './Body';
import Header from './Header';


export default ({ navigation }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        api.get('/benefits/list').then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])

    return (
        <ScrollView bounces={false} style={styles.container}>
            <Header {...{ data, navigation }} />
            <Body {...{ data }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR
    }
})
