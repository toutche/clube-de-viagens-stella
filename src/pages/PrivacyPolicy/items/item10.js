import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";


const titleTerm10 = '10. Medidas de segurança no tratamento de dados pessoais'
const text39 = ' Empregamos medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, extravio ou alteração desses dados.'
const text40 = 'As medidas que utilizamos levam em consideração a natureza dos dados, o contexto e a finalidade do tratamento, os riscos que uma eventual violação geraria para os direitos e liberdades do usuário, e os padrões atualmente empregados no mercado por empresas semelhantes à nossa.'
const text41 = 'Entre as medidas de segurança adotadas por nós, destacamos as seguintes:'
const subText9 = [
    '- Todos os dados são trafegados através do protocolo HTTP garantindo a criptografia dos mesmos. Temos protocolos internos de acesso à informação pelos colaboradores. ',
    'Ainda que adote tudo o que está ao seu alcance para evitar incidentes de segurança, é possível que ocorra algum problema motivado exclusivamente por um terceiro - como em caso de ataques de hackers ou crackers ou, ainda, em caso de culpa exclusiva do usuário, que ocorre, por exemplo, quando ele mesmo transfere seus dados a terceiro. Assim, embora sejamos, em geral, responsáveis pelos dados pessoais que tratamos, nos eximimos de responsabilidade caso ocorra uma situação excepcional como essas, sobre as quais não temos nenhum tipo de controle.',
    'De qualquer forma, caso ocorra qualquer tipo de incidente de segurança que possa gerar risco ou dano relevante para qualquer de nossos usuários, comunicaremos os afetados e a Autoridade Nacional de Proteção de Dados acerca do ocorrido, em conformidade com o disposto na Lei Geral de Proteção de Dados.'
]

export default function item6() {
    return (
        <>
        <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm10}</Text>
                <Text style={Style.boxTerms}>
                    <FontAwesome 
                        color={TEXT_COLOR_BKCOLORFUL} 
                        size={9}
                        name={"circle"} 
                    /> 
                    <Text style={Style.text}>{text39}</Text>
                    <Text style={Style.text}>{text40}</Text>
                    <Text style={Style.text}>{text41}</Text>
                    {subText9.map((item, index) => (
                        <Text key={index} style={Style.text}>{item}</Text>
                    ))}
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