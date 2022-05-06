import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { FONT_DEFAULT_STYLE, LIGHT_BLUE, PRIMARY_COLOR } from "../../utils/variables";
import { LinearGradient } from "expo-linear-gradient";
import CustomIcon from "../../components/CustomIcon";
import { Entypo } from "@expo/vector-icons";

export default ({ data = [] }) => {
    const [loading, setLoading] = useState(false)

    const handlePress = () => {

    }

    const headerList = () => <Text style={styles.title}>Plano atual - Gold - Desde 08/2020</Text>

    const separatorList = () => <View style={{ height: 12 }} />

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            bounces={false}
            style={styles.container}
            ListHeaderComponent={headerList}
            ItemSeparatorComponent={separatorList}
            contentContainerStyle={styles.container_list}
            renderItem={({ item, index }) => {
                return (
                    <LinearGradient start={[1, 0.5]} colors={[item.colors[1], item.colors[0]]} style={styles.card}>
                        <View style={styles.content}>
                            <View style={[styles.crown, { borderColor: item.colors[2], backgroundColor: item.colors[3] }]}>

                            </View>

                            <View>
                                <Text style={[styles.text, { fontSize: 16 }]}>{item.name}</Text>
                                <Text style={[styles.text, { fontSize: 13.5 }]}>{item.price}
                                    <Text style={[styles.text, { color: '#d1d1d1' }]}> {item.price_text}</Text>
                                </Text>

                                <View style={styles.container_discount}>
                                    <Text style={styles.text_discount}>{item.phrase_discount}
                                        <Text style={[styles.text_discount, { color: '#d1d1d1' }]}>
                                            {item.phrase_discount_after}
                                        </Text>
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <CustomIcon
                            loadingApi={loading}
                            onPress={handlePress}
                            size={26}
                            type={Entypo}
                            name={"chevron-right"}
                            containerStyle={styles.chevron}
                        />
                    </LinearGradient>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
    },
    container_discount: {
        backgroundColor: LIGHT_BLUE,
        borderRadius: 999,
        paddingVertical: 2,
        paddingHorizontal: 8,
        marginTop: 4,
    },
    text_discount: {
        fontSize: 12,
        color: '#f1f1f1'
    },
    text: {
        color: '#f1f1f1',
        fontFamily: FONT_DEFAULT_STYLE
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container_list: {
        paddingHorizontal: "5%",
        backgroundColor: "#e6e6e6",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexGrow: 1,
    },
    title: {
        fontFamily: FONT_DEFAULT_STYLE,
        textAlign: "center",
        color: "#555",
        paddingTop: 24,
        paddingBottom: 16,
        fontSize: 16,
    },
    card: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    chevron: {
        width: 45,
        height: 45,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        borderWidth: 1.5,
        borderColor: "white",
    },
    crown: {
        width: 50,
        height: 50,
        borderRadius: 999,
        borderWidth: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
});
