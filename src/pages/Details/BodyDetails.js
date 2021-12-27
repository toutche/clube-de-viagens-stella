import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlertCovid from '../../components/AlertCovid';
import Map from './Map';


const BodyDetails = ({
    item
}) => {
    return (
        <View style={styles.container}>
            <View style={{
                borderBottomWidth: 1,
                borderColor: '#d1d1d1',
                marginBottom: 10,
                marginHorizontal: 15,
                paddingBottom: 5
            }}>
                <Text style={{
                    fontSize: 19,
                    textAlign: 'center',
                    color: '#333'
                }}>{item.title}</Text>

                <Text style={{
                    color: '#287dfd',
                    fontSize: 17,
                    textAlign: 'center'
                }}>{item.description}</Text>
            </View>

            <AlertCovid />

            <View style={styles.details}>
                <Text style={styles.title}>Ellaidhoo Maldives by Cinnamon</Text>
                <Text style={styles.text}>Ellaidhoo Maldives by cinnamon fica numa praia particular de areia branca onde vc pode tomar sol</Text>

                <Text style={styles.title}>Ellaidhoo Maldives by Cinnamon</Text>
                <Text style={styles.text}>Ellaidhoo Maldives by cinnamon fica numa praia particular de areia branca onde vc pode tomar sol</Text>


                <Text style={styles.title}>Ellaidhoo Maldives by Cinnamon</Text>
                <Text style={styles.text}>Ellaidhoo Maldives by cinnamon fica numa praia particular de areia branca onde vc pode tomar sol</Text>

                <Text style={styles.title}>Comodidades do estabelecimento</Text>

                <Text style={styles.subTitle}>Internet</Text>
                <Text style={styles.subText}>Disponivel em todos os quartos: Wi-fi gratis</Text>

                <Text style={styles.subTitle}>Estacionamento e transporte</Text>
                <Text style={styles.subText}>Disponivel em todos os quartos: Wi-fi gratis</Text>

                <Text style={styles.subTitle}>Estacionamento e transporte</Text>
                <Text style={styles.subText}>Disponivel em todos os quartos: Wi-fi gratis</Text>

                <Text style={styles.subTitle}>Estacionamento e transporte</Text>
                <Text style={styles.subText}>Disponivel em todos os quartos: Wi-fi gratis</Text>
            </View>

            <Map />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    details: {
        paddingHorizontal: 20,
        paddingBottom: 15
    },
    title: {
        color: '#333',
        fontSize: 15,
    },
    text: {
        fontSize: 12.5,
        color: '#777',
        marginTop: 2,
        marginBottom: 10
    },
    subTitle: {
        color: '#287dfd',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 5,
    },
    subText: {
        marginLeft: 10,
        marginTop: 2,
        color: '#777',
    }
})

export default BodyDetails