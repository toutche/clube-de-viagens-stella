import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm11 = '11. Reclamação a uma autoridade de controle'
const text42 = ' Sem prejuízo de qualquer outra via de recurso administrativo ou judicial, os titulares de dados pessoais que se sentirem, de qualquer forma, lesados, podem apresentar reclamação à Autoridade Nacional de Proteção de Dados.'

export default function item6() {
    return (
        <>
        <View style={Style.item}>
            <Text style={Style.titleItem}>{titleTerm11}</Text>
            <Text style={Style.boxTerms}>
                <FontAwesome 
                    color={TEXT_COLOR_BKCOLORFUL} 
                    size={9}
                    name={"circle"} 
                /> 
                <Text style={Style.text}>{text42}</Text>
            </Text>      
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
    }
})