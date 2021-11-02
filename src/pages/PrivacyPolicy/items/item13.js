import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";


const titleTerm13 = '13. Como entrar em contato conosco'
const text45 = ' Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, entre em contato com nosso Encarregado de Proteção de Dados Pessoais, por algum dos canais mencionados abaixo: E-mail: contato@clubedeferias.com'


export default function item6() {
    return (
        <>
        <View style={Style.item}>
            <Text style={Style.titleItem}>{titleTerm13}</Text>
            <Text style={Style.boxTerms}>
                <FontAwesome 
                    color={TEXT_COLOR_BKCOLORFUL} 
                    size={9}
                    name={"circle"} 
                /> 
                <Text style={Style.text}>{text45}</Text>
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