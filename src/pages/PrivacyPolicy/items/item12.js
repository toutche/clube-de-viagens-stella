import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";


const titleTerm12 = '12. Alterações nesta política'
const text43 = ' A presente versão desta Política de Privacidade foi atualizada pela última vez em: 24/09/2021. Reservamo-nos o direito de modificar, a qualquer momento, as presentes normas, especialmente para adaptá-las às eventuais alterações feitas em nosso site, seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes.'
const text44 = 'Sempre que houver uma modificação, nossos usuários serão notificados acerca da mudança.'


export default function item6() {
    return (
        <>
        <View style={Style.item}>
            <Text style={Style.titleItem}>{titleTerm12}</Text>
            <Text style={Style.boxTerms}>
                <FontAwesome 
                    color={TEXT_COLOR_BKCOLORFUL} 
                    size={9}
                    name={"circle"} 
                /> 
                <Text style={Style.text}>{text43}</Text>
                <Text style={Style.text}>{text44}</Text>
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