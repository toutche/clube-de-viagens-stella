import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TravelCard = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2020/05/maldivas-bangalos-1500-840269698.jpg' }}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.title}>Anantara Veli Maldives Resort</Text>
                <Text style={styles.subTitle}>7 dias | + Hotel c/café da manhã</Text>
                <View style={styles.borderBottom} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '99%',
        alignSelf: 'center',
        padding: 12,
        marginBottom: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        flexDirection: 'row'
    },
    title: {
        fontSize: 15,
        color: '#555'
    },
    subTitle: {
        fontSize: 13,
        top: -2,
        color: '#777'
    },
    borderBottom: {
        backgroundColor: '#d1d1d1',
        height: 2
    },
    content: {
        marginLeft: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10
    }
})

export default TravelCard