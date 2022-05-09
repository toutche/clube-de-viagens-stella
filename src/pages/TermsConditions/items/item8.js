import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm1 = '8. Do pagamento'
const text1 = 'O pagamento da assinatura mensal deve ser feito, exclusivamente por cartão de crédito. Para pagamentos de pacotes e hospedagens sem a utilização do saldo em carteira, aceitamos cartão de crédito ou PIX, de acordo com as condições de cada fornecedor.'
const titleTerm2 = 'TARIFAS BANCÁRIAS E DE CARTÃO DE CRÉDITO'
const text2 = 'A reserva de viagens internacionais através do Aplicativo pode ser considerada uma transação internacional por seu banco ou administradora de cartão de crédito, já que podemos repassar o seu pagamento para fornecedores internacionais. Alguns bancos e administradoras de cartão de crédito cobram tarifas para operações internacionais, cujo valor pode variar periodicamente, além dos impostos incidentes, previstos por lei. Em caso de reservas feitas com fornecedores fora do Brasil, com a utilização de um cartão de crédito emitido no País, o seu banco poderá converter o valor cobrado em sua moeda local e cobrar uma taxa de conversão. Ademais, as taxas de câmbio utilizadas pelo banco podem ser diferentes das taxas exibidas por nosso conversor de moedas. Isso significa que o valor lançado no extrato do seu cartão de débito ou crédito, em sua moeda local, pode ser diferente do valor exibido na página do resumo de cobrança da reserva feita no Clube de Férias. A taxa de câmbio e a tarifa de transação internacional são determinadas exclusivamente pelo seu banco, na data do processamento da transação. Se tiver alguma dúvida em relação às tarifas ou taxas de câmbio utilizadas em sua reserva, entre em contato com o seu banco.'

export default function item8() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm1}</Text>
                <Text style={Style.text}>{text1}</Text>
            </View>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm2}</Text>
                <Text style={Style.text}>{text2}</Text>
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