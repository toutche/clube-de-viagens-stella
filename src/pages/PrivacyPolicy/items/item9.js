import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";


const titleTerm9 = '9. Responsabilidades do usuário'
const text37 = ' Para manter a segurança dos seus dados pessoais, recomendamos a você algumas medidas de proteção:'
const subText8 = [
    '- Ao acessar computador público ou compartilhado:',
    'Nunca escolha a opção de lembrar seu endereço de e-mail, nome de login ou senha;',
    'Assim que deixar o computador, certifique-se que você saiu da sua conta (log out);',
    'Utilize apenas os canais oficiais do Clube de Férias;',
    'Atenção ao acessar links recebidos em nome do Clube de Férias por e-mail, WhatsApp, SMS, e entre outras. Verifique a origem da mensagem;',
    'Mantenha sempre o antivírus e seu navegador atualizado;',
    'Ao criar uma conta on-line, escolha senhas fortes para evitar que seja adivinhada por terceiros de forma não autorizada;',
    'Não compartilhe ou revele seu login de acesso ou senha com outras pessoas;',
    'Atualize seus dados pessoais sempre que houver alguma alteração através seu login pelo app do Clube de Férias;',
    'Mantenha códigos de reserva em sigilo;',
    'Esteja atento às informações da Política de Privacidade;'
]
const subTitle7 = 'Responsabilidade com dados de terceiros'
const text38 = 'É muito importante que você tenha cuidado ao compartilhar dados do qual você não seja o titular. Portanto, respeite a privacidade daqueles que você possui acesso aos dados, e não os compartilhe, caso tenha dúvidas em relação ao consentimento desse terceiro.'


export default function item9() {
    return (
        <>
        <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm9}</Text>
                <Text style={Style.boxTerms}>
                    <FontAwesome 
                        color={TEXT_COLOR_BKCOLORFUL} 
                        size={9}
                        name={"circle"} 
                    /> 
                    <Text style={Style.text}>{text37}</Text>
                </Text>
                {subText8.map((item, index) => (
                    <Text key={index} style={Style.text}>{item}</Text>
                ))}
            </View>
            <View style={Style.itemInternal}>
                <Text style={Style.titleItem}>{subTitle7}</Text>
                <Text style={Style.text}>{text38}</Text>
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