import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm1 = '15. Do foro'
const text1 = 'Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito brasileiro. '
const text2 = 'Os eventuais litígios deverão ser apresentados no foro da comarca do Rio de Janeiro.'

export default function item15() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm1}</Text>
                <Text style={Style.text}>{text1}</Text>
            </View>

            <View style={Style.item}>
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