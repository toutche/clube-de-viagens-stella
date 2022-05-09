import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm1 = '7. Do cancelamento da adesão ao Clube de Férias'
const text1 = '7.1 - O usuário poderá cancelar a contratação dos serviços de acordo com os termos que forem definidos no momento de sua contratação. Ainda, o usuário também poderá cancelar os serviços em até 7 (sete) dias após a contratação, mediante contato com o Clube de Férias, de acordo com o Código de Defesa do Consumidor (Lei no. 8.078/90); caso o cliente efetue alguma compra durante esse período, ele perde o direito do cancelamento sem ônus.'
const text2 = '7.2 - Cancelamento do plano após o prazo de 7 dias úteis:'
const subText1 = [
    '7.2.1 - Caso o assinante utilize o Clube de Férias em algum momento para comprar algum produto ou serviço, será cobrada uma taxa administrativa de 10% em cima do valor total disponível em sua carteira; e',
    '7.2.2 - Caso o assinante não utilize o Clube de Férias, será cobrada uma taxa administrativa de 15% em cima do valor total disponível em sua carteira.',
]

export default function item7() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm1}</Text>
                <Text style={Style.text}>{text1}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text2}</Text>
            </View>

            <View style={Style.itemInternal}>
                {subText1.map((item, index) => (
                    <Text key={index} style={Style.text}>{item}</Text>
                ))}
            </View>
        </>
    )
}

const Style = StyleSheet.create({
    titleItem: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: FONT_SIZE_SUBTITLE - 2,
        fontWeight: "bold"
    },
    text: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: FONT_SIZE_BODY
    },
    item: {
        marginHorizontal: 20,
        paddingBottom: 15,
    },
    itemInternal: {
        marginHorizontal: 20,
        marginLeft: 30,
        paddingBottom: 15,
    },
    linkBold: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: FONT_SIZE_BODY,
        fontWeight: "bold",
        top: 4
    },
})