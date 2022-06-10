import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, ActivityIndicator, View } from "react-native";
import { useAuth } from "../../contexts/auth";
import { useFilter } from "../../contexts/filter";
import { useCheckout } from "../../contexts/checkout";
import api from "../../services/api";
import { PRIMARY_COLOR } from "../../utils/variables";
import Body from "./Body";
import Header from "./Header";

export default ({ route, navigation }) => {
    const { user } = useAuth();
    const { getScheduling, data, travelers } = useCheckout();
    const { filterDestiny, filterCheck, filterPeople } = useFilter();

    const { item } = route.params;

    const [select, setSelect] = useState({
        id: 0
    })

    useEffect(() => {
        let hotelData = {item, filterDestiny, filterCheck, filterPeople}
        getScheduling(item.id, hotelData);
    }, []);

    if (Object.keys(data).length === 0)
        return (
            <View style={styles.loading}>
                <ActivityIndicator size={"large"} color={PRIMARY_COLOR} />
            </View>
        );
    return (
        <ScrollView bounces={false} style={styles.container}>
            <Header
                navigation={navigation}
                item={data}
                plan={user.plan}
                select={select}
            />
            <Body
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

