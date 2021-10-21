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

import api from "../../../services/api";
import { loginSetToken, getToken } from "../../../services/auth";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import { AntDesign, Fontisto, FontAwesome } from '@expo/vector-icons';
import Copyright from "../../../components/Copyright";
import CustomIcon from "../../../components/CustomIcon";
import InputConfirm from './InputConfirm'

const titlePage = "Insira seu código"
const subtitlePage = "Precisamos confirmar o seu e-mail.\nPor favor, insira o código enviado de 4 dígitos."


const ConfirmEmail = () => {
    return (
        <ScrollView style={Style.container} contentContainerStyle={Style.content}>

            <ImageBackground source={require("../../../../assets/header/ConfirmEmail.png")} style={Style.image} />

            <View style={Style.body}>

                <Text style={Style.title}>{titlePage}</Text>

                <Text style={Style.subtitle}>{subtitlePage}</Text>

                <InputConfirm
                />

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
        textTransform: 'uppercase'
    },
    containerButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%'
    },
    containerSignButtons: {
        width: '100%'
    },
    buttonSocial: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: '47%',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 25,
        borderColor: TEXT_COLOR_BKCOLORFUL,
        borderWidth: 1.5,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    buttonText: {
        paddingHorizontal: 5,
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: 12,
        textAlign: "center",
        textTransform: "uppercase",
    },
    containerSeparator: {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    separator: {
        height: 1,
        width: 100,
        backgroundColor: SECOND_COLOR,
        marginHorizontal: 15
    }
})

export default ConfirmEmail