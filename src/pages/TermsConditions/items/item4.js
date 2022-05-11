import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm1 = '4. Do cadastro'
const text1 = 'O acesso às funcionalidades da plataforma exigirá a realização de um cadastro prévio e, a depender dos serviços ou produtos escolhidos, o pagamento de determinado valor.'
const text2 = 'Ao se cadastrar, o usuário deverá informar dados completos (nome, sobrenome, endereço completo, identidade, passaporte, data de nascimento) recentes e válidos, sendo de sua exclusiva responsabilidade manter referidos dados atualizados, bem como o usuário se compromete com a veracidade dos dados fornecidos.'
const text3 = 'As Partes declaram que (I) o tratamento dos dados se dará de acordo com as hipóteses legais previstas nos artigos 7o, 11 ou 14 da Lei 13.709/2018, garantindo que seus serviços atenderão a propósitos legítimos, específicos e informados aos titulares; (II) o tratamento de dados pessoais estará limitado ao estritamente necessário para o alcance das finalidades do serviço contratado, ou quando se prestar a cumprimento de obrigação legal ou regulatória, ao exercício regular de direito, por determinação judicial ou por requisição da ANPD, (III) em caso de utilização do consentimento como hipótese de tratamento, esta será aprovada previamente pelo usuário, responsabilizando-se a Stella Barros pela gestão.'
const text4 = 'O usuário se compromete a não informar seus dados cadastrais e/ou de acesso à plataforma a terceiros, responsabilizando-se integralmente pelo uso que deles seja feito.'
const text5 = 'Menores de 18 anos e aqueles que não possuírem plena capacidade civil deverão obter previamente o consentimento expresso de seus responsáveis legais para utilização da plataforma e dos serviços ou produtos, sendo de responsabilidade exclusiva dos mesmos o eventual acesso por menores de idade e por aqueles que não possuem plena capacidade civil sem a prévia autorização.'
const text6 = 'Mediante a realização do cadastro o usuário declara e garante expressamente ser plenamente capaz, podendo exercer e usufruir livremente dos serviços e produtos.'
const text7 = 'O usuário deverá fornecer um endereço de e-mail válido, através do qual o Clube de Férias realizará todas as comunicações necessárias.'
const text8 = 'Após a confirmação do cadastro, o usuário possuirá um login e uma senha pessoal, a qual assegura ao usuário o acesso individual à mesma. Desta forma, compete ao usuário exclusivamente a manutenção de referida senha de maneira confidencial e segura, evitando o acesso indevido às informações pessoais.'
const text9 = 'Toda e qualquer atividade realizada com o uso da senha será de responsabilidade do usuário, que deverá informar prontamente a plataforma em caso de uso indevido da respectiva senha.'
const text10 = 'Não será permitido ceder, vender, alugar ou transferir, de qualquer forma, a conta, que é pessoal e intransferível.'
const text11 = 'Caberá ao usuário assegurar que o seu equipamento seja compatível com as características técnicas que viabilize a utilização da plataforma e dos serviços.'
const text12 = 'O usuário poderá, a qualquer tempo, requerer o cancelamento de seu cadastro junto ao Clube de Férias. O seu descadastramento será realizado o mais rapidamente possível, desde que não sejam verificadas penalidades pelo tempo de permanência e/ou taxas administrativas.'
const text13 = 'O usuário, ao aceitar os termos da Política de Privacidade e cookies, autoriza expressamente a plataforma a coletar, usar, armazenar, tratar, ceder ou utilizar as informações derivadas do uso dos serviços do aplicativo, incluindo todas as informações preenchidas pelo usuário quando realizar ou atualizar seu cadastro, além de outras expressamente descritas na Política de Privacidade, que deverá ser autorizada pelo usuário.'
const text14 = 'A Stella Barros possui um Aviso de Privacidade on-line. As informações sobre o usuário podem estar sujeitas ao tratamento de dados pessoais referido em tal política.'

export default function item4() {
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

            <View style={Style.item}>
                <Text style={Style.text}>{text6}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text7}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text8}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text9}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text10}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text11}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text12}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text13}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text14}</Text>
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