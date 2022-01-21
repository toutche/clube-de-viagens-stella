import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import InfoHotel from '../../components/InfoHotel';
import Travel from '../../components/Travel';
import TravelCard from '../../components/TravelCard';
import { BLUE_COLOR, GREEN_COLOR, PRIMARY_COLOR } from '../../utils/variables';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const BodyHiringPackageDetails = ({
    openModal
}) => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.containerScroll}>
            <TravelCard
                display={1}
            />

            <Travel />

            <InfoHotel
                display={1}
            />

            <CustomButton
                left
                type={AntDesign}
                name={'exclamationcircle'}
                color={BLUE_COLOR}
                size={16}
                containerStyle={styles.buttonPolicy}
                titleStyle={styles.textButtonPolicy}
                title={`Verificar política de cancelamento`}
            />

            <CustomButton
                onPress={openModal}
                containerStyle={styles.buttonPayment}
                titleStyle={styles.textButtonPayment}
                title={`Solicitar reserva | R$ 15.999,00`}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR
    },
    containerScroll: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexGrow: 1
    },
    buttonPayment: {
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: GREEN_COLOR,
        borderRadius: 100,
        height: 45,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonPayment: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    },
    buttonPolicy: {
        marginVertical: 20,
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
    textButtonPolicy: {
        fontSize: 13.5,
        color: BLUE_COLOR,
        textAlign: 'center',
        marginLeft: 10
    }
})

export default BodyHiringPackageDetails