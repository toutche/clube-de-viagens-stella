import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const ListHistory = ({
    item,
    index
}) => {
    return (
        <View style={styles.container}>
            <AntDesign
                name="checkcircleo"
                size={35}
                color="#287dfd"
            />

            <View>
                <Text style={styles.title}>Pagamento</Text>
                <Text style={styles.subTitle}>20/04/2021</Text>
            </View>

            <View>
                <Text style={styles.title}>R$ 2.070,00 /mês</Text>
                <Text style={styles.subTitle}>4 integrantes</Text>
            </View>

            <View style={styles.status}>
                <AntDesign
                    name="checkcircleo"
                    size={12}
                    color="white"
                />
                <Text style={styles.statusText}>Verificar</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#287dfd',
        fontSize: 13.5
    },
    subTitle: {
        color: '#777',
        fontSize: 13.5
    },
    statusText: {
        color: 'white',
        fontSize: 13,
        marginLeft: 3
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 3,
        backgroundColor: '#287dfd',
        borderRadius: 100
    }
})

export default ListHistory;