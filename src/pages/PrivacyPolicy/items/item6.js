import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";


const titleTerm6 = '6. Por quanto tempo seus dados pessoais serão armazenados'
const text31 = ' Os dados pessoais coletados pelo site/aplicativo são armazenados e utilizados por período de tempo que corresponda ao necessário para atingir as finalidades elencadas neste documento e que considere os direitos de seus titulares, os direitos do controlador do site e as disposições legais ou regulatórias aplicáveis. Uma vez expirados os períodos de armazenamento dos dados pessoais, eles serão removidos de nossas bases de dados ou anonimizados, salvo nos casos em que houver a possibilidade ou a necessidade de armazenamento em virtude de disposição legal ou regulatória.'


export default function item6() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm6}</Text>
                <Text style={Style.boxTerms}>
                    <FontAwesome
                        color={TEXT_COLOR_BKCOLORFUL}
                        size={9}
                        name={"circle"}
                    />
                    <Text style={Style.text}>{text31}</Text>
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