import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import QuantifyTravel from "../../components/QuantifyTravel";
import { BLUE_COLOR, FONT_DEFAULT_STYLE } from "../../utils/variables";

export default Room = ({ data, price=true }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quarto Selecionado</Text>
            <Text style={styles.item_title_rooms}>{data.name}</Text>
            <Text style={styles.item_subtitle_rooms}>{data.checkin}</Text>
            <Text style={styles.item_subtitle_rooms}>{data.checkout}</Text>
            <Text style={styles.item_subtitle_rooms}>{data.cancellation}</Text>
            {
                price && <Text style={styles.rooms_price}>
                    <Text style={styles.old_price}>{data.price}</Text>
                        ● 
                    {data.price_discount}
                </Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "99%",
        alignSelf: "center",
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 20,
        marginBottom: 15,
        alignItems: "center",
        backgroundColor: "white",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        borderRadius: 10,
    },
    title: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: "#444",
        fontSize: 16,
        alignItems: 'center'
    },
    room_container: {
        marginTop: 8
    },
    room_title :{
        color: '#287dfd',
        width: '80%',
        fontFamily: FONT_DEFAULT_STYLE,
    },
    room_quantity :{
        color: '#287dfd',
        fontFamily: FONT_DEFAULT_STYLE,
    },
    room_buttons_container: {
        flexDirection: 'row',
    },
    item_title_rooms: {
        color: '#333',
        fontFamily: FONT_DEFAULT_STYLE,
        fontSize: 15,
        marginVertical: 8,
        flex: 1
    },
    item_subtitle_rooms: {
        color: '#999',
        fontFamily: FONT_DEFAULT_STYLE,
        fontSize: 13,
        margin: 1
    },
    rooms_price: {
        color: BLUE_COLOR,
        fontSize: 14,
        marginVertical: 8,
        fontFamily: FONT_DEFAULT_STYLE
    },
    old_price: {
        color: '#555',
        textDecorationLine: 'line-through',
    },
});
