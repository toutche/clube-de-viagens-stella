import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderWithIcon from '../../components/HeaderWithIcon';
import api from '../../services/api';
import { PRIMARY_COLOR } from '../../utils/variables';
import Body from './Body';


export default ({ navigation }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        api.get('/documents/list').then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])

    return (
        <View style={styles.container}>
            <HeaderWithIcon {...{ navigation }} />
            <Body {...{ data, navigation }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR
    }
})
