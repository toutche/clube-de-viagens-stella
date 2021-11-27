import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { BLUE_COLOR } from '../../utils/variables';

const InfoHotel = ({
    display = 0
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Fontisto
                    name="hotel"
                    size={24}
                    color={BLUE_COLOR}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Hotel</Text>
                    <Text style={styles.subTitle}>Meeru island Resort And Spa</Text>
                </View>
            </View>
            <View style={styles.separator} />
            {display === 0 ?
                <View style={styles.one}>
                    <AntDesign
                        name="checkcircleo"
                        size={20}
                        color={BLUE_COLOR}
                    />
                    <Text style={styles.oneText}>All Inclusive</Text>
                </View>
                :
                <View style={styles.two}>

                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%'
    },
    two: {

    },
    one: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 5
    },
    oneText: {
        color: BLUE_COLOR,
        fontSize: 12.5,
        marginLeft: 5
    },
    separator: {
        height: 1.5,
        backgroundColor: '#d1d1d1',
        marginVertical: 5
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        marginLeft: 10
    },
    title: {
        color: '#555',
        fontSize: 15,
        marginBottom: -3
    },
    subTitle: {
        color: BLUE_COLOR,
        fontSize: 14
    }
})

export default InfoHotel