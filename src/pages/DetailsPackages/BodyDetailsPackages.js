import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { BLUE_COLOR, GREEN_COLOR, PRIMARY_COLOR } from '../../utils/variables';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Travel from '../../components/Travel';
import TravelCard from '../../components/TravelCard';
import AlertCovid from '../../components/AlertCovid';
import InfoHotel from '../../components/InfoHotel';

const BodyDetailsPackages = () => {
    return (
        <View style={styles.container}>

            <CustomButton
                type={AntDesign}
                name={'checkcircleo'}
                color={'white'}
                size={25}
                iconStyle={styles.icon}
                containerStyle={styles.buttonTop}
                titleStyle={styles.textButtonTop}
                title={'Pacote contratado para 15 de Maio / ás 14h'}
            />

            <CustomButton
                type={AntDesign}
                name={'closecircleo'}
                color={PRIMARY_COLOR}
                size={25}
                iconStyle={styles.icon}
                containerStyle={styles.buttonBottom}
                titleStyle={styles.textButtonBottom}
                title={'Realizar cancelamento'}
            />

            <TravelCard
                display={1}
            />

            <Travel />

            <InfoHotel
            />

            <CustomButton
                left
                type={AntDesign}
                name={'exclamationcircle'}
                color={BLUE_COLOR}
                size={16}
                containerStyle={styles.buttonCancel}
                titleStyle={styles.textButtonCancel}
                title={`Verificar política de cancelamento`}
            />
            <AlertCovid
                containerStyle={styles.covid}
            />

            <View style={styles.details}>
                <Text style={styles.title}>Ellaidhoo Maldives by Cinnamon</Text>
                <Text style={styles.text}>Ellaidhoo Maldives by cinnamon fica numa praia particular de areia branca onde vc pode tomar sol</Text>

                <Text style={styles.title}>Ellaidhoo Maldives by Cinnamon</Text>
                <Text style={styles.text}>Ellaidhoo Maldives by cinnamon fica numa praia particular de areia branca onde vc pode tomar sol</Text>


                <Text style={styles.title}>Ellaidhoo Maldives by Cinnamon</Text>
                <Text style={styles.text}>Ellaidhoo Maldives by cinnamon fica numa praia particular de areia branca onde vc pode tomar sol</Text>

                <Text style={styles.title}>Comodidades do estabelecimento</Text>
                <Text style={styles.text}>Ellaidhoo Maldives by cinnamon fica numa praia particular de areia branca onde vc pode tomar sol</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: -30,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: '100%',
        paddingHorizontal: 15,
        paddingTop: 30,
        marginBottom: -20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    covid: {
        width: '100%'
    },
    details: {
        paddingHorizontal: 10,
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
    buttonCancel: {
        marginTop: 20,
        marginBottom: 25,
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: BLUE_COLOR,
        borderRadius: 100,
        height: 40,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonCancel: {
        fontSize: 13.5,
        color: BLUE_COLOR,
        textAlign: 'center',
        marginLeft: 10
    },
    icon: {
        position: 'absolute',
        left: 10
    },
    buttonTop: {
        height: 45,
        width: '95%',
        marginBottom: 10,
        maxWidth: 600,
        alignSelf: 'center',
        elevation: 3,
        borderRadius: 100,
        backgroundColor: GREEN_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonTop: {
        fontSize: 14,
        maxWidth: '60%',
        textAlign: 'center',
        color: 'white',
    },
    buttonBottom: {
        borderWidth: 1.5,
        borderColor: PRIMARY_COLOR,
        height: 45,
        marginBottom: 15,
        width: '95%',
        maxWidth: 600,
        alignSelf: 'center',
        elevation: 3,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonBottom: {
        fontSize: 16,
        color: PRIMARY_COLOR,
    },
})

export default BodyDetailsPackages