import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ListItem from '../../components/ListItem';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { PRIMARY_COLOR } from '../../utils/variables';

const itens = [
    {
        title: 'Ilhas maldivas - All Inclusive',
        description: '7 dias | Aéreo + Hotel c/ café da manhã',
        saveMoney: 2000,
        price: 5999,
        oldPrice: 7999,
        image: 'https://cf.bstatic.com/xdata/images/hotel/max500/287247695.jpg?k=9e970ba4942b0de846312e33881dc3e4559a98df343748bb02d3a7cdc617b9bf&o=&hp=1'
    },
    {
        title: 'Ilhas maldivas - All Inclusive',
        description: '7 dias | Aéreo + Hotel c/ café da manhã',
        saveMoney: 2000,
        price: 5999,
        oldPrice: 7999,
        image: 'https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2020/05/maldivas-bangalos-1500-840269698.jpg'
    }
]


const BodyDashboard = ({
    display = 1,
    navigation,
    shareOpen
}) => {
    const Item = (title, icon, name, size, left) => {
        const Icon = icon
        return (
            <TouchableOpacity style={[styles.button, { marginVertical: left === 2 ? 10 : 0 }]}>
                <Icon name={name} size={size} color={PRIMARY_COLOR} />
                <Text style={[styles.textButton, { marginLeft: left }]}>{title}</Text>
            </TouchableOpacity>
        )
    }

    const ListHeaderItem = () => (
        <>
            <View style={styles.containerButtons}>
                {Item('Destino', MaterialCommunityIcons, 'map-marker-outline', 22, 0)}
                {Item('Data - Check-in - Check-out', MaterialCommunityIcons, 'calendar-month', 22, 2)}
                {Item(`${0} Adulto - ${0} Criança - ${0} Quarto`, SimpleLineIcons, 'user', 18, 3)}
            </View>
            <Text style={styles.text}>
                Confirmação e preço sujeito a disponibilidade
            </Text>
        </>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={itens}
                ListHeaderComponent={ListHeaderItem}
                keyExtractor={(item, index) => index.toString()}
                keyboardShouldPersistTaps={'always'}
                renderItem={({ item, index }) => ListItem({ item, index, display, navigation, shareOpen })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e1e1'
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 10,
        color: '#777'
    },
    containerButtons: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        width: '95%',
        alignSelf: 'center'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100,
        width: '90%',
        height: 40,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    textButton: {
        textAlign: 'center',
        fontSize: 13.5
    }
})

export default BodyDashboard;