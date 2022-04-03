import React, { useEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../../services/api';
import { BEHAVIOR } from '../../utils/consts';
import { PRIMARY_COLOR } from '../../utils/variables';
import { useFilter } from "../../contexts/filter";

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

    return (
        <Modal
            animationType='slide'
            onRequestClose={onClose}
            visible={isVisible}>
            <KeyboardAvoidingView behavior={BEHAVIOR} style={styles.container}>
                <View style={styles.header}>
                    <TextInput
                        placeholder='Pesquisar...'
                        style={styles.input}
                        onChangeText={filterCity}
                    />
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
                            <Text>{item.value}</Text>
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
        alignItems: 'center'
    },
    header: {
        borderBottomWidth: 1.5,
        borderColor: PRIMARY_COLOR,
        width: '100%'
    },
    input: {
        fontSize: 14.5,
        width: '90%',
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    container_list: {
        paddingHorizontal: 8
    },
    content_list: {
        paddingVertical: 12
    },
    separator: {
        height: 1.5,
        backgroundColor: PRIMARY_COLOR
    }
})

