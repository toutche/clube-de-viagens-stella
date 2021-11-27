import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { BLUE_COLOR } from '../../utils/variables';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const QuantifyTravel = ({
    data = [{
        text: '1 Criança'
    }, {
        text: '2 Adultos'
    }]
}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                contentContainerStyle={styles.content}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                keyExtractor={(item, index) => index.toString()}
                keyboardShouldPersistTaps={'always'}
                renderItem={({ item, index }) => (
                    <View style={styles.item}>
                        <AntDesign
                            name="checkcircleo"
                            size={16}
                            color={BLUE_COLOR}
                        />
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    content: {
        flexDirection: 'row',
        backgroundColor: '#e1e1e1',
        borderRadius: 100,
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 15,
        marginVertical: 10
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 3
    },
    text: {
        marginLeft: 5,
        color: BLUE_COLOR
    },
    separator: {
        width: 10
    }
})

export default QuantifyTravel