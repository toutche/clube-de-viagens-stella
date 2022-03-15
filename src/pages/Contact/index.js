import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderWithIcon from '../../components/HeaderWithIcon';
import api from '../../services/api';
import BodyContact from './BodyContact';

const Contact = ({ navigation }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        api.get('/contact/subject/list').then((res) => {
            setData(res.data.data)
        })
    }, [])

    return (
        <View style={styles.container}>
            <HeaderWithIcon {...{ navigation, url: data?.icons?.phone_background }} />
            <BodyContact  {...{ data }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default Contact;