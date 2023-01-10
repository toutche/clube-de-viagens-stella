import React, { useState } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View, Linking } from 'react-native'
import CustomIcon from '../../components/CustomIcon';
import { FONT_DEFAULT_STYLE } from '../../utils/variables';
import { Entypo } from "@expo/vector-icons";
import { ModalAlert } from '../../components/ModalAlert';

export default ({ data = [], navigation }) => {

    const [visibleModal, setVisibleModal] = useState(false);

    const openPDF = async (link) => {
        try {
            await Linking.openURL(link)
        } catch (error) {
            setVisibleModal(!visibleModal);
        }
    }


    return (
        <View style={styles.container}>

            <ModalAlert
                modalVisible={visibleModal}
                setModalVisible={setVisibleModal}
                title="Algo deu errado!"
                text='Não conseguimos abrir o documento corretamente.'
                textFirstButton='Voltar'
            />

            <Text style={styles.title}>{data?.message}</Text>

            <FlatList
                data={data?.data}
                bounces={false}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.content_list}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.content_item}>
                            <View style={styles.content_text}>
                                <Text style={styles.title_item}>{item.title}</Text>
                                <Text style={styles.date_item}>{item.date}</Text>
                            </View>
                            <CustomIcon
                                onPress={() => openPDF(item.link)}
                                size={24}
                                color={'#d1d1d1'}
                                type={Entypo}
                                name={"chevron-right"}
                                containerStyle={styles.chevron}
                            />
                        </View>
                    )
                }}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#e1e1e1",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 24,
    },
    content_list: {
        borderRadius: 12,
        backgroundColor: 'white',
    },
    separator: {
        height: 2,
        backgroundColor: '#e1e1e1'
    },
    content_item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    content_text: {
        flex: 1,
    },
    title_item: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: '#555',
        fontSize: 15,
    },
    date_item: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: '#a1a1a1'
    },
    title: {
        marginTop: 24,
        marginBottom: 12,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: FONT_DEFAULT_STYLE
    },
    chevron: {
        width: 45,
        height: 45,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
        borderWidth: 2,
        borderColor: "#d1d1d1",
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})
