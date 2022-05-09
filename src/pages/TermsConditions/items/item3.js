import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm1 = '3. Do acesso dos usuários'
const text1 = 'Serão utilizadas todas as soluções técnicas à disposição do responsável pela plataforma para permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana. No entanto, a navegação na plataforma ou em alguma de suas páginas poderá ser interrompida, limitada ou suspensa para atualizações, modificações ou qualquer ação necessária ao seu bom funcionamento.'

export default function item3() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm1}</Text>
                <Text style={Style.text}>{text1}</Text>
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