import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import api from '../../services/api';
import { logScreen } from '../../services/firebase';
import { ScreenView } from '../../services/firebase/constant';
import { PRIMARY_COLOR } from '../../utils/variables';
import Body from './Body';
import Header from './Header';

export default ({ navigation }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        logScreen(ScreenView.About);
        api.get('/about/infos').then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])

    return (
        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1, backgroundColor: PRIMARY_COLOR }}>
            <Header {...{ navigation, data }} />
            <Body {...{ data, navigation }} />
        </ScrollView>
    )
}
