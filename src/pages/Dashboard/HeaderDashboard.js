import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomIcon from '../../components/CustomIcon';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import ProfileAvatar from '../../components/ProfileAvatar';
import CustomButton from '../../components/CustomButton';


const HeaderDashboard = () => {


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
            <Text style={styles.subTitle}>R$ 0,00</Text>

            <CustomButton
                containerStyle={styles.button}
                titleStyle={styles.buttonText}
                title="Contratar Plano"
            />

            <Text style={styles.text}>
                É necessário contratar um plano para iniciar o seu projeto da viagem dos sonhos
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: '10%'
    },
    button: {
        backgroundColor: '#287dfd',
        borderRadius: 100,
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    },
    text: {
        fontSize: 13,
        color: 'white',
        textAlign: 'center'
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
    }
})

export default HeaderDashboard