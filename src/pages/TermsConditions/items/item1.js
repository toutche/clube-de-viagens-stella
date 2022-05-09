import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm1 = '1. Do objeto'
const text1 = 'A plataforma visa licenciar o uso de seu aplicativo e demais ativos de propriedade intelectual¹, fornecendo ferramentas para auxiliar e dinamizar o dia a dia dos seus usuários.'
const text2 = 'A plataforma caracteriza-se pela prestação do seguinte serviço: Assinatura de Clube de Férias.'
const text3 = 'A plataforma realiza a venda à distância, por meio eletrônico dos seguintes produtos ou serviços: Pacotes de viagens, acomodação e demais serviços relacionados ao turismo.'
const text4 = '¹ Os materiais como fotografias, textos, vídeos, logomarcas contidas neste aplicativo são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.'

export default function item1() {
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