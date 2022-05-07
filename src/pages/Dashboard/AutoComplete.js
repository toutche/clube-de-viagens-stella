import React, { useEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../../services/api';
import { BEHAVIOR, IS_IOS } from '../../utils/consts';
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from '../../utils/variables';
import { useFilter } from "../../contexts/filter";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import CustomHeader from '../../components/CustomHeader';

export default ({ isVisible, onClose, id }) => {
    const { setFilterOrigin, setFilterDestiny } = useFilter()
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(() => {
        api.get('/city/list').then((res) => {
            setData(res.data)
        })
    }, [])

    const handlePress = (item) => {
        if (id === 'origin') {
            setFilterOrigin(item)
        } else if (id === 'destiny') {
            setFilterDestiny(item)
        }
        onClose()
        setFilter([])
    }

    const filterCity = (text) => {
        setFilter(data?.filter(i => i?.value?.toLowerCase()?.includes(text?.toLowerCase())));
    }

    const separator = () => {
        return <View style={styles.separator} />
    }

    const closeAndClean = () => {
        setFilter([])
        onClose()
    }

    return (
        <Modal
            statusBarTranslucent
            animationType='slide'
            onRequestClose={closeAndClean}
            visible={isVisible}>
            <KeyboardAvoidingView behavior={BEHAVIOR} style={styles.container}>
                <CustomHeader
                    handlerRight={closeAndClean}
                    title={id === 'origin' ? 'Origem' : 'Destino'}
                    rightName={'close'}
                    rightSize={24}
                    rightIcon={AntDesign}
                />
                <View style={styles.header}>
                    <View style={styles.container_input}>
                        <TextInput
                            placeholderTextColor={"#ccc"}
                            placeholder={`Pesquise ${id === 'origin' ? 'sua Origem' : 'seu Destino'}`}
                            style={styles.input}
                            onChangeText={filterCity}
                        />
                        <MaterialCommunityIcons
                            name="map-marker-outline"
                            size={28}
                            color={PRIMARY_COLOR}
                        />
                    </View>
                </View>
                <FlatList
                    data={filter}
                    keyExtractor={(item, index) => index.toString()}
                    keyboardShouldPersistTaps={"always"}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={separator}
                    contentContainerStyle={styles.container_list}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={styles.content_list} onPress={() => handlePress(item)}>
                            <Text style={styles.item_text}>{item.value}</Text>
                        </TouchableOpacity>
                    )}
                />
            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        borderBottomWidth: 2,
        borderColor: PRIMARY_COLOR,
        width: '100%',
        paddingHorizontal: 12,
        alignItems: 'center'
    },
    container_input: {
        flexDirection: 'row',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginVertical: 12
    },
    input: {
        paddingVertical: IS_IOS ? 12 : 8,
        flex: 1,
        fontSize: 14.5,
        fontFamily: FONT_DEFAULT_STYLE,
    },
    container_list: {
        flexGrow: 1,
        paddingHorizontal: 8
    },
    content_list: {
        paddingVertical: 12
    },
    separator: {
        height: 1,
        backgroundColor: PRIMARY_COLOR
    },
    item_text: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: '#555'
    }
})

