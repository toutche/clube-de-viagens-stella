import * as React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import CustomIcon from "../../components/CustomIcon";
import {
    PRIMARY_COLOR,
    WIDTH,
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../utils/variables";

import Copyright from "../../components/Copyright";
import CustomButton from "../../components/CustomButton";
import { useAuth } from "../../contexts/auth";

const image = require("../../../assets/header/TermsAndPolicy.jpg")

const titlePage = "Política de Privacidade"

const text1 = 'Este site e aplicativo são mantidos e operados por Assetur Viagens e Tursimo Ltda, neste documento identificado como “Clube de Férias”. Nós coletamos e utilizamos alguns dados pessoais que pertencem àqueles que utilizam nosso site. Ao fazê-lo, agimos na qualidade de controlador desses dados e estamos sujeitos às disposições da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD). Nós cuidamos da proteção de seus dados pessoais e, por isso, disponibilizamos esta política de privacidade, que contém informações importantes sobre:'

const subText1 = [
    '- Quem deve utilizar nossas plataformas;',
    '- Quais dados coletamos e o que fazemos com eles;',
    '- Seus direitos em relação aos seus dados pessoais;',
    '- Como entrar em contato conosco.'
]
const text2 = 'O Clube de Férias se reserva no direito de alterar esta Política de Privacidade para adaptá-la à legislação aplicável ou às boas práticas comerciais de uso da internet. O Clube de Férias comunicará eventuais mudanças em seu App e/ou site com a devida antecedência.'
const text3 = 'Caso tenha dúvidas ou precise tratar de qualquer assunto relacionado a este Aviso de Privacidade, entre em contato conosco por meio do seguinte canal de e-mail: contato@clubedeferias.com'

const title1 = '1. Dados pessoais fornecidos expressamente pelo usuário'
const text4 = 'Nós coletamos os seguintes dados pessoais que nossos usuários nos fornecem expressamente ao utilizar nosso site:'
const subText2 = [
    '- Nome Completo',
    '- E - mail',
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
    '· Divulgar serviços aos clientes e informá - los sobre ofertas e promoções;'
]
const text8 = 'Adicionalmente, com o fornecimento desses dados permitirá que o Clube de Férias realize as seguintes atividades:'
const subText4 = [
    '· Direcionado à Serviços ou Produtos:',
    '· Entregar os serviços / produtos adquiridos;',
    '· Realizar o processo de devolução ou troca de serviços / produtos dentro do prazo estabelecido pelo Código de Defesa do Consumidor;',
    '· Enviar progresso sobre o status dos serviços / produtos;',
    '· Enviar comunicações dos serviços / produtos;',
]

const text9 = ''
const text10 = ''
const text11 = ''
const text12 = ''
const text13 = ''
const text14 = ''
const text15 = ''
const text16 = ''
const text17 = ''
const text18 = ''
const text19 = ''
const text20 = ''
const text21 = ''
const text22 = ''
const text23 = ''
const text24 = ''
const text25 = ''
const text26 = ''
const text27 = ''
const text28 = ''

const titleTerm2 = "2. Uso de licença"
const term2 = "É concedida permissão para baixar temporáriamente uma cópia dos materiais\
  (informações ou software) no site Stella Barros, apenas para visualização\
  transitória pessoal e não comercial. Esta é a concessão de uma licença,\
  não uma transferência de título e, sob esta licença, você nã pode:"

const box1 = "Modificar ou copiar os materiais"

const box2 = "Usar os materiais para qualquer finalidade comercialou para exibição pública (comercial ou não comercial);"

const box3 = "Tentar descompilar ou fazer engenharia reversa de qualquer\
  software contido no site Stella Barros: remover quaisquer\
  direitos autorais ou outras notações de propriedade dos materiais;"

export default ({ navigation }) => {
    const { loadingApi, updateUser } = useAuth()

    return (
        <ScrollView style={Style.container}>

            <ImageBackground source={image} style={Style.image} />

            <CustomIcon
                onPress={() => navigation.goBack()}
                size={26}
                color={'#222'}
                type={AntDesign}
                name={'arrowleft'}
                containerStyle={Style.icon}
            />

            <Text style={Style.title}>{titlePage}</Text>

            <View style={Style.item}>
                <Text style={Style.titleItem}>{text1}</Text>
                {subText1.map((item, index) => (
                    <Text key={index} style={Style.text}>{item}</Text>
                ))}
            </View>

            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm2}</Text>
                <Text style={Style.text}>{term2}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.boxTerms}>
                    <FontAwesome color={TEXT_COLOR_BKCOLORFUL} size={9} name={"circle"} /> {box1}
                </Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.boxTerms}>
                    <FontAwesome color={TEXT_COLOR_BKCOLORFUL} size={9} name={"circle"} /> {box2}
                </Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.boxTerms}>
                    <FontAwesome color={TEXT_COLOR_BKCOLORFUL} size={9} name={"circle"} /> {box3}
                </Text>
            </View>

            <View style={Style.bottom}>
                <TouchableOpacity>
                    <Text style={Style.itemBottom}>Baixar termos e condições</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={Style.itemBottom}>Política de Privacidade</Text>
                </TouchableOpacity>
            </View>

            <CustomButton
                onPress={() => updateUser({ accept_privacy: true }, navigation)}
                loadingApi={loadingApi}
                containerStyle={Style.button}
                titleStyle={Style.buttonText}
                title={'Aceitar'}
            />

            <Copyright display={1} />

        </ScrollView>
    )
}


const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
    },
    image: {
        aspectRatio: 1.5
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        height: 50,
        width: '80%',
        marginTop: 15,
        borderRadius: 25,
        borderColor: TEXT_COLOR_BKCOLORFUL,
        backgroundColor: TEXT_COLOR_BKCOLORFUL,
        borderWidth: 1,
    },
    buttonText: {
        paddingHorizontal: 5,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: "center",
        textTransform: "uppercase",
    },
    icon: {
        left: 5,
        top: 25,
        padding: 10,
        position: 'absolute'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        paddingTop: 10,
        paddingBottom: 15
    },
    body: {
        flex: 1
    },
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
        marginHorizontal: 30,
        paddingBottom: 15,
    },
    boxTerms: {
        alignItems: "center",
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: FONT_SIZE_BODY
    },
    bottom: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
    },
    itemBottom: {
        textDecorationLine: 'underline',
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: 12,
        padding: 5,
        margin: -5,
    }
})