import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Image, ActivityIndicator, View } from "react-native";
import ShareModal from "../../components/ShareModal";
import { useAuth } from "../../contexts/auth";
import { useFilter } from "../../contexts/filter";
import api from "../../services/api";
import { PRIMARY_COLOR } from "../../utils/variables";
import Body from "./Body";
import Header from "./Header";
import { consts } from "../../utils/consts";

export default ({ route, navigation }) => {
    const { user } = useAuth();
    const {
        filterDestiny,
        filterCheck,
        filterPeople
    } = useFilter()

    const { item } = route.params;

    const [isVisible, setVisible] = useState(false);
    const [data, setData] = useState({})
    const [select, setSelect] = useState({
        id: 0
    })

    useEffect(() => {
        api.post('/hotel/get', {
            start_date: String(filterCheck.in).split('/').reverse().join('-'),
            end_date: String(filterCheck.out).split('/').reverse().join('-'),
            qtd_people: String(filterPeople.adult),
            city_code: String(filterDestiny.key),
            hotel: item.id,
            hotel_key_detail: item.keyDetail
        }).then((res) => {
            setData(res.data)
            setSelect({
                id: 0,
                ...res.data.rooms[0]
            })
        }).catch(e => console.log(e));
    }, []);

    if (Object.keys(data).length === 0)
        return (
            <View style={styles.loading}>
                <ActivityIndicator size={"large"} color={PRIMARY_COLOR} />
            </View>
        );
    return (
        <ScrollView bounces={false} style={styles.container}>
            <ShareModal onClose={() => setVisible(!isVisible)} isVisible={isVisible} />
            <Header
                shareOpen={() => setVisible(!isVisible)}
                navigation={navigation}
                item={data}
                plan={user.plan}
                select={select}
            />
            <Body
                shareOpen={() => setVisible(!isVisible)}
                navigation={navigation}
                item={data}
                plan={user.plan}
                select={select}
                setSelect={setSelect}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

