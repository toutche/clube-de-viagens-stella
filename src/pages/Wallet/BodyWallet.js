import React from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';
import { BACKGROUND_COLOR } from '../../utils/variables';
import { AntDesign } from '@expo/vector-icons';

const BodyWallet = ({ data = [] }) => {

    const separator = () => <View style={{ height: 8 }} />

    return (
        <View style={{ backgroundColor: BACKGROUND_COLOR, flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                keyboardShouldPersistTaps={"always"}
                ItemSeparatorComponent={separator}
                bounces={false}
                contentContainerStyle={styles.container_list}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.content_list}>

                            <View style={styles.view_one}>
                                <Image source={{ uri: item?.icon }} style={styles.icon} />
                                <View>
                                    <Text style={[{ color: item.text1_color }]}>{item.text1}</Text>
                                    <Text style={styles.subTitle}>{item.date}</Text>
                                </View>
                            </View>

                            <View style={styles.view_two}>
                                <Text style={[{ color: item.text2_color, fontSize: 13 }]}>{item.amount}</Text>
                                <Text style={styles.subTitle}>{item.text1}</Text>
                            </View>


                            <View style={styles.view_three}>
                                <View style={{
                                    backgroundColor: item.text1_color,
                                    flexDirection: 'row', alignItems: 'center',
                                    paddingHorizontal: 6,
                                    paddingVertical: 3,
                                    borderRadius: 2
                                }}>
                                    <AntDesign name={item.icon_check ? "checkcircleo" : 'exclamationcircleo'} size={14} color="#f1f1f1" />
                                    <Text style={{ marginLeft: 4, color: '#f1f1f1', fontSize: 12 }}>{item.text2}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container_list: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    content_list: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    icon: {
        width: 36,
        height: 36,
        marginRight: 8
    },
    view_one: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '40%'
    },
    view_two: {
        flex: 1,
    },
    view_three: {
        flex: 1,
        alignItems: 'flex-end'
    },
    subTitle: {
        color: '#777',
        fontSize: 13
    },

})

export default BodyWallet;