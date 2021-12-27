import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListHistory from './ListHistory';

const BodyPaymentHistory = ({
    itens = [{}, {}, {}, {}, {}, {}, {}]
}) => {

    const ListHeaderItem = () => (
        <Text style={styles.text}>Histórico de pagamentos</Text>
    )

    const Separator = () => (
        <View style={styles.separator} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={itens}
                contentContainerStyle={{ flexGrow: 1 }}
                ListHeaderComponent={ListHeaderItem}
                ItemSeparatorComponent={Separator}
                keyExtractor={(item, index) => index.toString()}
                keyboardShouldPersistTaps={'always'}
                renderItem={({ item, index }) => ListHistory({ item, index })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f6ff',
        flex: 1
    },
    separator: {
        height: 10
    },
    text: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18,
        color: '#777'
    }
})

export default BodyPaymentHistory