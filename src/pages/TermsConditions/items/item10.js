import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm1 = '10. Dos direitos autorais'
const text1 = 'O presente Termo de Uso concede aos usuários uma licença não exclusiva, não transferível e não sublicenciável, para acessar e fazer uso do Clube de Férias e dos serviços e produtos por ela disponibilizados.'
const text2 = 'A estrutura do Clube de Férias, as marcas, logotipos, nomes comerciais, layouts, gráficos e design de interface, imagens, ilustrações, fotografias, apresentações, vídeos, conteúdos escritos e de som e áudio, programas de computador, banco de dados, arquivos de transmissão e quaisquer outras informações e direitos de propriedade intelectual da razão social Assetur Viagens e Turismo Ltda, observados os termos da Lei da Propriedade Industrial (Lei nº 9.279/96), Lei de Direitos Autorais (Lei nº 9.610/98) e Lei do Software (Lei nº 9.609/98), estão devidamente reservados.'
const text3 = 'Este Termos de Uso não cede ou transfere ao usuário qualquer direito, de modo que o acesso não gera qualquer direito de propriedade intelectual ao usuário, exceto pela licença limitada ora concedida.'
const text4 = 'O uso da plataforma pelo usuário é pessoal, individual e intransferível, sendo vedado qualquer uso não autorizado, comercial ou não-comercial. Tais usos consistirão em violação dos direitos de propriedade intelectual da razão social Assetur Viagens e Turismo Ltda, puníveis nos termos da legislação aplicável.'
const text5 = 'Concedemos a permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no aplicativo, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, o usuário não pode:'
const subText1 = [
    'modificar ou copiar os materiais;',
    'usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);',
    'tentar descompilar ou fazer engenharia reversa de qualquer software contido no aplicativo',
    'remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou',
    "transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor."
]

export default function item10() {
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

            <View style={Style.itemInternal}>
                {subText1.map((item, index) => (
                    <Text key={index} style={Style.text}>{item}</Text>
                ))}
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