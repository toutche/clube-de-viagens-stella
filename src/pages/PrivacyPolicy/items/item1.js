import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm1 = '1. Dados pessoais fornecidos expressamente pelo usuário'
const text4 = 'Nós coletamos os seguintes dados pessoais que nossos usuários nos fornecem expressamente \
ao utilizar nosso site:'
const subText2 = [
    '- Nome Completo',
    '- E-mail',
    '- Telefone',
    '- CPF',
    '- Passaporte',
    '- Identidade',
    '- Carteira de Registro Nacional Migratório',
    '- Data de Nascimento',
    '- Endereço Completo',
    '- Dados de cartão de crédito',
    '- Foto'
]
const text5 = 'A coleta destes dados ocorre nos seguintes momentos:'
const text6 = 'Quando o usuário se cadastra, faz uma compra de assinatura e/ou hospedagem/pacotes de viagem.'
const text7 = 'Os dados fornecidos por nossos usuários são coletados com as seguintes finalidades:'
const subText3 = [
    '· Entregar os serviços contratados;',
    '· Divulgar serviços aos clientes e informá-los sobre ofertas e promoções;'
]
const text8 = 'Adicionalmente, com o fornecimento desses dados permitirá que o Clube de Férias realize as seguintes atividades:'
const subText4 = [
    '· Direcionado à Serviços ou Produtos:',
    '· Entregar os serviços/produtos adquiridos;',
    '· Realizar o processo de devolução ou troca de serviços/produtos dentro do prazo estabelecido pelo Código de Defesa do Consumidor;',
    '· Enviar progresso sobre o status dos serviços/produtos;',
    '· Enviar comunicações dos serviços/produtos;',
]

const subTitle1 = 'Tratamento de dados pessoais de crianças e adolescentes'
const text9 = 'O Clube de Férias se preocupa com a proteção dos direitos dos menores de idade. A coleta de dados pessoais de menores de \
16 (dezesseis) anos dependerá do consentimento expresso dos pais ou responsáveis pela tutela parental através do preenchimento do termo \
de consentimento disponível '
const link1 = 'AQUI'
const text10 = ', e de acordo com as regras da legislação vigente.'

const subTitle2 = 'Direcionado à Segurança:'
const subText5 = [
    '- Prevenir, detectar e investigar atividades que estejam em desacordo com o nosso Código de Conduta ou que sejam proibidas ou ilegais;',
    '- Aperfeiçoar o app, site e serviços do Clube de Férias.',
]

export default function item1() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm1}</Text>
                <Text style={Style.text}>{text4}</Text>
                {subText2.map((item, index) => (
                    <Text key={index} style={Style.text}>{item}</Text>
                ))}
            </View>
            <View style={Style.item}>                
                <Text style={Style.text}>{text5}</Text>
                <Text style={Style.text}>{text6}</Text>
                <Text style={Style.text}>{text7}</Text>
                {subText3.map((item, index) => (
                    <Text key={index} style={Style.text}>{item}</Text>
                ))}
            </View>
            <View style={Style.item}>
                <Text style={Style.text}>{text8}</Text>
                {subText4.map((item, index) => (
                    <Text key={index} style={Style.text}>{item}</Text>
                ))}
            </View>
            <View style={Style.itemInternal}>
                <Text style={Style.titleItem}>{subTitle1}</Text>
                <Text style={Style.text}>{text9} 
                    <TouchableOpacity>
                        <Text style={Style.linkBold}>{link1}</Text>
                    </TouchableOpacity>
                    {text10} 
                </Text>                
            </View>
            <View style={Style.itemInternal}>
                <Text style={Style.titleItem}>{subTitle2}</Text>
                {subText5.map((item, index) => (
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