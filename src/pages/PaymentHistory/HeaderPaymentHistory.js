import React from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import CustomIcon from '../../components/CustomIcon';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileAvatar from '../../components/ProfileAvatar';
import CustomButton from '../../components/CustomButton';

const HeaderPaymentHistory = () => {
    const { width } = useWindowDimensions()
    return (
        <View style={styles.container}>
            <CustomIcon
                size={26}
                onPress={() => navigation.goBack()}
                type={AntDesign}
                name={'arrowleft'}
                containerStyle={styles.iconLeft}
            />
            <CustomIcon
                size={26}
                onPress={() => navigation.goBack()}
                type={Ionicons}
                name={'notifications-outline'}
                containerStyle={styles.iconRight}
            />
            <ProfileAvatar />

            <Text style={styles.title}>Valor disponível para viagem :(</Text>
            <Text style={styles.subTitle}>R$ 5.272,00</Text>
            <View style={styles.containerDiscount}>
                <Text style={styles.discountBold}>Até 8%
                    <Text> de desconto exclusivo</Text>
                </Text>
            </View>

            <View style={[styles.containerButtons, { width }]}>
                <CustomButton
                    left
                    type={MaterialCommunityIcons}
                    iconStyle={styles.buttonIcon}
                    name={'credit-card-multiple-outline'}
                    containerStyle={styles.buttonLeft}
                    titleStyle={styles.buttonText}
                    title="Meus Cartões"
                />
                <CustomButton
                    containerStyle={styles.buttonRight}
                    titleStyle={styles.buttonText}
                    title="Ver Produtos"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: '10%'
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10
    },
    buttonIcon: {
        marginRight: 5
    },
    buttonLeft: {
        borderWidth: 1.5,
        flexDirection: 'row',
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderRadius: 100,
        width: '45%',
        maxWidth: 300,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12
    },
    buttonRight: {
        backgroundColor: '#287dfd',
        borderRadius: 100,
        width: '45%',
        maxWidth: 300,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12
    },
    buttonText: {
        fontSize: 14,
        color: 'white'
    },
    title: {
        fontSize: 17,
        color: 'white',
        marginTop: 5,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    iconLeft: {
        left: 5,
        top: 25,
        padding: 10,
        position: 'absolute'
    },
    iconRight: {
        right: 5,
        top: 25,
        padding: 10,
        position: 'absolute'
    },
    containerDiscount: {
        backgroundColor: '#12aaeb',
        borderRadius: 100,
        marginTop: 3
    },
    discountBold: {
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 3,
        color: 'white'
    },
    discount: {
        color: 'rgba(255,255,255,.8)'
    }
})
export default HeaderPaymentHistory