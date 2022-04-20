import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { IS_IOS } from '../../utils/consts';
import { BLUE_COLOR, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from '../../utils/variables';
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import * as Clipboard from "expo-clipboard";

export default ({ item, select, setSelect }) => {

    const copyToClipboard = () => {
        Clipboard.setString(item.address);
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    marginTop: -8,
                    marginHorizontal: 15,
                    paddingBottom: 4,
                }}>
                <Text
                    style={{
                        fontFamily: FONT_DEFAULT_STYLE,
                        fontSize: 18,
                        textAlign: "center",
                        color: "#444",
                    }}>
                    {item?.name}
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                    }}>
                    <Text
                        style={{
                            fontFamily: FONT_DEFAULT_STYLE,
                            color: BLUE_COLOR,
                            fontSize: 15.5,
                            textAlign: "center",
                        }}>
                        {item?.subname}
                        {item?.number_days && <Text style={styles.pipe}>│ </Text>}
                        {item?.number_days && (
                            <Text
                                style={{
                                    fontFamily: FONT_DEFAULT_STYLE,
                                    color: "#777",
                                    fontSize: 16,
                                    textAlign: "center",
                                }}>
                                item.number_days
                            </Text>
                        )}
                    </Text>
                </View>

                {item.hotel?.room &&
                    <Text
                        style={{
                            fontFamily: FONT_DEFAULT_STYLE,
                            color: "#777",
                            fontSize: 15.5,
                            textAlign: "center",
                        }}>
                        item.hotel.room
                    </Text>
                }
            </View>
            <View style={styles.address}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name='map-marker-radius-outline'
                    size={36}
                    color='#287dfd'
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.title_address}>Endereço</Text>
                    <Text style={styles.subTitle_address}>{item?.address}</Text>
                </View>
            </View>
            <CustomButton
                type={AntDesign}
                name={'file1'}
                color={BLUE_COLOR}
                size={18}
                containerStyle={styles.button_address}
                titleStyle={styles.button_text_address}
                title={"Copiar Endereço"}
                onPress={copyToClipboard}
            />

            <View style={{
                flex: 1,
                flexDirection: "row",
                marginHorizontal: 20,
                paddingVertical: 8,
                flexWrap: "wrap",
                borderBottomWidth: 1,
                borderColor: "#d1d1d1"
            }}>
                {item?.facilities?.map((i, n) => {
                    return (
                        <View key={n} style={{ flexDirection: "row", marginBottom: 8 }}>
                            <Image
                                style={{ width: 20, height: 20 }}
                                resizeMode={"contain"}
                                source={{ uri: i.icon }}
                            />
                            <Text
                                style={{
                                    fontFamily: FONT_DEFAULT_STYLE,
                                    marginLeft: 4,
                                    marginRight: 15,
                                    textAlignVertical: "center",
                                    fontSize: 14.5,
                                    color: "#444",
                                }}>
                                {i.description}
                            </Text>
                        </View>
                    );
                })}
            </View>

            <View style={styles.container_rooms}>
                <Text style={styles.title_rooms}>Quartos Disponíveis</Text>
                {item?.rooms?.map((i, n) => {
                    return (
                        <TouchableWithoutFeedback key={n} onPress={() => setSelect({
                            id: n,
                            ...i
                        })}>
                            <View style={[styles.content_rooms, {
                                borderColor: select.id === n ? PRIMARY_COLOR : "#d1d1d1",
                            }]}>
                                <Text style={styles.item_title_rooms}>{i.name}</Text>
                                <Text style={styles.item_subtitle_rooms}>{i?.checkin}</Text>
                                <Text style={styles.item_subtitle_rooms}>{i?.checkout}</Text>
                                <Text style={styles.item_subtitle_rooms}>{i?.cancellation}</Text>
                                <Text style={styles.rooms_price}><Text style={styles.old_price}>{i?.price}</Text> ● {i?.price_discount}</Text>
                                <CustomButton
                                    containerStyle={styles.button_room}
                                    titleStyle={styles.button_text_room}
                                    onPress={() => {

                                    }}
                                    title={"Reservar Agora"}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container_rooms: {
        paddingHorizontal: 16,
        marginBottom: 20
    },
    title_rooms: {
        fontFamily: FONT_DEFAULT_STYLE,
        marginTop: 12,
        color: '#333',
        fontSize: 16
    },
    content_rooms: {
        borderWidth: 2,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12
    },
    item_title_rooms: {
        color: '#333',
        fontFamily: FONT_DEFAULT_STYLE,
        fontSize: 15,
        marginBottom: 8,
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
    button_room: {
        height: 40,
        width: "70%",
        alignSelf: "center",
        marginVertical: 4,
        elevation: 5,
        borderRadius: 100,
        backgroundColor: BLUE_COLOR,
        justifyContent: "center",
        alignItems: "center",
    },
    button_text_room: {
        fontSize: 17,
        color: "white",
    },
    button_address: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        paddingHorizontal: 12,
        paddingVertical: 4
    },
    button_text_address: {
        color: BLUE_COLOR,
        marginRight: 4
    },
    address: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#d1d1d1",
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    pipe: {
        color: "#777",
        fontFamily: FONT_DEFAULT_STYLE,
        marginHorizontal: IS_IOS ? -3 : undefined,
    },
    details: {
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    title: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: "#333",
        fontSize: 15.5,
        marginBottom: 15
    },
    subTitle: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: BLUE_COLOR,
        fontSize: 15,
        marginTop: 8,
    },
    text: {
        fontFamily: FONT_DEFAULT_STYLE,
        marginTop: 2,
        color: "#777",
    },
    title_address: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: "#555",
        fontSize: 17,
    },
    subTitle_address: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: BLUE_COLOR,
        fontSize: 13,
    },
});