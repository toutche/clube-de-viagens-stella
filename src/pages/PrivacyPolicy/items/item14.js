import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";


const titleTerm14 = '14. Lei aplicável e foro'
const text46 = ' O Clube de Férias Stella Barros examinará e responderá, dentro de um período considerado plausível, qualquer solicitação ou reclamação no que tange à como tratamos seus Dados Pessoais, bem como reclamações sobre desacato aos seus direitos sob a lei de privacidade e proteção de Dados Pessoais em vigor, em especial a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados).'


export default function item6() {
    return (
        <>
        <View style={Style.item}>
            <Text style={Style.titleItem}>{titleTerm14}</Text>
            <Text style={Style.boxTerms}>
                <FontAwesome 
                    color={TEXT_COLOR_BKCOLORFUL} 
                    size={9}
                    name={"circle"} 
                /> 
                <Text style={Style.text}>{text46}</Text>
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