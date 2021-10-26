import React, { useState } from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Image,
    StyleSheet,
    ImageBackground
} from "react-native";

import {
    FONT_SIZE_BODY,
    FONT_SIZE_SUBTITLE,
    HEIGHT,
    PRIMARY_COLOR,
    SECOND_COLOR,
    TEXT_COLOR_BKCOLORFUL,
    TEXT_COLOR_BKWHITE,
    WIDTH
} from "../../../utils/variables";

import Copyright from "../../../components/Copyright";
import InputConfirm from './InputConfirm'

const titlePage = "Insira seu código"
const subtitlePage = "Precisamos confirmar o seu e-mail.\nPor favor, insira o código enviado de 4 dígitos."

const ConfirmEmail = ({ navigation }) => {

    return (
        <ScrollView style={Style.container} contentContainerStyle={Style.content}>

            <ImageBackground source={require("../../../../assets/header/ConfirmEmail.png")} style={Style.image} />

            <View style={Style.body}>

                <Text style={Style.title}>{titlePage}</Text>

                <Text style={Style.subtitle}>{subtitlePage}</Text>

                <InputConfirm
                    navigation={navigation}
                />

                <Text style={Style.quest}>Não recebeu o nosso e-mail?</Text>

                <TouchableOpacity style={Style.buttonResend}>
                    <Text style={Style.resend}>Reenviar Código</Text>
                </TouchableOpacity>

                <Text style={Style.text}>*Caso não esteja visualizando nosso e-mail na sua Caixa de Entrada, pode ser que tenha ido para sua caixa de Spam ou Lixo Eletrônico!</Text>

            </View>

            <Copyright display={1} />

        </ScrollView>
    )
}

const Style = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
        flex: 1,
    },
    content: {
        justifyContent: 'space-between',
        flexGrow: 1
    },
    image: {
        aspectRatio: 1.5
    },
    body: {
        flex: 1,
        paddingHorizontal: '10%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: TEXT_COLOR_BKCOLORFUL,
        textAlign: "center",
        marginBottom: 5,
        marginTop: 5
    },
    subtitle: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: 14.5,
        textAlign: "center",
    },
    text: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: FONT_SIZE_BODY,
        paddingTop: 20,
        textAlign: 'center'
    },
    quest: {
        color: TEXT_COLOR_BKCOLORFUL,
        opacity: 0.9,
        fontSize: 13,
        textAlign: 'center',
        paddingTop: 10,
    },
    buttonResend: {
        padding: 10,
        marginTop: -5,
    },
    resend: {
        color: TEXT_COLOR_BKCOLORFUL,
        opacity: 0.9,
        textDecorationLine: 'underline',
        fontSize: 12,
        textAlign: 'center'
    }
})

export default ConfirmEmail