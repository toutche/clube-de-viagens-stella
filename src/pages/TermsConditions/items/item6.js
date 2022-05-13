import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm1 = '6. Dos preços'
const text1 = 'A plataforma se reserva o direito de reajustar unilateralmente, a qualquer tempo, os valores dos serviços sem consulta ou anuência prévia do usuário.'
const text2 = 'Os valores aplicados são aqueles que estão em vigor no momento da efetivação da confirmação e pagamento de compra do serviço.'
const text3 = 'Os preços são indicados em reais ou dólar (para pacotes e hotéis internacionais), mas o pagamento será sempre feito em reais, ao câmbio do dia do pagamento.'
const text4 = 'Na contratação de determinado serviço ou produto, o Clube de Férias poderá solicitar as informações financeiras do usuário, como CPF, passaporte, nome completo, endereço de cobrança e dados de cartões. Ao inserir referidos dados, o usuário concorda que sejam cobrados, de acordo com a forma de pagamento que venha a ser escolhida, os preços então vigentes e informados no momento da contratação. Referidos dados financeiros poderão ser armazenados para facilitar acessos e contratações futuras.'
const text5 = 'A contratação dos serviços será renovada automaticamente pela plataforma, independentemente de comunicação ao usuário, mediante cobrança periódica mensal na mesma forma de pagamento indicada pelo usuário quando da contratação do serviço.'

export default function item6() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm1}</Text>
                <Text style={Style.text}>{text1}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text2}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text3}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text4}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text5}</Text>
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