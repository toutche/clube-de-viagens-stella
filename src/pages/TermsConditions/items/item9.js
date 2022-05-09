import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm1_1 = '9. Do suporte'
const text1_1 = 'Em caso de qualquer dúvida, sugestão ou problema com a utilização do Clube de Férias, o usuário poderá entrar em contato com o suporte, através do e-mail xxxx@xxxxxx ou chat disponível em nosso Aplicativo.'
const text2_1 = 'Estes serviços de atendimento ao usuário estarão disponíveis nos seguintes dias e horários: Segunda a Sexta de 9h00 às 18h30, exceto feriados.'

const titleTerm1 = '9. Das responsabilidades'
const text1 = '9.1 - É de responsabilidade do usuário:'
const subText1 = [
    '9.1.1 - Defeitos ou vícios técnicos originados no próprio sistema do usuário;',
    '9.1.2 - A correta utilização do Clube de Férias e dos serviços oferecidos, prezando pela boa convivência, pelo respeito e cordialidade entre os usuários;',
    '9.1.3 - Pelo cumprimento e respeito ao conjunto de regras disposto nesse Termo de Condições Geral de Uso, na respectiva Política de Privacidade e na legislação nacional e internacional;',
    '9.1.4 - Pela proteção aos dados de acesso à sua conta/perfil (login e senha);',
    '9.1.5 - Quaisquer fotos que você enviar devem ser:',
    'Pertinentes: todas as fotos deverão fazer referência a acomodações, restaurantes, locais ou outras experiências de viagem em geral.',
    'Apropriadas para a visualização de todos:',
    'Não envie fotos ou materiais ilegais, obscenos, pornográficos, profanos, vulgares, ofensivos ou ultrajantes.',
    'Não envie fotos ou materiais que representem uma invasão de privacidade ou violem os direitos pessoais de indivíduos ou entidades.',
    'Não envie fotos ou informações sobre menores de idade e terceiros sem consentimento prévio (ou consentimento dos pais, no caso de menores de 13 anos de idade).',
    'Os menores de 13 anos de idade não podem enviar fotos ou outros materiais.',
    'Originais: envie apenas suas próprias fotos. Não envie fotos de outras fontes (pessoais ou comerciais). Não envie fotos que representem uma infração a direitos autorais, marcas registradas ou outros direitos de propriedade intelectual de terceiros.',
    'Não comerciais: não envie fotos que mostrem logotipos, marcas, materiais promocionais e outros conteúdos destinados a fins comerciais.',
    'Livres de arquivos nocivos: não envie fotos que contenham vírus ou outros códigos nocivos que possam ou tenham o objetivo de causar danos aos computadores e sistemas do Clube de Férias e seus usuários.'
]
const text2 = '9.2 - É de responsabilidade do Clube de Férias: '
const subText2 = [
    '9.2.1 - Indicar as características do serviço ou produto;',
    '9.2.2 - Os defeitos e vícios encontrados no serviço ou produto oferecido desde que seja responsável por sua causa;',
    '9.2.3 - As informações que foram por ele divulgadas, sendo que os comentários ou informações divulgadas por usuários são de inteira responsabilidade dos próprios usuários;',
    '9.2.4 - O conteúdo ou atividades ilícitas praticadas através da sua plataforma.'
]
const text3 = 'A plataforma não se responsabiliza por links externos contidos em seu sistema, que possam redirecionar o usuário à ambiente externo a sua rede.'
const text4 = 'Não poderão ser incluídos links externos ou páginas que sirvam para fins comerciais ou publicitários ou quaisquer informações ilícitas, violentas, polêmicas, pornográficas, xenofóbicas, discriminatórias ou ofensivas. O Clube de férias se reserva o direito de excluir qualquer comentário postado por usuários que contenham esse teor.'

export default function item9() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm1_1}</Text>
                <Text style={Style.text}>{text1_1}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text2_1}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm1}</Text>
                <Text style={Style.text}>{text1}</Text>
            </View>

            <View style={Style.itemInternal}>
                {subText1.map((item, index) => (
                    <Text key={index} style={Style.text}>{item}</Text>
                ))}
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text2}</Text>
            </View>

            <View style={Style.itemInternal}>
                {subText2.map((item, index) => (
                    <Text key={index} style={Style.text}>{item}</Text>
                ))}
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text3}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text4}</Text>
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