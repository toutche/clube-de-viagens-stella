import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm8 = '8. Direitos do usuário'
const text33 = ' O usuário do site/aplicativo possui os seguintes direitos, conferidos pela Lei de Proteção de Dados Pessoais: '
const subText7 = [
    '- confirmação da existência de tratamento; ',
    '- acesso aos dados; ',
    '- correção de dados incompletos, inexatos ou desatualizados; ',
    '- anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na lei; ',
    '- eliminação dos dados pessoais tratados com o consentimento do titular, exceto nos casos previstos em lei; ',
    '- informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados; ',
    '- informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;',
    '- revogação do consentimento.'
]
const text34 = 'É importante destacar que, nos termos da LGPD, não existe um direito de eliminação de dados tratados com fundamento em bases legais distintas do consentimento, a menos que os dados sejam desnecessários, excessivos ou tratados em desconformidade com o previsto na lei.'
const subTitle6 = 'Como o titular pode exercer seus direitos'
const text35 = 'Os titulares de dados pessoais tratados por nós poderão exercer seus direitos no seguinte caminho:'
const subTitle35_1 = 'Nome: '
const text35_1 = 'Hélio Conde'
const subTitle35_2 = 'Localização: '
const text35_2 = 'Avenida das Américas, nº 3.434, Bloco 5, Sala 514, Barra da Tijuca, Rio de Janeiro/RJ, CEP: 22.640-102'
const subTitle35_3 = 'Horário de atendimento: '
const text35_3 = 'de segunda a sexta-feira, nos dias úteis, das 9h às 18h – preferencialmente por e-mail.'
const subTitle35_4 = 'E-mail para orientação e esclarecimento de dúvidas: '
const text35_4 = 'dpo@grupoaguia.com.br.'
const text36 = 'Para garantir que o usuário que pretende exercer seus direitos é, de fato, o titular dos dados pessoais objeto da requisição, poderemos solicitar documentos ou outras informações que possam auxiliar em sua correta identificação, a fim de resguardar nossos direitos e os direitos de terceiros. Isto somente será feito, porém, se for absolutamente necessário, e o requerente receberá todas as informações relacionadas.'


export default function item8() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm8}</Text>
                <Text style={Style.boxTerms}>
                    <FontAwesome
                        color={TEXT_COLOR_BKCOLORFUL}
                        size={9}
                        name={"circle"}
                    />
                    <Text style={Style.text}>{text33}</Text>
                </Text>
                {subText7.map((item, index) => (
                    <Text key={index} style={Style.text}>{item}</Text>
                ))}
            </View>
            <View style={Style.item}>
                <Text style={Style.text}>{text34}</Text>
            </View>
            <View style={Style.itemInternal}>
                <Text style={Style.titleItem}>{subTitle6}</Text>
                <Text style={Style.text}>{text35}</Text>
                <Text style={Style.text}>
                    <Text style={Style.titleItem}>{subTitle35_1}</Text>
                    {text35_1}
                </Text>
                <Text style={Style.text}>
                    <Text style={Style.titleItem}>{subTitle35_2}</Text>
                    {text35_2}
                </Text>
                <Text style={Style.text}>
                    <Text style={Style.titleItem}>{subTitle35_3}</Text>
                    {text35_3}
                </Text>
                <Text style={Style.text}>
                    <Text style={Style.titleItem}>{subTitle35_4}</Text>
                    {text35_4}
                </Text>
                <Text style={Style.text}>{text36}</Text>
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
})