import React, { memo } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { PRIMARY_COLOR } from '../../utils/variables';

const itens = [
    {
        title: 'Filtrar',
        image: 'https://lojaenoeventos.com.br/imagens/filtros.png'
    },
    {
        title: 'Nacional',
        image: 'https://lojaenoeventos.com.br/imagens/filtros.png'
    },
    {
        title: 'Internacional',
        image: 'https://lojaenoeventos.com.br/imagens/filtros.png'
    },
    {
        title: 'Praia',
        image: 'https://lojaenoeventos.com.br/imagens/filtros.png'
    },
    {
        title: 'Montanha',
        image: 'https://lojaenoeventos.com.br/imagens/filtros.png'
    },
    {
        title: 'Gastronomia',
        image: 'https://lojaenoeventos.com.br/imagens/filtros.png'
    }
]

const SlidesDashboard = () => {

    const renderRow = ({ item, index }) => (
        <View style={styles.item}>
            <TouchableOpacity style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={{ uri: item.image }}
                />
            </TouchableOpacity>

            <Text style={styles.title}>{item.title}</Text>
        </View>
    )

    const separator = () => <View style={styles.separator} />

    return (
        <View style={styles.container}>
            <FlatList
                data={itens}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={separator}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.contentFlatlist}
                keyboardShouldPersistTaps={'always'}
                renderItem={renderRow}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#f0c61e',
        borderRadius: 100
    },
    image: {
        height: 30,
        width: 30,
    },
    contentFlatlist: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    separator: {
        marginHorizontal: 8
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
    title: {
        color: 'white',
        fontSize: 13,
        marginTop: 2
    }
})

export default memo(SlidesDashboard)