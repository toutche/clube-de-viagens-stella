import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import QuantifyTravel from '../../components/QuantifyTravel';
import { BLUE_COLOR } from '../../utils/variables';

const Travelers = () => {

    const renderItem = (text) => {
        return (
            <View style={styles.item}>
                <AntDesign
                    name="checkcircleo"
                    size={16}
                    color="#287dfd"
                />
                <Text style={styles.itemText}>{text}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Viajantes</Text>

            <QuantifyTravel />


            <CustomButton
                containerStyle={styles.button}
                titleStyle={styles.textButton}
                title={`Nomear Viajantes`}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '99%',
        alignSelf: 'center',
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 20,
        marginBottom: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
    },
    button: {
        borderColor: BLUE_COLOR,
        borderWidth: 1.5,
        borderRadius: 100,
        height: 50,
        width: '100%',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 14.5,
        color: '#287dfd',
        textAlign: 'center'
    },
    separator: {
        width: 10
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
    },
    itemText: {
        color: '#287dfd',
        marginLeft: 5,
        fontSize: 13
    },
    title: {
        color: '#444',
        fontSize: 16,
        marginTop: 5
    },
})

export default Travelers