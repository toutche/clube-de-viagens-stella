import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BoardingPlace = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Local de embarque:</Text>
            <View style={styles.content}>
                <AntDesign
                    name="checkcircleo"
                    size={22}
                    color="#287dfd"
                />
                <View style={styles.contentText}>
                    <Text style={styles.title}>São Paulo - CGH</Text>
                    <Text style={styles.subTitle}>Aeroporto Internacional Congonhas</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    content: {
        width: '99%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 100,
    },
    contentText: {
        marginLeft: 15
    },
    title: {
        textAlign: 'center',
        color: '#444',
        fontSize: 14.5
    },
    subTitle: {
        textAlign: 'center',
        color: "#287dfd",
        fontSize: 13,
        marginTop: -4
    },
    text: {
        marginVertical: 10,
        fontSize: 17,
        color: '#444'
    }
})


export default BoardingPlace