import React, { useEffect, useState } from "react";
import { View } from 'react-native'
import api from "../../services/api";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";
import Body from "./Body";
import Header from "./Header";

export default ({ navigation }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        logScreen(ScreenView.MyPlan);
        api.get('/plano/list/all').then((res) => {
            setData(res.data)
        }).catch((e) => console.log(e))
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Header {...{ navigation }} />
            <Body {...{ data, navigation }} />
        </View>
    )
}